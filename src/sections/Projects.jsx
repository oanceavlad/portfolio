import { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const filters = ['All', 'Frontend', 'Backend'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={variants}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="flex justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm border ${
                activeFilter === filter
                  ? 'bg-white text-black'
                  : 'border-gray-500 text-white hover:bg-gray-700'
              } transition`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
