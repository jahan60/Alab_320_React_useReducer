## Introduction:
A simple, interactive Todo list applicatio built with React. This project demonstrates core front-end skills includng conditional rendering, controlled inputs and component-based structure.

## Features:
1. Add new tasks
2. Edit existing task
3. Save updating task
4. Delete Tasks.
5. Mark task as completed

## What I learned:
1. How to manage component state using useState.
2. How to use useReducer to manage more complex state logic with state flow.
3. How reducers help organize actions like add, edit, delete and toggle into clean maintainable code. 
4. How to handle user input and form validation.
5. How to conditionally render UI.

## How the files work together: The files from components connect through app.jsx and the reducer.
1. App.jsx: Holds the main todo state using useReducer.
2. Imports the reducer logic.
3. Passes todos to Todo list.
4. Passes dispatch to TodoForm and TodoItem.

## todoReducer: 
1. Contains all the logic for updating state.
2. Handles actions like add, edit, save delete and toggle.
3. App.jsx uses this file to decide how the todo list changes.

## TodoForm:
1. Handles adding new tasks.
2. Uses dispatch to send an add action to the reducer.
3. This is where todo enter the system.

## TodoList: 
1. Receives the full todos array from App.jsx.
2. Loop through todos and renders a TodoItem for each one.
2. This component only display the list.

## TodoItem:
1. Handles editing, saving, deleting, and toggling a single task.
2. Uses dispatch to send actions like edit, save, delete and toggle.
3. This is where all per=task interaction happen.