import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/mauritiusAuth";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ username, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>
          Sign In to <span>LMM Zambia</span>
        </h2>

        <p className="subtitle">
          For Official Use Only!
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input
              placeholder="Enter your username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign In</button>

          {/* <p className="switch">
            Dont have an account?{" "}
            <span onClick={() => navigate("/sign-up")}>
              Sign Up
            </span>
          </p> */}


        </form>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .auth-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(
            135deg,
            #009739,
            #002f6c
          );
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          background: white;
          padding: 40px 32px;
          border-radius: 22px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
          animation: fadeIn 0.6s ease;
        }

        .auth-card h2 {
          font-size: 1.9rem;
          font-weight: 800;
          margin-bottom: 6px;
          color: #002f6c;
          text-align: center;
        }

        .auth-card h2 span {
          color: #009739;
        }

        .switch {
          margin-top: 18px;
          font-size: 0.9rem;
          text-align: center;
          color: #475569;
        }

        .switch span {
          color: #009739;
          font-weight: 600;
          cursor: pointer;
        }

        .switch span:hover {
          text-decoration: underline;
        }

        .subtitle {
          text-align: center;
          color: #475569;
          font-size: 0.95rem;
          margin-bottom: 28px;
        }

        .error {
          background: #fee2e2;
          color: #b91c1c;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 0.9rem;
          margin-bottom: 18px;
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #002f6c;
        }

        .field input {
          padding: 14px 16px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .field input:focus {
          border-color: #009739;
          box-shadow: 0 0 0 3px rgba(0, 151, 57, 0.15);
        }

        button {
          margin-top: 10px;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(
            135deg,
            #d21034,
            #ffd100
          );
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 480px) {
          .auth-card {
            padding: 30px 22px;
          }

          .auth-card h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../utils/mauritiusAuth';

// export default function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await loginUser({ username, password });

//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);

//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign In</h2>

//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Username"
//           required
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
