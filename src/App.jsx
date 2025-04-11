import './App.css'
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Vlad — Full-Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
        >
          I build clean, performant web applications with React and Spring Boot.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          {/* <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button> */}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a full-stack engineer based in Bucharest, Romania. Passionate about building scalable web solutions, and equally into hiking and cooking in my downtime.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App
