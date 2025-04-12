import { motion } from 'framer-motion';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
        >
            Hi, I’m Vlad — Full-Stack Developer
        </motion.h1>

        <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-xl"
        >
            I build scalable web experiences with React, Spring, and cloud-native tools.
        </motion.p>

        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex gap-4"
        >
            <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
            >
            View Projects
            </a>
            <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
            Contact
            </a>
        </motion.div>
    </section>
  );
};

export default Hero;
