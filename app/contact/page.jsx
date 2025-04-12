"use client";

import { Mail, Phone, Smartphone } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  return (
    <div className='flex gap-10 w-full relative overflow-hidden p-14 h-[76vh]'>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, duration: 0.6, ease: easeInOut },
        }}
        className='w-full flex flex-col gap-10 mt-14 z-10'
      >
        <h1 className='text-5xl font-bold'>Contact Me @:</h1>
        <div className='flex flex-col gap-5'>
          <span className='flex gap-2'>
            <Smartphone />
            <p className='text-lg'>+63 9357237298</p>
          </span>
          <span className='flex gap-2'>
            <Mail />
            <p className='text-lg'>bancale146@gmail.com</p>
          </span>
        </div>
      </motion.div>

      {/* Decorative Animated Cover */}
      <motion.div
        className='bg-accent absolute top-0 right-[-25%] h-full w-[150%] rounded-l-full z-0'
        initial={{ x: 0 }}
        animate={{ x: "50%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className='absolute group  top-[30%] left-20 z-50'>
          <div className='bg-slate-800  p-10 rounded-full '>
            <Phone className='w-28 h-28 text-white group-hover:text-accent' />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
