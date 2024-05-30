import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed
import { motion, useInView } from "framer-motion";
import img1 from "../assets/img7.png";
import img3 from "../assets/img7.png";
import img4 from "../assets/img7.png";
import img2 from "../assets/img7.png";

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

const Categories = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-screen-md mx-auto px-2">
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-8 text-center"
          variants={itemVariants}
        >
          View Our Range Of Categories
        </motion.h1>
        <motion.p className="text-center" variants={itemVariants}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </motion.p>
        <br/>
        <br/>
        <br/>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"
          variants={containerVariants}
        >
          <motion.div
            className="h-64 md:h-96 flex justify-center items-center"
            variants={itemVariants}
            onClick={() => handleCategoryClick('661c70bcf1c42e842f86befd')}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full rounded-lg cursor-pointer"
              src={img1}
              alt=""
            />
          </motion.div>
          <motion.div
            className="md:col-span-1 flex flex-col gap-2"
            variants={itemVariants}
            onClick={() => handleCategoryClick('categoryId3')}
          >
            <motion.div
              className="h-64 md:h-48 flex justify-center items-center"
              variants={itemVariants}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full rounded-lg cursor-pointer"
                src={img3}
                alt=""
              />
            </motion.div>
            <motion.div
              className="h-64 md:h-48 flex justify-center items-center"
              variants={itemVariants}
              onClick={() => handleCategoryClick('categoryId2')}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full rounded-lg cursor-pointer"
                src={img2}
                alt=""
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="h-64 md:h-96 flex justify-center items-center"
            variants={itemVariants}
            onClick={() => handleCategoryClick('categoryId4')}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full rounded-lg cursor-pointer"
              src={img4}
              alt=""
            />
          </motion.div>
          <br/>
        <br/>
        <br/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Categories;
