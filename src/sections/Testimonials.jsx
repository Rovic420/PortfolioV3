"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.",
      project: "E-Commerce Platform",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Working with Alex was a game-changer for our startup. He built a scalable analytics dashboard that helped us make data-driven decisions. His code quality and documentation are top-notch.",
      project: "Analytics Dashboard",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO",
      company: "FitnessPro",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Alex created an amazing mobile app for our fitness platform. The user experience is incredible, and the performance is flawless. He's a true professional who delivers results.",
      project: "Mobile Fitness App",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "BlockChain Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The blockchain voting system Alex developed is revolutionary. His understanding of complex technologies and ability to implement them is remarkable. Highly recommended!",
      project: "Blockchain Voting System",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "Creative Agency",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Alex transformed our vision into a beautiful, functional website. His design sense and technical skills are perfectly balanced. The site has increased our conversions by 40%.",
      project: "Portfolio Website Builder",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
          >
            <Quote size={16} className="mr-2 text-primary-600" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">What Clients</span>
            <br />
            <span className="text-gradient">Say About Me</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="card-glass p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-4 left-4 text-primary-200 dark:text-primary-800 opacity-50">
              <Quote size={80} />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Star className="text-yellow-400 fill-current" size={24} />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-white dark:border-dark-700 shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Project: {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 bg-white/80 dark:bg-dark-800/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 bg-white/80 dark:bg-dark-800/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primary-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`card p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "ring-2 ring-primary-500 shadow-2xl" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                "{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + "..." : testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-dark-600"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.role}</div>
                  <div className="text-primary-600 dark:text-primary-400 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { label: "Happy Clients", value: "50+", icon: "😊" },
            { label: "Projects Completed", value: "150+", icon: "🚀" },
            { label: "5-Star Reviews", value: "48", icon: "⭐" },
            { label: "Client Retention", value: "95%", icon: "🔄" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glass p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
