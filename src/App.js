
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, TerminalSquare, FolderKanban, Layers, FileText, Sun, Moon, Briefcase } from 'lucide-react';

const apps = [
  { id: 'about', name: 'About Me', icon: FileText },
  { id: 'skills', name: 'Skills', icon: Layers },
  { id: 'projects', name: 'Projects', icon: FolderKanban },
  { id: 'services', name: 'Services', icon: Briefcase },
  { id: 'contact', name: 'Contact', icon: TerminalSquare }
];

const windows = {
  about: `Hi! I'm Parth Khatri, a Cloud System Administrator with 5+ years of experience managing Microsoft 365, Intune, Azure VMs, Entra ID, and automating IT systems with PowerShell and Power Apps.`,
  skills: `- M365 Admin\n- Intune Compliance & Policy\n- Azure VM & Resource Management\n- Entra ID, SSO, RBAC\n- PowerShell, Power Platform\n- Windows Server, SharePoint, Exchange\n- Network Security, Defender`,
  projects: `• Intune Migration: 200+ Devices\n• Azure VM Deployment for Training Labs\n• Power Platform Leave App\n• Endpoint Security Project using Defender\n• Automation Scripts for Onboarding`,
  services: `• Cloud Infrastructure Management (Azure, M365)\n• Device Compliance & Intune Policy Configuration\n• PowerShell Automation for Onboarding/Offboarding\n• Small Business IT Setup & Consulting\n• Security Audits and Microsoft Defender Tuning\n• Power Platform App Design & Deployment`,
  contact: `📧 pknino01@gmail.com\n🔗 linkedin.com/in/parth-khatri\n📄 Resume available on request`
};

const AppIcon = ({ app, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center justify-center gap-1 w-20 h-20 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl text-white text-xs p-2"
    onClick={() => onClick(app.id)}
  >
    <app.icon className="w-6 h-6" />
    {app.name}
  </motion.button>
);

const Window = ({ id, content, onClose }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }} 
    animate={{ opacity: 1, scale: 1 }} 
    exit={{ opacity: 0, scale: 0.9 }}
    className="absolute top-10 left-10 right-10 md:left-20 md:right-20 bottom-20 bg-white border border-gray-400 shadow-lg rounded-lg p-4 z-50 overflow-auto text-gray-900 dark:text-gray-100 dark:bg-slate-800"
  >
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">{apps.find(app => app.id === id).name}</h2>
      <button onClick={onClose} className="text-sm bg-red-500 text-white px-2 py-0.5 rounded">X</button>
    </div>
    <pre className="text-sm whitespace-pre-wrap">{content}</pre>
  </motion.div>
);

export default function App() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark bg-slate-900 text-white" : "bg-white text-slate-900"}>
      <div className="relative min-h-screen font-mono p-6 overflow-hidden transition-colors duration-300">
        <div className="absolute top-4 right-4">
          <button onClick={() => setDark(!dark)} className="p-2 bg-slate-600 dark:bg-slate-300 text-white dark:text-black rounded-full">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Parth Khatri</h1>
        <p className="text-center text-sm md:text-base mb-6">Cloud System Administrator | Azure • Intune • PowerShell • M365</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          {apps.map(app => <AppIcon key={app.id} app={app} onClick={setActiveWindow} />)}
        </div>

        {activeWindow && (
          <Window 
            id={activeWindow} 
            content={windows[activeWindow]} 
            onClose={() => setActiveWindow(null)} 
          />
        )}

        <footer className="absolute bottom-4 w-full text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Parth Khatri • Built with ❤️ using React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
