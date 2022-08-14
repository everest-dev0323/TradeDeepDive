import { Link } from "react-router-dom";
import PolicyHeader from "../components/desktop/PolicyHeader";

export default function PrivacyPolicy() {
  const url = "assets/imgs/desktop/main_bg.jpg";
  return (
    <div>
      <div
        className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <PolicyHeader />
      <div className="mx-32 mb-20">
        <h2 className="font-bold text-2xl mb-5">Privacy Policy</h2>
        <p className="mb-5">
          In brief: We are TraderDeepDive Ltd. ("TraderDeepDive," "we" or "us").
          We respect your privacy and work hard to protect the confidentiality
          of information that you give us. We will share your personal data with
          third parties only in the event that it’s needed for the provision of
          services and data you have requested (explained in detail in this
          privacy policy).
        </p>
        <h3 className="font-bold tx-lg mb-3">About Us</h3>
        <p className="mb-5">
          TraderDeepDive is the data controller responsible for your personal
          data and is the sole owner of the TraderDeepDive.com website
          ("Website"), TraderDeepDive mobile and desktop applications,
          TraderDeepDive services (each, a "Service") and all of the information
          collected on it. TraderDeepDive collects information from users in
          several ways (explained in detail in this privacy policy).
          <br /> This privacy policy applies to personal data that we collect
          from you when you visit this Website, create an account, use our
          applications or services ("you" or "your" being interpreted
          accordingly). It provides information on what personal data we
          collect, why we collect personal data, how it is used, the lawful
          basis on which your personal data is processed, how it is stored, and
          how we share information.
          <br /> As used in this privacy policy, "personal data" means any
          information that relates to you from which you can be identified.
          <br /> By using our Service or submitting your personal data, you are
          agreeing to accept the terms of this privacy policy, so please read it
          carefully. If you disagree with this privacy policy at any point or
          time, you should stop using our Services and delete your user account.
        </p>

        <h3 className="font-bold tx-lg mb-3">Updates</h3>

        <p className="mb-5">
          We may update this privacy policy at our discretion from time to time
          by posting a new version on our Website. You should check our Website
          occasionally to ensure any changes made are suitable for you. If
          required by applicable law, you will be informed of any significant
          changes made to the privacy policy.
        </p>

        <p className="mb-5">
          The current version of this privacy policy was modified on April 22,
          2021.
        </p>

        <h3 className="font-bold tx-lg mb-3">Personal data that we collect</h3>

        <p className="mb-5">
          There is no need to create an account when searching and viewing
          information from certain markets, such as symbols, quotes, financial
          data, as well as ideas and publicly available data of TraderDeepDive
          users.
        </p>
        <h3 className="font-bold tx-lg mb-3">Data we receive from you</h3>
        <h3 className="font-bold tx-lg mb-3">User Accounts</h3>
        <p className="mb-5">
          If you decide to create an account, you will need to provide us with
          some personal data so we can provide you with access to our additional
          services that users benefit from. You may also elect to provide us
          with additional information about you, as described below.
          <br />
          During registration you will be required to provide us with either:
          <ul className="list-disc list-inside">
            <li>your username, email address;</li>
            <li>
              your account information with one of the following social Internet
              services: Facebook, Twitter, Google, Yahoo!, LinkedIn; and
            </li>
            <li>
              if you want to buy a subscription, we will need your first name,
              last name and postal address.
            </li>
          </ul>
        </p>
        <p className="mb-5">
          In some cases, you may need to provide and verify your phone number.
          You can also add additional information about yourself in the profile
          settings, however, this is not mandatory.
          <br />
        </p>
        <p className="mb-5">
          The following information will be publicly displayed:
          <ul className="list-disc list-inside">
            <li>
              the image you have elected to provide as your user avatar,
              signature, “about me,” location, Twitter handle, and website.
            </li>
          </ul>
        </p>
        <p className="mb-5">
          The following information will not be publicly displayed:
          <ul className="list-disc list-inside">
            <li>
              your first and last name, phone number, email, company, address,
              and taxpayer ID.
            </li>
          </ul>
        </p>
        <p className="mb-5">
          If you register to be a user of Illume/Insight/Pursue Premium Accounts
          (a "Paid User"), our third party payment processor will also process
          information about your payment card and bank account information or
          payment account information that we require for the purpose of
          recording and processing your account registration. For further
          details, please refer to the point below titled "
          <a className="text-[#2aa8ff]" href="">
            Payment information
          </a>
          ", under the section headed, "When we share your personal
          information."
        </p>
        <h3 className="font-bold tx-lg mb-3">Contact data</h3>
        <p className="mb-5">
          We also process any personal data you choose to give when
          corresponding with us by phone, email, or otherwise visiting and
          interacting with this Website or any other services we operate.
        </p>

        <h3 className="font-bold tx-lg mb-3">Cookies and other technologies</h3>

        <p className="mb-5">
          We use browser cookies (small text files placed on your device) to
          administer our Site, gather and analyze statistical information,
          ensure security, to fight spam, and for advertising purposes. Cookies
          allow us to provide you with a better user experience when you browse
          our Website and helps to improve its features. More detailed
          information on the use of cookies can be found in our{" "}
          <Link className="text-[#2aa8ff]" to="/cookie-policy">
            Cookies Policy
          </Link>
          .<br />
          We also use web beacons (tiny graphics with a unique identifier) for
          analytics and advertising purposes and to develop, test, and improve
          our services further, as described in our{" "}
          <Link className="text-[#2aa8ff]" to="/cookie-policy">
            Cookies Policy
          </Link>
          .
        </p>
        <h3 className="font-bold tx-lg mb-3">Log files</h3>
        <p className="mb-5">
          Like most websites, we use web server log files. Records in our log
          files include internet protocol (IP) addresses (see the "
          <a className="text-[#2aa8ff]" href="">
            Device information
          </a>
          " section below for further details), browser types, internet service
          providers, referring pages, exit pages, platform types, and date/time
          stamps. We use web server log files to administer the site, provide
          broad traffic information for site planning purposes, and to ensure
          that our terms of service agreement is being adhered to. Note that IP
          addresses are not tied to personal data in our web server log files.
        </p>
        <h3 className="font-bold tx-lg mb-3">Device information</h3>
        <p className="mb-5">
          We collect the following information about the devices you use to
          interact with our services: IP address of the device (from which we
          can also infer the country you are connecting from), operating system,
          and browser version. We collect this information to prevent spam and
          abuse of our services. IP addresses may be considered personal data in
          certain jurisdictions, and will be treated in accordance with this
          privacy policy.
        </p>
        <h3 className="font-bold tx-lg mb-3">Analytics</h3>
        <p className="mb-5">
          When you are using our Website, mobile and desktop applications, or
          widgets we provide to another site, we may collect analytics
          information automatically. This information may include your general
          device information, device identifiers (for example, Google
          Advertising ID, if you are using an Android device, or Advertising
          Identifier (IDFA), if you are using an iOS device), network
          information, website, and application interaction events. We collect
          pseudonymous data only and this analytic information does not include
          any personal identifiable information from your profile. We use This
          information to analyze and improve the work of our services and
          applications, and to develop, test, and improve our service further.
          For this purpose we may use internal analytic as well as third party
          service providers. For further details about our use of third party
          service providers, please refer to the Analytics providers section
          below.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          Data we receive from third parties
        </h3>
        <p className="mb-5">
          When you sign in to your account using your social internet service
          credentials (Facebook, Twitter, Google, Yahoo!, LinkedIn), such
          service sends us your username and the email address associated with
          the credentials you've used. We neither control nor take any
          responsibility for the way third parties provide information about you
          and/or process your personal data.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          How personal information is used
        </h3>
        <p className="mb-5">
          We use personal data in various ways that are necessary to provide the
          services you intend to use, certain legitimate interests, and as a
          necessity in order to comply with applicable law, as further described
          below.
          <br /> We do not generally rely on your consent to allow us to process
          your personal data if there is another lawful ground available. If we
          do rely on your consent, we will make this clear to you at that time.
        </p>
        <h3 className="font-bold tx-lg mb-3">Profile</h3>
        <p className="mb-5">
          A profile is a set of information for each individual user that
          details his/her viewing preferences. User settings (chart settings,
          toolbars, buttons, etc.) are kept solely for the purpose of
          customizing the user’s experience when using the Website, applications
          or user accounts. We do not share private profile settings with any
          third parties.
          <br />
          Note that when you create an account, other users or visitors may
          access your public profile and see any information you have made
          publicly available about yourself.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          User account and profile operations
        </h3>
        <p className="mb-5">
          We use your contact details, such as username, email address, or phone
          number, in the following ways:
          <ul className="list-disc list-inside">
            <li>
              to authenticate your user account, ensure its security along with
              the security of our services, and to prevent spam, fraud, and
              abuse;
            </li>
            <li>to acknowledge, confirm, and deal with your user account;</li>
            <li>
              to send all new users a welcome activation email to verify their
              email address;
            </li>
            <li>
              (For Paid Users) to provide you with subscription services and
              contact you regarding your use of such services. This is necessary
              for us to implement your requests; and
            </li>
            <li>
              Paid Users will also receive a notification email from PayPal if
              there are any issues regarding billing their cards for auto-renew
              subscriptions. Users cannot opt out of these messages, though they
              can delete their account.
            </li>
          </ul>
        </p>
        <h3 className="font-bold tx-lg mb-3">User account deleting</h3>
        <p className="mb-5">
          You may refuse to use our Website and/or application and may ask us to
          delete your account in the Profile settings. Your account will be
          deleted after 30 days. During this time, you can stop the deletion
          process at any time.
          <br />
          Please note that if you have requested your account to be deleted, we
          will delete the subsequent personal data you have supplied us. However
          some data, such as published ideas/scripts and messages sent to other
          users, will be saved as they have already integrated into our system.
          This data must be stored to maintain the integrity of the platform, as
          well as for legitimate business processes, including audits and
          security purposes.
          <br />
          Note that search engines, as well as third parties, can keep copies of
          your publicly available information once your account has been
          deleted. It should also be noted that published ideas will remain on
          the site and messages sent to other users cannot be deleted.
        </p>
        <h3 className="font-bold tx-lg mb-3">Marketing</h3>
        <p className="mb-5">
          We may send you marketing emails about our products or services that
          are similar to the products or services you are subscribed to,
          including information about events and other promotions we feel may
          interest you. This is unless you have indicated to us that you do not
          wish to receive communications in this manner. We will send you other
          promotional information by email only with your consent, which was
          given at the time you provided us with your personal data. Users can
          opt out of receiving marketing communications at any time by clicking
          "unsubscribe" in one of the emails (for more information on your
          rights, please see the "
          <a className="text-[#2aa8ff]" href="">
            User rights
          </a>
          " section below).
        </p>
        <h3 className="font-bold tx-lg mb-3">Social Notifications</h3>
        <p className="mb-5">
          We can notify you via email about new users who have followed you,
          liked an idea, new ideas of users that you follow, and so on. You can
          refuse to receive such notifications at any time by adjusting your
          Profile settings.
        </p>
        <h3 className="font-bold tx-lg mb-3">Service-Related Announcements</h3>
        <p className="mb-5">
          On rare occasions, it may be necessary to send out service-related
          announcements. For instance, if our service is interrupted for a
          prolonged period or a major functionality upgrade is released, we
          might send all users an email message.
        </p>
        <h3 className="font-bold tx-lg mb-3">Customer Service</h3>
        <p className="mb-5">
          When you open a support ticket, we use your contact details as well as
          information about your device, server logs, a description of the
          problem, along with any other supporting materials (videos,
          screenshots, etc.) to help resolve the issue(s).
        </p>
        <h3 className="font-bold tx-lg mb-3">
          When would we share personal information
        </h3>
        <p className="mb-5">
          We share your personal data with third parties in the following
          situations:
          <ul className="list-disc list-inside">
            <li className="mt-3">
              <span className="font-bold">Service providers</span>:
              TraderDeepDive, like many businesses, occasionally engages with
              selected third parties who act on our behalf to support our
              operations, such as (i) card processing or payment services (see
              the point below headed "Payment information"), (ii) IT suppliers
              and contractors (i.e. data hosting providers or delivery partners)
              as necessary to provide IT support and enable us to provide
              subscription services and other goods/services available on this
              Website or to users, (iii) web and mobile analytics providers,
              (iv) providers of digital advertising services, and (v) providers
              of marketing and sales software solutions. Pursuant to our
              instructions, these parties may access, process or store your
              personal data in the course of performing their duties to us and
              solely in order to perform the services we have hired them to
              provide.
            </li>
            <li className="mt-3">
              <span className="font-bold">Payment information</span>: Paid Users
              must provide payment information (name, payment card information
              or payment account information). This information is used for
              billing purposes only and is processed by our payment processors.
              When you are making a payment, we do not have access to your
              payment card information. Should we have any issues with
              processing an order, the email address you have provided will be
              used to contact you. For more information on what type of
              information is collected by our payment processors, please view
              their privacy policies:
              <ul className="list-disc list-inside pl-6">
                <li className="text-[#2aa8ff]">
                  <a href="">PayPal Privacy Statement</a>
                </li>
                <li className="text-[#2aa8ff]">
                  <a href="">Braintree Privacy Statement</a>
                </li>
                <li className="text-[#2aa8ff]">
                  <a href="">Coinbase Commerce Privacy Policy</a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <span className="font-bold">
                TraderDeepDive affiliated businesses
              </span>
              : In order to provide the services you request from us, our
              affiliated businesses may access and process the information which
              we collect from you for the purposes described above, including
              offering products and services to you. Our affiliated businesses
              will only use your data for the purposes for which we originally
              collected said data.
            </li>
            <li className="mt-3">
              <span className="font-bold">Analytics providers</span>: We may use
              third-party service providers to monitor and analyze the use of
              our services and mobile applications. We use this information to
              analyze and improve the work of our services and mobile
              applications.
              <ul className="list-disc list-inside pl-6">
                <li>
                  We may use Google Analytics as a web analytics service on the
                  Website and in conjunction with the widgets we provide. For
                  more information on Google Analytics privacy practices, you
                  can check here.
                </li>
                <li>
                  Analytics services for mobile applications that we may use:
                  <ul className="list-disc list-inside pl-7">
                    <li>
                      Firebase — a development and analytics platform provided
                      by Google. For more information on what type of
                      information is collected, please visit the{" "}
                      <a className="text-[#2aa8ff]" href="">
                        Google Privacy web page
                      </a>
                      .
                    </li>
                    <li>
                      Flurry Analytics — provides us with tools and resources
                      for understanding our mobile application users’ behaviour.
                      For more information on the handling of user data on
                      Flurry Analytics, please see their{" "}
                      <a className="text-[#2aa8ff]" href="">
                        Privacy Policy
                      </a>
                      .
                    </li>
                    <li>
                      Amplitude — an analytics service for mobile apps. For more
                      information on the privacy practices of Amplitude, please
                      see their{" "}
                      <a className="text-[#2aa8ff]" href="">
                        Amplitude Terms
                      </a>
                      .
                    </li>
                    <li>
                      Visual Studio App Center — owned by Microsoft. Their
                      applicable data protection provisions can be reviewed
                      under the{" "}
                      <a className="text-[#2aa8ff]" href="">
                        Microsoft Privacy Statement
                      </a>
                      .
                    </li>
                    <li>
                      AppsFlyer — analytics services to measure and analyze the
                      effectiveness of our marketing and advertising campaigns,
                      as well as certain events and actions in the application.
                      For more information on how AppsFlyer works and what data
                      it collects, please see{" "}
                      <a className="text-[#2aa8ff]" href="">
                        AppsFlyer Services Privacy Policy
                      </a>
                      .
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <span className="font-bold">Business transfers</span>: If we sell
              our business or our company assets are acquired by a third party,
              personal data held by us about our general account users,
              subscription account users or customers may be one of the
              transferred assets.
            </li>
            <li className="mt-3">
              <span className="font-bold">
                Administrative and legal reasons
              </span>
              : If we need to disclose your personal data (i) to comply with a
              legal obligation and/or judicial or regulatory proceedings, a
              court order or other legal process, (ii) to enforce our Terms of
              Use, House Rules or other applicable contract terms that you are
              subject to, or (iii) to protect us or our contractors against loss
              or damage. This may include, but is not limited to, exchanging
              information with the police, courts or law enforcement
              organisations.
            </li>
            <li className="mt-3">
              <span className="font-bold">Advertising</span>: We display
              advertising on the Website and may use remarketing and tracking
              features. Remarketing features allow us to display advertising in
              a more targeted manner in order to present advertisements of
              interest to users, based on their activity on other websites.
              Tracking features allow us to collect information about
              impressions, ad clicks and certain actions that users complete
              through our Website. This data also helps us evaluate the
              performance of ad campaigns. Note that we collect pseudonymous
              data only. We may use the following services for advertising,
              remarketing, and tracking purposes:
              <ul className="list-disc list-inside pl-6">
                <li>
                  Google Ad Manager and Google Ads — they help us serve and
                  measure the success of ads on our site. For more information
                  about how Google uses data, please refer to their{" "}
                  <a className="text-[#2aa8ff]" href="">
                    Privacy & Terms
                  </a>{" "}
                  document as well as{" "}
                  <a className="text-[#2aa8ff]" href="">
                    Google’s Privacy Policy
                  </a>
                  . You can opt out of this by visiting the{" "}
                  <a className="text-[#2aa8ff]" href="">
                    Network Advertising Initiative opt-out page
                  </a>{" "}
                  or by turning off the personalization of Google ads via their{" "}
                  <a className="text-[#2aa8ff]" href="">
                    Ad Settings page
                  </a>
                  .
                </li>
                <li>
                  Facebook pixel — allows us to measure, optimise, and build
                  audiences for our advertising campaigns.
                  <br />
                  You can learn more about Facebook’s data policy here. You can
                  manage your personal settings for advertisements on Facebook
                  at Your Ad Preferences. In case you don’t have a Facebook
                  account, you can use Your Online Choices website or DAA's
                  WebChoices Tool to manage your ad experience.
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <p className="mb-5">
          Twitter Conversion Tracking (Twitter Pixel) — helps us to measure our
          return on ad expenditure.
          <ul className="list-disc list-inside">
            <li className="mt-3">
              For more information about Twitter data processing, please see
              their{" "}
              <a className="text-[#2aa8ff]" href="">
                Privacy policy
              </a>
              . You can adjust the settings in your personal Twitter profile and
              opt to receive advertising. In case you don’t have a Twitter
              account, you can use Your{" "}
              <a className="text-[#2aa8ff]" href="">
                Online Choices website
              </a>
              or
              <a className="text-[#2aa8ff]" href="">
                DAA's WebChoices Tool
              </a>{" "}
              to manage your ad experience.
            </li>
          </ul>
        </p>
        <p className="mb-5">
          Note that we do not share any personal information with our
          advertisers. They can only access general statistics that include the
          amount of impressions their ads have generated as well as clicks.
        </p>
        <p className="mb-5">
          Google reCAPTCHA is used to check whether data has been entered by a
          person or by an automated program. We use this service to protect our
          services from spam, fraud and abuse. reCAPTCHA analyses the behavior
          of the visitor using various characteristics and evaluates various
          information for analysis purposes (e.g. IP address, visit duration, or
          the user’s mouse clicks). This analysis begins automatically, as soon
          as the website visitor accesses the website, and runs in the
          background. Visitors are not informed that an analysis is being
          performed. The data recorded during analysis is forwarded to Google.
          More information on Google reCAPTCHA and the{" "}
          <a className="text-[#2aa8ff]" href="">
            Google Privacy Policy
          </a>{" "}
          can be found under the following links: Google’s Privacy Policy and{" "}
          <a className="text-[#2aa8ff]" href="">
            What is reCAPTCHA?
          </a>
          .
        </p>
        <h3 className="font-bold tx-lg mb-3">Public information on our site</h3>
        <h3 className="font-bold tx-lg mb-3">Public Profile</h3>
        <p className="mb-5">
          When you create your profile on our Service, other users or visitors
          may access your public profile and see any information you have made
          available about yourself. When browsing for trading ideas, they will
          only be able to view your market information (i.e. published ideas and
          scripts, markets allocation, top mentioned Symbols, etc.), social
          information (i.e. followers and following lists along with the ideas
          that you follow and comment on), contact information (i.e. your About
          section, location, Twitter, website, etc.), your community status
          (i.e. Moderator or PRO badges, statistical information such as
          reputation points, views, likes, followers, registration date, as well
          your last visit date). Your email address, however, will not be
          visible (unless you choose to make it visible).
        </p>
        <h3 className="font-bold tx-lg mb-3">Public content</h3>
        <p className="mb-5">
          Our Service allows those with a registered user account to share their
          charts with indicators and comments that can be added, their ideas,
          scripts, streams and other content, with the rest of the internet via
          our publish features.
          <br />
          By using a publish features, you grant us an irrevocable, perpetual,
          and royalty-free license to publish and disclose the content, as well
          as the username of the author, which makes you identifiable.
          <br />
          You can also publish your content as "private". This means that the
          content will not be displayed in your profile or your lists of ideas,
          scripts, streams, etc., nor will it be indexed by search engines.
          However, users who have a direct link to your content will be able to
          view it. Note that you will control over who/which users have access
          to a link.
          <br />
          When you comment on any content, we also publish certain information
          about your comment: including date, time and application (such as
          "TraderDeepDive for iOS" if you commented on it from one of our
          applications).
        </p>
        <h3 className="font-bold tx-lg mb-3">Chats and Private Messages</h3>
        <p className="mb-5">
          When you communicate with other users in public and private chats, we
          store and process your messages and any related information. We check
          links to make sure there is no malicious software or content as well
          as to detect spam and prohibited images/text. When you use private
          messages to communicate, please keep in mind that the recipients have
          a copy of your correspondence as well. This will continue to be the
          case even if you delete such correspondence from your account.
          Recipients can copy, store and/or reshare these messages. Be
          constantly vigilant of this.
        </p>
        <h3 className="font-bold tx-lg mb-3">Security of personal data</h3>
        <p className="mb-5">
          We use technical and organizational safeguards to protect your
          personal data and require third parties with whom we work to do the
          same.
          <br />
          We use Transport Layer Security (TLS) encryption technology in order
          to protect certain information that you submit to us. This technology
          protects you from having your information intercepted by anyone while
          it is being transmitted to TraderDeepDive or payment processor. While
          on a secure page, such as our order form, the "lock" icon in the
          browser window is displayed, confirming that a secure and encrypted
          connection has been established with the Website. We work hard to
          ensure that our Service is secure and that we meet industry standards.
          We also use other safeguards, such as firewalls, authentication
          systems (i.e. passwords, and personal identification numbers), and
          access control mechanisms to control unauthorized access to systems
          and data. If you have chosen to create an account, you are responsible
          for doing everything you reasonably can to keep your access details
          secret. You must not share these details with anyone else.
          <br />
          We also do our best to protect user information offline. All of our
          users' personal information is restricted to our offices. Only
          employees who need to see the information to perform their jobs are
          allowed to access it.
          <br />
          The servers that store personal data are located in a secure
          environment in a locked facility.
          <br />
          We are constantly improving the ways we secure, store, and process the
          data we collect, including the addition of physical security measures
          that help us counter unauthorized access to our systems. However, no
          method of electronic transmission or storage is 100% secure.
          Therefore, we cannot guarantee its absolute security.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          Children and sensitive personal data
        </h3>
        <p className="mb-5">
          This Website is not directed to wards children who are under the age
          of 18. We do not knowingly contact or collect personal information
          from children below the age of 18 years, or sensitive personal data
          ("racial or ethnic origin, political opinions, religious or
          philosophical beliefs, trade union membership, the processing of
          genetic data, biometric data for the purpose of uniquely identifying a
          natural person, data concerning health or a natural person’s sex life
          or sexual orientation," etc.). Please consult Art. 9 GDPR for more
          information. If you believe we have inadvertently collected such
          information, please contact us immediately so that we can either
          obtain special consent or delete the information.
        </p>
        <h3 className="font-bold tx-lg mb-3">Third Party Sites</h3>
        <h3 className="font-bold tx-lg mb-3">Links to other sites</h3>
        <p className="mb-5">
          At our discretion we may add links (web links) to other websites from
          our Website. These websites can be run by third parties with separate
          and independent privacy policies. We, therefore, have no
          responsibility nor are we liable for any content, activities or
          privacy policies of these linked sites. We suggest you read the
          privacy policy of each and every site that you visit.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          EEA and UK users’ specific rights
        </h3>
        <p className="mb-5">
          Individuals subject to European and United Kingdom ("UK") data
          protection laws may have data subject rights in relation to the
          personal data we hold on them (described in detail below). This may,
          in and of itself, be subject to limitations and/or restrictions.
          <br />
          If you are located in the EEA or UK, please contact us to exercise
          your rights.
        </p>
        <p className="mb-5">
          Accessing data
          <br />
          If prompted, we will confirm whether or not we are processing your
          personal data and if so, we will provide you with a copy of that
          personal data along with any other pertinent details. If you require
          additional copies, we may need to charge a reasonable fee, but this
          can be discussed and depends on the situation.
        </p>
        <p className="mb-5">
          Restricting the processing of personal data
          <br />
          You may ask us to restrict or ‘block’ the processing of your personal
          data in certain circumstances, for example, if you contest the
          accuracy of the data or object to us processing it. We will notify you
          before we lift any restriction on processing. If we share your
          personal data with others, we will notify them of the restriction
          wherever possible. If prompted, and if it is possible and lawful to do
          so, we will also notify you with whom we have shared or will share
          your personal data so you can contact them directly.
        </p>
        <h3 className="font-bold tx-lg mb-3">Objections</h3>
        <p className="mb-5">
          You may:
          <ul className="list-disc list-inside">
            <li>
              ask us to stop processing your personal data at any time, and we
              will do so. If we are relying on a legitimate interest to process
              your personal data, then it should not be a problem unless we
              demonstrate compelling legitimate grounds for processing;
            </li>
            <li>
              object to our processing of your data for the purposes of direct
              marketing at any time. This can be done by clicking the
              "unsubscribe" button in our marketing emails; and
            </li>
          </ul>
        </p>
        <h3 className="font-bold tx-lg mb-3">Withdrawal of consent</h3>
        <p className="mb-5">
          If we rely on your consent to process your personal data, you have the
          right to withdraw that consent at any time. This will not affect the
          lawfulness with which we process your data before receiving notice of
          your wish to withdraw your consent. We emphasize that we do not
          generally rely on your consent to allow us to process your personal
          data if there is another lawful ground available. If we do rely on
          your consent, we will make this clear to you at that time.
        </p>
        <h3 className="font-bold tx-lg mb-3">Viewing and correcting data</h3>
        <p className="mb-5">
          You have the right to have inaccurate personal data rectified or
          completed if it is incomplete. If we share your personal data with
          others, we will notify them of any corrections made whenever possible.
          If prompted, and where possible and lawful to do so, we will also
          notify you with whom we have shared your personal data so you can
          contact them directly if need be.
        </p>
        <h3 className="font-bold tx-lg mb-3">Deleting data</h3>
        <p className="mb-5">
          You have the right to refuse to use our Services and may ask us to
          delete or remove your personal data in certain circumstances. If we
          share your data with others, we will notify them of the edits wherever
          possible. If prompted, and wherever possible and lawful to do so, we
          will also notify you with whom we have shared your personal data so
          you can contact them directly if need be.
          <br />
          Please see the "User account deleting" section for more details.
        </p>
        <h3 className="font-bold tx-lg mb-3">Data retention</h3>
        <p className="mb-5">
          We will keep your personal data (1) until you decide to delete your
          account (upon request), or (2) as required by law or as necessary for
          legitimate business purposes (i.e. for tax, legal, accounting, fraud,
          or abuse prevention, and/or other purposes). This data can be stored
          even after an account is deleted.
          <br />
          Upon expiration of the applicable retention period, we will securely
          destroy your personal data in accordance with applicable laws and
          regulations. In some circumstances we may anonymize your personal data
          so that it can no longer be associated with you. In this case, such
          data is no longer considered personal.
          <br />
          If you consent to receive marketing communications, we will keep your
          data until you unsubscribe, which is possible via the ‘unsubscribe’
          button at the end of our marketing emails. Additional methods to
          unsubscribe may be added in the future.
        </p>
        <h3 className="font-bold tx-lg mb-3">Data portability</h3>
        <p className="mb-5">
          You have the right to obtain your personal data from us, which that
          you consented to give us or that was provided to us as necessary in
          connection with our contract with you. We will give you your personal
          data in a structured, commonly used, and machine-readable format. You
          may reuse it elsewhere if you so wish.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          Lodge a complaint with the data protection authority
        </h3>
        <p className="mb-5">
          If you have concerns about our privacy practices, including the way we
          handle or have your personal data, you can report it to any competent
          data protection authority of an European Union member state that is
          authorised to hear such concerns (you may find European Union Data
          Protection Authorities’ contact information{" "}
          <a className="text-[#2aa8ff]" href="">
            here
          </a>
          ) or to the
          <a className="text-[#2aa8ff]" href="">
            Information Commissioner's Office
          </a>{" "}
          (ICO), the UK supervisory authority for data protection issues. If you
          wish to exercise any of these rights, please contact us. Note that we
          may need to ask you for further information to verify your identity
          before we can respond to any request.
        </p>
        <h3 className="font-bold tx-lg mb-3">International data transfers</h3>
        <p className="mb-5">
          TraderDeepDive Inc. is based in the United Kingdom. The information
          collected through Services will be stored on servers located in the
          European Union, and other destinations (including outside the EEA), to
          our service providers and affiliated businesses for the purposes
          described above. This is necessary to enable you to navigate and use
          our Services. The data may be transmitted to our service providers and
          affiliates supporting our business operations (described above).
          <br />
          Note that the countries concerned may not provide the same legal
          standards for protection of your personal data that you have in the
          EEA. If we transfer your personal data to countries outside of your
          country, we will take the necessary steps to ensure your information
          receives an adequate level of security protection where it is
          processed and that your rights continue to be protected.
          <br />
          If you would like to receive more information on the safeguards that
          we implement, please contact us.
        </p>
        <h3 className="font-bold tx-lg mb-3">
          California users' specific rights
        </h3>
        <p className="mb-5">
          If you are an eligible California resident, the California Consumer
          Privacy Act ("CCPA") provides you with specific rights with respect to
          our collection and use of your personal information. You have the
          following rights under the CCPA:
          <ul className="list-disc list-inside">
            <li>
              Right to request that we disclose certain information to you about
              our collection and use of your personal information over the past
              12 months. The list of categories of personal information
              collected and disclosed about consumers are enlisted in the
              section 'Personal data that we collect' and the list of categories
              of third parties to whom the personal information may be disclosed
              are enlisted in the section 'When would we share personal
              information'. Please contact us to exercise a data portability
              request. Separately, we do not sell your personal information.
            </li>
            <li>
              Right to request delete personal information we have collected
              from you. Please see the “User account deleting” section for more
              details.
            </li>
            <li>
              Right not to be discriminated against regarding pricing and
              services as you exercise any of your rights under the CCPA. We do
              not offer consumers financial incentives, price differentials, or
              services in exchange for selling a consumer's personal
              information.
            </li>
          </ul>
        </p>
        <h3 className="font-bold tx-lg mb-3">Contact information</h3>
        <p className="mb-5">
          If you have any questions or suggestions regarding personal data
          processing, please contact us at hello@traderdeepdive.com
        </p>
      </div>
    </div>
  );
}
