import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    if (isOn) {
      // Redirect after 2 seconds when the switch is turned on
      const timer = setTimeout(() => {
        window.location.href = 'https://kzmid0s16pstw6olhd2q.lite.vusercontent.net'
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isOn])

  useEffect(() => {
    // Set the title dynamically
    document.title = 'Tech Redirect Page'
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(45deg, #4a0e8f, #1e3a8a, #0369a1)',
            'linear-gradient(45deg, #1e3a8a, #0369a1, #4a0e8f)',
            'linear-gradient(45deg, #0369a1, #4a0e8f, #1e3a8a)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Power Button Icon */}
        <motion.div
          className={`w-40 h-40 mb-8 rounded-full flex items-center justify-center cursor-pointer ${
            isOn ? 'bg-blue-500' : 'bg-purple-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOn(!isOn)}
          animate={{
            boxShadow: isOn
              ? [
                  '0 0 0 0 rgba(59, 130, 246, 0.7)',
                  '0 0 0 20px rgba(59, 130, 246, 0)',
                ]
              : '0 0 0 0 rgba(147, 51, 234, 0)',
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <svg
            className="w-20 h-20 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.3 5.71a9.9 9.9 0 0 1 0 14.04M6.6 18.3a9.9 9.9 0 0 1 0-14.04m12.7 12.7a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9zM12 12v.01"
            />
          </svg>
        </motion.div>

        {/* Guide Text */}
        <motion.p
          className="text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Tap the power button to ENTER
        </motion.p>
      </main>
    </div>
  )
}

