"use client"

import { Button } from "@/components/ui/button"
import { triggerLoadingState } from "@/components/retro-cursor"

export default function CursorDemo() {
  return (
    <div className="pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground mb-2">Custom Cursor Demo:</p>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => triggerLoadingState()}
        className="hover-glow"
      >
        Test Loading Cursor
      </Button>
    </div>
  )
} 