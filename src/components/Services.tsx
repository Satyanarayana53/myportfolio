
export const Services = () => {
  const services = [
    {
      title: 'Cybersecurity Consulting & Pen Testing',
      description: 'Comprehensive security assessments using industry-standard tools and methodologies.',
      tools: ['Kali Linux', 'Metasploit', 'SQL Injection Testing'],
      icon: '🛡️',
      color: 'cyber-green'
    },
    {
      title: 'Full Stack Web Development',
      description: 'Modern, responsive web applications with secure backend architectures.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB'],
      icon: '💻',
      color: 'cyber-blue'
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications with modern UI/UX and robust backend integration.',
      tools: ['Java', 'Firebase', 'Android Studio'],
      icon: '📱',
      color: 'purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10 bg-cyber-navy/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-cyber-green">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-8 shadow-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-${service.color} mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-cyber-blue/20 pt-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-2 py-1 bg-${service.color}/20 text-${service.color} rounded text-xs hover:bg-${service.color}/30 transition-colors duration-300`}
                      >
                        {tool}
                      </span>
                    ))}
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
