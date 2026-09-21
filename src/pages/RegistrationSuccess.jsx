import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Download,
  MessageCircle,
  QrCode,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function RegistrationSuccess() {
  const location = useLocation();

  // -------------------------------------------------
  // GET DATA PASSED FROM REGISTRATION PAGE
  // -------------------------------------------------

  const registration =
    location.state?.registration || null;

  const registrationId =
    location.state?.registrationId ||
    registration?.registrationId ||
    "";

  const qrUrl =
  location.state?.qrUrl ||
  (registrationId
    ? `${import.meta.env.VITE_API_URL}/api/registrations/qr/${registrationId}`
    : "");


  const whatsappUrl =
    location.state?.whatsappUrl || "";

  const message =
    location.state?.message ||
    "Your registration has been successfully received.";

  // -------------------------------------------------
  // REGISTRATION DETAILS
  // -------------------------------------------------

  const fullName = registration
    ? `${registration.firstName || ""} ${
        registration.lastName || ""
      }`.trim()
    : "";

  // -------------------------------------------------
  // DOWNLOAD QR CODE
  // -------------------------------------------------

  const handleDownloadQR = async () => {
    if (!qrUrl) {
      alert("QR code is not available.");
      return;
    }

    try {
      const response = await fetch(qrUrl);

      if (!response.ok) {
        throw new Error("Unable to download QR code.");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `Study-in-Mauritius-QR-${registrationId}.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("QR download error:", error);

      // Fallback: open QR image directly
      window.open(qrUrl, "_blank");
    }
  };

  // -------------------------------------------------
  // WHATSAPP MESSAGE
  // -------------------------------------------------

  const createWhatsAppUrl = () => {
    if (!registration) {
      return "https://wa.me/260977219990";
    }

    const text = `
Hello, I have successfully registered for the Study in Mauritius Higher Education Fair.

Registration Details:

Registration ID: ${registrationId}
Name: ${fullName}
Email: ${registration.email || ""}
Phone: ${registration.phone || ""}
Country: ${registration.country || ""}
City: ${registration.city || ""}
Residence: ${registration.residence || ""}
Gender: ${registration.gender || ""}
Program: ${registration.program || ""}

QR Code:
${qrUrl}

Thank you.
`.trim();

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const finalWhatsAppUrl =
    whatsappUrl || createWhatsAppUrl();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 px-4 py-10">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* =================================================
            SUCCESS HEADER
        ================================================= */}

        <div className="bg-green-600 text-white px-6 py-8 text-center">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="flex justify-center mb-4"
          >
            <div className="bg-white rounded-full p-3">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold">
            Registration Successful!
          </h1>

          <p className="mt-2 text-green-50">
            Your registration has been successfully
            received.
          </p>

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-6 md:p-8">

          <p className="text-gray-700 text-center mb-6">
            Thank you
            {fullName ? (
              <>
                {" "}
                <strong>{fullName}</strong>
              </>
            ) : null}
            {" "}for registering for the{" "}
            <strong>
              Study in Mauritius Higher Education Fair
            </strong>
            .
          </p>

          {/* =================================================
              REGISTRATION ID
          ================================================= */}

          {registrationId && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-center">

              <p className="text-sm text-blue-700 font-medium mb-1">
                YOUR REGISTRATION ID
              </p>

              <p className="text-sm md:text-base font-bold text-blue-900 break-all">
                {registrationId}
              </p>

              <p className="text-xs text-blue-600 mt-2">
                Please save this registration ID.
              </p>

            </div>
          )}

          {/* =================================================
              REGISTRATION DETAILS
          ================================================= */}

          {registration && (
            <div className="border border-gray-200 rounded-xl p-4 mb-6">

              <h2 className="font-bold text-gray-800 mb-4">
                Registration Details
              </h2>

              <div className="space-y-3 text-sm">

                {fullName && (
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-blue-600 mt-0.5" />

                    <div>
                      <p className="text-gray-500">
                        Name
                      </p>

                      <p className="font-medium text-gray-800">
                        {fullName}
                      </p>
                    </div>
                  </div>
                )}

                {registration.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />

                    <div>
                      <p className="text-gray-500">
                        Email
                      </p>

                      <p className="font-medium text-gray-800 break-all">
                        {registration.email}
                      </p>
                    </div>
                  </div>
                )}

                {registration.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-0.5" />

                    <div>
                      <p className="text-gray-500">
                        Phone
                      </p>

                      <p className="font-medium text-gray-800">
                        {registration.phone}
                      </p>
                    </div>
                  </div>
                )}

                {(registration.city ||
                  registration.country) && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />

                    <div>
                      <p className="text-gray-500">
                        Location
                      </p>

                      <p className="font-medium text-gray-800">
                        {registration.city}
                        {registration.city &&
                        registration.country
                          ? ", "
                          : ""}
                        {registration.country}
                      </p>
                    </div>
                  </div>
                )}

                {registration.program && (
                  <div className="pt-2 border-t border-gray-100">

                    <p className="text-gray-500">
                      Fair Location
                    </p>

                    <p className="font-bold text-blue-700">
                      {registration.program}
                    </p>

                  </div>
                )}

              </div>
            </div>
          )}

          {/* =================================================
              QR CODE
          ================================================= */}

          {qrUrl && (
            <div className="border border-gray-200 rounded-2xl p-5 mb-6 text-center">

              <div className="flex items-center justify-center gap-2 mb-3">

                <QrCode className="w-6 h-6 text-blue-700" />

                <h2 className="font-bold text-gray-800">
                  Your Registration QR Code
                </h2>

              </div>

              <p className="text-sm text-gray-600 mb-5">
                Please save this QR code. It may be used
                for registration verification at the
                event.
              </p>

              <div className="flex justify-center bg-white">

                <img
                  src={qrUrl}
                  alt="Registration QR Code"
                  className="w-64 h-64 object-contain border border-gray-200 rounded-xl p-2"
                />

              </div>

              {/* DOWNLOAD BUTTON */}

              <button
                type="button"
                onClick={handleDownloadQR}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition"
              >
                <Download className="w-5 h-5" />

                Download My QR Code
              </button>

            </div>
          )}

          {/* =================================================
              WHATSAPP CONFIRMATION
          ================================================= */}

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">

            <div className="flex items-center gap-3 mb-2">

              <MessageCircle className="w-6 h-6 text-green-600" />

              <h2 className="font-bold text-green-800">
                Save Your Registration
              </h2>

            </div>

            <p className="text-sm text-green-700 mb-4">
              Send your registration details to yourself
              on WhatsApp so you have them available on
              your phone.
            </p>

            <a
              href={finalWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition"
            >
              <MessageCircle className="w-5 h-5" />

              Send My Details on WhatsApp
            </a>

          </div>

          {/* =================================================
              MORE INFORMATION
          ================================================= */}

          {/* <a
            href="https://studyinmauritius.mu/sim"
            target="_blank"
            rel="noreferrer"
            className="group block w-full bg-blue-700 text-white font-bold py-3 rounded-xl text-center transition hover:bg-blue-900 mb-3"
          >
            <span className="inline-flex items-center justify-center gap-2">

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />

              Click Here for More Information

            </span>
          </a> */}

          {/* =================================================
              CHAT WITH STUDY IN MAURITIUS
          ================================================= */}

          <a
            href="https://wa.me/260977219990"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 transition mb-3"
          >
            <MessageCircle className="w-5 h-5" />

            Chat with Us on WhatsApp
          </a>

          {/* =================================================
              BACK HOME
          ================================================= */}

          <Link
            to="/"
            className="block w-full bg-gray-600 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition text-center"
          >
            Back to Home
          </Link>

          {/* =================================================
              SMALL NOTE
          ================================================= */}

          <p className="text-xs text-gray-500 text-center mt-5">
            Please keep your Registration ID and QR code
            safe. You may need them when attending the
            Study in Mauritius Higher Education Fair.
          </p>

        </div>
      </motion.div>
    </div>
  );
}


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";


// export default function RegistrationSuccess() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center"
//       >
//         <h1 className="text-2xl font-bold text-green-600 mb-4">
//           🎉 Registration Successful!
//         </h1>

//         <p className="text-gray-700 mb-6">
//           Thank you for registering for the <strong>Study in Mauritius Higher Education Fair. </strong>
//            Our team will contact you shortly with further details.
//         </p>

//         <div className="space-y-3">
//           <Link
//             to="/"
//             className="block w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Back to Home
//           </Link>

//      <a
//   href="https://studyinmauritius.mu/sim"
//   target="_blank"
//   rel="noreferrer"
//   className="group block w-full bg-blue-700 text-white font-bold py-3 rounded-lg 
//              text-center transition hover:bg-blue-900"
// >
//   <span className="inline-flex items-center justify-center ">
//     <ArrowRight className="w-10 h-5  text-white font-bold animate-bounce group-hover:translate-x-1 transition" />
//     Click Here for More Information
    
//   </span>
// </a>



//           <a
//             href="https://wa.me/260977219990"
//             target="_blank"
//             rel="noreferrer"
//             className="block w-full border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition"
//           >
//             Chat with Us on WhatsApp
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
