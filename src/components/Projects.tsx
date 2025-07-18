
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Social Media Dashboard',
      description: 'PyWeb Hackathon project featuring a comprehensive social media analytics dashboard with real-time data visualization.',
      tech: ['HTML', 'CSS', 'JavaScript','Python', 'Flask'],
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      status: 'Completed',
      codeLink: 'https://github.com/Satyanarayana53/Social-Media-Dashboard',
      demoLink: 'https://github.com/Satyanarayana53/Social-Media-Dashboard'
    },
    {
      title: 'Web Scraping Security Tool',
      description: 'Full-stack security tool for automated web scraping with MongoDB backend for data storage and analysis.',
      tech: ['Python', 'MongoDB', 'Flask', 'BeautifulSoup'],
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      status: 'Completed',
      codeLink: 'https://github.com/Satyanarayana53/Web-Scraping-Security-Tool',
      demoLink:'https://github.com/Satyanarayana53/Web-Scraping-Security-Tool'
    },
    {
      title: 'Stock Market Price Prediction',
      description: 'Machine learning-based tool for predicting stock prices using historical data analysis and various ML algorithms.',
      tech: ['Python', 'Machine Learning', 'Data Science'],
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      status: 'Completed',
      codeLink: 'https://github.com/Satyanarayana53/Stock-Market-Price-Prediction',
      demoLink:''
    },
    {
      title: 'LoginApp (Android)',
      description: 'Secure Android login application with Firebase integration, featuring modern UI and robust authentication.',
      tech: ['Java', 'Firebase', 'Android Studio'],
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      status: 'Completed',
      codeLink: 'https://github.com/Satyanarayana53/LoginApp',
      demoLink:''
    },
    {
      title: 'Calculator App (Android)',
      description: 'Custom UI calculator application for Android with advanced mathematical operations and sleek design.',
      tech: ['Java', 'Android Studio', 'XML'],
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop',
      status: 'Completed',
      codeLink: 'https://github.com/Satyanarayana53/Calculator-App',
      demoLink:''
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-cyber-green/20 text-cyber-green';
      case 'In Progress':
        return 'bg-cyber-blue/20 text-cyber-blue';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'text-cyber-blue';
      case 'Cybersecurity':
        return 'text-cyber-green';
      case 'AI/ML':
        return 'text-purple-400';
      case 'Mobile Development':
        return 'text-cyan-400';
      default:
        return 'text-white';
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-cyber-green">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl overflow-hidden shadow-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className={`text-sm font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-green/20 text-cyber-green rounded-lg hover:bg-cyber-green/30 transition-colors duration-300 text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-lg hover:bg-cyber-blue/30 transition-colors duration-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
