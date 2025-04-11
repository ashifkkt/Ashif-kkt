import { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'other', label: 'Other' },
  ];
  
  const skills = [
    // Frontend Skills
    { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
    { name: 'JavaScript', level: 85, category: 'frontend', icon: '𝐉𝐒' },
    { name: 'TypeScript', level: 80, category: 'frontend', icon: '𝐓𝐒' },
    { name: 'HTML5', level: 95, category: 'frontend', icon: '🌐' },
    { name: 'CSS3', level: 90, category: 'frontend', icon: '🎨' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: '🌊' },
    { name: 'Next.js', level: 75, category: 'frontend', icon: '▲' },
    { name: 'Redux', level: 80, category: 'frontend', icon: '🔄' },
    
    // Backend Skills
    { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
    { name: 'Express', level: 80, category: 'backend', icon: '🚂' },
    { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃' },
    { name: 'PostgreSQL', level: 70, category: 'backend', icon: '🐘' },
    { name: 'GraphQL', level: 65, category: 'backend', icon: '◯' },
    { name: 'REST APIs', level: 90, category: 'backend', icon: '🔌' },
    
    // Other Skills
    { name: 'Git', level: 85, category: 'other', icon: '📂' },
    { name: 'Docker', level: 70, category: 'other', icon: '🐳' },
    { name: 'AWS', level: 65, category: 'other', icon: '☁️' },
    { name: 'Jest', level: 75, category: 'other', icon: '🃏' },
    { name: 'CI/CD', level: 70, category: 'other', icon: '🔄' },
    { name: 'Figma', level: 60, category: 'other', icon: '🎨' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const SkillBar = ({ name, level, icon }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(level);
      }, 100);
      
      return () => clearTimeout(timer);
    }, [level]);
    
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-xl mr-2">{icon}</span>
            <span className="font-medium">{name}</span>
          </div>
          <span className="text-primary font-semibold">{level}%</span>
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <section id="skills" className="section bg-light dark:bg-dark">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark/80 hover:bg-primary/10'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['VS Code', 'GitHub', 'npm', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Postman', 'Slack', 'Jira'].map((tool, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white dark:bg-dark/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
