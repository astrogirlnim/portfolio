"use client"

import { Button } from "@/components/ui/button"
import { triggerLoadingState } from "@/components/retro-cursor"
import { useState } from "react"

export default function CursorDemo() {
  const [testLog, setTestLog] = useState<string[]>([])

  const handleTestClick = (e: React.MouseEvent) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    setTestLog(prev => [...prev, `Loading test started at cursor position: (${mouseX}, ${mouseY})`])
    
    triggerLoadingState()
    
    setTimeout(() => {
      setTestLog(prev => [...prev, `Loading test completed - cursor should have stayed at (${mouseX}, ${mouseY})`])
    }, 2100) // Slightly after the 2-second loading duration
  }

  return (
    <div className="pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground mb-2">Custom Cursor Demo:</p>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleTestClick}
        className="hover-glow"
      >
        Test Loading Cursor
      </Button>
      {testLog.length > 0 && (
        <div className="mt-2 text-xs text-muted-foreground">
          <p className="font-medium">Test Log:</p>
          {testLog.map((log, index) => (
            <p key={index} className="font-mono">{log}</p>
          ))}
        </div>
      )}
    </div>
  )
} 