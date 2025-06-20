"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, MessageSquare, Globe, Clock } from "lucide-react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Deloy371@pm.me",
      href: "mailto:Deloy371@pm.me",
      description: "Send me an email anytime",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+985 056 0325",
      href: "tel:+9850560325",
      description: "Call me, if you want",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bilibiran, Binangonan Rizal",
      href: "https://maps.app.goo.gl/DtDNexqWBbQBuSwc9",
      description: "Available for physical meetings",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      label: "Website",
      value: "Click me to see",
      href: "https://hoshio-deloy.vercel.app/",
      description: "Visit my portfolio",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-gray-50/50 to-transparent dark:from-dark-900/50 dark:to-transparent"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
          >
            <MessageSquare size={16} className="mr-2 text-primary-600" />
            <span className="text-sm font-medium">Contact Me</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Let's</span>
            <br />
            <span className="text-gradient">Get In Touch</span>
          </h2>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto rounded-full mb-6 sm:mb-8"></div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of
            the contact info below.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16">
          {contactInfo.map(({ icon: Icon, label, value, href, description, gradient }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card p-4 sm:p-6 group cursor-pointer text-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{label}</div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 break-all">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{description}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="card-glass p-4 sm:p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-900 dark:text-white text-lg">Currently Unavailable</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              I'm accepting new projects for Q2 2025. Typical response time is within 24 hours.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={16} />
              <span>PST (UTC-8) • Usually available 10 AM - 2 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
