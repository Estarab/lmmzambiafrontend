import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  MessageCircle,
  QrCode,
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Church,
  CalendarDays,
  Music,
} from "lucide-react";

export default function RegistrationSuccess() {
  const location = useLocation();

  // Registration data passed from the registration form
  const registration = location.state?.registration || null;

  // Unique registration ID
  const registrationId =
    location.state?.registrationId ||
    registration?.registrationId ||
    "";

  // Unique QR code URL
  const qrUrl =
    location.state?.qrUrl ||
    (registrationId
      ? `${import.meta.env.VITE_API_URL}/api/registrations/qr/${registrationId}`
      : "");

  // WhatsApp URL returned by backend, if available
  const whatsappUrl = location.state?.whatsappUrl || "";

  // Full name
  const fullName = registration
    ? `${registration.firstName || ""} ${
        registration.lastName || ""
      }`.trim()
    : "";

  // =====================================================
  // DOWNLOAD QR CODE
  // =====================================================

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
      link.download = `LMM-Zambia-QR-${registrationId}.png`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("QR download error:", error);

      // If direct download fails, open the QR code
      // in a new browser tab.
      window.open(qrUrl, "_blank");
    }
  };

  // =====================================================
  // DOWNLOAD REGISTRATION DETAILS
  // =====================================================

  const handleDownloadDetails = async () => {
  if (!registration) {
    alert("Registration details are not available.");
    return;
  }

  try {
    const pdf = new jsPDF();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let y = 20;

    // =====================================================
    // HEADER
    // =====================================================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text(
      "LMM ZAMBIA TRAINING WORKSHOP",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 10;

    pdf.setFontSize(15);
    pdf.text(
      "REGISTRATION CONFIRMATION",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 12;

    pdf.setDrawColor(30, 64, 175);
    pdf.line(20, y, pageWidth - 20, y);

    y += 12;

    // =====================================================
    // REGISTRATION ID
    // =====================================================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("Registration ID", 20, y);

    y += 7;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(
      registration.registrationId || registrationId || "—",
      20,
      y
    );

    y += 12;

    // =====================================================
    // PERSONAL DETAILS
    // =====================================================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Personal Details", 20, y);

    y += 9;

    const addDetail = (label, value) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.text(`${label}:`, 20, y);

      pdf.setFont("helvetica", "normal");

      const text = String(value || "—");

      const wrappedText = pdf.splitTextToSize(
        text,
        pageWidth - 75
      );

      pdf.text(wrappedText, 70, y);

      y += Math.max(7, wrappedText.length * 5 + 2);
    };

    addDetail(
      "First Name",
      registration.firstName
    );

    addDetail(
      "Last Name",
      registration.lastName
    );

    addDetail(
      "Full Name",
      fullName
    );

    addDetail(
      "Email",
      registration.email
    );

    addDetail(
      "Phone",
      registration.phone
    );

    addDetail(
      "Gender",
      registration.gender
    );

    // =====================================================
    // LOCATION DETAILS
    // =====================================================

    y += 4;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Location Details", 20, y);

    y += 9;

    addDetail(
      "Country",
      registration.country
    );

    addDetail(
      "City",
      registration.city
    );

    addDetail(
      "Residence",
      registration.residence
    );

    // =====================================================
    // CHURCH DETAILS
    // =====================================================

    y += 4;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Church Details", 20, y);

    y += 9;

    addDetail(
      "Christ Embassy Member",
      registration.christEmbassyMember
    );

    addDetail(
      "Church / CE Branch",
      registration.churchBranch
    );

    // =====================================================
    // PROGRAM DETAILS
    // =====================================================

    y += 4;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Program Details", 20, y);

    y += 9;

    addDetail(
      "Program",
      registration.program
    );

    if (registration.createdAt) {
      addDetail(
        "Registration Date",
        new Date(
          registration.createdAt
        ).toLocaleString()
      );
    }

    // =====================================================
    // QR CODE
    // =====================================================

    // Start QR section on a new page so the QR code
    // has enough room.
    pdf.addPage();

    y = 25;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);

    pdf.text(
      "YOUR UNIQUE QR CODE",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    pdf.text(
      "Present this QR code at the workshop for",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 6;

    pdf.text(
      "registration verification.",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 12;

    // Download QR image and place it into PDF
    if (qrUrl) {
      try {
        const qrResponse = await fetch(qrUrl);

        if (qrResponse.ok) {
          const qrBlob = await qrResponse.blob();

          const qrDataUrl =
            await new Promise((resolve, reject) => {
              const reader = new FileReader();

              reader.onloadend = () =>
                resolve(reader.result);

              reader.onerror = reject;

              reader.readAsDataURL(qrBlob);
            });

          const qrSize = 100;

          pdf.addImage(
            qrDataUrl,
            "PNG",
            (pageWidth - qrSize) / 2,
            y,
            qrSize,
            qrSize
          );

          y += qrSize + 15;
        }
      } catch (qrError) {
        console.error(
          "Unable to add QR code to PDF:",
          qrError
        );
      }
    }

    // =====================================================
    // QR / REGISTRATION ID
    // =====================================================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);

    pdf.text(
      "Registration ID:",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 6;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);

    pdf.text(
      registration.registrationId ||
        registrationId ||
        "—",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 12;

    // =====================================================
    // FOOTER
    // =====================================================

    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);

    pdf.text(
      "Please keep this registration confirmation and QR code safe.",
      pageWidth / 2,
      pageHeight - 25,
      { align: "center" }
    );

    pdf.text(
      "LMM Zambia Training Workshop",
      pageWidth / 2,
      pageHeight - 18,
      { align: "center" }
    );

    // =====================================================
    // SAVE PDF
    // =====================================================

    pdf.save(
      `LMM-Zambia-Registration-${registrationId}.pdf`
    );

  } catch (error) {
    console.error(
      "PDF generation error:",
      error
    );

    alert(
      "Unable to generate the registration PDF. Please try again."
    );
  }
};

  // =====================================================
  // WHATSAPP
  // =====================================================

  const createWhatsAppUrl = () => {
    if (!registration) {
      return "https://wa.me/";
    }

    const text = `
Hello, I have successfully registered for the LMM Zambia Training Workshop.

REGISTRATION CONFIRMATION

Registration ID:
${registrationId}

PERSONAL DETAILS

First Name:
${registration.firstName || ""}

Last Name:
${registration.lastName || ""}

Full Name:
${fullName}

Email:
${registration.email || ""}

Phone:
${registration.phone || ""}

Gender:
${registration.gender || ""}

LOCATION DETAILS

Country:
${registration.country || ""}

City:
${registration.city || ""}

Residence:
${registration.residence || ""}

CHURCH DETAILS

Christ Embassy Member:
${registration.christEmbassyMember || ""}

Church / CE Branch:
${registration.churchBranch || ""}

PROGRAM

${registration.program || ""}

QR Code:
${qrUrl}

Thank you.
`.trim();

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const finalWhatsAppUrl =
    whatsappUrl || createWhatsAppUrl();

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-4 py-10">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="bg-green-600 text-white px-6 py-10 text-center">

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
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold">
            Registration Successful!
          </h1>

          <p className="mt-2 text-green-50">
            Your LMM Zambia Training Workshop registration
            has been successfully received.
          </p>

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-6 md:p-8">

          {fullName && (
            <p className="text-gray-700 text-center mb-6">
              Thank you{" "}
              <strong>{fullName}</strong>{" "}
              for registering for the{" "}
              <strong>
                LMM Zambia Training Workshop
              </strong>.
            </p>
          )}

          {/* =================================================
              CONFIRMATION MESSAGE
          ================================================= */}

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-6">

            <h2 className="font-bold text-yellow-900 text-lg mb-2">
              Please Confirm Your Details
            </h2>

            <p className="text-sm text-yellow-800 leading-6">
              Please carefully review all the information
              below and make sure it is correct. Your
              registration details and QR code are shown
              below for your confirmation.
            </p>

          </div>

          {/* =================================================
              REGISTRATION ID
          ================================================= */}

          {registrationId && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6 text-center">

              <p className="text-sm text-blue-700 font-semibold mb-2">
                YOUR UNIQUE REGISTRATION ID
              </p>

              <p className="text-sm md:text-base font-bold text-blue-950 break-all">
                {registrationId}
              </p>

              <p className="text-xs text-blue-600 mt-2">
                Keep this ID safe for event verification.
              </p>

            </div>
          )}

          {/* =================================================
              COMPLETE REGISTRATION DETAILS
          ================================================= */}

          {registration ? (
            <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">

              <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">

                <h2 className="font-bold text-gray-900 text-lg">
                  Your Complete Registration Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Please check every detail below.
                </p>

              </div>

              <div className="divide-y divide-gray-100">

                {/* FIRST NAME */}

                <div className="p-4 flex items-start gap-4">

                  <User className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      First Name
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.firstName || "—"}
                    </p>

                  </div>

                </div>

                {/* LAST NAME */}

                <div className="p-4 flex items-start gap-4">

                  <User className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Last Name
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.lastName || "—"}
                    </p>

                  </div>

                </div>

                {/* FULL NAME */}

                <div className="p-4 flex items-start gap-4">

                  <User className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Full Name
                    </p>

                    <p className="font-semibold text-gray-800">
                      {fullName || "—"}
                    </p>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="p-4 flex items-start gap-4">

                  <Mail className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Email Address
                    </p>

                    <p className="font-semibold text-gray-800 break-all">
                      {registration.email || "—"}
                    </p>

                  </div>

                </div>

                {/* PHONE */}

                <div className="p-4 flex items-start gap-4">

                  <Phone className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Phone Number
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.phone || "—"}
                    </p>

                  </div>

                </div>

                {/* COUNTRY */}

                <div className="p-4 flex items-start gap-4">

                  <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Country
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.country || "—"}
                    </p>

                  </div>

                </div>

                {/* CITY */}

                <div className="p-4 flex items-start gap-4">

                  <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      City
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.city || "—"}
                    </p>

                  </div>

                </div>

                {/* RESIDENCE */}

                <div className="p-4 flex items-start gap-4">

                  <Home className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Residence
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.residence || "—"}
                    </p>

                  </div>

                </div>

                {/* GENDER */}

                <div className="p-4 flex items-start gap-4">

                  <User className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Gender
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.gender || "—"}
                    </p>

                  </div>

                </div>

                {/* CHRIST EMBASSY MEMBER */}

                <div className="p-4 flex items-start gap-4">

                  <Church className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Christ Embassy Member
                    </p>

                    <p
                      className={`font-bold ${
                        registration.christEmbassyMember === "Yes"
                          ? "text-green-700"
                          : "text-gray-800"
                      }`}
                    >
                      {registration.christEmbassyMember || "—"}
                    </p>

                  </div>

                </div>

                {/* CHURCH BRANCH */}

                <div className="p-4 flex items-start gap-4">

                  <Church className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Church / CE Branch
                    </p>

                    <p className="font-semibold text-gray-800">
                      {registration.churchBranch || "—"}
                    </p>

                  </div>

                </div>

                {/* PROGRAM */}

                <div className="p-4 flex items-start gap-4">

                  <Music className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                  <div className="min-w-0">

                    <p className="text-xs text-gray-500">
                      Program
                    </p>

                    <p className="font-bold text-blue-700">
                      {registration.program || "—"}
                    </p>

                  </div>

                </div>

                {/* REGISTRATION DATE */}

                {registration.createdAt && (
                  <div className="p-4 flex items-start gap-4">

                    <CalendarDays className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                    <div className="min-w-0">

                      <p className="text-xs text-gray-500">
                        Registration Date
                      </p>

                      <p className="font-semibold text-gray-800">
                        {new Date(
                          registration.createdAt
                        ).toLocaleString()}
                      </p>

                    </div>

                  </div>
                )}

              </div>
            </div>
          ) : (
            /* =================================================
               NO REGISTRATION DATA
            ================================================= */

            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">

              <h2 className="font-bold text-red-800 mb-2">
                Registration Details Not Available
              </h2>

              <p className="text-sm text-red-700">
                We could not load your registration details
                on this page. Please return to the registration
                page or contact the event administrator.
              </p>

            </div>
          )}

          {/* =================================================
              QR CODE
          ================================================= */}

          {qrUrl && (
            <div className="border-2 border-blue-200 bg-blue-50 rounded-2xl p-6 mb-6 text-center">

              <div className="flex items-center justify-center gap-2 mb-3">

                <QrCode className="w-7 h-7 text-blue-700" />

                <h2 className="font-bold text-gray-900 text-lg">
                  Your Unique QR Code
                </h2>

              </div>

              <p className="text-sm text-gray-600 mb-5">
                This QR code is uniquely linked to your
                registration. Please save it and present it
                at the workshop for registration verification.
              </p>

              {/* QR IMAGE */}

              <div className="flex justify-center">

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-md">

                  <img
                    src={qrUrl}
                    alt="Unique Registration QR Code"
                    className="w-64 h-64 md:w-72 md:h-72 object-contain"
                  />

                </div>

              </div>

              {/* QR ID */}

              {registrationId && (
                <div className="mt-4">

                  <p className="text-xs text-gray-500 mb-1">
                    QR Code Registration ID
                  </p>

                  <p className="text-xs font-semibold text-gray-700 break-all">
                    {registrationId}
                  </p>

                </div>
              )}

              {/* DOWNLOAD QR */}

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
              DOWNLOAD REGISTRATION DETAILS
          ================================================= */}

          {/* {registration && (
            <button
              type="button"
              onClick={handleDownloadDetails}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition mb-4"
            >
              <Download className="w-5 h-5" />
              Download My Registration Details
            </button>
          )} */}

          {/* =================================================
              WHATSAPP
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
              on WhatsApp for easy access later.
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
              BACK HOME
          ================================================= */}

          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full bg-gray-600 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition text-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* =================================================
              FOOTER NOTE
          ================================================= */}

          <p className="text-xs text-gray-500 text-center mt-5 leading-5">
            Please review your information carefully and
            keep your Registration ID, registration details
            and QR code safe. You may need them when
            attending the LMM Zambia Training Workshop.
          </p>
          <p className="text-xs text-gray-500 text-center mt-5 leading-5">
           Powered By AB Nation Tech
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
