import React from "react";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - DoxaV3</title>
        <meta name="description" content="Terms of Use for DoxaV3 platform" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            Terms of Use
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: March 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the DoxaV3 platform ("Platform"), you agree
              to be bound by these Terms of Use. If you do not agree to these
              terms, please do not use the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Platform Description
            </h2>
            <p className="text-gray-700 mb-4">
              DoxaV3 is a decentralized stablecoin platform built on the
              Internet Computer. The Platform provides users with access to
              stablecoin services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Stablecoin minting and burning</li>
              <li>Token transfers</li>
              <li>Integration with DeFi protocols</li>
              <li>Access to platform documentation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              Users of the Platform agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their accounts and private keys</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any fraudulent or malicious activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Risks and Disclaimers
            </h2>
            <p className="text-gray-700 mb-4">Users acknowledge that:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Cryptocurrency trading involves significant risks</li>
              <li>Past performance does not guarantee future results</li>
              <li>The Platform is provided "as is" without warranties</li>
              <li>Users are responsible for their own investment decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content on the Platform, including but not limited to text,
              graphics, logos, and software, is the property of DoxaV3 and is
              protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modifications</h2>
            <p className="text-gray-700 mb-4">
              DoxaV3 reserves the right to modify these terms at any time. Users
              will be notified of significant changes, and continued use of the
              Platform constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Use, please contact us at:
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
