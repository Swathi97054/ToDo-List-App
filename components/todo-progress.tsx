import { cn } from "@/lib/utils"

interface TodoProgressProps {
  progressPercentage: number
  isDarkMode: boolean
}

export default function TodoProgress({ progressPercentage, isDarkMode }: TodoProgressProps) {
  return (
    <div className="w-full max-w-2xl mb-8 px-4">
      <div className="text-center text-lg font-semibold mb-2 text-white">Progress: {progressPercentage}%</div>
      <div
        className={cn(
          "w-full h-4 rounded-full",
          isDarkMode ? "bg-gray-700 shadow-soft-inset-shadow" : "bg-purple-400 shadow-soft-inset-shadow",
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            isDarkMode ? "bg-white" : "bg-white", // Progress fill is white
          )}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}
