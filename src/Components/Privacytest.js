import React from "react";
import {
  Container,
  Col,
  Nav,
  Card,
  Form,
  Dropdown,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import homeLogo from "../assests/home-logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import dancing from "../assests/dancing.png";
import "./privacytest.css";
import { useNavigate } from "react-router-dom";

const Privacytest = () => {
    const navigate = useNavigate();
    const handelBackNav = () => {
      navigate("/");
    };

  return (
       <Container className="policys-container">
      <div className="back-arrow-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="me-3 arrow"
          onClick={handelBackNav}
        />
        <h1 className="policy-header">GigArtz Privacy Policy</h1>
      </div>
      <p className="est-date">Last Updated: [22 August 2024]</p>
      <p className="policy-main-para">
        GigArtz ("we," "us," or "our") is committed to protecting the privacy of
        our users ("you," "your"). This Privacy Policy explains how we collect,
        use, share, and protect your personal information in compliance with the
        Protection of Personal Information Act, 2013 (PoPIA) and other
        applicable South African laws.
      </p>
      <div className="policy-line"></div>
      <div className="policys-body">
        <h2 className="policy-subheader">1. Introduction</h2>
        <p className="policy-para">
          This Privacy Policy applies to all personal information collected by
          GigArtz through our website, mobile applications, and related services
          (collectively, the "Services"). By using our Services, you agree to
          the terms of this Privacy Policy. If you do not agree, please do not
          use our Services.
        </p>

        <h2 className="policy-subheader">2. Information We Collect</h2>

        <h3 className="policy-smallheader">2.1 Personal Information</h3>
        <p className="policy-para">
          We may collect the following categories of personal information:
        </p>
        <p className="policy-para">
          - Contact Information: Name, email address, phone number, and postal
          address.
        </p>
        <p className="policy-para">
          - Identification Information: ID or passport number (only when
          necessary).
        </p>
        <p className="policy-para">
          - Payment Information: Credit card details, billing address, and
          transaction history.
        </p>

        <p className="policy-para">
          - Demographic Information: Age, gender, and preferences.
        </p>
        <p className="policy-para">
          - User Content: Photos, videos, comments, and other content you upload
          or post.
        </p>

        <p className="policy-para">
          - Technical Information: IP address, browser type, device information,
          and usage data.
        </p>

        <p className="policy-para">
          - Location Information: Geolocation data from your device, with your
          consent.
        </p>

        <h3 className="policy-smallheader">2.2 Special Personal Information</h3>
        <p className="policy-para">
          We generally do not collect special personal information as defined by
          PoPIA (e.g., race, health information, biometric data). If we do, we
          will obtain your explicit consent where required by law.
        </p>

        <h2 className="policy-subheader">3. How We Collect Information</h2>
        <p className="policy-para">
          We collect personal information in the following ways:
        </p>
        <p className="policy-para">
          - Directly from You: When you register for an account, book a service,
          purchase a ticket, or otherwise interact with our Services.
        </p>
        <p className="policy-para">
          - Automatically: Through the use of cookies, web beacons, and similar
          technologies when you access our website or app.
        </p>
        <p className="policy-para">
          - Third Parties: From service providers, payment processors, and
          partners who provide services on our behalf.
        </p>

        <h2 className="policy-subheader">4. How We Use Your Information</h2>
        <p className="policy-para">
          We use your personal information for the following purposes:
        </p>
        <p className="policy-para">
          - To Provide and Improve Services: Processing transactions, managing
          bookings, and improving user experience.
        </p>
        <p className="policy-para">
          - To Communicate with You: Sending updates, newsletters, and
          promotional materials (with your consent).
        </p>
        <p className="policy-para">
          - For Security and Compliance: Verifying your identity, preventing
          fraud, and complying with legal obligations.
        </p>
        <p className="policy-para">
          - For Marketing: Providing you with personalized advertising and
          offers based on your preferences and usage patterns.
        </p>
        <p className="policy-para">
          - For Analytics: Analyzing usage data to improve our Services and
          develop new features.
        </p>

        <h2 className="policy-subheader">5. Sharing Your Information</h2>
        <p className="policy-para">
          We may share your personal information with:
        </p>
        <p className="policy-para">
          - Service Providers: Third-party vendors who assist us in providing
          our Services (e.g., payment processors, cloud services).
        </p>
        <p className="policy-para">
          - Event Organizers and Artists: If you purchase tickets or book
          services through GigArtz, we may share your information with the
          relevant organizer or artist.
        </p>
        <p className="policy-para">
          - Legal Authorities: When required by law or to protect the rights,
          property, or safety of GigArtz, our users, or others.
        </p>
        <p className="policy-para">
          - Business Transfers: In the event of a merger, acquisition, or sale
          of all or part of our assets.
        </p>

        <h2 className="policy-subheader">6. Cross-Border Transfers</h2>
        <p className="policy-para">
          Your personal information may be transferred to and processed in
          countries outside of South Africa. When we transfer information
          internationally, we ensure it is protected in accordance with this
          Privacy Policy and applicable laws. We will only transfer your
          information to third countries that provide an adequate level of data
          protection or where we have implemented appropriate safeguards.
        </p>

        <h2 className="policy-subheader">7. Data Security</h2>
        <p className="policy-para">
          We implement reasonable technical and organizational measures to
          protect your personal information against unauthorized access, loss,
          or misuse. However, no data transmission over the internet or storage
          system is completely secure. You use our Services at your own risk.
        </p>

        <h2 className="policy-subheader">8. Retention of Information</h2>
        <p className="policy-para">
          We retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected, or as required by
          law. Once your information is no longer needed, we will securely
          delete or anonymize it.
        </p>

        <h2 className="policy-subheader">9. Your Rights</h2>
        <p className="policy-para">
          Under PoPIA, you have the following rights regarding your personal
          information:
        </p>
        <p className="policy-para">
          - Access: Request access to the personal information we hold about
          you.
        </p>
        <p className="policy-para">
          - Correction: Request correction of any inaccurate or incomplete
          information.
        </p>
        <p className="policy-para">
          - Deletion: Request deletion of your personal information under
          certain circumstances.
        </p>
        <p className="policy-para">
          - Objection: Object to the processing of your personal information for
          certain purposes.
        </p>
        <p className="policy-para">
          - Withdrawal of Consent: Withdraw your consent to the processing of
          your personal information, where applicable.
        </p>
        <br />
        <p className="policy-para">
          To exercise these rights, please contact us using the details provided
          in Section 12.
        </p>

        <h2 className="policy-subheader">
          10. Cookies and Tracking Technologies
        </h2>
        <p className="policy-para">
          We use cookies and similar tracking technologies to enhance your
          experience on our platform. You can control cookies through your
          browser settings, but disabling cookies may affect the functionality
          of our Services.
        </p>

        <h2 className="policy-subheader">11. Changes to This Privacy Policy</h2>
        <p className="policy-para">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. We will notify you of any
          significant changes by posting the updated policy on our website and,
          if appropriate, through email notification.
        </p>

        <h2 className="policy-subheader">12. Contact Us</h2>
        <p className="policy-para">
        If you have any questions, concerns, or requests regarding this Privacy Policy or your personal
        information, please contact us at:
        </p>
        <br/>
        <p className="policy-para">
        GigArtz Privacy Officer
        </p>
        <p className="policy-para">
        Email: [privacy@gigartz.com]
        </p>
      </div>
    </Container>
  )
}

export default Privacytest