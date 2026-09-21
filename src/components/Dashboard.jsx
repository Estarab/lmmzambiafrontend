import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        "https://butcherypos300725-1.onrender.com/api/registrations"
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

  // ================= CSV EXPORT WITH TOTAL =================
  const exportCSV = () => {
    if (!filteredData.length) {
      alert("No data to export");
      return;
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
      r.country || "",
      r.program,
      new Date(r.createdAt).toLocaleString(),
    ]);

    // ✅ TOTAL ROW
    rows.push([
      "TOTAL",
      "",
      "",
      "",
      "",
      "",
      filteredData.length + " Registrations",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `registrations-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ================= SEND BULK EMAIL =================
  const sendBulkEmail = async () => {
    if (!emailData.subject || !emailData.message) {
      return alert("Subject and message are required");
    }

    try {
      await axios.post(
        "https://butcherypos300725-1.onrender.com/api/registrations/send-bulk-email",
        emailData
      );
      alert("Bulk email sent successfully ✅");
      setEmailData({ program: "All", subject: "", message: "" });
    } catch {
      alert("Failed to send bulk email ❌");
    }
  };

  return (
    <>
      <div className="dashboard">
        <h1>🇲🇺 Registration Dashboard</h1>

        {/* FILTERS */}
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

        {/* SUMMARY */}
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

        {/* EXPORT */}
        <div className="export-bar">
          <span>
            Showing <strong>{filteredData.length}</strong> filtered results
          </span>
          <button onClick={exportCSV}>⬇ Export CSV</button>
        </div>

        {/* BULK EMAIL */}
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
            placeholder="Write your message he..."
            value={emailData.message}
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
          />

          <button onClick={sendBulkEmail}>
            Send Email to Registrants
          </button>
        </div>

        {/* TABLE */}
        <div className="table-wrapper">
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nam</th>
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

      {/* ================= STYLES (MAURITIUS THEME) ================= */}
      <style>{`
        .dashboard {
          padding: 30px;
          background: linear-gradient(135deg, #e6f9f4, #f0f9ff);
          min-height: 100vh;
          font-family: Inter, Arial, sans-serif;
        }

        h1 {
          color: #065f46;
          margin-bottom: 20px;
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
          border: 1px solid #a7f3d0;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          border-left: 6px solid #10b981;
        }

        .card h2 {
          font-size: 15px;
          color: #047857;
        }

        .card p {
          font-size: 32px;
          font-weight: bold;
          color: #064e3b;
        }

        .export-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 16px;
          border-radius: 14px;
          margin-bottom: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .export-bar button {
          background: linear-gradient(135deg, #059669, #0284c7);
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
        }

        .bulk-email {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bulk-email button {
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
        }

        .table-wrapper {
          background: white;
          border-radius: 14px;
          overflow-x: auto;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        th, td {
          padding: 14px;
          border-bottom: 1px solid #e5e7eb;
        }

        th {
          background: #ecfeff;
          color: #065f46;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}



// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dashboard() {
//   const [data, setData] = useState([]);
//   const [total, setTotal] = useState(0);

//   const [filters, setFilters] = useState({
//     program: "",
//     country: "",
//     period: "",
//   });

//   const fetchData = async () => {
//     const params = new URLSearchParams(filters).toString();
//     const res = await axios.get(
//       `https://butcherypos300725-1.onrender.com/api/registrations?${params}`
//     );
//     setData(res.data.data);
//     setTotal(res.data.total);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [filters]);

//   const countByProgram = (program) =>
//     data.filter((r) => r.program === program).length;

//   return (
//     <>
//       <div className="dashboard">
//         <h1>Registration Dashboard</h1>

//         {/* FILTERS */}
//         <div className="filters">
//           <select
//             onChange={(e) =>
//               setFilters({ ...filters, program: e.target.value })
//             }
//           >
//             <option value="">All Programs</option>
//             <option value="Lusaka">Lusaka</option>
//             <option value="Harare">Harare</option>
//           </select>

//           <input
//             placeholder="Filter by country"
//             onChange={(e) =>
//               setFilters({ ...filters, country: e.target.value })
//             }
//           />

//           <select
//             onChange={(e) =>
//               setFilters({ ...filters, period: e.target.value })
//             }
//           >
//             <option value="">All Time</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="2days">Last 2 Days</option>
//             <option value="week">This Week</option>
//             <option value="month">This Month</option>
//           </select>
//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="cards">
//           <div className="card">
//             <h2>Total Registrations</h2>
//             <p>{total}</p>
//           </div>
//           <div className="card">
//             <h2>Lusaka</h2>
//             <p>{countByProgram("Lusaka")}</p>
//           </div>
//           <div className="card">
//             <h2>Harare</h2>
//             <p>{countByProgram("Harare")}</p>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="table-wrapper">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Country</th>
//                 <th>Program</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((r) => (
//                 <tr key={r._id}>
//                   <td>{r.firstName} {r.lastName}</td>
//                   <td>{r.email}</td>
//                   <td>{r.country}</td>
//                   <td>{r.program}</td>
//                   <td>
//                     {new Date(r.createdAt).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* INTERNAL CSS */}
//       <style>{`
//         .dashboard {
//           padding: 30px;
//           font-family: Arial, sans-serif;
//           background: #f3f4f6;
//           min-height: 100vh;
//         }

//         h1 {
//           margin-bottom: 20px;
//         }

//         .filters {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 12px;
//           margin-bottom: 25px;
//         }

//         .filters input,
//         .filters select {
//           padding: 10px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//         }

//         .cards {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 20px;
//           margin-bottom: 30px;
//         }

//         .card {
//           background: white;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
//         }

//         .card h2 {
//           font-size: 16px;
//           color: #6b7280;
//           margin-bottom: 8px;
//         }

//         .card p {
//           font-size: 28px;
//           font-weight: bold;
//           color: #1f2937;
//         }

//         .table-wrapper {
//           background: white;
//           border-radius: 12px;
//           overflow-x: auto;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
//         }

//         table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         th, td {
//           padding: 14px;
//           text-align: left;
//           border-bottom: 1px solid #e5e7eb;
//         }

//         th {
//           background: #f9fafb;
//         }
//       `}</style>
//     </>
//   );
// }
