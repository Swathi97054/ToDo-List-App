"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { cn } from "@/lib/utils"
import type { Todo } from "@/lib/types"

import TodoHeader from "@/components/todo-header"
import TodoInput from "@/components/todo-input"
import TodoProgress from "@/components/todo-progress"
import TodoFilters from "@/components/todo-filters"
import TodoCard from "@/components/todo-card"
import DeleteConfirmationModal from "@/components/delete-confirmation-modal"

export default function TodoAppUI() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [filter, setFilter] = useState("All") // Default to "All" as per image
  const [newTask, setNewTask] = useState("")
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize with an empty array, no default tasks
    return []
  })
  const [progress, setProgress] = useState(0)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [taskToDeleteId, setTaskToDeleteId] = useState<string | null>(null)
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
  const [editingText, setEditingText] = useState("")

  // Calculate progress based on current todos
  const completedTasksCount = todos.filter((todo) => todo.completed).length
  const totalTasksCount = todos.length
  const progressPercentage = totalTasksCount === 0 ? 0 : Math.round((completedTasksCount / totalTasksCount) * 100)

  useEffect(() => {
    setProgress(progressPercentage)
  }, [todos, progressPercentage])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark", !isDarkMode)
  }

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTodo: Todo = {
        id: uuidv4(),
        text: newTask.trim(),
        completed: false,
      }
      setTodos((prevTodos) => [...prevTodos, newTodo])
      setNewTask("")
    }
  }

  const handleToggleComplete = (id: string) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const confirmDelete = (id: string) => {
    setTaskToDeleteId(id)
    setShowDeleteConfirm(true)
  }

  const executeDelete = () => {
    if (taskToDeleteId) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== taskToDeleteId))
      setShowDeleteConfirm(false)
      setTaskToDeleteId(null)
    }
  }

  const cancelDelete = () => {
    setShowDeleteConfirm(false)
    setTaskToDeleteId(null)
  }

  const startEditing = (id: string, text: string) => {
    setEditingTaskId(id)
    setEditingText(text)
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.target.value)
  }

  const saveEditing = (id: string) => {
    if (editingText.trim()) {
      setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, text: editingText.trim() } : todo)))
      setEditingTaskId(null)
      setEditingText("")
    }
  }

  const cancelEditing = () => {
    setEditingTaskId(null)
    setEditingText("")
  }

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === "Enter") {
      saveEditing(id)
    } else if (e.key === "Escape") {
      cancelEditing()
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") {
      return !todo.completed
    } else if (filter === "Completed") {
      return todo.completed
    }
    return true // "All" filter
  })

  return (
    <div
      className={cn(
        "min-h-screen p-8 flex flex-col items-center transition-colors duration-300",
        isDarkMode ? "bg-gray-900 text-white" : "bg-appPurple text-gray-900", // Solid purple background
      )}
    >
      <TodoHeader isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <TodoInput newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} isDarkMode={isDarkMode} />
      <TodoProgress progressPercentage={progressPercentage} isDarkMode={isDarkMode} />
      <TodoFilters filter={filter} setFilter={setFilter} isDarkMode={isDarkMode} />

      {/* Todo Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              isDarkMode={isDarkMode}
              handleToggleComplete={handleToggleComplete}
              confirmDelete={confirmDelete}
              startEditing={startEditing}
              editingTaskId={editingTaskId}
              editingText={editingText}
              handleEditChange={handleEditChange}
              handleEditKeyDown={handleEditKeyDown}
              saveEditing={saveEditing}
              cancelEditing={cancelEditing}
            />
          ))
        ) : (
          <div
            className={cn(
              "col-span-full text-center text-2xl font-semibold p-8 rounded-xl",
              isDarkMode
                ? "text-gray-400 bg-gray-700 shadow-soft-inset-shadow"
                : "text-gray-600 bg-white shadow-soft-inset-shadow",
            )}
          >
            {filter === "Active" && "No active tasks. Time to relax or add a new one!"}
            {filter === "Completed" && "No completed tasks yet. Get to work!"}
            {filter === "All" && "No tasks to display. Add your first todo!"}
          </div>
        )}
      </div>

      <DeleteConfirmationModal
        showDeleteConfirm={showDeleteConfirm}
        cancelDelete={cancelDelete}
        executeDelete={executeDelete}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
