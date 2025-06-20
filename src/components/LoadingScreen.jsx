"use client"
import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-4"
        >
          RVD
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg"
        >
          I create something amazing, please wait!
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden max-w-xs mx-auto"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
