# 🛠️ BiteSpeed Flow Builder

This is a **Flow Builder** application built for the **BiteSpeed Assignment**.  
It allows users to create and manage nodes in a graph-like structure using **React Flow**.

---

## 📋 Features

### 🔹 Toolbar with Draggable Nodes
- A toolbar that contains draggable nodes:
  - **Message Node**
  - **Customer Node** (dummy)
  - **Product Node** (dummy)
- Users can drag and drop these nodes into the canvas area.

![Toolbar](<YOUR_TOOLBAR_IMAGE_URL>)

---

### 🔹 React Flow Graph Canvas
- Displays all nodes and their connections in a graph structure.
- Supports dragging, connecting, and rearranging nodes visually.

![React Flow Canvas](<YOUR_CANVAS_IMAGE_URL>)

---

### 🔹 Inspector Panel (Node Data Viewer)
- Shows detailed information of the selected node.
- Displays node ID, type, and data in a JSON format.
- **Note:** Node update functionality is planned but **not implemented yet**.

![Inspector Panel](<YOUR_INSPECTOR_IMAGE_URL>)

---

## 📝 Message Node Details

- Contains a **text area** where the user can enter message text.
- Supports dynamic variables inside messages using this format:
{{var_name}}
- If valid variables are present, they are extracted and displayed in the variable list.
- The node dynamically creates input handles based on the number of variables used.

![Message Node](<YOUR_MESSAGE_NODE_IMAGE_URL>)

---

## 🕹️ Node Interaction

- Click on any node to view its data in the **Inspector Panel**.
- Nodes can be connected to each other via **connection handles**.
- Supports interactive graph editing (dragging, connecting, deleting).

---

## ✅ Submitting the Flow

### On Clicking **Save Flow**:
- 🟥 If **no nodes are present** → Shows an **error toast**:  
_“There are no nodes!”_

- 🟥 If **nodes are present but not connected** → Shows an **error toast**:  
_“Some nodes are not connected!”_

- 🟩 If **all nodes are properly connected** → Shows a **success toast**:  
_“Flow saved successfully!”_

![Toast Example](<YOUR_TOAST_IMAGE_URL>)

---

## 🚀 Tech Stack

- **React (TypeScript)**
- **React Flow**
- **Zustand (Global State Management)**
- **Tailwind CSS**
- **React Icons**

---

## 🛠️ Setup & Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```










