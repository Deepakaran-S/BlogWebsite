import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate()
  return (
    
    <div className="min-h-screen bg-[#c0392b] text-white relative overflow-hidden">
    
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center text-center pt-32 pb-16 px-4 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Publish your passions, your way
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Create a unique and beautiful blog easily.
        </p> 
        <button onClick={()=>{navigate("/login")}} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition">
          Create Your Blog
        </button>
      </motion.section>

    
      <img
        src="https://cdn-icons-png.flaticon.com/512/3186/3186917.png"
        alt="spoon"
        className="w-24 absolute top-10 left-6 opacity-20 rotate-[-30deg]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1650/1650491.png"
        alt="whisk"
        className="w-24 absolute bottom-12 left-8 opacity-20 rotate-[10deg]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/2638/2638970.png"
        alt="rolling pin"
        className="w-24 absolute top-16 right-10 opacity-20 rotate-[40deg]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/2436/2436847.png"
        alt="measuring cup"
        className="w-20 absolute bottom-12  right-16 opacity-20 rotate-[-15deg]"
      />

 
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white text-gray-900 mt-10 md:mt-0 z-10 relative shadow-2xl rounded-lg overflow-hidden"
      >
        <div className="bg-red-600 py-3 text-center text-white text-lg font-semibold">
          My cooking blog
        </div>
        <div className="p-6">
          <h2 className="font-bold text-xl mb-2">Delicious dessert recipe</h2>
          <p className="text-sm text-gray-600 mb-2">Thursday, 16 January</p>
          <p className="text-gray-700">
            Discover how to make a mouth-watering dessert with simple ingredients.
          </p>
        </div>
      </motion.div>


    </div>


  );

   

};

export default Homepage;
