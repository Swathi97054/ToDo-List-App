# Modern Todo App Design

A sleek and modern Todo application built with Next.js, React, and Tailwind CSS, featuring a neumorphic design, task management functionalities, and a responsive user interface.

## Overview

This project is a front-end focused Todo application designed with a clean, stylish, and interactive user experience in mind. It allows users to add, manage, and filter their tasks with a visually appealing neumorphic design.

## Features

*   **Task Management**:
    *   Add new tasks.
    *   Mark tasks as completed.
    *   Inline edit existing tasks.
    *   Delete tasks with a confirmation prompt.
*   **Task Filtering**: Filter tasks by "All", "Active", and "Completed" states.
*   **Progress Bar**: Visual representation of task completion progress.
*   **Theming**: Toggle between light and dark modes.
*   **Responsive Design**: Adapts to various screen sizes.
*   **Neumorphic UI**: Soft, extruded elements with subtle shadows for a modern feel.

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI Library**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/icons/)
*   **Unique IDs**: [uuid](https://www.npmjs.com/package/uuid)

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```
    (Replace `<your-repository-url>` and `<your-repository-name>` with your actual repository details.)

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

### Running the Development Server

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

*   **Add Task**: Type your task in the input field and click the `+` button or press `Enter`.
*   **Edit Task**: Click the pencil icon on a task card to enter edit mode. Type your changes and click the green checkmark to save, or the grey 'X' to cancel.
*   **Complete Task**: Click the green checkmark icon on a task card to toggle its completion status.
*   **Delete Task**: Click the red 'X' icon on a task card. A confirmation modal will appear.
*   **Filter Tasks**: Use the "Active", "Completed", and "All" buttons to filter the displayed tasks.
*   **Toggle Theme**: Use the "Light" / "Dark" button in the header to switch between themes.

## Future Enhancements

*   **Data Persistence**: Implement local storage or a backend database (e.g., Supabase, Neon) to save tasks permanently.
*   **Animations**: Add more subtle animations for a smoother user experience.
*   **Task Prioritization**: Allow users to set priority levels for tasks.
*   **Due Dates**: Add functionality to assign due dates to tasks.
*   **User Authentication**: If a backend is integrated, add user authentication to manage personal task lists.

