import { Link } from "react-router-dom";
import PolicyHeader from "../components/desktop/PolicyHeader";

export default function TermsOfUse() {
  const url = "assets/imgs/desktop/main_bg.jpg";
  return (
    <div>
      <div
        className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <PolicyHeader />
      <div className="mx-32 mb-20">
        <h2 className="font-bold text-2xl mb-5">
          Terms of Use, Policies and Disclaimers
        </h2>
        <p className="mb-5">
          Your affirmative act of using our website located at{" "}
          <a className="text-[#2aa8ff]" href="https://www.Traderdeepdive.com">
            www.Traderdeepdive.com
          </a>{" "}
          (and all associated sites linked to it) or services ("Traderdeepdive")
          signifies that you agree to the following terms and conditions of use
          ("Terms of Use"). If you do not agree, do not use Traderdeepdive.
          Traderdeepdive is the property of Traderdeepdive Inc. ("us", "we" or
          "our").
        </p>
        <h3 className="font-bold text-lg mb-3">
          1. Changes to the terms of use
        </h3>
        <p className="mb-5">
          We may change these Terms of Use at any time. If you continue to use
          Traderdeepdive after we post changes to these Terms of Use, you are
          signifying your acceptance of the new terms. You will always have
          access to our Terms of Use and will be able to check it at any time.
          By reloading this page, you will have the most up-to-date version
          available to Traderdeepdive users.
        </p>
        <h3 className="font-bold text-lg mb-3">2. Changes to Traderdeepdive</h3>
        <p className="mb-5">
          We may discontinue or change any service or feature on Traderdeepdive
          at any time without notice.{" "}
        </p>
        <h3 className="font-bold text-lg mb-3">
          3. Ownership of information; License to use Traderdeepdive;
          redistribution of data
        </h3>
        <p className="mb-5">
          Unless otherwise noted, all rights, titles, and interests in
          Traderdeepdive, and all information made available through
          Traderdeepdive or our services, in all languages, formats, and media
          throughout the world, including, but not limited to, all copyrights
          and trademarks therein, are the exclusive property of Traderdeepdive,
          our affiliates or our Data Providers, as defined in section 6
          (disclaimer regarding content) below.
          <br />
          All rights, title and interest in and to any data or/and other
          information provided by Interactive Data (IDCO), and all such
          data/information made available by Interactive Data (IDCO) through
          Traderdeepdive or our services, in all languages, formats and media
          throughout the world, including all copyrights and trademarks therein,
          are the property of Interactive Data (IDCO), our affiliates or our
          Data Providers (as applicable). You may not use any data mining,
          robots or similar data gathering and extraction tools on the
          Traderdeepdive content, frame any portion of Traderdeepdive or its
          content, sublicense, assign, transfer, sell, loan, or otherwise
          distribute for payment the Traderdeepdive content without our prior
          written consent. You may not circumvent any mechanisms included in the
          Traderdeepdive content for preventing the unauthorized reproduction or
          distribution of the Traderdeepdive content. For additional information
          on commercial and partnership inquiries with us, please see the {" "}
          <a className="text-[#2aa8ff]" href="https://discord.gg/RgjDpBmbFw)" target={"_blank"}>
            Contacts page
          </a>
          .
          <br />
          Except as otherwise expressly permitted by the preceding paragraph,
          you agree not to sell any of the services or materials in any manner
          or for any purposes, without the prior expressed written consent of
          Traderdeepdive and/or our Data Providers. In addition, you shall not,
          without the prior expressed written consent of Traderdeepdive and the
          relevant Data Providers, make copies of any of the software or
          documentation that may be provided, electronically or otherwise,
          including, but not limited to, translating, decompiling, disassembling
          or creating derivative works.
          <br />
          Except as otherwise expressly permitted by additional agreement, we do
          not permit commercial usage of any of our services or APIs. We make no
          warranty and assume no obligation or liability for third party
          services or software. Please see section 19 (third party software)
          below for further information.
        </p>
        <h3 className="font-bold text-lg mb-3">4. Attribution</h3>
        <p className="mb-5">
          Traderdeepdive grants all users of Traderdeepdive.com, and all other
          available versions of the site, to use snapshots of Traderdeepdive
          charts in analysis, press releases, books, articles, blog posts and
          other publications. In addition, Traderdeepdive grants the use of all
          previously mentioned materials in education sessions, the display of
          Traderdeepdive charts during video broadcasts, which includes
          overviews, news, analytics and otherwise use or promote Traderdeepdive
          charts or any products from the Traderdeepdive website on the
          condition that Traderdeepdive attribution is clearly visible at all
          times when such charts and products are used.
        </p>
        <p className="mb-5">
          Attribution must include a reference to Traderdeepdive, including, but
          not limited to, those described herein.
        </p>
        <p className="mb-5">
          Use of Traderdeepdive charts during video or other promotions where
          Traderdeepdive attribution is not visible, must include a description
          of the product used therein. For instance: "Charting used for this
          analysis is provided by Traderdeepdive," or simply "Charts by
          Traderdeepdive." Font size should not be less than 10 PT = 13PX =
          3.4MM.
          <br />
          You can use the "Snapshot" button in the top toolbar of the chart to
          instantly create a picture file of your current chart. Traderdeepdive
          will automatically take a snapshot with all required attributions and
          provide a link where you can view your chart, download it or share it.
          The use of any Traderdeepdive products outside the Traderdeepdive
          website, without a proper attribution of Traderdeepdive, is not
          allowed. This extends to any tools (such as widgets) obtained on the
          Traderdeepdive website and utilized on the outside resources, where
          attribution should remain as was originally designed and intended.
          Users who disobey this attribution rule herein may be banned
          permanently, and other legal actions may be taken to ensure
          compliance. This includes, but is not limited to, cease-and-desist
          warnings, court orders, injunctions, fines, damages relief, and so on.
        </p>
        <h3 className="font-bold text-lg mb-3">
          5. Third party sites and advertisers
        </h3>
        <p className="mb-5">
          Traderdeepdive may include links to third party websites. Some of
          these sites may contain materials that are objectionable, unlawful, or
          inaccurate. You agree that Traderdeepdive shall not be held liable for
          any trading activities or other activities that occur on any website
          you access through links on Traderdeepdive. We provide these links as
          a convenience, and do not endorse the content or services offered by
          these other sites. Any dealings that you have with advertisers found
          on Traderdeepdive are between you and the advertiser and you
          acknowledge and agree that we are not liable for any loss or claim you
          may have against an advertiser.
          <br />
          Unauthorized soliciting on Traderdeepdive is strictly prohibited and
          may result in penalties, including, but not limited to, temporary or
          permanent bans of the account found in violation, and any appropriate
          and available legal action for monetary and other damages.
        </p>
        <h3 className="font-bold text-lg mb-3">
          6. Disclaimer regarding content
        </h3>
        <p className="mb-5">
          Traderdeepdive cannot and does not represent or guarantee that any of
          the information available through our services or on Traderdeepdive is
          accurate, reliable, current, complete or appropriate for your needs.
          Various information available through our services or on
          Traderdeepdive may be specially obtained by Traderdeepdive from
          professional businesses or organizations, such as exchanges, news
          providers, market data providers and other content providers (e.g.
          Cboe BZX and possibly other established financial exchanges such as
          the New York Stock Exchange, NASDAQ, New York Mercantile Exchange and
          Dow Jones), who are believed to be sources of reliable information
          (collectively, the "Data Providers"). Nevertheless, due to various
          factors — including the inherent possibility of human and mechanical
          error — the accuracy, completeness, timeliness, results obtained from
          use, and correct sequencing of information available through our
          services and website are not and cannot be guaranteed by
          Traderdeepdive. We make no warranty and assume no obligation or
          liability for scripts, indicators, ideas and other content of third
          parties. Your use of any third-party scripts, indicators, ideas and
          other content is at your sole risk.
        </p>
        <h3 className="font-bold text-lg mb-3">
          7. Disclaimer regarding investment decisions and trading
        </h3>
        <p className="mb-5">
          Decisions to buy, sell, hold or trade in securities, commodities and
          other investments involve risk and are best made based on the advice
          of qualified financial professionals. Any trading in securities or
          other investments involves a risk of substantial losses. The practice
          of "Day Trading" involves particularly high risks and can cause you to
          lose substantial sums of money. Before undertaking any trading
          program, you should consult a qualified financial professional. Please
          consider carefully whether such trading is suitable for you in light
          of your financial condition and ability to bear financial risks. Under
          no circumstances shall we be liable for any loss or damage you or
          anyone else incurs as a result of any trading or investment activity
          that you or anyone else engages in based on any information or
          material you receive through Traderdeepdive or our services.
        </p>
        <h3 className="font-bold text-lg mb-3">
          8. Disclaimer regarding hypothetical performance results
        </h3>
        <p className="mb-5">
          Hypothetical performance results have many inherent limitations, some
          of which are mentioned below. No representation is being made that any
          account will or is likely to achieve profits or losses similar to
          those shown. In fact, there are frequently sharp differences between
          hypothetical performance results and actual results subsequently
          achieved by any particular trading program.
          <br />
          One of the limitations of hypothetical performance results is that
          they are generally prepared with the benefit of hindsight. In
          addition, hypothetical trading does not involve financial risk and no
          hypothetical trading record can completely account for the impact of
          financial risk in actual trading. For example the ability to withstand
          losses or to adhere to a particular trading program in spite of the
          trading losses are material points, which can also adversely affect
          trading results. There are numerous other factors related to the
          market in general or to the implementation of any specific trading
          program which cannot be fully accounted for in the preparation of
          hypothetical performance results and all of which can adversely affect
          actual trading results.
        </p>
        <h3 className="font-bold text-lg mb-3">9. Registered users</h3>
        <p className="mb-5">
          In consideration of your use of the Traderdeepdive website, you
          represent that you are of legal age to form a binding contract and are
          not a person barred from receiving Traderdeepdive services under the
          laws of the United States or other applicable jurisdiction. You also
          agree to: (a) provide true, accurate, current and complete information
          about yourself as prompted by the Traderdeepdive's registration form
          (the "Registration Data") and (b) maintain and promptly update the
          Registration Data to keep it true, accurate, current and complete. If
          you provide any information that is untrue, inaccurate, not current or
          incomplete, or Traderdeepdive has reasonable grounds to suspect that
          such information is untrue, inaccurate, not current or incomplete,
          Traderdeepdive has the right to suspend or terminate your account and
          refuse any and all current or future use of the Traderdeepdive
          services (or any portion thereof).
          <br />
          You represent and warrant that you have all intellectual property
          rights, including all necessary patent, trademark, trade secret,
          copyright or other proprietary rights, in and to your content. If you
          use third-party materials, you represent and warrant that you have the
          right to distribute third-party material in the content. You agree
          that you will not submit material that is copyrighted, protected by
          trade secret or otherwise subject to third party proprietary rights,
          including patent, privacy and publicity rights, unless you are the
          owner of such rights or have permission from their rightful owner to
          submit the material.
          <br />
          We may remove your content without notice if we reasonably believe
          that you're in violation of our Terms of Use.
        </p>
        <h3 className="font-bold text-lg mb-3">10. Access and security</h3>
        <p className="mb-5">
          You accept responsibility for the confidentiality and use of any
          username and email address that use to register for your access to and
          use of our services. You are responsible for maintaining the
          confidentiality of your password and account and are fully responsible
          for all activities that occur under your password or account. You
          agree to (a) immediately notify Traderdeepdive of any unauthorized use
          of your password or account or any other breach of security, and (b)
          ensure that you exit from your account at the end of each session.
          Traderdeepdive cannot and will not be liable for any loss or damage
          arising from your failure to comply.
          <br />
          Traderdeepdive considers private information on the site (source code
          of protected or invite-only scripts, etc.) to be confidential to you.
          Traderdeepdive protects such private information from unauthorized
          use, access, or disclosure in the same manner that it protects
          personal data (please refer to our Privacy Policy for more
          information).
        </p>
        <h3 className="font-bold text-lg mb-3">
          11. Payment and cancellation of service
        </h3>
        <p className="mb-5">
          <ol className="list-decimal list-inside">
            <li>
              By ordering any subscription on{" "}
              <a
                className="text-[#2aa8ff]"
                href="https://www.Traderdeepdive.com"
              >
                www.Traderdeepdive.com
              </a>{" "}
              you confirm that you have read and accepted our Terms of Use and
              you authorize Traderdeepdive to automatically charge your bank
              card or PayPal account according to the billing period manually
              selected by you.
            </li>
            <li>
              The service is billed in advance on a monthly, annual, or 2-year
              basis. There will be no refunds or credits for partial months of
              service, or refunds for months unused with an open user account.
              If auto renewal fails for an annual plan you will automatically be
              switched to a monthly plan.
            </li>
            <li>
              All billing is recurring, which means you will continue to get
              billed until you cancel your subscription. You are solely
              responsible for properly cancelling your Traderdeepdive
              subscription. An email request or support ticket asking for your
              subscription to be cancelled is not considered cancellation. You
              may cancel your subscription at any time by visiting the billing
              section of your{" "}
              <a className="text-[#2aa8ff]" href="">
                Profile Settings
              </a>{" "}
              page.
            </li>
            <li>
              If you cancel the service before the end of your current paid up
              period, your subscription will remain active until the next due
              date. After the due date, if no payment received, your
              subscription will be stopped.
            </li>
            <li>
              We do not offer refunds for initial payments. If you order the
              service for the first time, please make sure that the order is
              correct before the payment is made.
            </li>
            <li>
              We do not offer refunds for recurring monthly payments. If you
              have been billed for automatic monthly renewal of the Service, you
              can cancel the subscription to avoid billing for next months.
            </li>
            <li>
              We do not offer refunds for upgrades to a more expensive plan or a
              longer billing cycle. Remaining days are converted into an
              equivalent value of days on the new subscription.
            </li>
            <li>
              We offer refunds for recurring annual and 2-year payments on
              demand. If you have been billed for automatic annual and 2-year
              renewal of the service, you have 14 calendar days (after the
              payment was made){" "}
                to contact our support team
              . If you don't do this, Traderdeepdive assumes that renewal of the
              service is expected and the payment will not be refunded.
            </li>
            <li>
              Refunds are available only after an automatic deduction for annual
              payments within 14 calendar days after the payment was made.
            </li>
            <li>
              Our moderators are official Traderdeepdive representatives, with
              the authority to warn or ban users (including those with a paid
              subscription) when they do not abide by the{" "}
              <Link className="text-[#2aa8ff]" to="/houserules">
                House Rules
              </Link>
              . We do not offer refunds in case you are banned from publishing
              content and interacting with others because your paid subscription
              and all of its data and/or features are still available during any
              such ban.
            </li>
            <li>
              Traderdeepdive, Inc. is registered for GST purposes in Australia.
            </li>
            <li>
              Traderdeepdive, Inc. is registered for GST purposes in India.
            </li>
          </ol>
        </p>
        <h3 className="font-bold text-lg mb-3">
          12. Feedback to Traderdeepdive
        </h3>
        <p className="mb-5">
          By submitting ideas, content, suggestions, documents, and/or proposals
          ("Contributions") to Traderdeepdive through our contact or{" "}
          <a className="text-[#2aa8ff]" href="https://discord.gg/YjZxnjPt9z" target={"_blank"}>
            feedback discord channels
          </a>{" "}
          you acknowledge and agree that: (a) your Contributions do not contain
          confidential or proprietary information; (b) Traderdeepdive is not
          under any obligation of confidentiality, expressed or implied, with
          respect to the Contributions; (c) Traderdeepdive shall be entitled to
          use or disclose (or choose not to use or disclose) such Contributions
          for any purpose, in any way, in any media worldwide; (d)
          Traderdeepdive may have something similar to the Contributions already
          under consideration or in development; (e) your Contributions
          automatically become the property of Traderdeepdive, without any
          obligation of Traderdeepdive to you; and (f) you are not entitled to
          any compensation or reimbursement of any kind from Traderdeepdive
          under any circumstances.
        </p>
        <h3 className="font-bold text-lg mb-3">13. Indemnity</h3>
        <p className="mb-5">
          You agree to indemnify and hold Traderdeepdive and our subsidiaries,
          affiliates, officers, agents, employees, partners and licensors
          harmless from any claim or demand, including reasonable attorneys'
          fees, made by any third party due to or arising out of content you
          submit, post, transmit, modify or otherwise make available through the
          Traderdeepdive services, your use of the Traderdeepdive services, your
          connection to the Traderdeepdive services, your violation of the Terms
          of Use, or your violation of any rights of another.
        </p>
        <h3 className="font-bold text-lg mb-3">14. Termination</h3>
        <p className="mb-5">
          Upon your request, your account can be deleted from Traderdeepdive.
          You may delete your account at any time by visiting your{" "}
          <a className="text-[#2aa8ff]" href="">
            Profile Settings
          </a>{" "}
          page. If you requested your account be deleted, we will delete the
          personal data associated with your account, however certain personal
          data will be retained if it has been integrated into data that is
          integral to our systems and site, including data in communications you
          have sent via our site. This data is necessarily retained for the
          integrity of the data on the site and our legitimate business
          purposes, including auditing, security and other legitimate interests
          (please refer to our{" "}
          <Link className="text-[#2aa8ff]" to="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          for more information). Your published Contributions will remain on the
          site in our discretion. Once a Contribution has been published, it
          becomes part of the communal trading knowledge and should stay that
          way. This policy prevents users from keeping only their best ideas
          public, thus keeping everyone honest and maintaining public confidence
          in the reputation and integrity of the site.
        </p>
        <p className="mb-5">
          You agree that Traderdeepdive may, without prior notice, immediately
          terminate, limit your access to or suspend your Traderdeepdive
          account, any associated email address, and access to the
          Traderdeepdive services. Cause for such termination, limitation of
          access or suspension shall include, but not be limited to, (a)
          breaches or violations of the Terms of Use or other incorporated
          agreements or guidelines, (b)requests by law enforcement or other
          government agencies, (c) discontinuance or material modification to
          the Traderdeepdive services (or any part thereof), (d) unexpected
          technical or security issues or problems, (e) extended periods of
          inactivity, (f) and/or engagement by you in fraudulent or illegal
          activities. Further, you agree that all terminations, limitations of
          access and suspensions for cause shall be made in Traderdeepdive's
          sole discretion and that Traderdeepdive shall not be liable to you or
          any third party for any termination of your account, any associated
          email address, or access to the Traderdeepdive services.
        </p>
        <h3 className="font-bold text-lg mb-3">15. Emails</h3>
        <p className="mb-5">
          By creating an account with Traderdeepdive, you agree that
          Traderdeepdive can use your email address to send you marketing
          materials, service-related notices, important information messages,
          special offers, etc. You can unsubscribe from this by clicking on the
          link provided in the emails.
        </p>
        <h3 className="font-bold text-lg mb-3">16. House rules</h3>
        <p className="mb-5">
          By creating and using an account on Traderdeepdive you confirm you
          have read and agree to follow our{" "}
          <Link className="text-[#2aa8ff]" to="/houserules">
            House Rules
          </Link>
          .
        </p>
        <h3 className="font-bold text-lg mb-3">17. Third Party Software</h3>
        <p className="mb-5">
          Our software, website and/or services may include software components
          supplied by third parties which are utilized by permission of the
          respective licensors and/or copyright holders on the terms provided by
          such parties ("Third Party Software"). Traderdeepdive expressly
          disclaims any warranty or other assurance to you regarding Third Party
          Software. Please note that your use of the Third Party Software will
          be governed by the terms and conditions of use and privacy policies of
          the Third Party Software providers and not by these Terms of Use or
          our Privacy Policy.
        </p>
        <h3 className="font-bold text-lg mb-3">18. Scripts</h3>
        <p className="mb-5">
          You represent and warrant that you have all intellectual property
          rights, including all necessary patent, trademark, trade secret,
          copyright or other proprietary rights, in and to your script. If you
          use third-party materials, you represent and warrant that you have the
          right to distribute third-party material in the script. You agree that
          you will not submit material that is copyrighted, protected by trade
          secret or otherwise subject to third party proprietary rights,
          including patent, privacy and publicity rights, unless you are the
          owner of such rights or have permission from their rightful owner to
          submit the material.
          <br />
          You are solely responsible for any script that you create.
          Traderdeepdive is not in any way responsible for the use or misuse of
          your script by any user. Traderdeepdive is not in any way responsible
          for the use or misuse any user’s script by you.
        </p>
        <p className="mb-5">
          By using the publish script feature, you grant us a world-wide,
          irrevocable, perpetual, royalty-free licence to:
          <ul className="list-disc list-inside">
            <li>publish this script as well as the username of the author;</li>
            <li>disclose the source code of the script for open scripts;</li>
            <li>
              perform, display, use and make available your open or protected
              script for any user or an invite-only script for any user that
              received an invite.
            </li>
          </ul>
        </p>
        <p className="mb-5">
          We may remove your script without notice if we reasonably believe that
          you are in violation of these Terms of Use.
        </p>
        <p className="mb-5">
          You can publish the script under any license. If you do not include
          the license in the comment section of a script, you agree that your
          script is licensed under the Mozilla Public License 2.0.
        </p>
        <h3 className="font-bold text-lg mb-3">
          19. Publications - No Recommendation or Advice Status
        </h3>
        <p className="mb-5">
          The information and publications are not meant to be, and do not
          constitute, financial, investment, trading, or other types of advice
          or recommendations supplied or endorsed by Traderdeepdive. Any
          statement of view (which may be subject to change without notice) is
          the author's personal opinion, and the author makes no representations
          or warranties as to the accuracy or completeness of any information or
          analysis provided.
          <br />
          The authors and Traderdeepdive are not liable for any losses incurred
          as a result of any investment made on the basis of any perceived
          recommendation, forecast, or other information presented here.
          <br />
          The contents of these publications should not be interpreted as an
          express or implicit promise, guarantee, or indication by
          Traderdeepdive that customers will profit or that losses in connection
          with them can or will be limited if they rely on the information
          provided.
        </p>
      </div>
    </div>
  );
}
