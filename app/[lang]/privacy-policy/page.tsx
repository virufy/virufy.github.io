'use client';

import { type Locale } from '@/i18n-config.ts';

const PrivacyPolicyPage = ({}: { params: { lang: Locale } }) => {
  return (
    <>
      <div className="relative flex justify-center overflow-hidden bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] pt-24 text-[#16223A]">
        <div className="flex w-full max-w-[1440px] flex-col space-y-6 px-5 py-20">
          <h1 className="text-center font-bold">
            Virufy
            <br></br>Privacy Policy
          </h1>
          <p>
            <i>Last updated: September 30, 2025</i>
          </p>
          <p>
            The Covid Detection Foundation d.b.a. Virufy (“Virufy”, “we”, “us”
            or “our”), a California nonprofit corporation (Tax Identification
            Number: C4609035) located at 4546 El Camino Real B10 #614, Los
            Altos, California 94022, United States of America collects personal
            information to achieve our mission of offering respiratory disease
            pre-screening for patients, clinicians, and governments, especially
            in low-income countries.
          </p>

          <p>
            This Privacy Policy (the “Privacy Policy”) sets out how we use,
            store, disclose, and process personal information you (“User”)
            provide to us when you participate in our research survey for the
            compilation of a dataset needed for the development of artificial
            intelligence (“AI”) algorithms for device-based COVID-19 and other
            respiratory disease detection (the “Dataset”) for the benefit of
            developing and developed countries, or that we obtain through or in
            connection with the use of our website at{' '}
            <a className="text-blue-500 underline" href="https://virufy.org/">
              www.virufy.org
            </a>{' '}
            (the “Website”), or when you otherwise interact with us via our
            other online or offline digital properties which link to, or are
            otherwise subject to this Privacy Policy (the “Services”).
          </p>

          <p>
            <span className="font-bold">
              Special Note to Virufy Users Interacting with our Contracted
              Clinical Care Providers:
            </span>{' '}
            When you visit our website, mobile application, or inquire about or
            register for our Services, this Privacy Policy applies to the
            information we collect, use, and share identifying you and relating
            to your past, present, or future physical or mental health,
            treatment and services received, and payment for such treatment and
            services. If this information is collected, used, or shared as part
            of your treatment relationship with a clinical care provider, this
            information may be considered protected health information (“PHI”)
            protected by the Health Insurance Portability and Accountability Act
            of 1996 (as amended) and the Health Information Technology for
            Economic and Clinical Health Act (collectively, “HIPAA”) and subject
            to such clinical care provider’s privacy policies and HIPAA Notice
            of Privacy Practices describing how they use and disclose your PHI.
          </p>

          <p>
            <span className="font-bold">
              Special Note to Connecticut, Nevada, and Washington Virufy Users
              and Potential Users.
            </span>{' '}
            For information on our processing of “consumer health data” subject
            to the Connecticut Data Privacy Act, as amended, Nevada Consumer
            Health Data Privacy Law, or Washington My Health My Data Act, please
            see{' '}
            <a className="text-blue-500 underline" href="#content13">
              Annex A – Supplemental U.S. Consumer Health Data Privacy Notice.
            </a>
          </p>

          <p>
            <span className="font-bold">
              Special Note to Virufy Users Outside of the United States.{' '}
            </span>{' '}
            If you are located in the European Union, and only if and to the
            extent the European General Data Protection Regulation 2016/679 (the
            “GDPR”) applies, Virufy is the “data controller” of, and responsible
            for, your personal information collected in accordance with this
            Privacy Policy.
          </p>

          <div>
            <ol className="mx-10 my-2 list-decimal">
              <li>
                <a className="text-blue-500 underline" href="#content1">
                  “PERSONAL INFORMATION” DEFINITION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content2">
                  PERSONAL INFORMATION WE COLLECT
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content3">
                  HOW WE USE YOUR PERSONAL INFORMATION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content4">
                  HOW WE SHARE YOUR PERSONAL INFORMATION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content5">
                  STORAGE AND RETENTION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content6">
                  INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content7">
                  SUPPLEMENTAL NOTICE FOR EU/UK GDPR
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content8">
                  YOUR PRIVACY CHOICES AND RIGHTS
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content9">
                  UPDATES TO THIS PRIVACY POLICY
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content10">
                  CHILDREN’S PERSONAL INFORMATION
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content11">
                  THIRD-PARTY WEBSITES/APPLICATIONS
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content12">
                  CONTACT US
                </a>
              </li>
            </ol>
          </div>
          <div>
            <ul className="mx-5 my-2">
              <li>
                <a className="text-blue-500 underline" href="#content13">
                  ANNEX A – SUPPLEMENTAL U.S. CONSUMER HEALTH DATA PRIVACY
                  NOTICE
                </a>
              </li>
              <li>
                <a className="text-blue-500 underline" href="#content14">
                  ANNEX B – CONSUMER HEALTH DATA AUTHORIZATION
                </a>
              </li>
            </ul>
          </div>

          <section>
            <h2 id="content1">1. “PERSONAL INFORMATION” DEFINITION</h2>
            <p>
              The term “personal information” as used in this Privacy Policy
              shall mean any information (including “personal data”, “sensitive
              data”, “health data”, “health information”, and “biometric
              information” as those terms may be defined in applicable data
              protection laws) that actually enables, or is capable of enabling
              us to identify you, directly or indirectly, by reference to an
              identifier such as your name, age, gender identity, postal
              address, email address, location data, online identifier or one or
              more factors specific to you.
            </p>
          </section>

          <section>
            <h2 id="content2">2. PERSONAL INFORMATION WE COLLECT</h2>
            <p>
              We may collect personal information that are provided to us by
              you, collected automatically when you use the Services, and
              provided by third-party sources as described below.
            </p>

            <ul className="mx-5 my-2">
              <li className="font-bold">
                A. Personal Information You Provide to Us Directly
              </li>

              <ul className="mx-5 my-2 list-disc">
                <li>
                  <strong>Health Information.</strong> You provide us with your
                  personal information by participating in the development of
                  the Dataset and assisting us with promoting the research of
                  coughs through AI algorithms. Such personal information may
                  include, but is not limited to, current region (country and
                  state), age group, biological sex, gender identity, smoking
                  status, relevant medical conditions, relevant respiratory
                  conditions, relevant active medications, flu or COVID-like
                  symptoms and related medical symptoms and respiratory
                  conditions, testing results, the timeframe of your tests taken
                  and onset of symptoms, and cough sample recording.
                </li>
                <li>
                  <strong>Donations.</strong> We may collect personal
                  information and details associated with your donations,
                  including, but not limited to, your name, email address, phone
                  number, mailing address, and payment information (i.e.,
                  payment amount, payment date). Any donations made via our
                  Website are processed by third-party payment processors (e.g.,
                  PayPal, GoFundMe). We do not directly collect or store any
                  payment card information entered through our Website, but we
                  may receive information associated with your payment card
                  information (e.g., your billing details).
                </li>
                <li>
                  <strong>Your Communications with Us.</strong> We, and our
                  service providers, may collect the information you communicate
                  to us, such as through email.
                </li>
                <li>
                  <strong>Surveys.</strong> We may contact you to participate in
                  surveys. If you decide to participate, we may collect personal
                  information from you in connection with the survey.
                </li>
                <li>
                  <strong>Conferences and Other Events.</strong> We may collect
                  personal information from individuals when we attend or host
                  conferences and other events.
                </li>
                <li>
                  <strong>Job / Volunteer Applications.</strong> If you apply
                  for an employment, internship, or volunteer position with us,
                  we will collect any personal information you provide in
                  connection with your application, such as your contact
                  information, employment information, and CV.
                </li>
              </ul>

              <li className="my-2 font-bold">
                B. Personal Information Collected Automatically
              </li>
              <p>
                We may collect personal information automatically when you use
                the Services.
              </p>

              <ul className="mx-5 my-2 list-disc">
                <li>
                  <strong>Device Information.</strong> We may collect personal
                  information about your device, such as your internet protocol
                  (IP) address, user settings, cookie identifiers, other unique
                  identifiers, browser or device information, internet service
                  provider, and location information (including, as applicable,
                  approximate location derived from IP address and precise
                  geo-location information).
                </li>
                <li>
                  <strong>Usage Information. </strong>We may collect personal
                  information about your use of the Services, such as the pages
                  that you visit, items that you search for, the types of
                  content you interact with, information about the links you
                  click, the frequency and duration of your activities, and
                  other information about how you use the Services.
                </li>
                <li>
                  <strong>Cookie Notice (and Other Technologies).</strong> We,
                  as well as third parties, may use cookies, pixel tags, and
                  other technologies (“Technologies”) to automatically collect
                  personal information through your use of the Services.{' '}
                </li>

                <ul className="mx-5 my-2">
                  <li>
                    - <strong>Cookies. </strong>Cookies are small text files
                    stored in device browsers.
                  </li>
                  <li>
                    - <strong>Pixel Tags / Web Beacons.</strong> A pixel tag
                    (also known as a web beacon) is a piece of code embedded in
                    the Services that collects personal information about use of
                    or engagement with the Services. The use of a pixel tag
                    allows us to record, for example, that a user has visited a
                    particular web page or clicked on a particular
                    advertisement. We may also include web beacons in e-mails to
                    understand whether messages have been opened, acted on, or
                    forwarded.
                  </li>
                </ul>
              </ul>

              <p>
                <i>
                  See{' '}
                  <a className="text-blue-500 underline" href="#content8">
                    “Your Privacy Choices and Rights”
                  </a>{' '}
                  below to understand your choices regarding these Technologies.
                </i>
              </p>

              <li className="my-2 font-bold">
                C. Personal Information Collected from Third Parties
              </li>
            </ul>

            <p>
              We may collect personal information about you from third parties.
              For example, if you access the Services using a Third-Party
              Service (defined below), we may collect personal information about
              you from that Third-Party Service that you have made available via
              your privacy settings.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content3">
              3. HOW WE USE YOUR PERSONAL INFORMATION
            </h2>
            <p>
              We use personal information for a variety of business purposes,
              including to provide the Services, for administrative purposes,
              and to provide you with marketing materials, as described below.
              We may use and disclose anonymized information about our Users and
              information that does not identify any individual without
              restriction.
            </p>

            <ul className="mx-5 my-2">
              <li className="font-bold">A. Provide the Services</li>

              <ul className="mx-5 my-2 list-disc">
                <li>managing your personal information;</li>
                <li>
                  providing access to certain areas, functionalities, and
                  features of the Services;
                </li>
                <li>communicating with you;</li>
                <li>answering requests;</li>
                <li>
                  developing, training, and fine-tuning models, algorithms, and
                  artificial intelligence technologies to analyze your cough
                  audio recordings in order to better determine signs of
                  COVID-19 and other disease detection;
                </li>
                <li>
                  sharing personal information with third parties as needed to
                  provide the Services;
                </li>
                <li>
                  processing your financial information and other payment
                  methods for donations; and
                </li>
                <li>allowing you to register for events.</li>
              </ul>

              <p>
                Our Services are enabled by machine-learning tools fundamental
                to our ability to provide real-time engagement and inform
                disease type and progression. These machine-learning tools
                process natural language communications to support user
                experience and outcomes.
              </p>

              <li className="my-2 font-bold">B. Operate Our Business</li>

              <p>
                We may use your personal information to operate our business,
                such as:
              </p>

              <ul className="mx-5 my-2 list-disc">
                <li>providing the Services;</li>
                <li>
                  pursuing our legitimate interests such as direct marketing,
                  research and development (including marketing research),
                  network and information security, and fraud prevention;
                </li>
                <li>
                  detecting security incidents, protecting against malicious,
                  deceptive, fraudulent or illegal activity, and prosecuting
                  those responsible for that activity;
                </li>
                <li>carrying out analytics;</li>
                <li>measuring interest and engagement in the Services;</li>
                <li>improving, upgrading, or enhancing the Services;</li>
                <li>
                  analyzing, improving, upgrading, and/or enhancing the Services
                  through the use of artificial intelligence and other methods;
                </li>
                <li>developing new products and services;</li>
                <li>
                  creating de-identified and/or aggregated information to
                  conduct anonymized demographic analysis of respiratory and
                  related disease cases;
                </li>
                <li>
                  running clinical research studies and other research
                  activities;
                </li>
                <li>
                  processing applications if you apply for a job we post on our
                  Website;
                </li>
                <li>ensuring internal quality control and safety;</li>
                <li>
                  authenticating and verifying individual identities, including
                  requests to exercise your rights under this Privacy Policy;
                </li>
                <li>
                  debugging to identify and repair errors with the Services;
                </li>
                <li>
                  auditing relating to interactions, transactions, and other
                  compliance activities;
                </li>
                <li>enforcing our agreements and policies; and</li>
                <li>
                  carrying out activities that are required to comply with our
                  legal obligations.
                </li>
              </ul>

              <li className="my-2 font-bold">C. Marketing</li>
              <p>
                We may use personal information to tailor and provide you with
                marketing and other content.
              </p>
              <p>
                If you have any questions about our marketing practices, you may
                contact us at any time as set forth in “
                <a className="text-blue-500 underline" href="#content12">
                  Contact Us
                </a>
                ” below.
              </p>

              <li className="my-2 font-bold">
                D. With Your Consent or Direction
              </li>

              <p>
                We may use personal information for other purposes that are
                clearly disclosed to you at the time you provide personal
                information, with your consent, or as otherwise directed by you.
              </p>

              <li className="my-2 font-bold">E. Automated Decision Making</li>

              <p>
                We may engage in automated decision making, including profiling.
                Our processing of your personal information will not result in a
                decision based solely on automated processing that has a legal
                or other similarly significant effect on you unless such a
                decision is necessary as part of a contract we have with you, we
                have your consent, or we are permitted by law to engage in such
                automated decision making.{' '}
              </p>
              <p>
                If you have questions about our automated decision making, you
                may contact us as set forth in “
                <a className="text-blue-500 underline" href="#content12">
                  Contact Us
                </a>
                ” below.
              </p>
            </ul>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content4">
              4. HOW WE SHARE YOUR PERSONAL INFORMATION
            </h2>

            <ul className="mx-5 my-2">
              <li className="font-bold">
                A. Disclosures to Provide the Services
              </li>

              <ul className="mx-5 my-2 list-disc">
                <li>
                  <strong>Service Providers.</strong> We may share personal
                  information with third-party service providers that assist us
                  with the provision of the Services. This may include, but is
                  not limited to, service providers that provide us with
                  hosting, customer service, AI or machine learning services,
                  analytics, marketing services, IT support, and related
                  services.{' '}
                </li>

                <ul className="mx-5 my-2">
                  <p className="my-2">
                    Some of the service providers we may use include:{' '}
                  </p>
                  <li className="my-2">
                    - <strong>Google Analytics.</strong> For more information
                    about how Google uses your personal information, please
                    visit Google Analytics’ Privacy Policy. To learn more about
                    how to opt-out of Google Analytics’ use of your personal
                    information, please click here.
                  </li>
                  <li className="my-2">
                    - <strong>Hotjar (Session Replay Analytics).</strong> We use
                    Hotjar’s session replay analytics services. This allows us
                    to record and replay an individual’s interaction with the
                    Services. For more information about how Hotjar uses your
                    personal information, please visit the “Personal Data
                    collected from a visitor of a Hotjar Enabled Site” section
                    of Hotjar’s Privacy Policy. To learn more about how to
                    opt-out of Hotjar’s use of your information, please click
                    here.
                  </li>
                </ul>

                <li className="my-2">
                  <strong>Third-Party Research Institutions.</strong> We may
                  share your personal information with third parties for
                  academic research, commercial, and non-profit purposes, such
                  as to combine your personal information as part of the Dataset
                  to be used globally to accelerate the development of
                  technologies for the detection of respiratory diseases.
                </li>
                <li className="my-2">
                  <strong>
                    Third-Party Services You Share or Interact With.
                  </strong>{' '}
                  The Services may link to or allow you to interface, interact,
                  share information with, direct us to share information with,
                  access and/or use third-party websites, applications,
                  services, products, and technology (each a “Third-Party
                  Service”).
                  <p>
                    Any personal information shared with a Third-Party Service
                    will be subject to the Third-Party Service’s privacy policy.
                    We are not responsible for the processing of personal
                    information by Third-Party Services.
                  </p>
                </li>
                <li className="my-2">
                  <strong>Strategic Partners.</strong> We may share your
                  personal information with strategic partners, including other
                  non-profits, universities, companies, or organizations who
                  support the mission of Virufy or collaborate with us, to
                  provide you with a service you have requested. We may also
                  share your personal information with strategic partners with
                  whom we jointly offer services.
                  <p>
                    Once your personal information is shared with our strategic
                    partner, it will also be subject to our strategic partner’s
                    privacy policy. We are not responsible for the processing of
                    personal information by our strategic partners. we recommend
                    you to carefully review our strategic partners’ privacy
                    policy to understand your privacy rights.
                  </p>
                </li>
                <li className="my-2">
                  <strong>Affiliates.</strong> We may share your personal
                  information with our corporate affiliates.
                </li>
              </ul>

              <li className="my-2 font-bold">
                B. Disclosures to Protect Us or Others
              </li>

              <p>
                We may share your personal information and related information
                with external parties if we, in good faith, believe doing so is
                required or appropriate to: comply with law enforcement
                requests, national security requests, or other government
                requests; comply with legal process, such as a court order or
                subpoena; protect your, our, or others’ rights, property, or
                safety; enforce our policies or contracts; collect amounts owed
                to us; or assist with an investigation or prosecution of
                suspected or actual unauthorized or illegal activity.
              </p>

              <li className="my-2 font-bold">
                C. Disclosure in the Event of Merger, Sale, or Other Asset
                Transfers
              </li>

              <p>
                If we are involved in a merger, acquisition, financing,
                reorganization, bankruptcy, receivership, purchase or sale of
                assets, transition of service to another provider, or other
                similar corporate transaction, your personal information may be
                shared, sold, or transferred as part of such a transaction. In
                the event that this occurs, we may require the provider to
                maintain a similar privacy policy or include such a requirement
                as a term of the corporate transaction.
              </p>
            </ul>
          </section>

          <section>
            <h2 className="font-bold" id="content5">
              5. STORAGE AND RETENTION
            </h2>

            <p className="my-2">
              Personal information that is collected is stored in a secure
              third-party application with restricted access and controls (e.g.
              Amazon Web Services, Google Cloud, Google Drive, Google Mail,
              etc.). Your personal information will be stored with such a
              third-party application until it is downloaded by us. We will
              store the personal information with restricted access.
            </p>
            <p className="my-2">
              Information supplied for volunteer and employment applications
              will be stored in a secured cloud data server only accessible by
              Virufy recruitment staff.
            </p>
            <p className="my-2">
              We store your personal information as necessary to comply with our
              legal obligations, resolve disputes, and enforce our agreements
              and rights. We will store your personal information associated
              with your participation in our study in an anonymized form which
              cannot identify you for the purposes mentioned in the “
              <a className="text-blue-500 underline" href="#content3">
                How We Use Your Personal Information
              </a>
              ” section above.{' '}
            </p>
            <p className="my-2">
              We will store personal information associated with job and
              volunteer applications and email communications, in a form that
              permits us to identify you, for no longer than is necessary for
              the purpose for which the personal information is processed in
              accordance with the applicable laws. Otherwise, we will seek to
              delete your personal information within a reasonable timeframe
              upon request accordingly with your rights.{' '}
            </p>
            <p className="my-2">
              We will store your information data as needed to fulfill our legal
              obligations, resolve disputes, and enforce our agreements and
              rights. Otherwise, we will delete your personal information upon
              request, in accordance with your rights in Section 8 below.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content6">
              6. INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION
            </h2>

            <p>
              If you are visiting our Website, and/or assisting with our
              research, or otherwise providing personal information to us from
              outside the U.S., be aware that your personal information may be
              transferred to, stored, and processed by us outside of the
              jurisdiction within which you are based. Where personal
              information relating to individuals based in the European Economic
              Area (“EEA”), Switzerland, and/or the United Kingdom is shared
              with a third party located in a country that does not provide an
              adequate level of protection under applicable data protection
              laws, we rely upon appropriate safeguards, such as the European
              Commission-approved{' '}
              <a
                className="text-blue-500 underline"
                href="https://eur-lex.europa.eu/eli/dec_impl/2021/914"
              >
                Standard Contractual Clauses
              </a>
              . Please contact{' '}
              <a
                className="text-blue-500 underline"
                href="mailto:dpo@virufy.org"
              >
                dpo@virufy.org
              </a>{' '}
              for a copy of the safeguards which we have put in place to protect
              your personal information and privacy rights in these
              circumstances.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content7">
              7. SUPPLEMENTAL NOTICE FOR EU/UK GDPR
            </h2>

            <p className="my-2">
              This Supplemental Notice for EU/UK GDPR only applies to our
              processing of personal information that is subject to the EU or UK
              General Data Protection Regulation.
            </p>
            <p className="my-2">
              In some cases, providing personal information may be a requirement
              under applicable law, a contractual requirement, or a requirement
              necessary to enter into a contract. If you choose not to provide
              personal information in cases where it is required, we will inform
              you of the consequences at the time of your refusal to provide the
              personal information.
            </p>
            <p className="my-2">
              Virufy’s processing of your personal information may be supported
              by one or more of the following lawful bases:
            </p>

            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">
                    <u>Privacy Policy Section</u>
                  </th>
                  <th className="border border-gray-300 p-2">
                    <u>Lawful Basis:</u> <br /> Performance of a Contract (i.e.,
                    to provide the Services to you)
                  </th>
                  <th className="border border-gray-300 p-2">
                    <u>Lawful Basis:</u> <br /> Legitimate Interest
                  </th>
                  <th className="border border-gray-300 p-2">
                    <u>Lawful Basis:</u> <br /> Consent
                  </th>
                  <th className="border border-gray-300 p-2">
                    <u>Lawful Basis:</u> <br /> For Compliance with Legal
                    Obligations
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-300 p-2">
                  <td className="border border-gray-300 p-2">
                    <u>Section 3A:</u> Provide the Services
                  </td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                </tr>
                <tr className="border border-gray-300 p-2">
                  <td className="border border-gray-300 p-2">
                    <u>Section 3B:</u> Operate Our Business
                  </td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                </tr>
                <tr className="border border-gray-300 p-2">
                  <td className="border border-gray-300 p-2">
                    <u>Section 3C:</u> Marketing
                  </td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="p- border border-gray-300 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                </tr>
                <tr className="border border-gray-300 p-2">
                  <td className="border border-gray-300 p-2">
                    <u>Section 3D:</u> With Your Consent or Direction
                  </td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                </tr>
                <tr className="border border-gray-300 p-2">
                  <td className="border border-gray-300 p-2">
                    <u>Section 3F:</u> Automated Decision Making
                  </td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                  <td className="border border-gray-300 p-2 text-center">✔</td>
                </tr>
              </tbody>
            </table>

            <p className="my-2">
              If we process personal information that is considered a “special
              category of personal data”, then our processing of this personal
              information may be supported by one or more of the following
              conditions:
            </p>

            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                <strong>Explicit Consent:</strong> You may have provided your
                explicit consent for our processing of your personal
                information.
              </li>

              <li className="my-2">
                <strong>
                  Necessary for Employment, Social Security, or Social
                  Protection Law Purposes:
                </strong>{' '}
                Our processing of your personal information may be necessary for
                the purposes of carrying out obligations and exercising specific
                rights in the field of employment, social security, and/or
                social protection law.
              </li>

              <li className="my-2">
                <strong>Necessary to Protect Vital Interests:</strong> Our
                processing of your personal information may be necessary to
                protect your vital interests if you are physically or legally
                incapable of giving consent.
              </li>

              <li className="my-2">
                <strong>
                  In Connection with a Foundation, Association, Non-Profit Body
                  or Other Partner Organization:
                </strong>{' '}
                Our processing of your personal information may be carried out
                in the course of our legitimate activities in connection with a
                foundation, association, non-profit body, or other partner
                organization.
              </li>

              <li className="my-2">
                <strong>Publicly Available Personal Information:</strong> Our
                processing of your personal information may relate to personal
                information which has been manifestly made public by you.
              </li>

              <li className="my-2">
                <strong>
                  Necessary for the Establishment, Exercise or Defense of Legal
                  Claims:
                </strong>{' '}
                Our processing of your personal information may be necessary for
                the establishment, exercise or defense of legal claims.
              </li>

              <li className="my-2">
                <strong>Necessary for Substantial Public Interest:</strong> Our
                processing of your personal information may be necessary for
                reasons of substantial public interest.
              </li>

              <li className="my-2">
                <strong>Necessary for Medical Purposes:</strong> Our processing
                of your personal information may be necessary for the purposes
                of preventive or occupational medicine, medical diagnosis, the
                provision of health or social care or treatment or the
                management of health or social care systems and services, or
                pursuant to contract with a health professional.
              </li>

              <li className="my-2">
                <strong>
                  Necessary for Substantial Interest in the Area of Public
                  Health:
                </strong>{' '}
                Our processing of your personal information may be necessary for
                reasons of public interest in the area of public health.
              </li>

              <li className="my-2">
                <strong>
                  Necessary for Archiving, Research, or Statistical Purposes:
                </strong>{' '}
                Our processing of your personal information may be necessary for
                archiving purposes in the public interest, scientific or
                historical research purposes or statistical purposes.
              </li>
            </ul>

            <p className="my-2">
              If your personal information is subject to the applicable data
              protection laws of the European Economic Area, you may find the
              contact details of the competent authorities in the following
              link:{' '}
              <a className="text-blue-500 underline" href="https://virufy.org/">
                https://www.edpb.europa.eu/about-edpb/about-edpb/members_en
              </a>
            </p>

            <p className="my-2">
              For the United Kingdom, you may lodge a complaint with the
              Information Commissioner’s Office (ICO) by clicking here:{' '}
              <a className="text-blue-500 underline" href="https://virufy.org/">
                https://ico.org.uk/make-a-complaint/
              </a>
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content8">
              8. YOUR PRIVACY CHOICES AND RIGHTS
            </h2>

            <ul className="mx-5 my-2">
              <li className="my-2 font-bold">A. Your Privacy Choices.</li>
              <p>
                The privacy choices you may have about your personal information
                are described below.
              </p>
              <ul className="mx-5 my-2 list-disc">
                <li>
                  <strong>Email Communications:</strong> If you receive an
                  unwanted marketing email from us, you can use the unsubscribe
                  functionality found at the bottom of the email to opt out of
                  receiving future emails. Note that you will not be able to opt
                  out of certain communications (e.g., communications regarding
                  the Services or updates to this Privacy Policy).
                </li>

                <li className="my-2">
                  <strong>Text/SMS Messages:</strong> If you receive an unwanted
                  promotional text/SMS message from us, you may opt out of
                  receiving future text/SMS messages from us by following the
                  instructions in the text/SMS message you have received from us
                  or by otherwise contacting us as set forth in “
                  <a className="text-blue-500 underline" href="#content12">
                    Contact Us
                  </a>
                  ” below.
                </li>

                <li className="my-2">
                  <strong>Mobile Devices:</strong> We may send you push
                  notifications through our mobile application. You may opt out
                  from receiving these push notifications by changing the
                  settings on your mobile device. With your consent, we may also
                  collect precise location-based information via our mobile
                  application. You may opt out of this collection by changing
                  the settings on your mobile device. To request deletion of
                  your account, please use the standard deletion functionality
                  available via the Services or contact us using the information
                  set forth in “
                  <a className="text-blue-500 underline" href="#content12">
                    Contact Us
                  </a>
                  ” below.
                </li>

                <li className="my-2">
                  <strong>“Do Not Track”:</strong> Do Not Track (“DNT”) is a
                  privacy preference that users can set in certain web browsers.
                  Please note that we do not respond to or honor DNT signals or
                  similar mechanisms transmitted by web browsers.
                </li>

                <li className="my-2">
                  <strong>Cookies:</strong> You may stop or restrict the
                  placement of Technologies on your device or remove them by
                  adjusting your preferences as your browser or device permits.
                  However, if you adjust your preferences, the Services may not
                  work properly.
                </li>
              </ul>

              <p className="my-2">
                Please note that cookie-based opt-outs are not effective on
                mobile applications. However, you may opt-out of certain
                tracking on some mobile applications by following the
                instructions for{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en"
                >
                  Android
                </a>
                ,{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://support.apple.com/en-us/HT202074"
                >
                  iOS
                </a>
                , and{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://www.networkadvertising.org/mobile-choice/"
                >
                  others
                </a>
                .
              </p>
              <p className="my-2">
                The online advertising industry also provides mechanisms that
                may allow you to opt out of receiving targeted ads from
                organizations that participate in self-regulatory programs. To
                learn more, visit the{' '}
                <a
                  className="text-blue-500 underline"
                  href="http://www.networkadvertising.org/managing/opt_out.asp"
                >
                  Network Advertising Initiative
                </a>
                ,{' '}
                <a
                  className="text-blue-500 underline"
                  href="http://www.aboutads.info/choices/"
                >
                  the Digital Advertising Alliance
                </a>
                , and{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://www.youronlinechoices.eu/"
                >
                  the European Digital Advertising Alliance
                </a>
                .
              </p>
              <p className="my-2">
                Please note you must separately opt out in each browser and on
                each device.{' '}
              </p>

              <li className="my-2 font-bold">B. Your Privacy Rights.</li>
              <p>
                In certain circumstances, you may have the following rights in
                relation to your personal information:{' '}
              </p>
              <ul className="mx-5 my-2 list-disc">
                <li>
                  <strong>Request access to your personal information:</strong>{' '}
                  You may have the right to request access to any personal
                  information we hold about you as well as related data,
                  including the purposes for processing the personal
                  information, the recipients or categories of recipients with
                  whom the personal information has been shared, where possible,
                  the period for which the personal information will be stored,
                  the source of the personal information, and the existence of
                  any automated decision making.
                </li>

                <li className="my-2">
                  <strong>
                    Request correction of your personal information:
                  </strong>{' '}
                  You may have the right to obtain without undue delay the
                  rectification of any inaccurate or outdated personal
                  information we hold about you.
                </li>

                <li className="my-2">
                  <strong>Request erasure of your personal information:</strong>{' '}
                  You may have the right to request that personal information
                  that was given with your consent is deleted.
                </li>

                <li className="my-2">
                  <strong>
                    Request restriction of processing your personal information:
                  </strong>{' '}
                  You may have the right to prevent or restrict processing of
                  your personal information.
                </li>

                <li className="my-2">
                  <strong>
                    Request transfer of your personal information:
                  </strong>{' '}
                  You may have the right to request transfer of your personal
                  information directly to a third party where this is
                  technically feasible.
                </li>

                <li className="my-2">
                  <strong>Right to object:</strong> You may have the right to
                  object to the processing of your personal information when you
                  have legitimate reasons to do so.
                </li>

                <li className="my-2">
                  <strong>Right to withdraw consent:</strong> Where processing
                  is based on consent, you may have the right to withdraw such
                  consent.
                </li>

                <li className="my-2">
                  <strong>
                    Request the anonymization, blockage or elimination of
                    unnecessary, excessive and non-compliant processed data:
                  </strong>{' '}
                  You may have the right to have excessive, unnecessary or
                  non-compliant processed data anonymized or excluded
                  accordingly with the principle of necessity.
                </li>
              </ul>

              <p className="my-2">
                We will process such requests in accordance with applicable
                laws.
              </p>

              <p className="my-2">
                If you request deletion of essential information, such as cough
                recordings, for the management of your account with Virufy, this
                will result in the termination of your registration and
                participation in the research. If you need any assistance to
                exercise your rights, you may contact us as described in the “
                <a className="text-blue-500 underline" href="#content12">
                  Contact Us
                </a>
                ” section below.{' '}
              </p>

              <p className="my-2">
                To exercise the above-mentioned rights, please send an email
                with an enclosed copy of the frontside of your identity card to
                <a
                  className="text-blue-500 underline"
                  href="mailto:dpo@virufy.org"
                >
                  dpo@virufy.org
                </a>
                . We reserve the right to request the provision of additional
                information necessary to confirm the identity of the enquirer.
              </p>
            </ul>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content9">
              9. UPDATES TO THIS PRIVACY POLICY
            </h2>

            <p>
              We may update this Privacy Policy from time to time at our sole
              discretion. If we do, we’ll let you know by posting the updated
              Privacy Policy on our website, and/or we may also send other
              communications.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content10">
              10. CHILDREN’S PERSONAL INFORMATION
            </h2>

            <p>
              The Services are not directed to children under 14 (or other age
              as required by local law outside the United States), and we do not
              knowingly collect personal information from children.
            </p>
            <p>
              If you are a parent or guardian and believe your child has
              uploaded personal information to the Services in violation of
              applicable law, you may contact us as described in the “
              <a className="text-blue-500 underline" href="#content12">
                Contact Us
              </a>
              ” section below.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content11">
              11. THIRD-PARTY WEBSITES/APPLICATIONS
            </h2>

            <p>
              The Services may contain links to other websites/applications and
              other websites/applications may reference or link to our Services.
              These third-party services are not controlled by us. We encourage
              our users to read the privacy policies of each website and
              application with which they interact. We do not endorse, screen,
              or approve, and are not responsible for, the privacy practices or
              content of such other websites or applications. Providing personal
              information to third-party websites or applications is at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="my-2 font-bold" id="content12">
              12. CONTACT US
            </h2>

            <p>
              If you have any questions relating to the privacy of your personal
              information or to exercise your rights as detailed in this Privacy
              Notice, please contact us at{' '}
              <a
                className="text-blue-500 underline"
                href="mailto:dpo@virufy.org"
              >
                dpo@virufy.org
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="def-personal-info">
            <h1 id="content13" className="text-center font-bold">
              ANNEX A<br></br>SUPPLEMENTAL CONSUMER HEALTH DATA PRIVACY
              STATEMENT
            </h1>
            <p className="my-2">
              This Supplemental Consumer Health Data Privacy Statement
              (“Consumer Health Data Privacy Statement”) supplements our{' '}
              <a
                className="text-blue-500 underline"
                href="https://virufy.org/privacy_policy"
              >
                Privacy Policy
              </a>
              .
            </p>
            <p className="my-2">
              This Supplemental Consumer Health Data Privacy Statement only
              applies to personal information we process that is “consumer
              health data” subject to the Connecticut Data Privacy Act, as
              amended (“CTDPA”), Washington My Health My Data Act (“MHMDA”),
              Nevada’s Consumer Health Data Privacy Law (“NVCHDPL”), or other
              states with consumer health data privacy laws (as applicable).
            </p>
            <p className="my-2">
              Terms used in this Supplemental Consumer Health Data Privacy
              Statement that are defined in MHMDA, NVCHDPL, or CTDPA will have
              the meaning set forth in those laws to the extent such laws are
              applicable.
            </p>
            <h1 className="font-bold">CONSUMER HEALTH DATA WE COLLECT</h1>
            <p className="my-2">
              Under the MHMDA, “consumer health data” is defined as “personal
              information that is linked or reasonably linkable to a consumer
              and that identifies the consumer&#39;s past, present, or future
              physical or mental health status.”
            </p>
            <p className="my-2">
              Under NVCHDPL, “consumer health data” is defined as “personally
              identifiable information that is linked or reasonably capable of
              being linked to a consumer and that a regulated entity uses to
              identify the past, present or future health status of the
              consumer.”
            </p>
            <p className="my-2">
              Under CTDPA, “consumer health data” is defined as “any personal
              data that a controller uses to identify a consumer&#39;s physical
              or mental health condition or diagnosis, and includes, but is not
              limited to, gender-affirming health data and reproductive or
              sexual health data.”
            </p>
            <p className="my-2">
              Because consumer health data is defined very broadly, many of the
              categories of personal information that we collect under our{' '}
              <a
                className="text-blue-500 underline"
                href="https://virufy.org/privacy_policy"
              >
                Privacy Policy
              </a>{' '}
              may also be considered consumer health data.
            </p>
            <p className="my-2">
              Examples of consumer health data that you may provide to us, or
              that we may otherwise collect, may include:
            </p>
            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                Information about your health-related conditions, symptoms,
                status, diagnoses, disease, testing, or treatments.
              </li>
              <li className="my-2">
                Information about use or purchase of prescribed medication.
              </li>
              <li className="my-2">
                Information about measurements of bodily functions, vital signs,
                symptoms, or characteristics.
              </li>
              <li className="my-2">
                Information about diagnoses or diagnostic testing, treatment, or
                medication.
              </li>
              <li className="my-2">
                Information about surgeries or other health-related procedures.
              </li>
              <li>Biometric information.</li>
              <li className="my-2">
                Information processed to associate or identify an individual
                with the data listed above that is derived or extrapolated from
                non-health information.
              </li>
              <li className="my-2">
                Other information that may be used to infer or derive data
                related to the above or other consumer health data.
              </li>
            </ul>
            <h1 className="my-2 font-bold">SOURCES OF CONSUMER HEALTH DATA</h1>
            <p>
              We collect consumer health data that you provide to us, consumer
              health data we collect automatically when you use the Sites, and
              consumer health data from third-party sources, as described in our{' '}
              <a
                className="text-blue-500 underline"
                href="https://virufy.org/privacy_policy"
              >
                Privacy Policy
              </a>{' '}
              and below.
            </p>
            <h1 className="my-2 font-bold">
              WHY WE COLLECT AND USE CONSUMER HEALTH DATA
            </h1>
            <p className="my-2">
              We collect and use consumer health data for the purposes and in
              the manner described in the “
              <a className="text-blue-500 underline" href="#content3">
                How We Use Your Personal Information
              </a>
              ” section of our{' '}
              <a
                className="text-blue-500 underline"
                href="https://virufy.org/privacy_policy"
              >
                Privacy Policy
              </a>
              .{' '}
            </p>
            <p className="my-2">
              Primarily, we collect and use consumer health data as reasonably
              necessary to provide you with the products or Services you have
              requested or authorized. This may include delivering and operating
              the products or Services and their features, personalization of
              certain product or Website features, ensuring the secure and
              reliable operation of the products or Services and the systems
              that support them, troubleshooting and improving the products and
              Services, and other essential business operations that support the
              provision of the products and Services (such as analyzing our
              performance and meeting our legal obligations).
            </p>
            <p className="my-2">
              We may also use consumer health data for other purposes for which
              we give you choices and/or obtain your consent as required by law.
            </p>
            <h1 className="my-2 font-bold">SHARING OF CONSUMER HEALTH DATA</h1>
            <p className="my-2">
              We may share each of the categories of consumer health data
              described above for the purposes described above and in the “How
              We Use Your Personal Information” section of our Privacy Policy.
            </p>
            <p className="my-2">
              We only share or disclose your consumer health data as needed to
              provide you with the products or Services that you request, or
              with your explicit consent. We may share or disclose any or all
              the above categories of consumer health data to the following
              entities, who shall use the data only as permitted for the
              purposes set forth above, and within the bounds of our contracts
              with them:
            </p>
            <p className="my-2">These general categories of third parties:</p>
            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                research, academic, nonprofit, and business collaborators;
              </li>
              <li className="my-2">product co-promotion partners;</li>
              <li className="my-2">product co-development partners;</li>
              <li className="my-2">
                service providers (including those hosting or analyzing data on
                our behalf, those assisting with fraud prevention, those
                assisting in program administration, those assisting in incident
                management and reporting, those administering our call center
                and websites, and those who assist with our information
                technology and security programs);
              </li>
              <li className="my-2">emergency personnel;</li>
              <li className="my-2">
                authorized/legal representatives, family members, and
                caregivers;
              </li>
              <li className="my-2">
                third parties (including those with whom Virufy has joint
                marketing and similar arrangements, those who provide marketing
                and data analytics services, those who provide program
                enrollment or product fulfillment, payment, and authorization,
                other third parties as necessary to complete transactions and
                provide products or Services, or where required by law);
              </li>
              <li className="my-2">
                lawyers, auditors, and consultants providing services to Virufy;
                and
              </li>
              <li className="my-2">legal and regulatory bodies.</li>
            </ul>
            <p className="my-2">
              In addition, we may share or disclose consumer health data as
              permitted or required by law, such as (i) to an acquiring
              organization if we are involved in a sale or a transfer of our
              business, (ii) as needed to prevent, detect, protect against, or
              respond to security incidents, identity theft, fraud, harassment,
              malicious or deceptive activities, (iii) in situations that may
              involve violations of our terms of use or other rules, (iv) to
              protect our rights and the rights and safety of others, (v) as
              needed to support external auditing, compliance and corporate
              governance functions, (vi) as needed to preserve the integrity or
              security of our systems, or (vii) to investigate, report, or
              prosecute those responsible for any action that is illegal under
              applicable state or federal law.
            </p>
            <h1 className="my-2 font-bold">HOW TO EXERCISE YOUR RIGHTS</h1>
            <p className="my-2">
              The CTDPA, MHMDA, and NVCHDPL provide consumers with certain
              rights with respect to consumer health data.
            </p>
            <p className="my-2">
              Under MHMDA, consumers have the right to: (i) confirm whether
              Virufy is collecting, sharing, or selling consumer health data and
              to access such data; (ii) withdraw consent from Virufy’s
              collection and sharing of consumer health data; and (iii) request
              that Virufy delete consumer health data.
            </p>
            <p className="my-2">
              Under NVCHDPL, consumers have the right to: (i) confirm whether
              Virufy is collecting, sharing or selling consumer health data;
              (ii) have Virufy provide the consumer with a list of all third
              parties with whom Virufy has shared consumer health data relating
              to the consumer or to whom Virufy has sold such consumer health
              data; (iii) request that Virufy cease collecting, sharing, or
              selling consumer health data relating to the consumer; and (iv)
              request that Virufy delete consumer health data.
            </p>
            <p className="my-2">
              Under CTDPA, Virufy is required to obtain consumer consent prior
              to selling or offering to sell, consumer health data. Consumers
              have the right to: (i) confirm whether Virufy is collecting or
              sharing consumer health data; (ii) have Virufy provide the
              categories of consumer health data that it shares with third
              parties and the categories of third parties with which it shares
              consumer health data; and (iii) withdraw consent from Virufy’s
              selling of consumer health data.
            </p>
            <p className="my-2">
              The rights afforded to consumers under CTDPA, MHMDA, and NVCHDPL
              are subject to certain exceptions.
            </p>
            <p className="my-2">
              Subject to certain legal limitations and exceptions, you have the
              following rights with respect to any consumer health data we may
              collect about you:
            </p>

            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                The right to confirm whether we are collecting, sharing, or
                selling your consumer health data and to access such data,
                including to receive a list of affiliates or specific third
                parties with whom we have shared or sold your information, along
                with contact information such as an active email address for
                each third party;
              </li>
              <li className="my-2">
                The right to review and request corrections to your consumer
                health data;
              </li>
              <li className="my-2">
                The right to withdraw consent from our collection or sharing of
                your consumer health data; and
              </li>
              <li className="my-2">
                The right to request that we delete your consumer health data.
              </li>
            </ul>

            <p className="my-2">
              You may submit a request pursuant to any of these rights by
              contacting us as described in the “
              <a className="text-blue-500 underline" href="#content12">
                Contact Us
              </a>
              ” section.
            </p>

            <p className="my-2">
              Virufy will not discriminate against you for exercising any of
              your rights. We will make reasonable efforts to respond promptly
              to your requests in accordance with applicable laws. Please allow
              45 days for a response. We may, after receiving your request,
              require additional information from you to authenticate your
              request and verify your identity. Please be aware that we may be
              unable to afford these rights to you under certain circumstances,
              such as if we are legally prevented from doing so. If we deny your
              request, you have the right to appeal that denial by contacting us
              as described in the “
              <a className="text-blue-500 underline" href="#content12">
                Contact Us
              </a>
              ” section. We will process and respond to your appeal within the
              time permitted by applicable law.
            </p>

            <p className="my-2">
              If you are a Washington resident and your appeal is unsuccessful,
              you may file a complaint with the Washington State Attorney
              General at{' '}
              <a
                className="text-blue-500 underline"
                href="www.atg.wa.gov/file-complaint"
              >
                www.atg.wa.gov/file-complaint
              </a>
              .
            </p>

            <h1 className="my-2 font-bold">
              CHANGES TO OUR CONSUMER HEALTH DATA PRIVACY STATEMENT
            </h1>

            <p className="my-2">
              We may update this Consumer Health Data Privacy Statement from
              time to time. When we do update it, for your convenience, we will
              make the updated statement available on this page. Our intention
              is to use consumer health data in accordance with the Consumer
              Health Data Privacy Statement in place at the time the consumer
              health data was collected.
            </p>
          </section>

          <section aria-labelledby="def-personal-info">
            <h1 id="content14" className="text-center font-bold">
              ANNEX B<br></br>CONSUMER HEALTH DATA AUTHORIZATION
            </h1>
            <p className="my-2">
              This Consumer Health Data Privacy Authorization (“Authorization”)
              supplements Virufy’s (“Virufy”, “we,” “us,” or “our”){' '}
              <a
                className="text-blue-500 underline"
                href="https://virufy.org/privacy_policy"
              >
                Privacy Policy
              </a>
              ,{' '}
              <a
                className="text-blue-500 underline"
                href="http://www.openwellhealth.com"
              >
                Supplemental Consumer Health Data Privacy Statement
              </a>
              , and the{' '}
              <a className="text-blue-500 underline" href="https://virufy.org/">
                www.virufy.org
              </a>{' '}
              cookie banner and applies only to “consumer health data” subject
              to the Connecticut Data Privacy Act, as amended (“CTDPA”),
              Washington My Health My Data Act (“MHMDA”), Nevada Consumer Health
              Data Privacy Law (“NVCHDPL”), or other states with consumer health
              data privacy laws (as applicable).
            </p>

            <p className="my-2">
              Terms used in this Authorization defined in CTDPA, MHMDA, NVCHDPL,
              or other applicable state consumer health data privacy laws will
              have the meaning set forth in those laws to the extent such laws
              are applicable.
            </p>

            <p className="my-2">
              If you opt-in to “personalized marketing” through the{' '}
              <a className="text-blue-500 underline" href="https://virufy.org/">
                www.virufy.org
              </a>{' '}
              cookie banner, you allow us to “sell” your consumer health data as
              described below:
            </p>

            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                <strong>
                  Specific consumer health data intended for “sale”:
                </strong>{' '}
                Consumer health data collected via cookies and similar
                technologies including but not limited to browsing activity on
                our website.
              </li>
              <li className="my-2">
                <strong>Purpose of the “sale” of consumer health data:</strong>{' '}
                To tailor and deliver personalized advertisements to you.
              </li>
              <li className="my-2">
                <strong>
                  How consumer health data purchasers gather and use the data:
                </strong>
                Consumer health data purchasers will gather the data via cookies
                and other tracking technologies when you visit www.virufy.org.
                These purchasers may use the data to assist us to deliver
                personalized advertisements to you and in accordance with their
                privacy policies linked below.
              </li>
              <li className="my-2">
                <strong>
                  Consumer health data purchasers’ contact information:
                </strong>
                <ul className="mx-5 my-2">
                  <li className="my-2">
                    - Google:{' '}
                    <a href="https://policies.google.com/privacy?hl=en">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="my-2">
                    - Microsoft:{' '}
                    <a href="https://privacy.microsoft.com/en-us/privacystatement">
                      Privacy Statement
                    </a>
                  </li>
                  <li className="my-2">
                    - X Advertising:{' '}
                    <a href="https://x.com/en/privacy">Privacy Policy</a>
                  </li>
                  <li className="my-2">
                    - Facebook/Meta:{' '}
                    <a href="https://www.facebook.com/privacy/policy/">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="my-2">
                <strong>Contact information for Virufy:</strong>{' '}
                <a
                  className="text-blue-500 underline"
                  href="mailto:dpo@virufy.org"
                >
                  dpo@virufy.org
                </a>
              </li>
            </ul>

            <p className="my-2">
              <strong>Please note:</strong>
            </p>

            <ul className="mx-5 my-2 list-disc">
              <li className="my-2">
                The provision of goods or services may not be conditioned upon
                you accepting the terms of this Authorization.
              </li>
              <li className="my-2">
                Purchasers may redisclose the consumer health data sold under
                this authorization and such data may no longer be protected by
                the CTDPA, MHMDA, NVCHDPL, and/or applicable state consumer
                health data privacy laws.
              </li>
              <li className="my-2">
                You may revoke this authorization at any time through the{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://virufy.org/"
                >
                  www.virufy.org
                </a>{' '}
                cookie banner. To do so, please be sure the box next to
                “Personalize marketing” is unchecked and click “Save my
                choices.” You may also click “Decline all” to decline our use of
                all cookies not required to operate our website.
              </li>
              <p className="mx-5 my-2">
                - A revocation will not impact previously sold consumer health
                data. In addition, if you use different browsers or devices, you
                must indicate your choices on each browser/device used to access{' '}
                <a
                  className="text-blue-500 underline"
                  href="https://virufy.org/"
                >
                  www.virufy.org
                </a>
                .
              </p>
            </ul>

            <p className="my-2">
              If you have any questions about how to revoke your authorization,
              please contact:{' '}
              <a
                className="text-blue-500 underline"
                href="mailto:dpo@virufy.org"
              >
                dpo@virufy.org
              </a>
              .
            </p>

            <p className="mx-5 my-2">
              This authorization will expire one (1) year after accepting it.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
