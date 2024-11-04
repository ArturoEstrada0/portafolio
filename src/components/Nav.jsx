import React from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Mail } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Inicio' },
  { icon: User, label: 'Sobre mí' },
  { icon: Code, label: 'Proyectos' },
  { icon: Mail, label: 'Contacto' },
]

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-24 bg-gray-900 text-white shadow-lg flex flex-col items-center justify-center space-y-8 py-4 z-50">
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative"
        >
          <a
            href={`#${item.label.toLowerCase()}`}
            className="flex flex-col items-center space-y-2 p-2 rounded-md transition-all duration-300 hover:bg-gray-800"
          >
            <item.icon className="w-8 h-8 text-green-400 group-hover:animate-pulse" />
            
          </a>
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </nav>
  )
}