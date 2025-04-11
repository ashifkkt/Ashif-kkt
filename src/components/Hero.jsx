import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Software Developer';

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    if (isTyping) {
      interval = setInterval(() => {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 100);
    } else {
      interval = setInterval(() => {
        setText(fullText.substring(0, currentIndex));
        currentIndex--;

        if (currentIndex === 0) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(true), 500);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-light dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-primary font-medium mb-4 animate-fadeIn">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
            Mohamed Ashif
          </h1>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark/80 dark:text-light/80">
              I'm a <span className="text-primary">{text}</span>
              <span className="inline-block w-1 h-8 bg-primary ml-1 animate-blink"></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-dark/70 dark:text-light/70 mb-8 max-w-2xl animate-fadeIn delay-300">
            I build exceptional digital experiences with a focus on performance,
            accessibility, and cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary animate-fadeIn delay-400">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline animate-fadeIn delay-500">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex space-x-6 animate-fadeIn delay-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark/70 dark:text-light/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark/70 dark:text-light/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark/70 dark:text-light/70 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
