"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface TodoInputProps {
  newTask: string
  setNewTask: (task: string) => void
  handleAddTask: () => void
  isDarkMode: boolean
}

export default function TodoInput({ newTask, setNewTask, handleAddTask, isDarkMode }: TodoInputProps) {
  return (
    <div className="w-full max-w-2xl flex items-center gap-4 mb-8 px-4">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className={cn(
          "flex-grow h-14 rounded-xl text-lg px-6",
          isDarkMode
            ? "bg-gray-700 text-white shadow-soft-inset-shadow border-none focus:ring-2 focus:ring-purple-400"
            : "bg-white text-gray-800 shadow-soft-inset-shadow border-none focus:ring-2 focus:ring-purple-700",
        )}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <Button
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full text-white text-3xl",
          isDarkMode
            ? "bg-purple-700 shadow-soft-shadow hover:shadow-soft-inset-shadow"
            : "bg-purple-700 shadow-soft-shadow hover:shadow-soft-inset-shadow",
        )}
        onClick={handleAddTask}
      >
        <Plus className="w-8 h-8" />
      </Button>
    </div>
  )
}
