import {
  Twitter,
  FileText,
  Github,
  MessageSquare,
  Users,
  Mail,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/DoxaV3",
    label: "Twitter",
  },
  {
    icon: <FaDiscord size={20} />,
    href: "https://discord.gg/doxav3",
    label: "Discord",
  },
  {
    icon: <MessageSquare size={20} />,
    href: "https://oc.app/community/4opco-piaaa-aaaaf-bmytq-cai/?ref=luvob-jqaaa-aaaar-aymqa-cai",
    label: "OpenChat",
  },
  {
    icon: <FileText size={20} />,
    href: "https://doxa-1.gitbook.io/doxa-guide/features/quickstart",
    label: "User Guide",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/DoxaFoundation/doxa-v3",
    label: "GitHub",
  },
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
    {
      name: "Documentation",
      href: "https://sgv54-gyaaa-aaaag-qngxa-cai.icp0.io/",
    },
    {
      name: "User Guide",
      href: "https://doxa-1.gitbook.io/doxa-guide/features/quickstart",
    },
    { name: "API", href: "https://sgv54-gyaaa-aaaag-qngxa-cai.icp0.io/" },
    { name: "Tutorials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Community", href: "/community" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "mailto:doxadaooperations@gmail.com" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-heading font-bold tracking-widest mb-6">
              DOXA
            </div>
            <p className="text-gray-400 mb-6">
              The future of stablecoins.
              <br />
              Create, own and earn.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="mt-2">
              <a
                href="mailto:doxadaooperations@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                doxadaooperations@gmail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
