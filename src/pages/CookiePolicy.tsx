import React from "react";
import { Link } from "react-router-dom";

import PolicyHeader from "../components/desktop/PolicyHeader";

import "./cookie.css";

export default function CookiePolicy() {
  const url = "assets/imgs/desktop/main_bg.jpg";
  return (
    <div className="w-full h-full">
      <div
        className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <PolicyHeader />
      <div className="mx-32 mb-20">
        <h2 className="font-bold text-2xl mb-5">Cookies Policy</h2>
        <p className="mb-5">
          This Cookies Policy ("Cookies Policy") describes cookies and other
          technologies that TraderDeepDive Ltd.. ("TraderDeepDive", "we", "us"
          or "our") uses on its website ("Site") and the choices that users
          have. This Cookies Policy is a part of TraderDeepDive" Privacy Policy.
        </p>
        <p className="mb-5">
          When you first visit the Site, you will be asked to consent to the use
          of cookies in accordance with this Cookies Policy. Note that if you
          accept, we will store them on your computer.
        </p>
        <p className="mb-5">What is a cookie?</p>
        <p className="mb-5">
          A 'cookie' is a piece of information that is sent to your browser by a
          website you visit. The Site uses first party cookies (those set by a
          website that is being visited by the user at the time. For example,
          cookies via www.traderdeepdive.com) as well as third-party cookies
          (set by a different domain), as described below.
        </p>
        <p className="mb-5">
          Cookies can be stored on your computer for various periods of time.
          They can be in a form of either "session cookies" or "persistent
          cookies." A session cookie only lasts as long as the browser session
          and is automatically deleted when you close your browser. A persistent
          cookie lasts long after your browser is closed and will remain until
          it expires (as determined by the third party in charge of placing it)
          or until you delete the cookie. Persistent cookies are used to help
          sites recognize and identify your computer when you open your browser
          and surf the Internet again.
        </p>
        <p className="mb-5">
          The data collected through cookies may include information about the
          IP (Internet Protocol) address of your device, browser type, language,
          operating system, the state or country from which you have accessed
          the Site, the date and the time of your visit(s), the number of links
          you click on this Site, the functions you use, the searches you
          request, and the data you have saved while on this Site.
          TraderDeepDive" may use the information collected for a variety of
          necessary, legitimate purposes, including user authentication, user
          interface customization, security, research and analysis to improve
          the functionality of our Site, and advertising (for more information
          on how we use your data, please read our{" "}
          <Link to="/privacy-policy" className="te#2aa8ff]xt-[">
            Privacy Policy
          </Link>
          ).
        </p>
        <p className="mb-5">
          You can find out more about cookies (including how to see or manage
          them) at{" "}
          <Link className="text-[#2aa8ff]" to="/cookies">
            All About Cookies
          </Link>{" "}
          or{" "}
          <Link className="text-[#2aa8ff]" to="https://aboutcookies.org">
            AboutCookies.org
          </Link>{" "}
          websites.
        </p>
        <br/>
        <h3 className="font-bold text-lg mb-3">How do we use cookies?</h3>
        <p className="mb-5">
          The following sets out how we use different categories of cookies, as
          well as information on your options for managing your settings for the
          data collected by these technologies:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-5">
            <b>Necessary cookies</b>: These cookies are used to provide users
            with services available through a Site and to use some of its
            features, such as the ability to log-in and access secure areas,
            provide pop-up notices, and accept language from sign-up forms.
            These cookies are essential for using and navigating a Site. Without
            them, basic functions of our Site would not work. Because these
            cookies are strictly necessary to deliver our Site’s essential
            services, you cannot refuse them.
          </li>

          <li className="mb-5">
            <b>Performance/Analytics cookies</b>: These cookies are used to
            recognize and count the number of Site visitors, gather statistics
            regarding how visitors move around the Site (including number of
            page views and the amount time spent on each page) and for
            conversion tracking and click hotspots. This helps us improve the
            way our Site works and general user experience. For example, these
            cookies allow us to ensure that users are able to find what they
            need easily.
          </li>

          <li className="mb-5">
            <b>Advertising cookies (ad cookies)</b>: These cookies are used to
            show advertising that is relevant to you.
          </li>

          <li className="mb-5">
            <b>Cookies used to integrate third party services</b>: These cookies
            are used to integrate third-party functions on the Site, such as
            videos, maps, or social network plug-ins.
          </li>

          <li className="mb-5">
            <b>Other third party cookies</b>: On some parts of the Site,
            including, but not limited, to news widgets, we use content provided
            by other websites(third parties). These third party sites are able
            to set their own cookies in some cases. Note that we have no control
            over these third-party cookies. You can turn them off by disabling
            them on your browser. You can find more information on the most
            popular web-browser help pages:
          </li>

          <li style={{ listStyle: "none" }}>
            <ul className="list-disc list-inside mb-5">
              <li className="text-[#2aa8ff]">Google Chrome</li>
              <li className="text-[#2aa8ff]">Mozilla Firefox</li>
              <li className="text-[#2aa8ff]">Microsoft Edge</li>
              <li className="text-[#2aa8ff]">Safari (macOS)</li>
              <li className="text-[#2aa8ff]">Safari (iOS)</li>
            </ul>
          </li>
        </ul>

        <p className="mb-5">
          <b>
            For other browsers, please consult the documentation that your
            browser manufacturer provides.
          </b>
        </p>
        <p className="mb-5">
          <b>
            More information on our use of cookies can be found in the table
            below:
          </b>
        </p>
        <table className="w-4/5 border border-white mb-5">
          <thead className="bg-white">
            <tr className="h-14">
              <th className="text-[#000] text-start w-1/6">Score</th>
              <th className="text-[#000] text-start w-1/6">
                Categories of Use
              </th>
              <th className="text-[#000] text-start w-1/6">Domain</th>
              <th className="text-[#000] text-start w-1/2">Description</th>
            </tr>
          </thead>
          <tbody className="mx-3">
            <tr className="border border-white">
              <td>Trader Deep Dive</td>
              <td>Necessary cookies</td>
              <td>.traderdeepdive,com</td>
              <td>
                We use These cookies for user authentication and identification,
                in order to make our features and functions more readity
                available. In addition, we use necessary cookies for user
                interface customization and security features such as detecting
                fraud and abuse. We also use Web Storage and IndexedDB
                technologies to store user preferences and information that is
                necessary for providing our services. We use evercookies
                technology to implement to security features and detect
                violations of our Terms of Use. Examples of the specific cookies
                used for this purpose are cachec, sessionid, and tv_ecuid.
              </td>
            </tr>
            <tr className="border border-white">
              <td>Trader Deep Dive</td>
              <td>Necessary cookies</td>
              <td>.traderdeepdive,com</td>
              <td>
                We use These cookies for user authentication and identification,
                in order to make our features and functions more readity
                available. In addition, we use necessary cookies for user
                interface customization and security features such as detecting
                fraud and abuse.
              </td>
            </tr>
            <tr className="border border-white">
              <td>Trader Deep Dive</td>
              <td>Necessary cookies</td>
              <td>.traderdeepdive,com</td>
              <td>
                We use These cookies for user authentication and identification,
                in order to make our features and functions more readity
                available. In addition, we use necessary cookies for user
                interface customization and security features such as detecting
                fraud and abuse.
              </td>
            </tr>
            <tr>
              <td>Trader Deep Dive</td>
              <td>Necessary cookies</td>
              <td>.traderdeepdive,com</td>
              <td>
                We use These cookies for user authentication and identification,
                in order to make our features and functions more readity
                available. In addition, we use necessary cookies for user
                interface customization and security features such as detecting
                fraud and abuse.
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-bold text-lg mb-3">Web beacons</h3>

        <p className="mb-5">
          Web beacons, also called tracking pixels, are tiny graphics with
          unique identifiers that allow us to track usage patterns, count users
          who have visited a particular page, advertising impressions and clicks
          (ad reactions), etc. Web beacons can only collect limited information,
          including a cookie number, time and date of a page view, and a
          description of the page on which the web beacon resides. These beacons
          do not carry any personal data and are only used to track the
          effectiveness of this Site and to show advertisements based on user
          interests. We use web beacons in connection with Google Analytics and
          advertising services as well as our Snowplow Tracker. The information
          generated relating to our Site is used for various necessary and
          legitimate purposes, including the creation of reports on the use of
          this site as well as the development, testing, and improvement of
          services. Google will store information of users’ actions on the
          TraderDeepDive Site and it will be collected by Google services. For
          more information on Google’s use of data for marketing and analytics
          purposes, please see{" "}
          <a className="text-[#2aa8ff]" href="">
            Advertising – Privacy & Terms
          </a>{" "}
          and <a className="text-[#2aa8ff]">Google’s Privacy Policy</a>.
        </p>

        <h3 className="font-bold text-lg mb-3">Changes</h3>

        <p className="mb-5">
          We may change the type of third party service providers that place
          cookies on our Site and amend this Cookies Policy at any time by
          posting the amended version on our Site. Unless additional notice or
          consent is required by applicable laws, this will serve as your
          official notification of these changes.
        </p>
      </div>
    </div>
  );
}
