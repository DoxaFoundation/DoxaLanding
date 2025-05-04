import {
  Twitter,
  Slack,
  Instagram,
  FileText,
  Github,
} from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Slack size={20} />, href: "#", label: "Telegram" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <FileText size={20} />, href: "#", label: "Docs" },
  { icon: <Github size={20} />, href: "#", label: "GitHub (Coming Soon)" },
];

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Whitepaper", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-heading font-bold tracking-widest mb-6">DOXA</div>
            <p className="text-gray-400 mb-6">
              The future of stablecoins.<br />
              Create, own and earn.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-medium text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Doxa. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
