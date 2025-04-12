import { motion } from 'framer-motion';
import placeholderImage from '../assets/placeholder.png';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0},
  };

  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1">
          <img
            src={placeholderImage}
            alt="Myself"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a Bucharest-based full-stack developer passionate about crafting interactive, performant web apps. When I'm not coding, I’m either hiking, skiing or experimenting with new recipes.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
