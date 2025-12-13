'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const bentoItems = [
  {
    title: "Community First",
    description: "Join a vibrant community of learners and native speakers. It's not just a class, it's a social club.",
    colSpan: "lg:col-span-2",
    bg: "bg-gradient-to-br from-[#FF3B30] to-[#990000]",
    textColor: "text-white"
  },
  {
    title: "Gamified Learning",
    description: "Earn rewards, level up, and track your progress. Learning English has never been this addictive.",
    colSpan: "lg:col-span-1",
    bg: "bg-white/5 backdrop-blur-md border border-white/10",
    textColor: "text-white"
  },
  {
    title: "Real World Practice",
    description: "Forget textbooks. Practice with real conversations, role-plays, and dynamic challenges.",
    colSpan: "lg:col-span-1",
    bg: "bg-white/5 backdrop-blur-md border border-white/10",
    textColor: "text-white"
  },
  {
    title: "Flexible Schedule",
    description: "Book sessions that fit your lifestyle. 24/7 availability for active members.",
    colSpan: "lg:col-span-2",
    bg: "bg-white/5 backdrop-blur-md border border-white/10",
    textColor: "text-white"
  }
]

const SeingeClub = () => {
  return (
    <section className='py-24 relative overflow-hidden' id='SaingeClub'>
      {/* Background Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10' />

      <div className='container px-4 mx-auto'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight'
          >
            Why <span className='text-primary'>Sainge Club?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-xl text-muted max-w-2xl mx-auto'
          >
            We redefined language learning by combining social connection, gamification, and real-world results.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.colSpan} ${item.bg} rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden relative group`}
            >
              <div className='relative z-10'>
                <h3 className={`text-3xl font-bold mb-4 ${item.textColor}`}>{item.title}</h3>
                <p className={`text-lg opacity-80 ${item.textColor}`}>{item.description}</p>
              </div>
              {/* Decorative Circle for hover effect */}
              <div className='absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeingeClub