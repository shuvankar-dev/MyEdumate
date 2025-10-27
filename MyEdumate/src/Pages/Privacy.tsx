import React from "react";
import { useNavigate } from "react-router-dom";

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 sm:p-12">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#0B5394] mb-2">
            Data Protection Policy – MyEdumate
          </h1>
          <p className="text-gray-600 font-medium">Last updated: October 22, 2025</p>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <strong>MyEdumate</strong> (“we,” “our,” “us”). We value your privacy and are
          committed to protecting your personal data. This Privacy Policy describes how we collect,
          use, and safeguard your information when you use our website and related services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-3">We may collect the following information to improve your experience:</p>

        <h3 className="font-semibold text-[#084170] mb-1">a. Personal Information</h3>
        <p className="text-gray-700 mb-2">
          When you contact us, submit a request, or use our services, we may collect:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Course or academic details (if provided voluntarily)</li>
        </ul>

        <h3 className="font-semibold text-[#084170] mb-1">b. Technical & Usage Information</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages you visit and actions you take</li>
          <li>Referring website or search engine</li>
        </ul>

        <h3 className="font-semibold text-[#084170] mb-1">c. Cookies</h3>
        <p className="text-gray-700 mb-2">We use cookies to:</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Enhance user experience</li>
          <li>Analyze website traffic</li>
          <li>Remember user preferences</li>
        </ul>
        <p className="text-gray-700 mb-6">
          You can control or delete cookies through your browser settings.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>Provide, improve, and personalize our services</li>
          <li>Respond to your inquiries or service requests</li>
          <li>Send updates, offers, or communication (only if you opt in)</li>
          <li>Enhance website functionality and user experience</li>
          <li>Protect against fraudulent activity or misuse of our platform</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We do not sell, rent, or trade your personal information with any third party.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">3. Data Sharing</h2>
        <p className="text-gray-700 mb-2">
          Your information may be shared only with:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Trusted third-party partners who assist in operating our website (e.g., hosting or analytics providers)</li>
          <li>Legal authorities, if required by law or to protect our rights and users’ safety</li>
        </ul>
        <p className="text-gray-700 mb-6">
          All such partners are bound by confidentiality and data protection agreements.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          4. Data Protection & Security
        </h2>
        <p className="text-gray-700 mb-6">
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no internet transmission or storage method is completely secure, and we cannot guarantee absolute protection.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          5. Third-Party Links
        </h2>
        <p className="text-gray-700 mb-6">
          Our website may include links to third-party sites (such as WhatsApp, social media, or educational resources). We are not responsible for the privacy practices or content of these websites. We encourage you to read their respective privacy policies before sharing any data.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          6. Your Rights
        </h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your information</li>
          <li>Withdraw consent for communication at any time</li>
        </ul>
        <p className="text-gray-700 mb-6">
          To exercise your rights or ask any questions, please contact us at:
          <br />
          📩 <strong>assignments@myedumate.co</strong>
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          7. Children’s Privacy
        </h2>
        <p className="text-gray-700 mb-6">
          MyEdumate is intended for users aged 16 years and above. We do not knowingly collect personal data from minors. If you believe a child has provided us with personal information, please contact us immediately so we can delete it.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          8. Policy Updates
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. The “Last Updated” date at the top of this page indicates the most recent revision. We encourage you to review this page regularly to stay informed.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-[#0B5394] mt-10 mb-3">
          9. Contact Us
        </h2>
        <p className="text-gray-700 mb-6">
          For any questions, concerns, or feedback regarding this Privacy Policy, please contact:
          <br />
          📧 <strong>assignments@myedumate.co</strong>
        </p>

        {/* Final Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <h3 className="text-lg font-semibold text-[#0B5394] mb-2">🔐 Our Promise</h3>
          <p className="text-gray-700">
            At <strong>MyEdumate</strong>, your privacy, trust, and security are at the heart of everything we do.
            We are committed to maintaining transparency and ensuring your data is handled responsibly.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#0B5394] text-white font-semibold rounded-xl shadow-md hover:bg-[#084170] transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
