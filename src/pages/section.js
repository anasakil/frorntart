import React from 'react';
import { motion, useInView } from 'framer-motion';
import img3 from '../assets/section1.jpg';
import img2 from '../assets/section2.jpg';
import img1 from '../assets/section.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Section = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white w-full min-h-screen overflow-hidden flex flex-col items-center justify-start text-center text-17xl text-darkslategray-200 font-oxygen mt-9"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="bg-white overflow-hidden flex flex-col items-center justify-start gap-y-8 md:gap-y-24">
        <motion.div
          className="flex flex-col items-center justify-center gap-y-4 md:gap-y-8 text-2xl md:text-5xl text-gray-200"
          variants={itemVariants}
        >
          <motion.b
            className="w-11/12 md:w-[754px] relative leading-tight md:leading-[77px] flex items-center justify-center text-black mt-4 md:mt-8"
            variants={itemVariants}
          >
            Get To Know Who We Are And What We Do - About Us
          </motion.b>
          <motion.div
            className="w-11/12 md:w-[650px] relative text-base text-dimgray-200 text-black mt-4 md:mt-0"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat.
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-[1231px] relative h-auto md:h-[485px] overflow-hidden"
          variants={containerVariants}
        >
          <div className="absolute inset-0 w-full flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="flex flex-col items-center md:items-start justify-start gap-y-4 md:gap-y-5 w-11/12 md:w-auto">
              <motion.div
                className="w-full md:w-[505px] relative flex items-center text-2xl md:text-4xl text-center md:text-left"
                variants={itemVariants}
              >
                Learn About Us And What Sets Us Apart
              </motion.div>
              <motion.div
                className="w-full md:w-[505px] relative text-base leading-6 md:leading-[160%] text-dimgray-100 text-center md:text-left"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
              </motion.div>
              <motion.div
                className="rounded-xl bg-gray-100 overflow-hidden flex flex-row items-center justify-center py-4 px-6 gap-x-10 text-xl text-white font-exo mt-4 md:mt-0"
                variants={itemVariants}
              >
                <button className="font-semibold text-black">Read Our Blogs</button>
              </motion.div>
            </div>
            <div className="w-full md:w-[628px] relative h-auto md:h-[418px] mt-4 md:mt-0">
              <motion.img
                className="absolute top-0 left-1/2 md:left-[283.8px] transform -translate-x-1/2 md:translate-x-0 rounded-[16.35px] w-11/12 md:w-[344.2px] h-[344.9px] object-cover"
                alt=""
                src={img2}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                className="absolute top-16 md:top-[53.9px] left-1/2 md:left-[164.3px] transform -translate-x-1/2 md:translate-x-0 rounded-[16.35px] w-11/12 md:w-[437.3px] h-[363.7px] object-cover"
                alt=""
                src={img2}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                className="absolute top-2 md:top-[7.4px] left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-[155px] h-[187.2px] object-cover"
                alt=""
                src={img1}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                className="absolute top-56 md:top-[233px] left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-[155px] h-[185px] object-cover"
                alt=""
                src={img3}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section;
