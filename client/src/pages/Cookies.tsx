import React from "react";
import { Helmet } from "react-helmet-async";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookies Policy - DoxaV3</title>
        <meta name="description" content="Cookies Policy for DoxaV3 platform" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            Cookies Policy
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: March 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your computer or
              mobile device when you visit our website. They allow us to
              recognize your device and remember certain information about your
              session, such as your preferences and settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              DoxaV3 uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                Necessary cookies: Essential for the basic functionality of the
                website
              </li>
              <li>
                Preference cookies: Remember your settings and preferences
              </li>
              <li>
                Analytics cookies: Help us understand how visitors interact with
                our website
              </li>
              <li>
                Functionality cookies: Enable enhanced features and
                personalization
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Types of Cookies We Use
            </h2>
            <p className="text-gray-700 mb-4">The cookies we use include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                Session Cookies: Temporary cookies that expire when you close
                your browser
              </li>
              <li>
                Persistent Cookies: Remain on your device for a set period or
                until manually deleted
              </li>
              <li>First-Party Cookies: Set by the DoxaV3 website</li>
              <li>
                Third-Party Cookies: Set by third-party services we use (e.g.,
                analytics)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways. Most web
              browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Delete all cookies from your browser</li>
              <li>Block all cookies by default</li>
              <li>Allow or block cookies from specific websites</li>
              <li>
                Browse in private/incognito mode, which doesn't store cookies
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Please note that blocking all cookies may affect the functionality
              of our website and your experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Third-Party Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Some cookies are placed by third-party services that appear on our
              pages. We use analytics services that help us understand how users
              engage with our website. These services may use cookies to collect
              information about your use of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Changes to this Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our Cookies Policy from time to time to reflect
              changes to the cookies we use or for operational, legal, or
              regulatory reasons. We encourage you to periodically review this
              Cookies Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies, please contact
              us at:
              <a
                href="mailto:doxadaooperations@gmail.com"
                className="text-purple-600 hover:text-purple-800 ml-1"
              >
                doxadaooperations@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
