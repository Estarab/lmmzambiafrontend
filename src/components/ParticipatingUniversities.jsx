import React from "react";

// Import university logos (replace with your real images)
// import gov1 from "../assets/Ministry of tertiary.jpg";
import gov2 from "../assets/EDB.jpg";
import inst1 from "../assets/ADI.png";
import inst2 from "../assets/download.png";
import inst3 from "../assets/Amity Mauritius.jpg";
import inst4 from "../assets/Honoris.png";
import inst5 from "../assets/JSS.jpg";
import inst6 from "../assets/MIE.jpg";
import inst7 from "../assets/Logo MCCI BS.png";
import inst8 from "../assets/Middlesex University Mauritius.png";
import inst9 from "../assets/PNG Logo Open University (002).png";
import inst10 from "../assets/Assas LOGO-PAUP_RVB_H (5) (002).png";
import inst11 from "../assets/Polytechnics.jpg";
import inst12 from "../assets/UOM.jpg";
import inst13 from "../assets/UTM.jpg";
// import inst14 from "../assets/inst14.png";

const universities = [
  // { name: "Ministry of Tertiary Education", logo: gov1, url: "https://education.govmu.org" },
  // { name: "Economic Development Board", logo: gov2, url: "https://edbmauritius.org" },
  { name: "Academy of Design and Innovation", logo: inst1, url: "https://www.adi.ac.mu/" },
  { name: "African Leadership College", logo: inst2, url: "alcheeduxation.com" },
  { name: "AMITY MAURITIUS", logo: inst3, url: "https://amity.edu/mauritius" },
  { name: "Honoris Educational Network", logo: inst4, url: "honoris.ac.mu" },
  { name: "JSS Academy Mauritius", logo: inst5, url: "https://jssacademy.mu/" },
  { name: "Mauritius Institute of Education", logo: inst6, url: "https://mie.ac.mu" },
  { name: "MCCI BUSINESS SCHOOL", logo: inst7, url: "https://www.mccibusinessschool.org/" },
  { name: "Middlesex University", logo: inst8, url: "https://www.middlesex.mu/" },
  { name: "Open University of Mauritius", logo: inst9, url: "https://open.ac.mu/" },
  { name: "Pantheon-Assas University Mauritius", logo: inst10, url: "https://assas-international.com/mauritius/" },
  { name: "Polytechnics Mauritius Ltd", logo: inst11, url: "https://www.poly.ac.mu/" },
  { name: "University of Mauritius", logo: inst12, url: "https://www.uom.ac.mu" },
  { name: "University of Technology, Mauritius", logo: inst13, url: "https://www.utm.ac.mu" },
//   { name: "Extra Placeholder University", logo: inst14, url: "#" }, // optional
];

export default function ParticipatingUniversities() {
  return (
    <section className="universities">
      <h2>Participating Universities & Institutions</h2>
      <div className="grid">
        {universities.map((uni, index) => (
          <a
            key={index}
            href={uni.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src={uni.logo} alt={uni.name} />
            <p>{uni.name}</p>
          </a>
        ))}
      </div>

      <style jsx>{`
        .universities {
          padding: 80px 20px;
          background: #f1f5f9; /* slate-like background */
          text-align: center;
        }

        .universities h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 50px;
          color: #009739; /* Mauritius green */
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 24px;
          justify-items: center;
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: white;
          border-radius: 16px;
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
          color: #0f172a;
          width: 100%;
          max-width: 140px;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }

        .card img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .card p {
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .card img {
            width: 50px;
            height: 50px;
          }

          .card p {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 16px;
          }

          .card img {
            width: 40px;
            height: 40px;
          }

          .card p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
