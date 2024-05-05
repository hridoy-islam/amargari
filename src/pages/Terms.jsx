import { Helmet } from "react-helmet";
import { ServiceTitle } from "../components/ServiceTitle";

export const Terms = () => {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions of Garirmela.com</title>
        <meta name="description" content="Garir Mela is the best place in Dhaka, Bangladesh, where you can buy and sell used cars at the best prices" />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Terms and Conditions of Garirmela.com" />
        <meta property="og:description" content="Garir Mela is the best place in Dhaka, Bangladesh, where you can buy and sell used cars at the best prices" />
        <meta property="og:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta property="og:url" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:title" content="Terms and Conditions of Garirmela.com" />
        <meta name="twitter:description" content="Garir Mela is the best place in Dhaka, Bangladesh, where you can buy and sell used cars at the best prices" />
        <meta name="twitter:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ServiceTitle
        title="Terms and Conditions of Garirmela.com "
        description="Online Car Marketplace"
      />
      <div className="container mx-auto space-y-5 my-10">
        <p>
          These Terms and Conditions ("Terms") govern your use of Garirmela.com
          (referred to as "Garirmela," "we," "our," or "us"), an online car
          marketplace platform. By accessing or using Garirmela.com, you agree
          to comply with these Terms. If you do not agree with any part of these
          Terms, you must not use Garirmela.com.
        </p>

        <p>
          1. <b>Acceptance of Terms:</b> By accessing or using Garirmela.com,
          you acknowledge that you have read, understood, and agree to be bound
          by these Terms and all applicable laws and regulations. If you do not
          agree with any of these Terms, you are prohibited from using or
          accessing this site.
        </p>
        <p>
          2. <b>Use of the Platform:</b>
          You must be at least 18 years old to use Garirmela.com. You agree to
          use Garirmela.com only for lawful purposes and in accordance with
          these Terms. You agree not to engage in any activity that could harm,
          disrupt, or interfere with the functioning of Garirmela.com or its
          users.
        </p>
        <p>
          3. <b>Registration and Accounts:</b>
          To access certain features of Garirmela.com, you may be required to
          register for an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete. You are
          responsible for maintaining the confidentiality of your account and
          password and for restricting access to your account. You agree to
          accept responsibility for all activities that occur under your account
          or password.
        </p>
        <p>
          4. <b>Listing and Selling Cars:</b>
          If you are listing a car for sale on Garirmela.com, you agree to
          provide accurate and truthful information about the car. You agree not
          to list any cars that you do not have the right to sell or that are
          misrepresented in any way. Garirmela reserves the right to remove any
          listings that violate these Terms or that are deemed inappropriate.
        </p>

        <p>
          6.<b>Buying Cars:</b>
          If you are purchasing a car through Garirmela.com, you agree to
          thoroughly review the listing and to verify the accuracy of the
          information provided before making a purchase. Garirmela is not
          responsible for any issues that may arise between buyers and sellers,
          but will endeavor to facilitate communication and resolution of
          disputes.
        </p>
        <p>
          7. <b>Fees and Payments:</b> Garirmela may charge fees for certain
          services, such as listing a car for sale. You agree to pay all fees
          associated with your use of Garirmela.com. All fees are non-refundable
          unless otherwise stated.
        </p>
        <p>
          {" "}
          8. <b>Intellectual Property:</b>
          The content on Garirmela.com, including text, graphics, logos, images,
          and software, is protected by copyright, trademark, and other
          intellectual property laws. You may not reproduce, distribute, modify,
          or create derivative works of any content from Garirmela.com without
          our prior written consent.
        </p>
        <p>
          9.<b>Disclaimer of Warranties:</b>Garirmela.com is provided on an "as
          is" and "as available" basis, without any warranties of any kind,
          either express or implied. Garirmela makes no warranty that
          Garirmela.com will meet your requirements or that it will be
          uninterrupted, timely, secure, or error-free.
        </p>
        <p>
          11. <b>Limitation of Liability:</b>In no event shall Garirmela or its
          affiliates be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or relating to your
          use of Garirmela.com.
        </p>
        <p>
          12.<b>Indemnification:</b>You agree to indemnify and hold Garirmela
          and its affiliates, officers, directors, employees, and agents
          harmless from any claims, losses, damages, liabilities, and expenses
          (including attorneys' fees) arising out of or relating to your use of
          Garirmela.com or your violation of these Terms.
        </p>

        <p>
          13. <b>Governing Law:</b>These Terms shall be governed by and
          construed in accordance with the laws of Bangladesh, without regard to
          its conflict of law principles.
        </p>

        <p>
          14. <b>Changes to Terms:</b>Garirmela reserves the right to modify or
          revise these Terms at any time. Any changes will be effective
          immediately upon posting on Garirmela.com. Your continued use of
          Garirmela.com following the posting of changes constitutes your
          acceptance of such changes.
        </p>

        <p>
          15.<b>Contact Information:</b>
          If you have any questions or concerns about these Terms, please
          contact us at garirmela@gmail.com.
        </p>
        <p>
          By using Garirmela.com, you acknowledge that you have read,
          understood, and agree to be bound by these Terms. If you do not agree
          with any part of these Terms, you must not use Garirmela.com.
        </p>
      </div>
    </div>
  );
};
