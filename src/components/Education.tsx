
export const Education = () => {
  const education = [
    {
      degree: 'B.Tech in CSC (Cybersecurity)',
      institution: 'Kakinada Institute of Engineering and Technology (KIET)',
      period: '2023 – 2027',
      grade: '70%',
      status: 'Present',
      icon: '🎓'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Pragati Junior College',
      period: '2021 – 2023',
      grade: '86%',
      status: 'Completed',
      icon: '📚'
    },
    {
      degree: '10th (SSC)',
      institution: 'Govt. High School',
      period: '2020 – 2021',
      grade: '80%',
      status: 'Completed',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education <span className="text-cyber-green">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-green to-purple-500"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Icon */}
                <div className="absolute left-4 w-8 h-8 bg-cyber-navy border-2 border-cyber-blue rounded-full flex items-center justify-center text-sm z-10">
                  {edu.icon}
                </div>

                {/* Education Card */}
                <div className="ml-20 bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg hover:shadow-cyber-blue/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-cyber-green">{edu.degree}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Present' 
                        ? 'bg-cyber-green/20 text-cyber-green' 
                        : 'bg-cyber-blue/20 text-cyber-blue'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-cyber-blue font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-300">
                    <span>📅 {edu.period}</span>
                    <span>📊 Grade: <span className="text-cyber-green font-semibold">{edu.grade}</span></span>
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
