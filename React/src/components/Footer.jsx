import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
     className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="Footer Logo" className="w-16 h-auto" />
            <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur voluptatem officiis sapiente, quae sed quo est saepe assumenda at quibusdam, sunt eum odit atque eveniet nemo. Provident, recusandae aut?</p>
        </div>
        <div>
            <h3 className='text-white text-lg font-bold mb-4'>Modi Construction</h3>
            <ul className='space-y-2'>
                <li><a href="#" className='text-gray-400 hover:text-white'>Home</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white'>About Us</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white'>Contact Us</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white'>Privacy Policy</a></li>
            </ul>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news and updates sent to your inbox weekly.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' className='w-full md:w-auto px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none' />
                <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 text-gray-400 text-center py-4 mt-10'>Copyright © 2026 Modi Construction. All rights reserved.</div>
    </motion.div>
  )
}

export default Footer
