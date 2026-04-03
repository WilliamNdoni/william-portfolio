import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { FileDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-6 gap-4 flex  flex-col items-center justify-center mt-5 border-t border-purple-900/30">
      <div className="flex gap-4">
        <a href="https://github.com/WilliamNdoni" target="_blank" rel="noopener noreferrer"
        className="text-purple-900 hover:text-purple-700 transition-all">
          <FaGithub size={20}/>
        </a>
        <a href="https://www.linkedin.com/in/william-omondi-86256b234" target="_blank" rel="noopener noreferrer"
        className="text-purple-900 hover:text-purple-700 transition-all">
          <FaLinkedin size={20}/>
        </a>
        
        {/* CV download link */}

        <a
          href="/William_Omondi_CV.pdf"
          download
          className="flex items-center gap-2 text-sm text-purple-900 hover:text-purple-700 transition-all"
        >
          <FileDown size={20} />
          Download CV
        </a>
      </div>
      <p className="text-sm text-black/50">© 2026 William Ndoni. All rights reserved.</p>
    </footer>
  );
};

export default Footer