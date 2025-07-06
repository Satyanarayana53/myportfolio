
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Cybersecurity Enthusiast | Full Stack Developer | Android App Creator';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-36 px-4 text-center bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-cyber-blue shadow-lg shadow-cyber-blue/30 overflow-hidden relative z-10">
              <img
                src="/myportfolio/newone.jpg"
                alt="Satyanarayana Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name with Glitch Effect */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Pilla Sreebala Veera Venkata</span>
            <br />
            <span className=" text-cyber-green" data-text="Satyanarayana">
              Satyanarayana
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-cyber-green animate-blink">
              {displayText}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            B.Tech Computer Science & Cybersecurity Student at KIET, passionate about ethical hacking, 
            secure development, and creating innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/30"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center justify-center">
            <a 
              href="https://github.com/Satyanarayana53" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/satyanarayana53" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
