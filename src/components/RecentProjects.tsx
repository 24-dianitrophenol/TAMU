import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layout, ArrowRight } from 'lucide-react';

const recentProjects = [
  {
    title: "Tamu's Restaurant",
    description: "A modern restaurant website with online ordering capabilities",
    image: "/images/projects/flamia.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    link: "#"
  },
  {
    title: "Tamu's E-commerce",
    description: "Full-featured online store with payment integration",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Redux", "Stripe"],
    link: "#"
  },
  {
    title: "Tamu's Portfolio",
    description: "Elegant portfolio website showcasing creative work",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function RecentProjects() {
  return (
    <div id="recent-projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Recently Completed Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work for Tamu and other clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-indigo-900 text-white p-2 rounded-bl-lg">
                  <Layout className="h-5 w-5" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-teal-500 hover:text-teal-700"
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="inline-flex items-center bg-indigo-900 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}