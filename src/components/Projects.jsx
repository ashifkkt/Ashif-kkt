import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ui', label: 'UI/UX' },
    { id: 'clone', label: 'Clones' },
    { id: 'js', label: 'JavaScript' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Vanforces',
      description: 'A comprehensive ERP web app for companies to manage salesmen, inventory, and transactions. Salesmen can load products from warehouse, process sales, handle collections, while admins manage the entire system.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'ERP', 'Dashboard'],
      category: 'web',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Kaser Restaurant Admin',
      description: 'A food delivery platform similar to Swiggy, featuring order management, restaurant listings, delivery tracking, and customer management with comprehensive admin controls.',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Firebase', 'Redux', 'Food Delivery'],
      category: 'web',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Almwasil ERP Integration',
      description: 'An ERP system focused on invoice management and business processes, providing streamlined operations and advanced reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'Express', 'ERP', 'Invoice Management'],
      category: 'web',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Amazon Clone',
      description: 'A pixel-perfect replica of Amazon\'s user interface with product listings, cart functionality, and user authentication.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'CSS', 'Tailwind', 'Responsive Design'],
      category: 'clone',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Netflix Clone',
      description: 'A responsive Netflix clone featuring dynamic content loading, video previews, and a sleek user interface that mimics the original streaming platform.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'CSS', 'Tailwind', 'API Integration'],
      category: 'clone',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A dynamic weather application providing real-time forecasts, location-based weather data, and interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      category: 'js',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'A feature-rich task manager with drag-and-drop functionality, deadline tracking, and priority management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      tags: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      category: 'js',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 8,
      title: 'Async Shopping Cart',
      description: 'A JavaScript project demonstrating asynchronous operations for a shopping cart with product loading, filtering, and checkout processes.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      tags: ['JavaScript', 'Async/Await', 'Fetch API', 'DOM Manipulation'],
      category: 'js',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-light/50 dark:bg-dark/50">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark/80 hover:bg-primary/10'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dark/80 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View Demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View Code"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;