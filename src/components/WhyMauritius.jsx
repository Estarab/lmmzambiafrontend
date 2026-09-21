import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Globe,
  Wallet,
  FileCheck,
  ShieldCheck,
  Award,
  Home,
  Briefcase,
} from "lucide-react";

const stats = [
  { label: "Programmes Available", value: 600, suffix: "+" },
  { label: "Work Hours / Week", value: 20, suffix: "hrs" },
  { label: "Scholarship Schemes", value: 1, suffix: "+" },
  { label: "Affordable Education", value: 60, suffix: "% less cost" },
];

const reasons = [
  {
    icon: GraduationCap,
    title: "Internationally Recognised Qualifications",
    text: "Earn globally respected academic and professional qualifications.",
  },
  {
    icon: Wallet,
    title: "Affordable Cost of Education",
    text: "High-quality education at a fraction of the cost compared to Europe or North America.",
  },
  {
    icon: Globe,
    title: "600+ Programmes on Offer",
    text: "Choose from a wide range of undergraduate and postgraduate programmes.",
  },
  {
    icon: FileCheck,
    title: "Fast & Easy Student Visa",
    text: "Streamlined procedures for issuance of student visas.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Peaceful Environment",
    text: "Mauritius offers a secure, welcoming and student-friendly atmosphere.",
  },
  {
    icon: Award,
    title: "Mauritius–Africa Scholarship Scheme",
    text: "Scholarships available for eligible African students.",
  },
//   {
//     icon: Home,
//     title: "High Quality Living",
//     text: "Enjoy modern infrastructure, healthcare, and island lifestyle.",
//   },
  {
    icon: Briefcase,
    title: "Work While Studying",
    text: "International students may work up to 20 hours per week during studies.",
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyMauritius() {
  return (
    <section className="why-mauritius">
      <div className="overlay" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Study in <span>Mauritius?</span>
      </motion.h2>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Study where others go for holiday — without compromising quality
      </motion.p>

      {/* ===== STATS ===== */}
      <div className="stats">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3>
              <Counter value={s.value} suffix={s.suffix} />
            </h3>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== REASONS GRID ===== */}
      <div className="grid">
        {reasons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* <div className="icon-wrap">
                <Icon size={42} />
              </div> */}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .why-mauritius {
          position: relative;
          padding: 100px 20px;
          background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e");
          background-size: cover;
          background-position: center;
          text-align: center;
          color: white;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.55)
          );
        }

        .why-mauritius h2,
        .subtitle,
        .stats,
        .grid {
          position: relative;
          z-index: 2;
        }

        .why-mauritius h2 {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 12px;
        }

        .why-mauritius h2 span {
          color: #ffd100; /* Mauritius yellow */
        }

        .subtitle {
          font-size: 1.15rem;
          color: #e5e7eb;
          margin-bottom: 60px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: 0 auto 70px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 24px 16px;
          backdrop-filter: blur(10px);
        }

        .stat-card h3 {
          font-size: 2rem;
          color: #ffd100;
          margin-bottom: 6px;
        }

        .stat-card p {
          font-size: 0.95rem;
          color: #e5e7eb;
        }

      .grid {
  display: grid;
  gap: 28px;
  max-width: 1400px;
  margin: auto;

  /* Desktop default */
  grid-template-columns: repeat(4, 1fr);
}


/* Large tablets / small laptops */
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablets */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }
}





        .card {
          background: white;
          border-radius: 22px;
          padding: 36px 32px;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.25);
          color: #0f172a;
        }

        .icon-wrap {
          width: 80px;
          height: 80px;
          margin: auto;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #d21034, /* Mauritius red */
            #002f6c  /* Mauritius blue */
          );
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 18px 0 10px;
          color: #009739;
        }

        .card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #475569;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .why-mauritius {
            padding: 70px 16px;
          }

          .subtitle {
            font-size: 1rem;
          }

          .stat-card h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
