
export const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-cyber-green">Me</span>
          </h2>
          
          <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-300">
              I'm a passionate and curious B.Tech student in my 3rd year at{' '}
              <span className="text-cyber-blue font-semibold">Kakinada Institute of Engineering and Technology (KIET)</span>, 
              specializing in Computer Science and Cybersecurity. With a strong interest in{' '}
              <span className="text-cyber-green font-semibold">ethical hacking</span>,{' '}
              <span className="text-cyber-green font-semibold">penetration testing</span>,{' '}
              <span className="text-cyber-green font-semibold">secure software development</span> and{' '}
              <span className="text-cyber-green font-semibold">web development</span>, I enjoy exploring 
              real-world applications of programming languages like C, Python, Java, HTML, CSS, and SQL.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300 mt-6">
              I'm an <span className="text-cyber-blue font-semibold">enthusiastic learner</span> who thrives in 
              hands-on environments, whether it's building projects during hackathons or diving deep into 
              network security challenges. My goal is to contribute to the cybersecurity field by developing 
              secure, innovative solutions that make the digital world safer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-cyber-dark/50 px-4 py-2 rounded-lg border border-cyber-green/30">
                <span className="text-cyber-green font-semibold">🎯 Focus:</span> Cybersecurity & Development
              </div>
              <div className="bg-cyber-dark/50 px-4 py-2 rounded-lg border border-cyber-blue/30">
                <span className="text-cyber-blue font-semibold">🏫 Institution:</span> KIET
              </div>
              <div className="bg-cyber-dark/50 px-4 py-2 rounded-lg border border-purple-500/30">
                <span className="text-purple-300 font-semibold">📚 Year:</span> 3rd Year B.Tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
