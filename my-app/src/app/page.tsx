'use client';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Button } from "@/components/ui/button";
import About from '@/components/ui/about';
import Services from '@/components/ui/services';
import Contact from '@/components/ui/contact';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-10 p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <ScrollLink to="home" smooth={true} duration={500}>
            <Button variant="ghost" className="text-2xl font-bold text-white hover:text-gray-300">
              TechInnovate
            </Button>
          </ScrollLink>
          <ul className="flex space-x-4">
            <li><ScrollLink to="home" smooth={true} duration={500}><Button variant="ghost" className="text-white hover:text-gray-300">Home</Button></ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}><Button variant="ghost" className="text-white hover:text-gray-300">About</Button></ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500}><Button variant="ghost" className="text-white hover:text-gray-300">Services</Button></ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}><Button variant="ghost" className="text-white hover:text-gray-300">Contact</Button></ScrollLink></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <Element name="home" className="h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Welcome to TechInnovate</h2>
        <p className="text-xl mb-8 text-center">Innovating for a better tomorrow</p>
        <Button 
          variant="default" 
          size="lg"
          className="bg-white text-black hover:bg-gray-200"
        >
          Get Started
        </Button>
      </Element>

      {/* About Section */}
      <Element name="about" className="h-screen">
        <About />
      </Element>

      {/* Services Section */}
      <Element name="services" className="h-screen">
        <Services />
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="h-screen">
        <Contact />
      </Element>

      
    </div>
  );
}
