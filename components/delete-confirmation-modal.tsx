"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DeleteConfirmationModalProps {
  showDeleteConfirm: boolean
  cancelDelete: () => void
  executeDelete: () => void
  isDarkMode: boolean
}

export default function DeleteConfirmationModal({
  showDeleteConfirm,
  cancelDelete,
  executeDelete,
  isDarkMode,
}: DeleteConfirmationModalProps) {
  if (!showDeleteConfirm) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={cn(
          "p-8 rounded-xl shadow-soft-shadow flex flex-col items-center gap-6",
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800",
        )}
      >
        <p className="text-xl font-semibold">Are you sure you want to delete this task?</p>
        <div className="flex gap-4">
          <Button
            onClick={executeDelete}
            className={cn(
              "px-6 py-3 rounded-full font-semibold",
              isDarkMode
                ? "bg-red-600 text-white shadow-soft-shadow hover:shadow-soft-inset-shadow"
                : "bg-red-500 text-white shadow-soft-shadow hover:shadow-soft-inset-shadow",
            )}
          >
            Yes, Delete
          </Button>
          <Button
            onClick={cancelDelete}
            className={cn(
              "px-6 py-3 rounded-full font-semibold",
              isDarkMode
                ? "bg-gray-600 text-white shadow-soft-shadow hover:shadow-soft-inset-shadow"
                : "bg-gray-300 text-gray-800 shadow-soft-shadow hover:shadow-soft-inset-shadow",
            )}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
