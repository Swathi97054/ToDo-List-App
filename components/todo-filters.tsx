"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TodoFiltersProps {
  filter: string
  setFilter: (filter: string) => void
  isDarkMode: boolean
}

export default function TodoFilters({ filter, setFilter, isDarkMode }: TodoFiltersProps) {
  return (
    <div className="w-full max-w-2xl flex justify-center gap-4 mb-12 px-4">
      {["Active", "Completed", "All"].map((btnText) => (
        <Button
          key={btnText}
          variant="ghost"
          size="lg"
          onClick={() => setFilter(btnText)}
          className={cn(
            "rounded-full px-8 py-3 font-semibold",
            // Text color based on dark mode
            isDarkMode ? "text-white" : "text-gray-800",
            // Conditional styling for selected vs unselected buttons
            filter === btnText
              ? // Selected button style
                isDarkMode
                ? "bg-purple-600 text-white shadow-soft-inset-shadow" // Dark mode selected
                : "bg-white text-gray-800 shadow-soft-inset-shadow" // Light mode selected (white background, dark text)
              : // Unselected button style
                isDarkMode
                ? "bg-gray-700 shadow-soft-shadow hover:shadow-soft-inset-shadow" // Dark mode unselected
                : "bg-appPurple text-white shadow-soft-shadow hover:shadow-soft-inset-shadow", // Light mode unselected (purple background, white text)
          )}
        >
          {btnText}
        </Button>
      ))}
    </div>
  )
}
