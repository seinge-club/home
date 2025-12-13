'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { getAssetPath } from '@/utils/getPath';

const bentoItems = [
  {
    title: "Community First",
    description: "Join a vibrant community of learners and native speakers. It's not just a class, it's a social club.",
    icon: getAssetPath("/images/new-design/icon-community.png")
  },
  {
    title: "Gamified Learning",
    description: "Earn rewards, level up, and track your progress. Learning English has never been this addictive.",
    icon: getAssetPath("/images/new-design/icon-gamification.png")
  },
  {
    title: "Real World Practice",
    description: "Forget textbooks. Practice with real conversations, role-plays, and dynamic challenges.",
    icon: getAssetPath("/images/new-design/icon-live.png")
  },
  {
    title: "Flexible Schedule",
    description: "Book sessions that fit your lifestyle. 24/7 availability for active members.",
    icon: getAssetPath("/images/new-design/icon-flexible.png")
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-default border border-white/5 bg-black/40`}
            >
              {/* Full Background Image */}
              {item.icon && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                </div>
              )}

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

              {/* Content Overlay */}
              <div className='absolute inset-0 p-8 flex flex-col justify-end z-20'>
                <h3 className={`text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors`}>{item.title}</h3>
                <p className={`text-sm text-gray-200 leading-relaxed opacity-90 group-hover:opacity-100`}>{item.description}</p>

                {/* Decorative Line */}
                <div className="h-1 w-12 bg-primary mt-4 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeingeClub