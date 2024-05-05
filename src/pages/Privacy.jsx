import { Helmet } from "react-helmet";
import { ServiceTitle } from "../components/ServiceTitle";

export const Privacy = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy - Garir Mela</title>
        <meta name="description" content="Privacy Policy outlines how we collect, use, disclose, and protect the
          information provided to us through the garirmela.com" />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Login - Garir Mela" />
        <meta property="og:description" content="Privacy Policy outlines how we collect, use, disclose, and protect the
          information provided to us through the garirmela.com" />
        <meta property="og:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta property="og:url" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:title" content="Privacy Policy - Garir Mela" />
        <meta name="twitter:description" content="Privacy Policy outlines how we collect, use, disclose, and protect the
          information provided to us through the garirmela.com" />
        <meta name="twitter:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ServiceTitle
        title="Privacy Policy for GarirMela.com"
        description="Effective Date: April 10, 2024"
      />
      <div className="container mx-auto my-10">
        <h2>Introduction</h2>
        <p>
          Garir Mela.com ("we", "our", or "GarirMela.com") is committed to
          protecting the privacy and personal information of its users. This
          Privacy Policy outlines how we collect, use, disclose, and protect the
          information provided to us through the garirmela.com website and
          related services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect personal information from users when they register on our
          website, place an order, subscribe to our newsletter, respond to a
          survey or fill out a form. The information collected may include:
        </p>
        <ul>
          <li>Name</li>
          <li>Contact information</li>
          <li>Email address</li>
          <li>Location data</li>
          <li>Vehicle preferences</li>
          <li>Payment details</li>
        </ul>

        <h2>Use of Information</h2>
        <p>We may use the information we collect for the following purposes:</p>

        <ul>
          <li>
            To personalize user experience and respond to individual needs
          </li>
          <li>To improve our website based on feedback received</li>
          <li>To process transactions securely</li>
          <li>
            To send periodic emails regarding orders, promotions, and updates
          </li>
          <li>To administer contests, surveys, or other site features</li>
        </ul>
        <h2>Protection of Information</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your information.
        </p>
        <h2>Disclosure of Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. This does not include
          trusted third parties who assist us in operating our website,
          conducting our business, or servicing you, as long as those parties
          agree to keep this information confidential.
        </p>
        <h2>Compliance with Laws</h2>
        <p>
          We comply with all applicable laws and regulations regarding the
          protection of your personal information, including the Bangladesh Data
          Protection Act.
        </p>
        <h2>Consent</h2>
        <p>By using our website, you consent to our online Privacy Policy.</p>
        <h2>Updates to Privacy Policy</h2>
        <p>Any changes to our Privacy Policy will be posted on this page.</p>
        <p>Email: garirmela@gmail.com</p>

        <h2>Contact Us</h2>
        <p>
          If there are any questions regarding this Privacy Policy, you may
          contact us using the information below: GarirMela.com Dhaka,
          Bangladesh garirmela@gmail.com
        </p>
        <p>
          This Privacy Policy for GarirMela.com is designed to align with the
          regulations set forth by the Bangladesh Data Protection Act and
          reflects our commitment to safeguarding the privacy of our users.
        </p>
      </div>
    </>
  );
};
