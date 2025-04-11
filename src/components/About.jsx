import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];
  
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Improved application performance by 40% through code optimization and implementing best practices.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2021',
      description: 'Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality web applications.',
    },
    {
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      period: '2016 - 2018',
      description: 'Built responsive websites and implemented UI components. Worked with a team of developers to create custom solutions for clients across various industries.',
    },
  ];
  
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2014 - 2016',
      description: 'Specialized in software engineering and web technologies. Graduated with honors.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2010 - 2014',
      description: 'Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions.',
    },
  ];
  
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript/TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git', 'GitHub Actions'] },
  ];
  
  return (
    <section id="about" className="section bg-light dark:bg-dark">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-dark/80 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl text-white/30 font-bold">JD</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="text-primary font-medium mb-4">Software Developer</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/resume.pdf" 
                    className="btn btn-primary w-full flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-dark/80 rounded-lg shadow-lg p-6">
              <p className="text-lg mb-8">
                I'm a passionate software developer with over 6 years of experience creating robust web applications. 
                I specialize in building responsive, user-friendly interfaces with React and developing scalable backend 
                solutions. I'm dedicated to writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices in the industry.
              </p>
              
              <div className="mb-6">
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-2 px-4 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-gray-500 hover:text-primary'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <div className="py-2">
                  {activeTab === 'experience' && (
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <div className="flex justify-between mb-2">
                            <span className="text-primary">{exp.company}</span>
                            <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                          </div>
                          <p>{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'education' && (
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <div className="flex justify-between mb-2">
                            <span className="text-primary">{edu.institution}</span>
                            <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                          </div>
                          <p>{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'skills' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {skills.map((skillGroup, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-bold mb-3">{skillGroup.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
