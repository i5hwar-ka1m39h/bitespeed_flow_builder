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

![Toolbar](https://github.com/i5hwar-ka1m39h/bitespeed_flow_builder/blob/ec786cbab7010403a74368fd67a85d8fc8e45512/Screenshot%202025-07-16%20134046.png)

---

### 🔹 React Flow Graph Canvas
- Displays all nodes and their connections in a graph structure.
- Supports dragging, connecting, and rearranging nodes visually.

![React Flow Canvas](https://github.com/i5hwar-ka1m39h/bitespeed_flow_builder/blob/ec786cbab7010403a74368fd67a85d8fc8e45512/Screenshot%202025-07-16%20134349.png)

---

### 🔹 Inspector Panel (Node Data Viewer)
- Shows detailed information of the selected node.
- Displays node ID, type, and data in a JSON format.
- **Note:** Node update functionality is planned but **not implemented yet**.

![Inspector Panel](https://github.com/i5hwar-ka1m39h/bitespeed_flow_builder/blob/ec786cbab7010403a74368fd67a85d8fc8e45512/Screenshot%202025-07-16%20134435.png)

---

## 📝 Message Node Details

- Contains a **text area** where the user can enter message text.
- Supports dynamic variables inside messages using this format:
{{var_name}}
- If valid variables are present, they are extracted and displayed in the variable list.
- The node dynamically creates input handles based on the number of variables used.

![Message Node](https://github.com/i5hwar-ka1m39h/bitespeed_flow_builder/blob/ec786cbab7010403a74368fd67a85d8fc8e45512/Screenshot%202025-07-16%20134452.png)

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

![Toast Example](https://github.com/i5hwar-ka1m39h/bitespeed_flow_builder/blob/ec786cbab7010403a74368fd67a85d8fc8e45512/Screenshot%202025-07-16%20134617.png)

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
Check out the live demo at : https://bitespeed-flow-builder-three.vercel.app/ .


If you have any further question you can connect me with : ishwarkalmegh156@gmail.com .

