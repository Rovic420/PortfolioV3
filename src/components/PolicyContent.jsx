"use client"

const PolicyContent = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          This Privacy Policy describes how Rovic Deloy ("I", "me", or "my") collects, uses, and protects your
          information when you visit my portfolio website.
        </p>
      </div>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Information I Collect</h3>

        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Personal Information</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          When you contact me through the contact form or email, I may collect:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>Your name and email address</li>
          <li>Your message or inquiry</li>
          <li>Any additional information you choose to provide</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Automatically Collected Information
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          When you visit my website, I may automatically collect:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>Your IP address and browser information</li>
          <li>Pages you visit and time spent on the site</li>
          <li>Referring website information</li>
          <li>Device and operating system information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How I Use Your Information</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          I use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>To respond to your inquiries and communicate with you</li>
          <li>To improve my website and user experience</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To prevent fraud and ensure website security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Information Sharing</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          I do not sell, trade, or otherwise transfer your personal information to third parties, except in the
          following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect my rights and safety</li>
          <li>
            With trusted service providers who assist in website operations (under strict confidentiality agreements)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          My website may use cookies and similar tracking technologies to:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>Remember your preferences (like dark/light mode)</li>
          <li>Analyze website performance and usage</li>
          <li>Provide personalized content</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          You can control cookies through your browser settings, but some features may not work properly if cookies are
          disabled.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          I implement appropriate security measures to protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
          <li>Access the personal information I have about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of certain communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Links</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          My website may contain links to third-party websites. I am not responsible for the privacy practices of these
          external sites. I encourage you to review their privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          revision date. I encourage you to review this policy periodically.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          If you have any questions about this Privacy Policy or how I handle your personal information, please contact
          me:
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Email:</strong> Deloy371@pm.me
            <br />
            <strong>Website:</strong> hoshio-deloy.vercel.app
          </p>
        </div>
      </section>
    </div>
  )
}

export default PolicyContent
