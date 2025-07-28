'use client'

import React, { useState, useEffect, useRef } from 'react'

// Resume data extracted from existing components
const resumeData = {
  about: {
    name: "Nataly Smith",
    title: "AI Engineer & Senior Software Developer", 
    email: "nmmsoftware@gmail.com",
    phone: "+1-505-203-6058",
    linkedin: "linkedin.com/in/nataly-smith/",
    github: "github.com/astrogirlnim",
    location: "Austin, TX"
  },
  skills: {
    languages: ["Python", "R", "C#", "C", "C++", "Bash", "MATLAB", "JavaScript", "HTML", "CSS", "SQL"],
    aiml: ["PyTorch", "TensorFlow", "LangGraph", "Scikit-Learn", "OpenCV"],
    frameworks: [".NET", "WPF/XAML", "Flask", "ReactJS", "NextFlow", "Luigi"],
    tools: ["Docker", "Git", "PostgreSQL", "Vim", "Azure DevOps"],
    platforms: ["Linux", "Windows", "MacOS", "AWS", "GCP", "Azure", "Firebase", "iOS", "Android"],
    concepts: ["OOP", "SOLID", "Agile Development", "CI/CD", "Mathematical Modeling", "Machine Learning"]
  },
  experience: [
    {
      company: "Gauntlet AI",
      role: "Fellowship: Cohort II AI Challenger",
      period: "June 2025 - Present",
      location: "Austin, TX"
    },
    {
      company: "Bruker Cellular Analysis", 
      role: "Senior Software Developer",
      period: "January 2023 - June 2025",
      location: "Remote"
    },
    {
      company: "Bruker Cellular Analysis",
      role: "Software Developer", 
      period: "January 2022 - January 2023",
      location: "Remote"
    },
    {
      company: "McMaster-Carr",
      role: "Computer Systems Engineer",
      period: "September 2021 - January 2022", 
      location: "Elmhurst, IL"
    }
  ],
  education: {
    degree: "Bachelor of Science - Biomedical Engineering",
    school: "Yale University",
    period: "August 2017 - May 2021",
    gpa: "3.64",
    location: "New Haven, CT"
  }
}

const commands = {
  help: "Available commands: help, about, skills, experience, education, contact, clear, summary",
  about: "AI Engineer & Senior Software Developer specializing in full-stack development, mathematical modeling, and cloud infrastructure at GauntletAI.",
  skills: "Core expertise: Python, C#, AI/ML (PyTorch, TensorFlow), Cloud Platforms (AWS, GCP, Azure), and modern frameworks like .NET, React, and Flask.",
  experience: "4+ years spanning AI fellowship at GauntletAI, Senior Developer at Bruker Cellular Analysis, and Systems Engineering at McMaster-Carr.",
  education: "Bachelor of Science in Biomedical Engineering from Yale University (2017-2021) with GPA 3.64, focused on biocomputation and research.",
  contact: `Email: ${resumeData.about.email} | Phone: ${resumeData.about.phone} | LinkedIn: ${resumeData.about.linkedin} | GitHub: ${resumeData.about.github}`,
  summary: "Nataly Smith - AI Engineer with 4+ years experience in full-stack development, mathematical modeling, and cloud infrastructure, currently developing cutting-edge AI applications at GauntletAI."
}

interface TerminalLine {
  type: 'command' | 'output' | 'error'
  content: string
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome! Loading available commands...' },
    { type: 'output', content: '' }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasRunDemo, setHasRunDemo] = useState(false)
  const [isAutoTyping, setIsAutoTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-focus terminal input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])



  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const typewriterEffect = async (text: string) => {
    setIsTyping(true)
    
    // Add a small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 300))
    
    setLines(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: text },
      { type: 'output', content: '' }
    ])
    
    setIsTyping(false)
  }

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    // Add command to terminal
    setLines(prev => [
      ...prev.slice(0, -1),
      { type: 'command', content: `$ ${cmd}` },
      { type: 'output', content: '' }
    ])

    if (trimmedCmd === 'clear') {
      setTimeout(() => {
        setLines([
          { type: 'output', content: 'Terminal cleared. Type "help" to see commands.' },
          { type: 'output', content: '' }
        ])
      }, 500)
      return
    }

    const response = commands[trimmedCmd as keyof typeof commands]
    
    if (response) {
      await typewriterEffect(response)
    } else {
      await typewriterEffect(`Command not found: ${cmd}. Type "help" to see commands.`)
    }
  }

  // Auto-demo: type "help" command automatically
  useEffect(() => {
    if (!hasRunDemo) {
      const runAutoDemo = async () => {
        // Wait 2 seconds before starting the demo
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Start auto-typing animation
        setIsAutoTyping(true)
        const command = 'help'
        
        // Type each character with delay
        for (let i = 0; i <= command.length; i++) {
          setCurrentInput(command.slice(0, i))
          await new Promise(resolve => setTimeout(resolve, 150))
        }
        
        // Wait a moment, then execute command
        await new Promise(resolve => setTimeout(resolve, 500))
        setIsAutoTyping(false)
        
        // Execute help command
        await executeCommand(command)
        setCurrentInput('')
        setHasRunDemo(true)
      }
      
      runAutoDemo()
    }
  }, [hasRunDemo])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim() && !isTyping && !isAutoTyping) {
      executeCommand(currentInput)
      setCurrentInput('')
    }
  }

  return (
    <div className="w-full max-w-2xl bg-background/10 backdrop-blur-sm rounded-lg">
      {/* Terminal Content */}
      <div className="p-0">
        <div 
          ref={terminalRef}
          className="h-48 overflow-y-auto p-4 cursor-text"
          onClick={handleTerminalClick}
        >
          <div className="space-y-1">
            {lines.map((line, index) => (
                             <div 
                 key={index} 
                 className={`${
                   line.type === 'command' 
                     ? 'text-primary font-medium font-mono' 
                     : line.type === 'error'
                     ? 'text-destructive font-mono'
                     : 'text-muted-foreground font-light'
                 }`}
               >
                 {line.content && (
                   <pre className="whitespace-pre-wrap leading-relaxed text-sm">
                     {line.content}
                   </pre>
                 )}
               </div>
            ))}
            
                         {/* Command Input Line */}
             {!isTyping && (
               <div className="flex items-center gap-2">
                 <span className="text-primary font-medium font-mono text-sm">$</span>
                 <input
                   ref={inputRef}
                   type="text"
                   value={currentInput}
                   onChange={(e) => !isAutoTyping && setCurrentInput(e.target.value)}
                   onKeyPress={handleKeyPress}
                   className="flex-1 bg-transparent border-none outline-none text-foreground font-mono placeholder-muted-foreground text-sm"
                   placeholder={isAutoTyping ? "" : "Type a command..."}
                   autoComplete="off"
                   spellCheck={false}
                   disabled={isAutoTyping}
                 />
                 <span className="animate-pulse text-primary font-mono text-sm">|</span>
               </div>
             )}
             
             {/* Typing Indicator */}
             {isTyping && (
               <div className="flex items-center gap-2">
                 <span className="text-primary font-mono text-sm">$</span>
                 <span className="animate-pulse text-muted-foreground font-light text-sm">Processing...</span>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  )
} 