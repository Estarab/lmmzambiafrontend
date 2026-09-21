import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const [filters, setFilters] = useState({
    program: "",
    search: "",
  });

  const [emailData, setEmailData] = useState({
    program: "All",
    subject: "",
    message: "",
  });

  // ================= FETCH REGISTRATIONS =================
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lmmzambia.onrender.com/api/registrations"
      );
      setData(res.data.data || []);
    } catch {
      alert("Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= FILTER LOGIC =================
  const filteredData = data.filter((r) => {
    const matchProgram =
      !filters.program || r.program === filters.program;

    const searchText = filters.search.toLowerCase();
    const matchSearch =
      !filters.search ||
      r.firstName.toLowerCase().includes(searchText) ||
      r.lastName.toLowerCase().includes(searchText) ||
      r.email.toLowerCase().includes(searchText) ||
      r.phone?.includes(searchText);

    return matchProgram && matchSearch;
  });

  // ================= COUNTS =================
  const countByProgram = (program) =>
    data.filter((r) => r.program === program).length;

  // ================= CSV EXPORT =================
  const exportCSV = () => {
    if (!filteredData.length) {
      return alert("No data to export");
    }

    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Country",
      "Program",
      "Registration Date",
    ];

    const rows = filteredData.map((r) => [
      r.firstName,
      r.lastName,
      r.email,
      r.phone || "",
      r.country,
      r.program,
      new Date(r.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((e) =>
          e.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "mauritius_fair_registrations.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ================= SEND BULK EMAIL =================
  const sendBulkEmail = async () => {
    if (!emailData.subject || !emailData.message) {
      return alert("Subject and message are required");
    }

    try {
      setSending(true);
      await axios.post(
        "https://butcherypos300725-1.onrender.com/api/registrations/send-bulk-email",
        emailData
      );
      alert("Bulk email sent successfully ✅");
      setEmailData({ program: "All", subject: "", message: "" });
    } catch {
      alert("Failed to send bulk email ❌");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="dashboard">
        <h1>Registration Dashboard</h1>

        {/* ================= FILTER BAR ================= */}
        <div className="filters">
          <select
            onChange={(e) =>
              setFilters({ ...filters, program: e.target.value })
            }
          >
            <option value="">All Programs</option>
            <option value="Lusaka">Lusaka</option>
            <option value="Harare">Harare</option>
          </select>

          <input
            placeholder="Search name, email or phone"
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />
        </div>

        {/* ================= SUMMARY CARDS ================= */}
        <div className="cards">
          <div className="card">
            <h2>Total Registrations</h2>
            <p>{data.length}</p>
          </div>
          <div className="card">
            <h2>Lusaka</h2>
            <p>{countByProgram("Lusaka")}</p>
          </div>
          <div className="card">
            <h2>Harare</h2>
            <p>{countByProgram("Harare")}</p>
          </div>
        </div>

        {/* ================= CSV EXPORT ================= */}
        <div className="export-box">
          <div>
            <h2>Export Registrations</h2>
            <p>
              Download all <strong>filtered</strong> registrations as CSV
            </p>
          </div>
          <button onClick={exportCSV}>
            Download CSV
          </button>
        </div>

        {/* ================= BULK EMAIL ================= */}
        <div className="bulk-email">
          <h2>Send Bulk Email</h2>

          <select
            value={emailData.program}
            onChange={(e) =>
              setEmailData({ ...emailData, program: e.target.value })
            }
          >
            <option value="All">All Programs</option>
            <option value="Lusaka">Lusaka</option>
            <option value="Harare">Harare</option>
          </select>

          <input
            placeholder="Email subject"
            value={emailData.subject}
            onChange={(e) =>
              setEmailData({ ...emailData, subject: e.target.value })
            }
          />

          <textarea
            rows="5"
            placeholder="Write your message here..."
            value={emailData.message}
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
          />

          <button onClick={sendBulkEmail} disabled={sending}>
            {sending ? "Sending..." : "Send Email"}
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <div className="table-wrapper">
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Country</th>
                  <th>Program</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((r) => (
                  <tr key={r._id}>
                    <td>{r.firstName} {r.lastName}</td>
                    <td>{r.email}</td>
                    <td>{r.phone}</td>
                    <td>{r.country}</td>
                    <td>{r.program}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .dashboard {
          padding: 30px;
          background: linear-gradient(180deg,#e0f7fa,#f0fdfc);
          min-height: 100vh;
          font-family: Inter, Arial, sans-serif;
        }

        h1 {
          margin-bottom: 20px;
          color: #065f46;
        }

        .filters {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
          margin-bottom: 25px;
        }

        .filters input,
        .filters select {
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #99f6e4;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .card h2 {
          font-size: 15px;
          color: #0f766e;
        }

        .card p {
          font-size: 32px;
          font-weight: bold;
          margin-top: 8px;
          color: #0369a1;
        }

        .export-box {
          background: linear-gradient(135deg,#06b6d4,#22c55e);
          color: white;
          padding: 24px;
          border-radius: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .export-box h2 {
          margin: 0;
        }

        .export-box button {
          background: white;
          color: #065f46;
          border: none;
          padding: 14px 22px;
          border-radius: 14px;
          font-weight: bold;
          cursor: pointer;
        }

        .bulk-email {
          background: white;
          padding: 24px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bulk-email button {
          background: #0ea5e9;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 14px;
          font-weight: bold;
          cursor: pointer;
        }

        .table-wrapper {
          background: white;
          border-radius: 16px;
          overflow-x: auto;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 14px;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
        }

        th {
          background: #ecfeff;
        }
      `}</style>
    </>
  );
}




// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import DashSidebar from '../components/DashSidebar';
// import DashProfile from '../components/DashProfile';
// import DashPosts from '../components/DashPosts';
// import DashUsers from '../components/DashUsers';
// import DashComments from '../components/DashComments';
// import DashboardComp from '../components/DashboardComp';

// export default function Dashboard() {
//   const location = useLocation();
//   const [tab, setTab] = useState('');
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get('tab');
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   }, [location.search]);
//   return (
//     <div className='min-h-screen flex flex-col md:flex-row mt-24'>
//       <div className='md:w-56'>
//         {/* Sidebar */}
//         <DashSidebar />
//       </div>
//       {/* profile... */}
//       {tab === 'profile' && <DashProfile />}
//       {/* posts... */}
//       {tab === 'posts' && <DashPosts />}
//       {/* users */}
//       {tab === 'users' && <DashUsers />}
//       {/* comments  */}
//       {tab === 'comments' && <DashComments />}
//       {/* dashboard comp */}
//       {tab === 'dash' && <DashboardComp />}
//     </div>
//   );
// }
