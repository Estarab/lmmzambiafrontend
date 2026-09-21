import React from "react";

// Import sponsor logos
import govLogo1 from "../assets/Ministry of tertiary.jpg"; // Ministry of Tertiary Education
import govLogo2 from "../assets/EDB.jpg";// Economic Development Board


export default function Sponsors() {
  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <p>
        Supported by the Government of Mauritius. Click below to Learn more about our sponsors and their initiatives.
      </p>

      <div className="logos">
        <a href="tertiaryeducation.govmu.org" target="_blank" rel="noopener noreferrer">
          <img src={govLogo1} alt="Ministry of Tertiary Education, Mauritius" />
        </a>
        <a href="https://edbmauritius.org" target="_blank" rel="noopener noreferrer">
          <img src={govLogo2} alt="Economic Development Board, Mauritius" />
        </a>
      </div>

      {/* <p className="readMore">
        <a href="https://www.govmu.org/" target="_blank" rel="noopener noreferrer">
          Click here to read more
        </a>
      </p> */}

      <style jsx>{`
        .sponsors {
          padding: 80px 20px;
          background: #f8fafc; /* light slate background */
          text-align: center;
          color: #0f172a;
        }

        .sponsors h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #009739; /* Mauritius green */
        }

        .sponsors p {
          font-size: 1rem;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .logos {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .logos a {
          display: inline-block;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .logos a:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        .logos img {
          height: 180px;
          width: auto;
          object-fit: contain;
        }

        .readMore a {
          color: #2563eb; /* blue link */
          font-weight: 600;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .logos {
            gap: 24px;
          }

          .logos img {
            height: 60px;
          }

          .sponsors h2 {
            font-size: 1.8rem;
          }

          .sponsors p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .logos img {
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
}
