import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import HomeImageSlider from "../components/HomeImageSlider";
import lmmLogo from "../assets/lmmlogo.png";
import jsPDF from "jspdf";



import {
  MessageCircle,
  CalendarDays,
  MapPin,
  Clock3,
  Music,
  Smile,
  Drama,
  Users,
  Utensils,
  GraduationCap,
  KeyboardMusic,
  Drum,
  Guitar,
  Mic2,
  BookOpen,
  Headphones,
  Sparkles,
  Heart,
  Trophy,
  Radio,
  Volume2,
    X,
  Piano,
} from "lucide-react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

// =======================================================
// EVENT DETAILS
// =======================================================

const EVENT_DATE = new Date("2026-10-19T10:00:00");

// =======================================================
// COUNTDOWN
// =======================================================

function Countdown() {
  const calculateTime = () => {
    const difference = EVENT_DATE.getTime() - new Date().getTime();

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

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">

      <div className="countdownBox">
        <strong>{time.days}</strong>
        <span>Days</span>
      </div>

      <div className="countdownBox">
        <strong>{time.hours}</strong>
        <span>Hours</span>
      </div>

      <div className="countdownBox">
        <strong>{time.minutes}</strong>
        <span>Minutes</span>
      </div>

      <div className="countdownBox">
        <strong>{time.seconds}</strong>
        <span>Seconds</span>
      </div>

    </div>
  );
}




// =======================================================
// REGISTRATION FORM
// =======================================================

function RegistrationForm({ onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    residence: "",
    phone: "",
    gender: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // SUBMIT REGISTRATION
  // =====================================================

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (submitting) return;

  setSubmitting(true);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/registrations`,
      {
        ...formData,
        program: "LMM Zambia Training Workshop",
      }
    );

    console.log("Registration response:", response.data);

    // Close registration modal/form
    onClose();

    // Send complete registration data to success page
    navigate("/registration-success", {
      state: {
        registration: response.data.data,
        registrationId: response.data.registrationId,
        qrUrl: response.data.qrUrl,
        whatsappUrl: response.data.whatsappUrl,
        message: response.data.message,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);

    const serverMessage = error.response?.data?.message;

    if (serverMessage) {
      alert(serverMessage);
    } else if (error.request) {
      alert(
        "Unable to connect to the registration server. Please check your internet connection and try again."
      );
    } else {
      alert("Registration failed. Please try again.");
    }
  } finally {
    setSubmitting(false);
  }
};

  // =====================================================
  // FORM
  // =====================================================

  return (
    <motion.div
      className="registrationModal"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >

      <motion.div
        className="registrationCard"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
      >

        {/* =============================================
            CLOSE BUTTON
        ============================================= */}

        <button
          type="button"
          className="closeButton"
          onClick={onClose}
          disabled={submitting}
        >
          <X size={22} />
        </button>

        {/* =============================================
            HEADER
        ============================================= */}

        <div className="formHeader">

     <div className="formIcon">
  <img src={lmmLogo} alt="Logo" />
</div>



          <h2>
            Register Now
          </h2>

          <p>
            LMM Zambia Training Workshop
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* ===========================================
              NAME
          =========================================== */}

          <div className="formRow">

            <div className="formGroup">
              <label>
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label>
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* ===========================================
              EMAIL
          =========================================== */}

          <div className="formGroup">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* ===========================================
              PHONE
          =========================================== */}

          <div className="formGroup">

            <label>
              Phone Number
            </label>

            <PhoneInput
              country="zm"
              value={formData.phone}
              onChange={(phone) =>
                setFormData({
                  ...formData,
                  phone,
                })
              }
              enableSearch
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
              buttonStyle={{
                borderRadius:
                  "10px 0 0 10px",
                border:
                  "1px solid #d1d5db",
              }}
            />

          </div>

          {/* ===========================================
              GENDER / COUNTRY
          =========================================== */}

          <div className="formRow">

            <div className="formGroup">

              <label>
                Gender
              </label>

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
              >

                <option value="">
                  Select gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                {/* <option value="Other">
                  Other
                </option> */}

              </select>

            </div>

            <div className="formGroup">

              <label>
                Country
              </label>

              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                value={formData.country}
                onChange={handleChange}
              />

            </div>

          </div>

         <div className="formRow">

  <div className="formGroup">
    <label>City</label>

    <input
      type="text"
      name="city"
      placeholder="City"
      required
      value={formData.city}
      onChange={handleChange}
    />
  </div>

  <div className="formGroup">
    <label>Residence</label>

    <input
      type="text"
      name="residence"
      placeholder="Residence"
      required
      value={formData.residence}
      onChange={handleChange}
    />
  </div>

</div>

<div className="formRow">

  <div className="formGroup">
    <label>
      Are you a member of Christ Embassy?
    </label>

    <select
      name="christEmbassyMember"
      required
      value={formData.christEmbassyMember}
      onChange={handleChange}
    >
      <option value="">Select an option</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div className="formGroup">
    <label>
      Church / CE Branch
    </label>

    <input
      type="text"
      name="churchBranch"
      placeholder="Church / CE Branch"
      required
      value={formData.churchBranch}
      onChange={handleChange}
    />
  </div>

</div>

          {/* ===========================================
              SUBMIT
          =========================================== */}

          <button
            type="submit"
            className="submitButton"
            disabled={submitting}
          >

            {submitting
              ? "Submitting Registration..."
              : "Complete Registration"}

          </button>

          <p className="secureText">
            Your registration details are securely
            recorded.
          </p>

        </form>

      </motion.div>

    </motion.div>
  );
}

// =======================================================
// MAIN PAGE
// =======================================================

export default function LMMZambiaTraining() {

  const [showRegistration, setShowRegistration] =
    useState(false);

  // =====================================================
  // WHAT TO EXPECT
  // =====================================================

 const expectations = [
  {
    icon: <GraduationCap />,
    title: "Practical Music Training",
    text: "Learn through practical sessions designed to help you understand, practise and improve your musical skills.",
  },

  {
    icon: <Piano />,
    title: "Keyboard",
    text: "Get introduced to keyboard playing, chords, scales, accompaniment and practical playing techniques.",
  },

  {
    icon: <Drum />,
    title: "Drums",
    text: "Discover rhythm, timing, basic drum techniques and how to keep a strong musical groove.",
  },

  {
    icon: <Guitar />,
    title: "Guitar",
    text: "Learn the foundations of guitar playing, chords, rhythm patterns and practical accompaniment.",
  },

  {
    icon: <Mic2 />,
    title: "Vocal Training",
    text: "Develop your voice through practical vocal exercises, confidence building, breathing and performance techniques.",
  },

  {
    icon: <BookOpen />,
    title: "Music Theory",
    text: "Understand the musical foundations that help you become a more confident and knowledgeable musician.",
  },

  {
    icon: <Music />,
    title: "Worship & Music",
    text: "Discover how music, worship and creativity can come together to create meaningful experiences.",
  },

  {
    icon: <Headphones />,
    title: "Sound & Performance",
    text: "Learn more about performing, listening, sound awareness and working together as a music team.",
  },

  {
    icon: <Users />,
    title: "Teamwork & Collaboration",
    text: "Learn how musicians work together, communicate and create music as one team.",
  },

  {
    icon: <Sparkles />,
    title: "Discover Your Potential",
    text: "Be inspired to discover your musical ability, develop your confidence and keep growing.",
  },

  {
    icon: <Trophy />,
    title: "Build Confidence",
    text: "Gain confidence through practical participation, learning and opportunities to express yourself.",
  },

  {
    icon: <Heart />,
    title: "Connect & Grow",
    text: "Meet other people who love music, share experiences and build meaningful connections.",
  },
];

  return (
    <div className="lmmPage">


      <HomeImageSlider
        onRegister={() => setShowRegistration(true)}
      />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="heroSection">

        {/* ===============================================
            DECORATIVE SHAPES
        =============================================== */}

        <div className="yellowCircle circleOne" />
        <div className="pinkCircle circleTwo" />
        <div className="blueCircle circleThree" />

        <div className="heroContent">

          {/* =============================================
              SMALL LABEL
          ============================================= */}

          <motion.div
            className="topLabel"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            LMM ZAMBIA
          </motion.div>

          {/* =============================================
              MAIN TITLE
          ============================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
          >

            <span className="whiteTitle">
              TRAINING
            </span>

            <span className="yellowTitle">
              WORKSHOP
            </span>

          </motion.h1>

          {/* =============================================
              TAGLINE
          ============================================= */}

          <motion.div
            className="impactTag"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            ONE DAY OF IMPACT THAT CAN
            <br />
            <span>
              CHANGE EVERYTHING!
            </span>
          </motion.div>

          {/* =============================================
              DESCRIPTION
          ============================================= */}

          <p className="heroDescription">
            A powerful day of training, music,
            connection, fun and transformation.
            Come ready to learn, connect, grow
            and be impacted.
          </p>

          {/* =============================================
              EVENT DETAILS
          ============================================= */}

          <div className="eventDetails">

            <div className="eventDetail">

              <div className="detailIcon blueIcon">
                <CalendarDays size={28} />
              </div>

              <div>
                <span>
                  DATE
                </span>

                <strong>
                  19TH OCTOBER, 2026
                </strong>
              </div>

            </div>

            <div className="eventDetail">

              <div className="detailIcon pinkIcon">
                <MapPin size={28} />
              </div>

              <div>
                <span>
                  VENUE
                </span>

                <strong>
                  CE ZAMBIA GROUP CHURCH
                </strong>
              </div>

            </div>

            <div className="eventDetail">

              <div className="detailIcon cyanIcon">
                <Clock3 size={28} />
              </div>

              <div>
                <span>
                  TIME
                </span>

                <strong>
                  10HRS
                </strong>
              </div>

            </div>

          </div>

          {/* =============================================
              COUNTDOWN
          ============================================= */}

          <div className="countdownTitle">
            COUNTDOWN TO THE WORKSHOP
          </div>

          <Countdown />

          {/* =============================================
              REGISTER BUTTON
          ============================================= */}

          <motion.button
            className="mainRegisterButton"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() =>
              setShowRegistration(true)
            }
          >
            REGISTER NOW
          </motion.button>

        </div>

      </section>


       

     {/* =================================================
    WHAT TO EXPECT
================================================= */}

<section className="expectSection">

  <div className="sectionHeading">

    <span>WHAT TO EXPECT</span>

    <h2>
      COME READY TO LEARN, PLAY & GROW
    </h2>

    <p>
      This is more than just a workshop. It is an opportunity
      to discover your musical potential, learn practical skills,
      explore instruments, develop your confidence and connect
      with other people who are passionate about music.
    </p>

  </div>


  {/* =================================================
      FEATURE IMAGE EXPERIENCES
  ================================================= */}

  <div className="musicExperienceGrid">

    {/* IMAGE 1 */}

    <motion.div
      className="musicExperienceCard"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85"
        alt="Musician playing keyboard"
      />

      <div className="musicImageOverlay" />

      <div className="musicExperienceContent">

        <div className="musicExperienceIcon">
          <Piano size={32} />
        </div>

        <h3>
          LEARN & PLAY
        </h3>

        <p>
          Get practical exposure to musical instruments
          and discover how music comes together.
        </p>

      </div>

    </motion.div>


    {/* IMAGE 2 */}

    <motion.div
      className="musicExperienceCard"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1200&q=85"
        alt="Musicians playing drums and guitar"
      />

      <div className="musicImageOverlay" />

      <div className="musicExperienceContent">

        <div className="musicExperienceIcon">
          <Music size={32} />
        </div>

        <h3>
          BUILD YOUR SKILLS
        </h3>

        <p>
          Learn, practise and develop skills that can
          help you grow as a musician.
        </p>

      </div>

    </motion.div>


    {/* IMAGE 3 */}

    <motion.div
      className="musicExperienceCard"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85"
        alt="Singer performing on stage"
      />

      <div className="musicImageOverlay" />

      <div className="musicExperienceContent">

        <div className="musicExperienceIcon">
          <Mic2 size={32} />
        </div>

        <h3>
          FIND YOUR VOICE
        </h3>

        <p>
          Grow in confidence, creativity and expression
          through music and performance.
        </p>

      </div>

    </motion.div>

  </div>


  {/* =================================================
      MUSIC TRAINING INTRO
  ================================================= */}

  <div className="trainingIntro">

    <span className="trainingBadge">
      MUSIC TRAINING
    </span>

    <h2>
      THERE'S SOMETHING FOR EVERYONE
    </h2>

    <p>
      Whether you are just starting your musical journey or
      already have experience, come ready to learn and understand Music better. Explore instruments, improve your skills, learn
      from others and be inspired to take your music further.
    </p>

  </div>


  {/* =================================================
      SKILLS GRID
  ================================================= */}

  <div className="expectGrid">

    {expectations.map(
      (item, index) => (

        <motion.div
          className="expectCard"
          key={item.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.06,
            duration: 0.5,
          }}
          whileHover={{
            y: -8,
          }}
        >

          <div className="expectIcon">
            {item.icon}
          </div>

          <h3>
            {item.title}
          </h3>

          <p>
            {item.text}
          </p>

        </motion.div>

      )
    )}

  </div>


  {/* =================================================
      INSPIRATION MESSAGE
  ================================================= */}

  <motion.div
    className="musicInspiration"
    initial={{
      opacity: 0,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{
      once: true,
    }}
  >

    <div className="inspirationIcon">
      <Music size={38} />
    </div>

    <div>

      <h3>
        YOUR MUSICAL JOURNEY CAN START HERE
      </h3>

      <p>
        Come with a willingness to learn. You may discover
        an instrument you have always wanted to play, improve
        your voice, understand music better or simply find
        the confidence to express yourself through music.
      </p>

    </div>

  </motion.div>

  {showRegistration && (
    <AnimatePresence>
      <RegistrationForm
        onClose={() => setShowRegistration(false)}
      />
    </AnimatePresence>
  )}

</section>

      {/* =================================================
          CALL TO ACTION
      ================================================= */}

      <section className="ctaSection">

        <div className="ctaContent">

          {/* <div className="ctaLogo">
            LMM
          </div> */}

          <h2>
            DON'T MISS OUT!
          </h2>

          <p>
            One day that will make a difference.
            Come and experience the LMM Zambia
            Training Workshop.
          </p>

          <button
            onClick={() =>
              setShowRegistration(true)
            }
          >
            SECURE YOUR PLACE
          </button>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <p>
          © 2026 LMM Zambia. All Rights Reserved.
        </p>

        <p>
          LMM Zambia Training Workshop
        </p>

        <div className="poweredBy">
  <span>Powered by</span>
  <strong>AB Nation Tech</strong>
</div>

      </footer>

      {/* =================================================
          WHATSAPP BUTTON
      ================================================= */}

      <a
        href="https://wa.me/260977219990"
        target="_blank"
        rel="noreferrer"
        className="whatsappButton"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* =================================================
          REGISTRATION MODAL
      ================================================= */}

      <AnimatePresence>

        {showRegistration && (
          <RegistrationForm
            onClose={() =>
              setShowRegistration(false)
            }
          />
        )}

      </AnimatePresence>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .lmmPage {
          min-height: 100vh;
          background: #061a4f;
          color: white;
          overflow-x: hidden;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* ===============================================
           HERO
        =============================================== */

        .heroSection {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(0, 174, 239, 0.35),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 25%,
              rgba(236, 0, 140, 0.25),
              transparent 28%
            ),
            #061a4f;
        }

        .heroSection::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            );

          background-size: 45px 45px;
          pointer-events: none;
        }

        .heroContent {
          position: relative;
          z-index: 3;
          width: min(1150px, 94%);
          padding: 70px 20px;
          text-align: center;
        }

        .topLabel {
          display: inline-block;
          background: #ed008c;
          color: white;
          font-weight: 900;
          letter-spacing: 4px;
          padding: 10px 25px;
          transform: rotate(-2deg);
          box-shadow:
            7px 7px 0 #ffd900;
          margin-bottom: 25px;
        }

        h1 {
          margin: 0;
          line-height: 0.9;
          font-weight: 1000;
          letter-spacing: -3px;
          text-transform: uppercase;
        }

        .whiteTitle {
          display: block;
          color: white;
          font-size: clamp(55px, 10vw, 125px);
          text-shadow:
            5px 5px 0 #061a4f,
            9px 9px 0 rgba(0,0,0,0.3);
        }

        .yellowTitle {
          display: block;
          color: #ffd900;
          font-size: clamp(52px, 9vw, 110px);
          text-shadow:
            5px 5px 0 #ed008c,
            9px 9px 0 rgba(0,0,0,0.3);
        }

        .impactTag {
          display: inline-block;
          margin-top: 30px;
          background: #ed008c;
          padding: 15px 25px;
          font-weight: 1000;
          font-size: clamp(18px, 3vw, 30px);
          transform: rotate(-1deg);
          box-shadow:
            8px 8px 0 #ffd900;
        }

        .impactTag span {
          color: #ffd900;
        }

        .heroDescription {
          max-width: 760px;
          margin: 35px auto;
          font-size: 18px;
          line-height: 1.7;
          color: #e7efff;
        }

        /* ===============================================
           EVENT DETAILS
        =============================================== */

        .eventDetails {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 18px;
          max-width: 950px;
          margin: 35px auto;
        }

        .eventDetail {
          display: flex;
          align-items: center;
          gap: 15px;
          text-align: left;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(8px);
        }

        .detailIcon {
          width: 62px;
          height: 62px;
          min-width: 62px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blueIcon {
          background: #009fe3;
        }

        .pinkIcon {
          background: #ed008c;
        }

        .cyanIcon {
          background: #00aeef;
        }

        .eventDetail span {
          display: block;
          color: #ffd900;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }

        .eventDetail strong {
          display: block;
          font-size: 18px;
          color: white;
        }

        /* ===============================================
           COUNTDOWN
        =============================================== */

        .countdownTitle {
          color: #ffd900;
          font-weight: 900;
          letter-spacing: 2px;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        .countdown {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .countdownBox {
          min-width: 85px;
          padding: 13px 10px;
          background: #071d59;
          border: 2px solid #00aeef;
          border-radius: 10px;
          box-shadow:
            4px 4px 0 #ed008c;
        }

        .countdownBox strong {
          display: block;
          font-size: 28px;
          color: white;
        }

        .countdownBox span {
          display: block;
          font-size: 10px;
          color: #ffd900;
          text-transform: uppercase;
          font-weight: bold;
        }

        /* ===============================================
           BUTTONS
        =============================================== */

        .mainRegisterButton {
          border: none;
          background: #ffd900;
          color: #061a4f;
          padding: 18px 55px;
          font-size: 19px;
          font-weight: 1000;
          border-radius: 50px;
          cursor: pointer;
          box-shadow:
            0 7px 0 #ed008c;
          transition: 0.2s;
        }

        .mainRegisterButton:hover {
          box-shadow:
            0 4px 0 #ed008c;
          transform: translateY(3px);
        }

        /* ===============================================
           DECORATIVE CIRCLES
        =============================================== */

        .yellowCircle,
        .pinkCircle,
        .blueCircle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.35;
          pointer-events: none;
        }

        .yellowCircle {
          background: #ffd900;
        }

        .pinkCircle {
          background: #ed008c;
        }

        .blueCircle {
          background: #00aeef;
        }

        .circleOne {
          width: 250px;
          height: 250px;
          left: -100px;
          top: 100px;
        }

        .circleTwo {
          width: 180px;
          height: 180px;
          right: -70px;
          top: 150px;
        }

        .circleThree {
          width: 300px;
          height: 300px;
          right: -150px;
          bottom: -100px;
        }

        /* ===============================================
           EXPECT SECTION
        =============================================== */

        .expectSection {
          background: #f8f9ff;
          color: #061a4f;
          padding: 90px 20px;
          text-align: center;
        }

        .sectionHeading {
          max-width: 800px;
          margin: 0 auto 50px;
        }

        .sectionHeading > span {
          display: inline-block;
          background: #ffd900;
          padding: 8px 20px;
          font-weight: 1000;
          transform: rotate(-2deg);
        }

        .sectionHeading h2 {
          font-size: clamp(30px, 5vw, 55px);
          margin: 20px 0 15px;
          font-weight: 1000;
        }

        .sectionHeading p {
          color: #4b5563;
          font-size: 17px;
          line-height: 1.7;
        }

        .expectGrid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 25px;
        }


        /* =====================================================
   MUSIC EXPERIENCE IMAGE CARDS
===================================================== */

.musicExperienceGrid {
  max-width: 1150px;
  margin: 0 auto 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.musicExperienceCard {
  position: relative;
  height: 430px;
  overflow: hidden;
  border-radius: 24px;
  background: #061a4f;
  box-shadow:
    0 18px 45px rgba(6, 26, 79, 0.2);
  cursor: pointer;
}

.musicExperienceCard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}

.musicExperienceCard:hover img {
  transform: scale(1.08);
}

.musicImageOverlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(3, 18, 56, 0.98) 0%,
      rgba(3, 18, 56, 0.7) 40%,
      rgba(3, 18, 56, 0.05) 100%
    );

  z-index: 1;
}

.musicExperienceContent {
  position: absolute;
  left: 25px;
  right: 25px;
  bottom: 25px;
  z-index: 2;
  text-align: left;
}

.musicExperienceIcon {
  width: 65px;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #ffd900;
  color: #061a4f;

  margin-bottom: 18px;

  box-shadow:
    5px 5px 0 #ed008c;
}

.musicExperienceContent h3 {
  margin: 0 0 10px;

  color: white;

  font-size: 27px;
  font-weight: 1000;

  letter-spacing: 1px;
}

.musicExperienceContent p {
  margin: 0;

  color: #e8efff;

  font-size: 15px;
  line-height: 1.6;
}


/* =====================================================
   TRAINING INTRO
===================================================== */

.trainingIntro {
  max-width: 800px;
  margin: 0 auto 55px;
  text-align: center;
}

.trainingBadge {
  display: inline-block;

  background: #ed008c;
  color: white;

  padding: 9px 22px;

  font-size: 13px;
  font-weight: 1000;

  letter-spacing: 2px;

  transform: rotate(-2deg);

  box-shadow:
    5px 5px 0 #ffd900;
}

.trainingIntro h2 {
  margin: 25px 0 15px;

  color: #061a4f;

  font-size: clamp(30px, 5vw, 50px);

  font-weight: 1000;

  line-height: 1.05;
}

.trainingIntro p {
  margin: 0;

  color: #5b6475;

  font-size: 17px;
  line-height: 1.8;
}


/* =====================================================
   EXPECTATION CARDS
===================================================== */

.expectCard {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.expectCard:hover {
  box-shadow:
    0 20px 45px rgba(6, 26, 79, 0.18);
}

.expectCard:nth-child(3n + 1) .expectIcon {
  background: #061a4f;
  color: #ffd900;
}

.expectCard:nth-child(3n + 2) .expectIcon {
  background: #ed008c;
  color: white;
}

.expectCard:nth-child(3n + 3) .expectIcon {
  background: #00aeef;
  color: white;
}


/* =====================================================
   INSPIRATION MESSAGE
===================================================== */

.musicInspiration {
  max-width: 1050px;

  margin: 70px auto 0;

  padding: 35px 40px;

  display: flex;
  align-items: center;

  gap: 25px;

  text-align: left;

  border-radius: 22px;

  background:
    linear-gradient(
      135deg,
      #061a4f,
      #082b78
    );

  color: white;

  box-shadow:
    0 20px 50px rgba(6, 26, 79, 0.2);

  position: relative;

  overflow: hidden;
}

.musicInspiration::after {
  content: "";

  position: absolute;

  width: 180px;
  height: 180px;

  right: -70px;
  top: -70px;

  border-radius: 50%;

  background: #ed008c;

  opacity: 0.35;
}

.inspirationIcon {
  width: 80px;
  height: 80px;

  min-width: 80px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffd900;
  color: #061a4f;

  position: relative;
  z-index: 2;
}

.musicInspiration h3 {
  margin: 0 0 8px;

  color: #ffd900;

  font-size: 25px;

  font-weight: 1000;
}

.musicInspiration p {
  margin: 0;

  color: #e7efff;

  font-size: 16px;

  line-height: 1.7;

  max-width: 800px;
}




        .expectCard {
          background: white;
          border-radius: 18px;
          padding: 35px 25px;
          box-shadow:
            0 12px 35px rgba(6, 26, 79, 0.12);
          border-bottom: 6px solid #00aeef;
        }

        .expectCard:nth-child(2),
        .expectCard:nth-child(5) {
          border-bottom-color: #ffd900;
        }

        .expectCard:nth-child(3),
        .expectCard:nth-child(6) {
          border-bottom-color: #ed008c;
        }

        .expectIcon {
          width: 75px;
          height: 75px;
          margin: auto;
          border-radius: 50%;
          background: #061a4f;
          color: #ffd900;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expectIcon svg {
          width: 35px;
          height: 35px;
        }

        .expectCard h3 {
          font-size: 22px;
          margin: 20px 0 10px;
        }

        .expectCard p {
          margin: 0;
          color: #6b7280;
          line-height: 1.6;
        }

        /* ===============================================
           CTA
        =============================================== */

        .ctaSection {
          padding: 90px 20px;
          background:
            linear-gradient(
              135deg,
              #061a4f,
              #08256e
            );
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .ctaContent {
          max-width: 700px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .ctaLogo {
          width: 100px;
          height: 100px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #ffd900;
          color: #ffd900;
          font-weight: 1000;
          font-size: 28px;
          background: #061a4f;
        }

        .ctaSection h2 {
          font-size: clamp(40px, 8vw, 75px);
          color: #ffd900;
          margin: 25px 0 15px;
          font-weight: 1000;
        }

        .ctaSection p {
          color: #e5edff;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .ctaSection button {
          border: none;
          background: #ed008c;
          color: white;
          padding: 17px 40px;
          border-radius: 50px;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
          box-shadow:
            0 6px 0 #ffd900;
        }

        /* ===============================================
           FOOTER
        =============================================== */

        .footer {
          background: #031238;
          text-align: center;
          padding: 30px 20px;
          color: #9fb2dd;
          font-size: 14px;
        }

        .footer p {
          margin: 5px;
        }

        .poweredBy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  font-size: 13px;
  color: #9fb2dd;
}

.poweredBy strong {
  color: #ffd900;
  font-weight: 900;
  letter-spacing: 1px;
}



        /* ===============================================
           WHATSAPP
        =============================================== */

        .whatsappButton {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 58px;
          height: 58px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          box-shadow:
            0 8px 25px rgba(0,0,0,0.3);
          text-decoration: none;
        }

        /* ===============================================
           REGISTRATION MODAL
        =============================================== */

        .registrationModal {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0, 0, 0, 0.78);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .registrationCard {
          width: 100%;
          max-width: 650px;
          max-height: 94vh;
          overflow-y: auto;
          background: white;
          color: #111827;
          border-radius: 22px;
          padding: 35px;
          position: relative;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.4);
          border-top: 8px solid #ed008c;
        }

        .closeButton {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: #061a4f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .formHeader {
          text-align: center;
          margin-bottom: 28px;
        }

        .formIcon {
          width: 65px;
          height: 65px;
          margin: 0 auto 12px;
          border-radius: 50%;
          background: #ffd900;
          color: #061a4f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .formHeader h2 {
          margin: 0;
          color: #061a4f;
          font-size: 30px;
          font-weight: 1000;
        }

        .formHeader p {
          color: #6b7280;
          margin: 8px 0 0;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .formGroup label {
          font-size: 13px;
          font-weight: 800;
          color: #374151;
        }

        .formGroup input,
        .formGroup select {
          width: 100%;
          height: 48px;
          padding: 0 13px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          outline: none;
          font-size: 15px;
          background: white;
          color: #111827;
        }

        .formGroup input:focus,
        .formGroup select:focus {
          border-color: #00aeef;
          box-shadow:
            0 0 0 3px rgba(0,174,239,0.12);
        }

        .submitButton {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 12px;
          background: #ed008c;
          color: white;
          font-weight: 900;
          font-size: 16px;
          cursor: pointer;
          box-shadow:
            0 5px 0 #ffd900;
          margin-top: 8px;
        }

        .submitButton:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .secureText {
          text-align: center;
          color: #6b7280;
          font-size: 12px;
          margin: 0;
        }

        /* ===============================================
           RESPONSIVE
        =============================================== */

        @media (max-width: 800px) {

        .musicExperienceGrid {
  grid-template-columns: 1fr;
  max-width: 650px;
}

.musicExperienceCard {
  height: 400px;
}

.musicInspiration {
  padding: 30px;
}

          .eventDetails {
            grid-template-columns: 1fr;
            max-width: 600px;
          }

          .expectGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 600px) {


        .musicExperienceGrid {
  gap: 18px;
}

.musicExperienceCard {
  height: 380px;
  border-radius: 18px;
}

.musicExperienceContent {
  left: 20px;
  right: 20px;
  bottom: 20px;
}

.musicExperienceContent h3 {
  font-size: 23px;
}

.musicExperienceContent p {
  font-size: 14px;
}

.musicExperienceIcon {
  width: 58px;
  height: 58px;
}

.trainingIntro {
  margin-bottom: 40px;
}

.trainingIntro h2 {
  font-size: 32px;
}

.trainingIntro p {
  font-size: 15px;
}

.musicInspiration {
  flex-direction: column;
  text-align: center;
  padding: 30px 22px;
}

.inspirationIcon {
  width: 70px;
  height: 70px;
  min-width: 70px;
}

.musicInspiration h3 {
  font-size: 21px;
}

.musicInspiration p {
  font-size: 14px;
}

          .heroContent {
            padding: 55px 10px;
          }

          .topLabel {
            font-size: 12px;
            letter-spacing: 2px;
          }

          .heroDescription {
            font-size: 15px;
          }

          .eventDetail {
            padding: 15px;
          }

          .eventDetail strong {
            font-size: 15px;
          }

          .countdown {
            gap: 7px;
          }

          .countdownBox {
            min-width: 65px;
            padding: 10px 5px;
          }

          .countdownBox strong {
            font-size: 21px;
          }

          .countdownBox span {
            font-size: 8px;
          }

          .expectGrid {
            grid-template-columns: 1fr;
          }

          .registrationCard {
            padding: 25px 18px;
          }

          .formRow {
            grid-template-columns: 1fr;
          }

          .whatsappButton {
            right: 18px;
            bottom: 18px;
          }

        }

      `}</style>

    </div>
  );
}


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PhoneInput from "react-phone-input-2";
// import axios from "axios";
// import { MessageCircle } from "lucide-react";
// import "react-phone-input-2/lib/style.css";
// import heroBg from "../assets/slidd1.jpg";
// import { useNavigate } from "react-router-dom";

// const EVENTS = {
//   Lusaka: new Date("2026-02-20T10:00:00"),
//   Harare: new Date("2026-02-24T10:00:00"),
// };

// function Countdown({ date }) {
//   const [time, setTime] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const diff = date - new Date();

//       if (diff <= 0) {
//         clearInterval(interval);
//         return;
//       }

//       setTime({
//         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((diff / (1000 * 60)) % 60),
//         seconds: Math.floor((diff / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [date]);

//   return (
//     <div className="countdown">
//       {Object.entries(time).map(([key, value]) => (
//         <div key={key}>
//           <strong>{value}</strong>
//           <span>{key}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// function RegistrationForm({ program, onClose }) {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     residence: "",
//     phone: "",
//     gender: "",
//   });

//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("=================================");
//   console.log("🚀 REGISTRATION SUBMISSION STARTED");
//   console.log("Form data:", formData);
//   console.log("Program:", program);
//   console.log("=================================");

//   setSubmitting(true);

//   try {
//     console.log("📡 Sending request to backend...");

//     const response = await axios.post(
//       "https://lmmzambia.onrender.com/api/registrations",
//       {
//         ...formData,
//         program,
//       },
//       {
//         timeout: 60000,
//       }
//     );

//     console.log("=================================");
//     console.log("✅ BACKEND RESPONSE RECEIVED");
//     console.log(response);
//     console.log("Response data:", response.data);
//     console.log("=================================");

//     if (response.data?.success === true) {
//       console.log("🎉 REGISTRATION SUCCESSFUL");

//       onClose();

//       navigate("/registration-success", {
//         state: {
//           registration: response.data.data,
//           emailSent: response.data.emailSent,
//           message: response.data.message,
//         },
//       });

//       return;
//     }

//     console.log("⚠️ Backend responded but success was false");

//     alert(
//       response.data?.message ||
//       "Registration could not be completed."
//     );

//   } catch (error) {
//     console.error("=================================");
//     console.error("❌ REGISTRATION ERROR");
//     console.error(error);
//     console.error("=================================");

//     if (error.response) {
//       console.error("HTTP STATUS:", error.response.status);
//       console.error("SERVER RESPONSE:", error.response.data);

//       alert(
//         error.response.data?.message ||
//         `Registration failed (${error.response.status}).`
//       );

//     } else if (error.code === "ECONNABORTED") {
//       console.error("⏰ REQUEST TIMED OUT");

//       alert(
//         "The registration server took too long to respond. Please try again."
//       );

//     } else if (error.request) {
//       console.error("🌐 REQUEST SENT BUT NO RESPONSE RECEIVED");
//       console.error(error.request);

//       alert(
//         "The registration request was sent, but the server did not respond."
//       );

//     } else {
//       console.error("⚠️ ERROR BEFORE REQUEST WAS SENT");
//       console.error(error.message);

//       alert(
//         error.message ||
//         "Something went wrong while submitting the registration."
//       );
//     }

//   } finally {
//     console.log("🔚 Registration process finished");
//     setSubmitting(false);
//   }
// };

//   return (
//     <motion.div
//       className="modal"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="modalCard"
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//       >
//         <h2>Register for {program}</h2>

//         <p className="formHint">
//           Secure your spot at the Study in Mauritius Higher Education Fair
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <input
//               name="firstName"
//               placeholder="First Name"
//               required
//               value={formData.firstName}
//               onChange={handleChange}
//               disabled={submitting}
//             />

//             <input
//               name="lastName"
//               placeholder="Last Name"
//               required
//               value={formData.lastName}
//               onChange={handleChange}
//               disabled={submitting}
//             />
//           </div>

//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             disabled={submitting}
//           />

//           <div className="row">
//             <select
//               name="gender"
//               required
//               value={formData.gender}
//               onChange={handleChange}
//               disabled={submitting}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>

//             <input
//               name="country"
//               placeholder="Country"
//               required
//               value={formData.country}
//               onChange={handleChange}
//               disabled={submitting}
//             />
//           </div>

//           <div className="row">
//             <input
//               name="city"
//               placeholder="City"
//               required
//               value={formData.city}
//               onChange={handleChange}
//               disabled={submitting}
//             />

//             <input
//               name="residence"
//               placeholder="Residence"
//               required
//               value={formData.residence}
//               onChange={handleChange}
//               disabled={submitting}
//             />
//           </div>

//           <PhoneInput
//             country="mu"
//             value={formData.phone}
//             onChange={(phone) =>
//               setFormData({
//                 ...formData,
//                 phone,
//               })
//             }
//             enableSearch
//             inputStyle={{
//               width: "100%",
//               height: "45px",
//             }}
//             disabled={submitting}
//           />

//           <button type="submit" disabled={submitting}>
//             {submitting ? "Submitting Registration..." : "Submit Registration"}
//           </button>

//           <button
//             type="button"
//             className="ghost"
//             onClick={onClose}
//             disabled={submitting}
//           >
//             Cancel
//           </button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function MauritiusExhibitionLanding() {
//   const [activeProgram, setActiveProgram] = useState(null);

//   return (
//     <div className="page">
//       <section className="hero">
//         <div className="imageBg" />
//         <div className="overlay" />

//         <motion.div
//           className="heroContent"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1>Study in Mauritius</h1>

//           <p className="tagline">
//             Meet Top Higher Education Institutions · Explore Scholarships ·
//             Apply On The Spot
//           </p>

//           <p className="description">
//             The Study in Mauritius Higher Education Fair brings leading
//             universities and institutions from Mauritius directly to Zambia
//             and Zimbabwe. This is your opportunity to interact face-to-face
//             with university representatives, learn about internationally
//             recognised degrees, affordable tuition, scholarships, visa
//             guidance, and student life on one of the world’s most beautiful
//             island destinations.
//           </p>

//           <div className="events" id="register-forms">
//             <div className="eventCard">
//               <h3>Lusaka</h3>

//               <p>
//                 20 February 2026
//                 <br />
//                 Radisson Blu Hotel · 10:00–16:00
//               </p>

//               <Countdown date={EVENTS.Lusaka} />

//               <button onClick={() => setActiveProgram("Lusaka")}>
//                 Register for Lusaka
//               </button>
//             </div>

//             <div className="eventCard">
//               <h3>Harare</h3>

//               <p>
//                 24 February 2026
//                 <br />
//                 Hyatt Regency Harare The Meikles · 10:00–16:00
//               </p>

//               <Countdown date={EVENTS.Harare} />

//               <button onClick={() => setActiveProgram("Harare")}>
//                 Register for Harare
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         <style jsx>{`
//           .hero {
//             position: relative;
//             min-height: 100vh;
//             overflow: hidden;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             text-align: center;
//           }

//           .imageBg {
//             position: absolute;
//             inset: 0;
//             background-image: url(${heroBg});
//             background-size: cover;
//             background-position: center;
//             background-repeat: no-repeat;
//             z-index: 0;
//             filter: brightness(0.65);
//           }

//           .overlay {
//             position: absolute;
//             inset: 0;
//             background: rgba(0, 0, 0, 0.4);
//             z-index: 1;
//           }

//           .heroContent {
//             position: relative;
//             z-index: 2;
//             max-width: 1100px;
//             padding: 80px 20px;
//             color: white;
//           }

//           .tagline {
//             font-size: 20px;
//             margin-bottom: 16px;
//             color: #dbeafe;
//           }

//           .description {
//             max-width: 900px;
//             margin: 0 auto 40px;
//             font-size: 17px;
//             line-height: 1.6;
//             color: #e5e7eb;
//           }

//           .events {
//             display: grid;
//             grid-template-columns: repeat(
//               auto-fit,
//               minmax(280px, 1fr)
//             );
//             gap: 24px;
//           }

//           .eventCard {
//             background: rgba(255, 255, 255, 0.12);
//             padding: 28px;
//             border-radius: 18px;
//             backdrop-filter: blur(8px);
//           }

//           .eventCard button {
//             margin-top: 16px;
//             width: 100%;
//           }

//           @media (max-width: 640px) {
//             .heroContent {
//               padding: 40px 20px;
//             }
//           }
//         `}</style>
//       </section>

//       <a
//         href="https://wa.me/+26097"
//         target="_blank"
//         rel="noreferrer"
//         className="whatsapp"
//       >
//         <MessageCircle size={26} />
//       </a>

//       <AnimatePresence>
//         {activeProgram && (
//           <RegistrationForm
//             program={activeProgram}
//             onClose={() => setActiveProgram(null)}
//           />
//         )}
//       </AnimatePresence>

//       <style>{`
//         * {
//           box-sizing: border-box;
//           font-family: Inter, Arial, sans-serif;
//         }

//         .page {
//           background: #0b1c2d;
//           color: white;
//         }

//         .hero {
//           position: relative;
//           min-height: 100vh;
//           overflow: hidden;
//         }

//         .videoBg {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.6);
//         }

//         .heroContent {
//           position: relative;
//           z-index: 2;
//           max-width: 1100px;
//           margin: auto;
//           padding: 80px 20px;
//           text-align: center;
//         }

//         h1 {
//           font-size: 52px;
//           margin-bottom: 10px;
//         }

//         .tagline {
//           font-size: 20px;
//           margin-bottom: 16px;
//           color: #dbeafe;
//         }

//         .description {
//           max-width: 900px;
//           margin: 0 auto 40px;
//           font-size: 17px;
//           line-height: 1.6;
//           color: #e5e7eb;
//         }

//         .events {
//           display: grid;
//           grid-template-columns: repeat(
//             auto-fit,
//             minmax(280px, 1fr)
//           );
//           gap: 24px;
//         }

//         .eventCard {
//           background: rgba(255, 255, 255, 0.12);
//           padding: 28px;
//           border-radius: 18px;
//           backdrop-filter: blur(8px);
//         }

//         .eventCard button {
//           margin-top: 16px;
//           width: 100%;
//         }

//         .countdown {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 14px;
//         }

//         .countdown div {
//           text-align: center;
//         }

//         .countdown strong {
//           font-size: 22px;
//           display: block;
//         }

//         .countdown span {
//           font-size: 12px;
//         }

//         button {
//           background: #00a551;
//           border: none;
//           padding: 14px;
//           color: white;
//           border-radius: 12px;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         button:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .ghost {
//           background: transparent;
//           border: 1px solid #ccc;
//           color: #333;
//           margin-top: 10px;
//         }

//         .modal {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.75);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 50;
//           padding: 20px;
//         }

//         .modalCard {
//           background: white;
//           color: #111;
//           width: 100%;
//           max-width: 620px;
//           max-height: 90vh;
//           overflow-y: auto;
//           padding: 32px;
//           border-radius: 20px;
//         }

//         .formHint {
//           margin-bottom: 14px;
//           color: #4b5563;
//         }

//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//         }

//         .row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 14px;
//         }

//         input,
//         select {
//           padding: 12px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           width: 100%;
//           font-size: 15px;
//         }

//         input:disabled,
//         select:disabled {
//           background: #f3f4f6;
//         }

//         .whatsapp {
//           position: fixed;
//           right: 24px;
//           bottom: 24px;
//           background: #25d366;
//           color: white;
//           width: 56px;
//           height: 56px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           z-index: 60;
//         }

//         @media (max-width: 640px) {
//           h1 {
//             font-size: 36px;
//           }

//           .row {
//             grid-template-columns: 1fr;
//           }

//           .modalCard {
//             padding: 24px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }