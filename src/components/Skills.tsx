
import { Code, Settings, Terminal, Book } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Python', 'Java'],
      color: 'cyber-blue'
    },
    {
      title: 'Web Technologies',
      icon: <Settings className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'Flask', 'MongoDB'],
      color: 'cyber-green'
    },
    {
      title: 'Cybersecurity',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Kali Linux', 'Metasploit', 'SQL Injection', 'Cryptography'],
      color: 'purple-500'
    },
    {
      title: 'Networking',
      icon: <Book className="w-6 h-6" />,
      skills: ['Packet Tracer', 'GNS3', 'RIP', 'OSPF', 'EIGRP', 'BGP'],
      color: 'cyan-400'
    }
  ];

  const tools = [
    'VS Code', 'Android Studio', 'Git', 'Stock Prediction', 'Activity Recognition'
  ];

  const softSkills = [
    'Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="text-cyber-green">Skills</span>
          </h2>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`text-${category.color} mb-4 flex items-center gap-3`}>
                  {category.icon}
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-3 py-2 bg-${category.color}/10 border border-${category.color}/30 rounded-lg text-sm text-center hover:bg-${category.color}/20 transition-colors duration-300`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools & AI/ML */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-lg text-sm hover:bg-cyber-blue/30 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyber-green mb-4 flex items-center gap-2">
                <Book className="w-5 h-5" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-lg text-sm hover:bg-cyber-green/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
