
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import slide5 from "../assets/slid5.jpg";


// =======================================================
// EVENT DATE
// =======================================================

const EVENT_DATE = new Date("2026-10-19T10:00:00");

// =======================================================
// COUNTDOWN
// =======================================================

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference =
      EVENT_DATE.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdownWrapper">

      <div className="countdownLabel">
        COUNTDOWN TO THE WORKSHOP
      </div>

      <div className="countdown">

        <div className="countdownBox">
          <strong>{timeLeft.days}</strong>
          <span>DAYS</span>
        </div>

        <div className="countdownBox">
          <strong>{timeLeft.hours}</strong>
          <span>HOURS</span>
        </div>

        <div className="countdownBox">
          <strong>{timeLeft.minutes}</strong>
          <span>MINUTES</span>
        </div>

        <div className="countdownBox">
          <strong>{timeLeft.seconds}</strong>
          <span>SECONDS</span>
        </div>

      </div>
    </div>
  );
}

// =======================================================
// MAIN COMPONENT
// =======================================================

export default function HomeImageSlider({
  onRegister,
}) {

  // =====================================================
  // OPEN REGISTRATION FORM
  // =====================================================

  const handleRegister = () => {
    if (typeof onRegister === "function") {
      onRegister();
    }
  };

  return (
    <section className="lmmHero">

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <div
        className="lmmHeroBackground"
        style={{
          backgroundImage: `url(${slide5})`,
        }}
      />

      {/* =================================================
          DARK OVERLAY
      ================================================= */}

      <div className="lmmHeroOverlay" />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="lmmHeroContent">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          className="lmmAbout"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="lmmBadge">
            WELCOME TO LMM ZAMBIA
          </div>

          <h1>
            LOVEWORLD
            <br />
            MUSIC MINISTRY
            <span> ZAMBIA</span>
          </h1>

          <p className="lmmDescription">
            LoveWorld Music Ministry Zambia is a platform
            focused on music, worship, training, creativity
            and developing people through practical music
            experiences.
          </p>

          <div className="lmmHighlights">

            <div>
              <span>🎵</span>
              <strong>Music</strong>
            </div>

            <div>
              <span>🎤</span>
              <strong>Worship</strong>
            </div>

            <div>
              <span>🎓</span>
              <strong>Training</strong>
            </div>

            <div>
              <span>🤝</span>
              <strong>Connection</strong>
            </div>

          </div>

        </motion.div>


        {/* =================================================
            RIGHT SIDE — UPCOMING PROGRAM
        ================================================= */}

        <motion.div
          className="programCard"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >

          <div className="programBadge">
            UPCOMING PROGRAM
          </div>

          <h2>
            LMM ZAMBIA
            <br />
            TRAINING WORKSHOP
          </h2>

          <p className="programDescription">
            A special day of music, learning, connection
            and personal development.
          </p>


          {/* =================================================
              FREE TRAINING
          ================================================= */}

          <div className="freeTraining">

            <div className="freeIcon">
              ★
            </div>

            <div>
              <strong>
                FREE MUSIC SKILLS TRAINING
              </strong>

              <small>
                Learn practical music skills
              </small>
            </div>

          </div>


          {/* =================================================
              SKILLS
          ================================================= */}

          <div className="skillsRow">

            <span>🎹 Keyboard</span>
            <span>🥁 Drums</span>
            <span>🎸 Guitar</span>
            <span>🎤 Vocals</span>
            <span>🎼 More</span>

          </div>


          {/* =================================================
              EVENT DETAILS
          ================================================= */}

          <div className="eventDetails">

            <div>
              <span>📅</span>

              <div>
                <small>DATE</small>
                <strong>
                  19 OCTOBER 2026
                </strong>
              </div>
            </div>

            <div>
              <span>📍</span>

              <div>
                <small>VENUE</small>
                <strong>
                  CE GROUP CHURCH
                </strong>
              </div>
            </div>

            <div>
              <span>🕙</span>

              <div>
                <small>TIME</small>
                <strong>
                  10HRS – 16HRS
                </strong>
              </div>
            </div>

          </div>


          {/* =================================================
              COUNTDOWN
          ================================================= */}

          <CountdownTimer />


          {/* =================================================
              REGISTER
          ================================================= */}

          <motion.button
            type="button"
            className="registerButton"
            onClick={handleRegister}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >

            REGISTER FOR THE TRAINING

            <span>→</span>

          </motion.button>

        </motion.div>

      </div>


      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }


        /* ==========================================
           HERO
        ========================================== */

        .lmmHero {
          position: relative;
          width: 100%;
          min-height: 720px;
          overflow: hidden;
          background: #061a4f;
          color: white;
        }


        /* ==========================================
           BACKGROUND
        ========================================== */

        .lmmHeroBackground {
          position: absolute;
          inset: 0;

          background-size: cover;
          background-position: center;

          transform: scale(1.02);
        }


        /* ==========================================
           OVERLAY
        ========================================== */

        .lmmHeroOverlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 18, 56, 0.96) 0%,
              rgba(3, 18, 56, 0.90) 35%,
              rgba(3, 18, 56, 0.70) 65%,
              rgba(3, 18, 56, 0.50) 100%
            );
        }


        /* ==========================================
           MAIN CONTENT
        ========================================== */

        .lmmHeroContent {
          position: relative;
          z-index: 5;

          width: min(1250px, 92%);

          min-height: 720px;

          margin: auto;

          padding:
            70px
            0;

          display: grid;

          grid-template-columns:
            1fr
            0.85fr;

          gap: 70px;

          align-items: center;
        }


        /* ==========================================
           ABOUT
        ========================================== */

        .lmmAbout {
          max-width: 650px;
        }


        .lmmBadge {
          display: inline-block;

          background: #ed008c;

          color: white;

          padding:
            9px
            18px;

          font-size: 12px;

          font-weight: 900;

          letter-spacing: 2px;

          transform: rotate(-2deg);

          box-shadow:
            5px 5px 0 #ffd900;

          margin-bottom: 25px;
        }


        .lmmAbout h1 {
          margin: 0 0 22px;

          font-size:
            clamp(
              45px,
              5vw,
              76px
            );

          line-height: 0.98;

          font-weight: 1000;

          letter-spacing: -2px;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #061a4f;
        }


        .lmmAbout h1 span {
          color: #ffd900;
        }


        .lmmDescription {
          max-width: 620px;

          margin: 0 0 25px;

          color: #edf4ff;

          font-size: 18px;

          line-height: 1.65;
        }


        /* ==========================================
           HIGHLIGHTS
        ========================================== */

        .lmmHighlights {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;
        }


        .lmmHighlights div {
          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            10px
            15px;

          border-radius: 9px;

          background:
            rgba(
              255,
              255,
              255,
              0.10
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.20
            );

          backdrop-filter: blur(8px);
        }


        .lmmHighlights span {
          font-size: 19px;
        }


        .lmmHighlights strong {
          font-size: 12px;
        }


        /* ==========================================
           PROGRAM CARD
        ========================================== */

        .programCard {
          width: 100%;

          max-width: 520px;

          margin-left: auto;

          padding: 30px;

          border-radius: 18px;

          background:
            rgba(
              3,
              18,
              56,
              0.88
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.20
            );

          backdrop-filter:
            blur(16px);

          box-shadow:
            0 25px 70px
            rgba(
              0,
              0,
              0,
              0.35
            );
        }


        .programBadge {
          display: inline-block;

          color: #061a4f;

          background: #ffd900;

          padding:
            7px
            12px;

          border-radius: 5px;

          font-size: 10px;

          font-weight: 1000;

          letter-spacing: 1.5px;

          margin-bottom: 14px;
        }


        .programCard h2 {
          margin: 0 0 12px;

          font-size:
            clamp(
              27px,
              3vw,
              42px
            );

          line-height: 1;

          font-weight: 1000;

          letter-spacing: -1px;
        }


        .programDescription {
          margin: 0 0 18px;

          color: #dce7fa;

          font-size: 14px;

          line-height: 1.55;
        }


        /* ==========================================
           FREE TRAINING
        ========================================== */

        .freeTraining {
          display: flex;

          align-items: center;

          gap: 12px;

          background: #ffd900;

          color: #061a4f;

          padding:
            10px
            14px;

          border-radius: 9px;

          margin-bottom: 14px;

          box-shadow:
            4px 4px 0 #ed008c;
        }


        .freeIcon {
          width: 32px;
          height: 32px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #ed008c;

          color: #ffd900;

          font-weight: 1000;
        }


        .freeTraining strong {
          display: block;

          font-size: 13px;

          font-weight: 1000;
        }


        .freeTraining small {
          display: block;

          margin-top: 2px;

          font-size: 9px;

          font-weight: 700;
        }


        /* ==========================================
           SKILLS
        ========================================== */

        .skillsRow {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-bottom: 18px;
        }


        .skillsRow span {
          padding:
            7px
            10px;

          border-radius: 20px;

          background:
            rgba(
              255,
              255,
              255,
              0.10
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.18
            );

          color: white;

          font-size: 10px;

          font-weight: 700;
        }


        /* ==========================================
           EVENT DETAILS
        ========================================== */

        .eventDetails {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap: 8px;

          margin-bottom: 18px;
        }


        .eventDetails > div {
          display: flex;

          align-items: center;

          gap: 7px;

          padding:
            9px;

          border-radius: 8px;

          background:
            rgba(
              255,
              255,
              255,
              0.06
            );
        }


        .eventDetails > div > span {
          font-size: 18px;
        }


        .eventDetails small {
          display: block;

          color: #ffd900;

          font-size: 7px;

          font-weight: 900;

          letter-spacing: 1px;
        }


        .eventDetails strong {
          display: block;

          color: white;

          font-size: 9px;

          font-weight: 900;

          margin-top: 2px;
        }


        /* ==========================================
           COUNTDOWN
        ========================================== */

        .countdownWrapper {
          margin:
            5px
            0
            20px;
        }


        .countdownLabel {
          color: #ffd900;

          font-size: 10px;

          font-weight: 1000;

          letter-spacing: 2px;

          margin-bottom: 8px;
        }


        .countdown {
          display: flex;

          gap: 8px;
        }


        .countdownBox {
          flex: 1;

          padding:
            10px
            5px;

          text-align: center;

          border-radius: 8px;

          background:
            rgba(
              0,
              0,
              0,
              0.25
            );

          border:
            1px solid
            rgba(
              255,
              217,
              0,
              0.35
            );
        }


        .countdownBox strong {
          display: block;

          color: white;

          font-size: 24px;

          line-height: 1;

          font-weight: 1000;
        }


        .countdownBox span {
          display: block;

          margin-top: 5px;

          color: #ffd900;

          font-size: 7px;

          font-weight: 900;
        }


        /* ==========================================
           REGISTER BUTTON
        ========================================== */

        .registerButton {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 18px;

          border: none;

          padding:
            15px
            20px;

          border-radius: 9px;

          background: #ed008c;

          color: white;

          font-size: 14px;

          font-weight: 1000;

          cursor: pointer;

          box-shadow:
            0 6px 0 #ffd900;

          transition:
            0.2s;
        }


        .registerButton:hover {
          transform:
            translateY(3px);

          box-shadow:
            0 3px 0 #ffd900;
        }


        .registerButton span {
          font-size: 22px;
        }


        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 1000px) {

          .lmmHeroContent {
            grid-template-columns:
              1fr;

            gap: 35px;

            padding:
              55px
              0;
          }


          .lmmAbout {
            max-width: 700px;
          }


          .programCard {
            margin:
              0
              auto;
          }


          .lmmHero {
            min-height: 1050px;
          }


          .lmmHeroContent {
            min-height: 1050px;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .lmmHero {
            min-height: auto;
          }


          .lmmHeroOverlay {
            background:
              linear-gradient(
                to bottom,
                rgba(3, 18, 56, 0.55),
                rgba(3, 18, 56, 0.97) 70%
              );
          }


          .lmmHeroContent {
            width: 92%;

            min-height: auto;

            padding:
              45px
              0
              50px;

            gap: 35px;
          }


          .lmmBadge {
            font-size: 9px;

            padding:
              7px
              12px;

            letter-spacing: 1.3px;
          }


          .lmmAbout h1 {
            font-size: 39px;

            line-height: 1;
          }


          .lmmDescription {
            font-size: 14px;

            line-height: 1.55;
          }


          .lmmHighlights {
            gap: 6px;
          }


          .lmmHighlights div {
            padding:
              7px
              10px;
          }


          .lmmHighlights span {
            font-size: 16px;
          }


          .lmmHighlights strong {
            font-size: 9px;
          }


          .programCard {
            padding: 20px;

            border-radius: 14px;
          }


          .programCard h2 {
            font-size: 29px;
          }


          .programDescription {
            font-size: 13px;
          }


          .eventDetails {
            grid-template-columns:
              1fr;

            gap: 6px;
          }


          .eventDetails > div {
            padding:
              8px
              10px;
          }


          .countdown {
            gap: 5px;
          }


          .countdownBox {
            padding:
              9px
              3px;
          }


          .countdownBox strong {
            font-size: 20px;
          }


          .countdownBox span {
            font-size: 6px;
          }


          .registerButton {
            font-size: 12px;

            padding:
              14px;
          }

        }

      `}</style>

    </section>
  );
}




// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import slide5 from "../assets/slid5.jpg";

// // =======================================================
// // EVENT DATE
// // =======================================================

// const EVENT_DATE = new Date("2026-10-19T10:00:00");

// // =======================================================
// // COUNTDOWN
// // =======================================================

// function CountdownTimer() {
//   const calculateTimeLeft = () => {
//     const difference =
//       EVENT_DATE.getTime() - new Date().getTime();

//     if (difference <= 0) {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     return {
//       days: Math.floor(
//         difference / (1000 * 60 * 60 * 24)
//       ),

//       hours: Math.floor(
//         (difference / (1000 * 60 * 60)) % 24
//       ),

//       minutes: Math.floor(
//         (difference / (1000 * 60)) % 60
//       ),

//       seconds: Math.floor(
//         (difference / 1000) % 60
//       ),
//     };
//   };

//   const [timeLeft, setTimeLeft] =
//     useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="countdownWrapper">

//       <div className="countdownLabel">
//         COUNTDOWN TO THE WORKSHOP
//       </div>

//       <div className="countdown">

//         <div className="countdownBox">
//           <strong>{timeLeft.days}</strong>
//           <span>DAYS</span>
//         </div>

//         <div className="countdownBox">
//           <strong>{timeLeft.hours}</strong>
//           <span>HOURS</span>
//         </div>

//         <div className="countdownBox">
//           <strong>{timeLeft.minutes}</strong>
//           <span>MINUTES</span>
//         </div>

//         <div className="countdownBox">
//           <strong>{timeLeft.seconds}</strong>
//           <span>SECONDS</span>
//         </div>

//       </div>
//     </div>
//   );
// }

// // =======================================================
// // MAIN COMPONENT
// // =======================================================

// export default function HomeImageSlider({
//   onRegister,
// }) {

//   const handleRegister = () => {

//     if (onRegister) {
//       onRegister();
//       return;
//     }

//     const element =
//       document.getElementById("register-forms");

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="lmmHero">

//       {/* BACKGROUND IMAGE */}

//       <div
//         className="lmmHeroBackground"
//         style={{
//           backgroundImage: `url(${slide5})`,
//         }}
//       />

//       {/* DARK OVERLAY */}

//       <div className="lmmHeroOverlay" />

//       {/* CONTENT */}

//       <div className="lmmHeroContent">

//         {/* LEFT SIDE */}

//         <motion.div
//           className="lmmAbout"
//           initial={{
//             opacity: 0,
//             x: -40,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//         >

//           <div className="lmmBadge">
//             WELCOME TO LMM ZAMBIA
//           </div>

//           <h1>
//             LOVEWORLD
//             <br />
//             MUSIC MINISTRY
//             <span> ZAMBIA</span>
//           </h1>

//           <p className="lmmDescription">
//             LoveWorld Music Ministry Zambia is a platform
//             focused on music, worship, training, creativity
//             and developing people through practical music
//             experiences.
//           </p>

//           <div className="lmmHighlights">

//             <div>
//               <span>🎵</span>
//               <strong>Music</strong>
//             </div>

//             <div>
//               <span>🎤</span>
//               <strong>Worship</strong>
//             </div>

//             <div>
//               <span>🎓</span>
//               <strong>Training</strong>
//             </div>

//             <div>
//               <span>🤝</span>
//               <strong>Connection</strong>
//             </div>

//           </div>

//         </motion.div>


//         {/* RIGHT SIDE — UPCOMING PROGRAM */}

//         <motion.div
//           className="programCard"
//           initial={{
//             opacity: 0,
//             x: 40,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             delay: 0.2,
//             duration: 0.8,
//           }}
//         >

//           <div className="programBadge">
//             UPCOMING PROGRAM
//           </div>

//           <h2>
//             LMM ZAMBIA
//             <br />
//             TRAINING WORKSHOP
//           </h2>

//           <p className="programDescription">
//             A special day of music, learning, connection
//             and personal development.
//           </p>


//           {/* FREE TRAINING */}

//           <div className="freeTraining">

//             <div className="freeIcon">
//               ★
//             </div>

//             <div>
//               <strong>FREE MUSIC SKILLS TRAINING</strong>

//               <small>
//                 Learn practical music skills
//               </small>
//             </div>

//           </div>


//           {/* SKILLS */}

//           <div className="skillsRow">

//             <span>🎹 Keyboard</span>
//             <span>🥁 Drums</span>
//             <span>🎸 Guitar</span>
//             <span>🎤 Vocals</span>
//             <span>🎼 More</span>

//           </div>


//           {/* EVENT DETAILS */}

//           <div className="eventDetails">

//             <div>
//               <span>📅</span>

//               <div>
//                 <small>DATE</small>
//                 <strong>19 OCTOBER 2026</strong>
//               </div>
//             </div>

//             <div>
//               <span>📍</span>

//               <div>
//                 <small>VENUE</small>
//                 <strong>CE GROUP CHURCH</strong>
//               </div>
//             </div>

//             <div>
//               <span>🕙</span>

//               <div>
//                 <small>TIME</small>
//                 <strong>10HRS – 16HRS</strong>
//               </div>
//             </div>

//           </div>


//           {/* COUNTDOWN */}

//           <CountdownTimer />


//           {/* REGISTER */}

//           <motion.button
//             className="registerButton"
//             onClick={handleRegister}
//             whileHover={{
//               scale: 1.03,
//             }}
//             whileTap={{
//               scale: 0.97,
//             }}
//           >

//             REGISTER FOR THE TRAINING

//             <span>→</span>

//           </motion.button>

//         </motion.div>

//       </div>


//       {/* STYLES */}

//       <style>{`

//         * {
//           box-sizing: border-box;
//         }


//         /* ==========================================
//            HERO
//         ========================================== */

//         .lmmHero {
//           position: relative;
//           width: 100%;
//           min-height: 720px;
//           overflow: hidden;
//           background: #061a4f;
//           color: white;
//         }


//         /* ==========================================
//            BACKGROUND
//         ========================================== */

//         .lmmHeroBackground {
//           position: absolute;
//           inset: 0;

//           background-size: cover;
//           background-position: center;

//           transform: scale(1.02);
//         }


//         /* ==========================================
//            OVERLAY
//         ========================================== */

//         .lmmHeroOverlay {
//           position: absolute;
//           inset: 0;

//           background:
//             linear-gradient(
//               90deg,
//               rgba(3, 18, 56, 0.96) 0%,
//               rgba(3, 18, 56, 0.90) 35%,
//               rgba(3, 18, 56, 0.70) 65%,
//               rgba(3, 18, 56, 0.50) 100%
//             );
//         }


//         /* ==========================================
//            MAIN CONTENT
//         ========================================== */

//         .lmmHeroContent {
//           position: relative;
//           z-index: 5;

//           width: min(1250px, 92%);

//           min-height: 720px;

//           margin: auto;

//           padding:
//             70px
//             0;

//           display: grid;

//           grid-template-columns:
//             1fr
//             0.85fr;

//           gap: 70px;

//           align-items: center;
//         }


//         /* ==========================================
//            ABOUT
//         ========================================== */

//         .lmmAbout {
//           max-width: 650px;
//         }


//         .lmmBadge {
//           display: inline-block;

//           background: #ed008c;

//           color: white;

//           padding:
//             9px
//             18px;

//           font-size: 12px;

//           font-weight: 900;

//           letter-spacing: 2px;

//           transform: rotate(-2deg);

//           box-shadow:
//             5px 5px 0 #ffd900;

//           margin-bottom: 25px;
//         }


//         .lmmAbout h1 {
//           margin: 0 0 22px;

//           font-size:
//             clamp(
//               45px,
//               5vw,
//               76px
//             );

//           line-height: 0.98;

//           font-weight: 1000;

//           letter-spacing: -2px;

//           text-transform: uppercase;

//           text-shadow:
//             4px 4px 0 #061a4f;
//         }


//         .lmmAbout h1 span {
//           color: #ffd900;
//         }


//         .lmmDescription {
//           max-width: 620px;

//           margin: 0 0 25px;

//           color: #edf4ff;

//           font-size: 18px;

//           line-height: 1.65;
//         }


//         /* ==========================================
//            HIGHLIGHTS
//         ========================================== */

//         .lmmHighlights {
//           display: flex;

//           flex-wrap: wrap;

//           gap: 10px;
//         }


//         .lmmHighlights div {
//           display: flex;

//           align-items: center;

//           gap: 8px;

//           padding:
//             10px
//             15px;

//           border-radius: 9px;

//           background:
//             rgba(
//               255,
//               255,
//               255,
//               0.10
//             );

//           border:
//             1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.20
//             );

//           backdrop-filter: blur(8px);
//         }


//         .lmmHighlights span {
//           font-size: 19px;
//         }


//         .lmmHighlights strong {
//           font-size: 12px;
//         }


//         /* ==========================================
//            PROGRAM CARD
//         ========================================== */

//         .programCard {
//           width: 100%;

//           max-width: 520px;

//           margin-left: auto;

//           padding: 30px;

//           border-radius: 18px;

//           background:
//             rgba(
//               3,
//               18,
//               56,
//               0.88
//             );

//           border:
//             1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.20
//             );

//           backdrop-filter:
//             blur(16px);

//           box-shadow:
//             0 25px 70px
//             rgba(
//               0,
//               0,
//               0,
//               0.35
//             );
//         }


//         .programBadge {
//           display: inline-block;

//           color: #061a4f;

//           background: #ffd900;

//           padding:
//             7px
//             12px;

//           border-radius: 5px;

//           font-size: 10px;

//           font-weight: 1000;

//           letter-spacing: 1.5px;

//           margin-bottom: 14px;
//         }


//         .programCard h2 {
//           margin: 0 0 12px;

//           font-size:
//             clamp(
//               27px,
//               3vw,
//               42px
//             );

//           line-height: 1;

//           font-weight: 1000;

//           letter-spacing: -1px;
//         }


//         .programDescription {
//           margin: 0 0 18px;

//           color: #dce7fa;

//           font-size: 14px;

//           line-height: 1.55;
//         }


//         /* ==========================================
//            FREE TRAINING
//         ========================================== */

//         .freeTraining {
//           display: flex;

//           align-items: center;

//           gap: 12px;

//           background: #ffd900;

//           color: #061a4f;

//           padding:
//             10px
//             14px;

//           border-radius: 9px;

//           margin-bottom: 14px;

//           box-shadow:
//             4px 4px 0 #ed008c;
//         }


//         .freeIcon {
//           width: 32px;
//           height: 32px;

//           flex-shrink: 0;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background: #ed008c;

//           color: #ffd900;

//           font-weight: 1000;
//         }


//         .freeTraining strong {
//           display: block;

//           font-size: 13px;

//           font-weight: 1000;
//         }


//         .freeTraining small {
//           display: block;

//           margin-top: 2px;

//           font-size: 9px;

//           font-weight: 700;
//         }


//         /* ==========================================
//            SKILLS
//         ========================================== */

//         .skillsRow {
//           display: flex;

//           flex-wrap: wrap;

//           gap: 7px;

//           margin-bottom: 18px;
//         }


//         .skillsRow span {
//           padding:
//             7px
//             10px;

//           border-radius: 20px;

//           background:
//             rgba(
//               255,
//               255,
//               255,
//               0.10
//             );

//           border:
//             1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.18
//             );

//           color: white;

//           font-size: 10px;

//           font-weight: 700;
//         }


//         /* ==========================================
//            EVENT DETAILS
//         ========================================== */

//         .eventDetails {
//           display: grid;

//           grid-template-columns:
//             repeat(
//               3,
//               1fr
//             );

//           gap: 8px;

//           margin-bottom: 18px;
//         }


//         .eventDetails > div {
//           display: flex;

//           align-items: center;

//           gap: 7px;

//           padding:
//             9px;

//           border-radius: 8px;

//           background:
//             rgba(
//               255,
//               255,
//               255,
//               0.06
//             );
//         }


//         .eventDetails > div > span {
//           font-size: 18px;
//         }


//         .eventDetails small {
//           display: block;

//           color: #ffd900;

//           font-size: 7px;

//           font-weight: 900;

//           letter-spacing: 1px;
//         }


//         .eventDetails strong {
//           display: block;

//           color: white;

//           font-size: 9px;

//           font-weight: 900;

//           margin-top: 2px;
//         }


//         /* ==========================================
//            COUNTDOWN
//         ========================================== */

//         .countdownWrapper {
//           margin:
//             5px
//             0
//             20px;
//         }


//         .countdownLabel {
//           color: #ffd900;

//           font-size: 10px;

//           font-weight: 1000;

//           letter-spacing: 2px;

//           margin-bottom: 8px;
//         }


//         .countdown {
//           display: flex;

//           gap: 8px;
//         }


//         .countdownBox {
//           flex: 1;

//           padding:
//             10px
//             5px;

//           text-align: center;

//           border-radius: 8px;

//           background:
//             rgba(
//               0,
//               0,
//               0,
//               0.25
//             );

//           border:
//             1px solid
//             rgba(
//               255,
//               217,
//               0,
//               0.35
//             );
//         }


//         .countdownBox strong {
//           display: block;

//           color: white;

//           font-size: 24px;

//           line-height: 1;

//           font-weight: 1000;
//         }


//         .countdownBox span {
//           display: block;

//           margin-top: 5px;

//           color: #ffd900;

//           font-size: 7px;

//           font-weight: 900;
//         }


//         /* ==========================================
//            REGISTER BUTTON
//         ========================================== */

//         .registerButton {
//           width: 100%;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           gap: 18px;

//           border: none;

//           padding:
//             15px
//             20px;

//           border-radius: 9px;

//           background: #ed008c;

//           color: white;

//           font-size: 14px;

//           font-weight: 1000;

//           cursor: pointer;

//           box-shadow:
//             0 6px 0 #ffd900;

//           transition:
//             0.2s;
//         }


//         .registerButton:hover {
//           transform:
//             translateY(3px);

//           box-shadow:
//             0 3px 0 #ffd900;
//         }


//         .registerButton span {
//           font-size: 22px;
//         }


//         /* ==========================================
//            TABLET
//         ========================================== */

//         @media (max-width: 1000px) {

//           .lmmHeroContent {
//             grid-template-columns:
//               1fr;

//             gap: 35px;

//             padding:
//               55px
//               0;
//           }


//           .lmmAbout {
//             max-width: 700px;
//           }


//           .programCard {
//             margin:
//               0
//               auto;
//           }


//           .lmmHero {
//             min-height: 1050px;
//           }


//           .lmmHeroContent {
//             min-height: 1050px;
//           }

//         }


//         /* ==========================================
//            MOBILE
//         ========================================== */

//         @media (max-width: 600px) {

//           .lmmHero {
//             min-height: auto;
//           }


//           .lmmHeroOverlay {
//             background:
//               linear-gradient(
//                 to bottom,
//                 rgba(3, 18, 56, 0.55),
//                 rgba(3, 18, 56, 0.97) 70%
//               );
//           }


//           .lmmHeroContent {
//             width: 92%;

//             min-height: auto;

//             padding:
//               45px
//               0
//               50px;

//             gap: 35px;
//           }


//           .lmmBadge {
//             font-size: 9px;

//             padding:
//               7px
//               12px;

//             letter-spacing: 1.3px;
//           }


//           .lmmAbout h1 {
//             font-size: 39px;

//             line-height: 1;
//           }


//           .lmmDescription {
//             font-size: 14px;

//             line-height: 1.55;
//           }


//           .lmmHighlights {
//             gap: 6px;
//           }


//           .lmmHighlights div {
//             padding:
//               7px
//               10px;
//           }


//           .lmmHighlights span {
//             font-size: 16px;
//           }


//           .lmmHighlights strong {
//             font-size: 9px;
//           }


//           .programCard {
//             padding: 20px;

//             border-radius: 14px;
//           }


//           .programCard h2 {
//             font-size: 29px;
//           }


//           .programDescription {
//             font-size: 13px;
//           }


//           .eventDetails {
//             grid-template-columns:
//               1fr;

//             gap: 6px;
//           }


//           .eventDetails > div {
//             padding:
//               8px
//               10px;
//           }


//           .countdown {
//             gap: 5px;
//           }


//           .countdownBox {
//             padding:
//               9px
//               3px;
//           }


//           .countdownBox strong {
//             font-size: 20px;
//           }


//           .countdownBox span {
//             font-size: 6px;
//           }


//           .registerButton {
//             font-size: 12px;

//             padding:
//               14px;
//           }

//         }

//       `}</style>

//     </section>
//   );
// }

