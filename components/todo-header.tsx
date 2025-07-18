"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TodoHeaderProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function TodoHeader({ isDarkMode, toggleTheme }: TodoHeaderProps) {
  return (
    <header className="w-full max-w-6xl flex justify-between items-center mb-12 px-4">
      <h1
        className={cn("text-5xl font-extrabold text-white", isDarkMode ? "drop-shadow-lg" : "shadow-text-3d")}
        style={{
          textShadow: isDarkMode
            ? "2px 2px 4px rgba(0,0,0,0.5)"
            : "2px 2px 4px rgba(0,0,0,0.3), 4px 4px 6px rgba(0,0,0,0.2), 6px 6px 8px rgba(0,0,0,0.1)",
        }}
      >
        Todo App
      </h1>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          size="lg"
          onClick={toggleTheme}
          className={cn(
            "rounded-full px-6 py-3 flex items-center gap-2 font-semibold",
            isDarkMode
              ? "bg-gray-700 text-white shadow-soft-shadow hover:shadow-soft-inset-shadow"
              : "bg-white text-gray-800 shadow-soft-shadow hover:shadow-soft-inset-shadow",
          )}
        >
          {isDarkMode ? (
            <>
              <Moon className="w-5 h-5" /> Dark
            </>
          ) : (
            <>
              <Sun className="w-5 h-5" /> Light
            </>
          )}
        </Button>
      </div>
    </header>
  )
}
