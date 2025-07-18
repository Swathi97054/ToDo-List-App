"use client"

import type React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Todo } from "@/lib/types"

interface TodoCardProps {
  todo: Todo
  isDarkMode: boolean
  handleToggleComplete: (id: string) => void
  confirmDelete: (id: string) => void
  startEditing: (id: string, text: string) => void
  editingTaskId: string | null
  editingText: string
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEditKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, id: string) => void
  saveEditing: (id: string) => void
  cancelEditing: () => void
}

export default function TodoCard({
  todo,
  isDarkMode,
  handleToggleComplete,
  confirmDelete,
  startEditing,
  editingTaskId,
  editingText,
  handleEditChange,
  handleEditKeyDown,
  saveEditing,
  cancelEditing,
}: TodoCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl flex flex-col justify-between min-h-[150px] transition-all duration-300 ease-in-out",
        isDarkMode ? "bg-gray-700 shadow-soft-shadow" : "bg-white shadow-soft-shadow", // Reverted to white background for cards
        todo.completed && "opacity-70", // Slightly dim completed tasks
      )}
    >
      {editingTaskId === todo.id ? (
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            value={editingText}
            onChange={handleEditChange}
            onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
            autoFocus
            className={cn(
              "text-xl font-medium h-10 border border-gray-300 rounded-md px-3 py-2", // Input style from image 1
              isDarkMode
                ? "bg-gray-600 text-white focus:ring-purple-400"
                : "bg-white text-gray-800 focus:ring-purple-700",
            )}
          />
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 bg-green-500 text-white", // Green save button
                isDarkMode ? "shadow-soft-shadow" : "shadow-soft-shadow",
              )}
              aria-label="Save edit"
              onClick={() => saveEditing(todo.id)}
            >
              <Check className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 bg-gray-300 text-gray-800", // Grey cancel button
                isDarkMode ? "shadow-soft-shadow" : "shadow-soft-shadow",
              )}
              aria-label="Cancel edit"
              onClick={cancelEditing}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      ) : (
        <p
          className={cn(
            "text-xl font-medium mb-4 flex items-center gap-2",
            todo.completed && "line-through text-gray-500 dark:text-gray-400",
          )}
        >
          {todo.text}
          {todo.completed && (
            <span
              className={cn(
                "text-sm font-semibold px-2 py-0.5 rounded-full",
                isDarkMode ? "bg-purple-700 text-white" : "bg-purple-500 text-white",
              )}
            >
              Done
            </span>
          )}
        </p>
      )}
      {!editingTaskId && ( // Only show action buttons if not in editing mode
        <div className="flex justify-end gap-4 mt-auto">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full w-10 h-10 bg-blue-500 text-white", // Blue edit button
              isDarkMode ? "shadow-soft-shadow" : "shadow-soft-shadow",
            )}
            aria-label="Edit task"
            onClick={() => startEditing(todo.id, todo.text)}
          >
            <Pencil className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full w-10 h-10 bg-green-500 text-white", // Green check button
              isDarkMode ? "shadow-soft-shadow" : "shadow-soft-shadow",
            )}
            aria-label="Mark complete"
            onClick={() => handleToggleComplete(todo.id)}
          >
            <Check
              className={cn(
                "w-5 h-5 transition-colors duration-200",
                todo.completed ? "text-white" : "text-white", // Check icon is white
              )}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full w-10 h-10 bg-red-500 text-white", // Red delete button
              isDarkMode ? "shadow-soft-shadow" : "shadow-soft-shadow",
            )}
            aria-label="Delete task"
            onClick={() => confirmDelete(todo.id)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
