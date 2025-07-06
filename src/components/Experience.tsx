
export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10 bg-cyber-navy/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional <span className="text-cyber-green">Experience</span>
          </h2>

          <div className="bg-cyber-navy/30 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-cyber-blue/20 rounded-xl flex items-center justify-center text-2xl">
                👨‍🏫
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-cyber-green">Teaching Assistant</h3>
                  <span className="px-4 py-2 bg-cyber-green/20 text-cyber-green rounded-full text-sm font-medium">
                    Present
                  </span>
                </div>
                
                <p className="text-cyber-blue font-semibold text-lg mb-4">
                  Kakinada Institute of Engineering and Technology (KIET)
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Subjects:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-lg">C Language</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg">Mathematics</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyber-green">▸</span>
                      Assisting juniors in understanding core concepts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber-green">▸</span>
                      Supporting lab sessions and practical implementations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber-green">▸</span>
                      Solving real-time coding queries and debugging issues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber-green">▸</span>
                      Mentoring students in programming best practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
