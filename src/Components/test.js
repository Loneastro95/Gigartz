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
import sphere from "../assests/Sphere.png";
import mic from "../assests/Mic.png";
import headphones from "../assests/Headphones.png";
import cube from "../assests/Cube.png";
import cylinder from "../assests/Cylinder.png";
import cone from "../assests/Cone.png";
import deco from "../assests/Decoration.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import dancing from "../assests/dancing.png";

import "./terms.css";
import { useNavigate } from "react-router-dom";
import "./test.css"

const Test = () => {
    const navigate = useNavigate();
    const handelBackNav = () => {
      navigate("/");
    };
  return (
    <Container className="terms-container"  style={{color:"rgba(255, 255, 255, 0.5)"}}>
      <div className="back-arrow-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="me-3 arrow"
          onClick={handelBackNav}
        />
        <h1 className="term-header">GigArtz Terms of Service</h1>
      </div>
      <p className="est-date">Last Updated: [22 August 2024]</p>
      <p className="term-main-para">
        Welcome to GigArtz! These Terms of Service ("Terms") govern your use of
        the GigArtz platform, including our website, mobile apps, and related
        services (collectively, the "Services"). By accessing or using our
        Services, you agree to be bound by these Terms. Please read them
        carefully.
      </p>
      <div className="term-line"></div>
      <div className="terms-body">
        <h2 className="term-subheader">1. Our Services</h2>
        <h3 className="term-smallheader">1.1 What We Do?</h3>
        <p className="term-para">
          GigArtz provides a platform that connects artists, performers, event
          organizers, and attendees. Our Services include tools for creating,
          promoting, managing, and attending events, as well as booking artists
          and other creative professionals.
        </p>
        <h3 className="term-smallheader">1.2 Your Account</h3>
        <p className="term-para">
          To use certain features of our Services, you must register for an
          account. You are responsible for maintaining the confidentiality of
          your account credentials and for all activities that occur under your
          account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information as necessary.
        </p>
        <h3 className="term-smallheader">1.3 Changes to Services</h3>
        <p className="term-para">
          We are constantly improving our Services and may modify or discontinue
          certain features without prior notice. We will not be liable to you or
          any third party for any modification, suspension, or discontinuation
          of the Services.
        </p>

        <h2 className="term-subheader">2. Your Use of the Services</h2>
        <h3 className="term-smallheader">2.1 License to Use</h3>
        <p className="term-para">
          Subject to your compliance with these Terms, GigArtz grants you a
          limited, non-exclusive, non-transferable, and revocable license to
          access and use the Services for personal or commercial purposes, as
          applicable.
        </p>

        <h3 className="term-smallheader">2.2 Prohibited Conduct</h3>
        <p className="term-para">You agree not to:</p>
        <p className="term-para">
          - Violate any laws, regulations, or third-party rights.
        </p>
        <p className="term-para">
          - Post or share any content that is defamatory, obscene, harassing, or
          otherwise offensive.
        </p>
        <p className="term-para">
          - Engage in fraudulent activities, including impersonation and
          misrepresentation.
        </p>

        <p className="term-para">
          - Attempt to interfere with the security or operation of the Services.
        </p>
        <p className="term-para">
          - Collect or harvest personal information of other users without their
          consent.
        </p>

        <h3 className="term-smallheader">2.3 User Content</h3>
        <p className="term-para">
          You retain ownership of any content you post, upload, or otherwise
          make available on GigArtz ("User Content"). By posting User Content,
          you grant GigArtz a worldwide, non-exclusive, royalty-free license to
          use, reproduce, modify, adapt, publish, and display such content in
          connection with the Services.
        </p>

        <h2 className="term-subheader">3. Fees and Payments</h2>
        <h3 className="term-smallheader">3.1 Service Fees</h3>
        <p className="term-para">
          Certain features of our Services may be subject to fees. You agree to
          pay all applicable fees and charges in accordance with the pricing and
          payment terms specified by GigArtz. We may change our fees at any time
          by posting new pricing on our platform or providing you with notice.
        </p>

        <h3 className="term-smallheader">3.2 Payment Methods</h3>
        <p className="term-para">
          You authorize GigArtz to charge your selected payment method for any
          paid Services you use. If your payment method fails or your account is
          past due, we may collect fees owed using other collection mechanisms,
          including charging other payment methods on file or retaining
          collection agencies.
        </p>

        <h2 className="term-subheader">4. Cancellations and Refunds</h2>
        <h3 className="term-smallheader">4.1 Event Cancellations</h3>
        <p className="term-para">
          If an event is canceled, you may be eligible for a refund as described
          in our [Refund Policy](#). GigArtz is not responsible for any refunds
          or compensation beyond those outlined in the Refund Policy.
        </p>

        <h3 className="term-smallheader">4.2 Booking Cancellations</h3>
        <p className="term-para">
          Cancellations for artist bookings or other services are subject to the
          terms specified at the time of booking and as further detailed in our
          [Refund Policy](#).
        </p>

        <h3 className="term-smallheader">4.3 Chargebacks</h3>
        <p className="term-para">
          If you initiate a chargeback or dispute a payment, GigArtz reserves
          the right to suspend or terminate your account until the dispute is
          resolved.
        </p>

        <h2 className="term-subheader">5. Intellectual Property Rights</h2>
        <h3 className="term-smallheader">5.1 Our Content</h3>
        <p className="term-para">
          GigArtz and its licensors own all rights, title, and interest in and
          to the Services, including all content, features, and software (the
          "GigArtz Content"). You agree not to copy, distribute, modify, or
          create derivative works based on the GigArtz Content without our prior
          written consent.
        </p>

        <h3 className="term-smallheader">5.2 Trademarks</h3>
        <p className="term-para">
          "GigArtz," the GigArtz logo, and any other GigArtz product or service
          names, logos, or slogans are trademarks of GigArtz. You may not use
          any of these trademarks without our prior written consent.
        </p>
        <h2 className="term-subheader">6. Privacy and Data Protection</h2>
        <h3 className="term-smallheader">6.1 Our Privacy Policy</h3>
        <p className="term-para">
          Your use of the Services is subject to our [Privacy Policy](#), which
          explains how we collect, use, and share your information. By using our
          Services, you agree to the practices described in our Privacy Policy.
        </p>

        <h3 className="term-smallheader">6.2 Data Security</h3>
        <p className="term-para">
          We implement reasonable measures to protect the security of your data.
          However, no transmission over the internet is completely secure, and
          we cannot guarantee the security of your information.
        </p>

        <h2 className="term-subheader">
          7. Disclaimers and Limitation of Liability
        </h2>
        <h3 className="term-smallheader">7.1 Disclaimers</h3>
        <p className="term-para">
          The Services are provided "as is" and "as available" without
          warranties of any kind, either express or implied. GigArtz does not
          warrant that the Services will be uninterrupted or error-free or that
          any defects will be corrected.
        </p>

        <h3 className="term-smallheader">7.2 Limitation of Liability</h3>
        <p className="term-para">
          To the fullest extent permitted by law, GigArtz shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, including loss of profits, revenue, or data, arising out of
          or in connection with your use of the Services.
        </p>

        <h2 className="term-subheader">8. Indemnification</h2>
        <p className="term-para">
          You agree to indemnify and hold harmless GigArtz, its affiliates,
          officers, directors, employees, and agents from any claims, damages,
          liabilities, and expenses arising from your use of the Services or
          your violation of these Terms.
        </p>

        <h2 className="term-subheader">
          9. Governing Law and Dispute Resolution
        </h2>
        <h3 className="term-smallheader">9.1 Governing Law</h3>
        <p className="term-para">
          These Terms shall be governed by and construed in accordance with the
          laws of South Africa, without regard to its conflict of law
          principles.
        </p>

        <h3 className="term-smallheader">9.2 Dispute Resolution</h3>
        <p className="term-para">
          Any disputes arising out of or relating to these Terms or the Services
          shall be resolved through binding arbitration in accordance with the
          rules of [Arbitration Institution]. You agree to waive any right to a
          trial by jury or to participate in a class action.
        </p>

        <h2 className="term-subheader">10. Termination</h2>
        <h3 className="term-smallheader">10.1 Termination by You</h3>
        <p className="term-para">
          You may terminate your account at any time by following the
          instructions on the platform. Upon termination, you must cease all use
          of the Services.
        </p>

        <h3 className="term-smallheader">10.2 Termination by GigArtz</h3>
        <p className="term-para">
          We may suspend or terminate your access to the Services at any time,
          with or without cause, and without notice. Upon termination, all
          licenses granted to you will immediately terminate.
        </p>

        <h2 className="term-subheader">11. Miscellaneous</h2>
        <h3 className="term-smallheader">11.1 Entire Agreement</h3>
        <p className="term-para">
          These Terms constitute the entire agreement between you and GigArtz
          regarding the Services and supersede all prior agreements.
        </p>

        <h3 className="term-smallheader">11.2 Severability</h3>
        <p className="term-para">
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions will remain in full force and effect.
        </p>

        <h3 className="term-smallheader">11.3 Waiver</h3>
        <p className="term-para">
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights.
        </p>

        <h3 className="term-smallheader">11.4 Assignment</h3>
        <p className="term-para">
          You may not assign or transfer any of your rights or obligations under
          these Terms without our prior written consent. We may assign or
          transfer these Terms without restriction.
        </p>
      </div>
      <div className="term-line mt-4"></div>

      <div className="back-arrow-container2">
        {/* <FontAwesomeIcon icon={faArrowLeft} className="me-3 arrow" onClick={handelBackNav} /> */}
        <h1 className="term-header">GigArtz Refund and Resale Policy</h1>
      </div>
      <p className="est-date">03 September 2024</p>
      <p className="term-main-para">
        At GigArtz, we strive to ensure a positive experience for all users,
        including artists, performers, event organizers, and attendees. This
        policy outlines the conditions under which refunds and resales may be
        issued. By using GigArtz, you agree to this Refund and Resale Policy.
      </p>
      <div className="term-line"></div>
      <div className="terms-body">
        <h2 className="term-subheader">1. Refund Policy</h2>
        <h3 className="term-smallheader">1.1 Event Tickets</h3>
        <p className="term-para">
          <span className="bold">- More than 7 Days from Event Date:</span> Full
          refund, including any service fees.
        </p>
        <p className="term-para">
          <span className="bold">
            - Within 7 Days but More Than 48 Hours from Event Date:{" "}
          </span>{" "}
          70% refund (30% refund fee applies).
        </p>
        <p className="term-para">
          <span className="bold">- Less than 48 Hours from Event Date: </span>{" "}
          No refund will be issued.
        </p>

        <h3 className="term-smallheader">1.2 Booking Artists or Services</h3>
        <p className="term-para">
          <span className="bold">
            - Cancellation by Artist/Service Provider:
          </span>{" "}
          Full refund, including any service fees.
        </p>
        <p className="term-para">
          <span className="bold">- Cancellation by Client:</span>
        </p>
        <ul>
          <li>
            <span className="bold">Within 48 Hours of Booking:</span> Full
            refund.
          </li>
          <li>
            <span className="bold">
              More than 48 Hours After Booking but More Than 7 Days Before the
              Service:
            </span>{" "}
            70% refund (30% refund fee applies).
          </li>
          <li>
            <span className="bold">Less than 48 Hours Before the Service:</span>{" "}
            No refund.
          </li>
        </ul>
        <p className="term-para">
          <span className="bold">-Service Non-Delivery: </span> If the artist or
          service provider fails to deliver the agreed-upon service, the client
          may be eligible for a full refund. Verification of non-delivery is
          required, and the refund is at the discretion of GigArtz.
        </p>

        <h3 className="term-smallheader">1.3 Digital Products</h3>
        <p className="term-para">
          <span className="bold">- More than 7 Days from Event Date:</span>{" "}
          Digital products, such as downloadable content or virtual services,
          are non-refundable once delivered.
        </p>
        <p className="term-para">
          <span className="bold">- Defective Products:</span>If a digital
          product is found to be defective or not as described, a refund or
          replacement may be issued. Refund requests must be submitted within 14
          days of purchase.
        </p>

        <h2 className="term-subheader">2. Resale Policy</h2>
        <h3 className="term-smallheader">
          GigArtz also accommodates the secondary sales market by offering a
          "resale" feature for event tickets.
        </h3>
        <h3 className="term-smallheader">2.1 Resale Conditions</h3>
        <p className="term-para">
          <span className="bold">- Availability:</span> The resale option
          becomes available when all officially available event tickets are sold
          out.
        </p>
        <p className="term-para">
          <span className="bold">- Request Timing:</span> The resale request
          must be sent within 7 days of the event date.
        </p>

        <h3 className="term-smallheader">2.2 Resale Process</h3>
        <p className="term-para">
          <span className="bold">- Setting the Price:</span> Users can set any
          resale price for their tickets.
        </p>
        <p className="term-para">
          <span className="bold">- Sales Options:</span> Resale tickets can be
          sold directly to another user or made available to all users on the
          platform.
        </p>
        <p className="term-para">
          <span className="bold">- Service Fee:</span> A 25% service fee will be
          charged on the resale price.
        </p>

        <h3 className="term-smallheader">2.3 Unsold Resale Tickets</h3>
        <p className="term-para">
          If the ticket is not sold by the time the event takes place, the user
          forfeits the ticket and can not request a refund.
        </p>

        <h2 className="term-subheader">3. Refund and Resale Process</h2>
        <h3 className="term-smallheader">3.1 Resale Conditions</h3>
        <p className="term-para">
          If the ticket is not sold by the time the event takes place, the user
          forfeits the ticket and can not request a refund.
        </p>
        <ul>
          <li>
            <span className="bold">Within 48 Hours of Booking:</span> Full
            refund.
          </li>
          <li>
            <span className="bold">
              More than 48 Hours After Booking but More Than 7 Days Before the
              Service:
            </span>{" "}
            70% refund (30% refund fee applies).
          </li>
          <li>
            <span className="bold">Less than 48 Hours Before the Service:</span>{" "}
            No refund.
          </li>
        </ul>

        <h3 className="term-smallheader">3.2 Processing Time</h3>
        <p className="term-para">
          Refund and resale requests are typically processed within 7-10
          business days of receiving the request. You will be notified via email
          once your request has been processed.
        </p>

        <h3 className="term-smallheader">3.3 Payment Method</h3>
        <p className="term-para">
          Refunds will be issued using the original payment method. If the
          original payment method is no longer available, GigArtz will work with
          you to find an alternative method.
        </p>

        <h2 className="term-subheader">4. Non-Refundable Situations</h2>
        <p className="term-para">
          <span className="bold">- Change of Mind:</span> Refunds will not be
          issued for change of mind or dissatisfaction with the event or service
          unless it is due to non-delivery or cancellation as outlined above.
        </p>
        <p className="term-para">
          <span className="bold">- Force Majeure:</span> Events or services
          disrupted by circumstances beyond the control of GigArtz (e.g.,
          natural disasters, pandemics) may not be eligible for refunds unless
          the event or service is canceled by the organizer or provider.
        </p>

        <h2 className="term-subheader">5. Dispute Resolution</h2>
        <p className="term-para">
          If you are not satisfied with the outcome of your refund or resale
          request, you may escalate the issue to our customer support team.
          GigArtz is committed to resolving disputes in a fair and timely
          manner. If a resolution cannot be reached, the matter may be referred
          to a neutral third-party mediator.
        </p>

        <h2 className="term-subheader">6. Changes to this Policy</h2>
        <p className="term-para">
          GigArtz reserves the right to modify this Refund and Resale Policy at
          any time. Any changes will be communicated to users via email or
          through the platform. Continued use of the platform after any changes
          constitutes acceptance of the revised policy.
        </p>

        <h2 className="term-subheader">7. Contact Information</h2>
        <p className="term-para">
          For any questions or concerns regarding this Refund and Resale Policy,
          please contact us at support@gigartz.com.
        </p>
      </div>
    </Container>
  )
}

export default Test