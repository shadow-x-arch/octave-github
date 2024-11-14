# React + TypeScript + Vite + css + java + html

This is a React-based project mimics a given webpage for managing tasks, displaying dashboards whith a design both in terms of responsiveness, UI and UX it has Add dark theme support,it has switch case (language) button and more buttons for supporting i18n(English, French and korean) on chard board and it has dummy todo api for all the CRUD operations on the second page

## steps to create this project

first install node.js

bash

---

npm creat vite@react the name your project
sellect frame work
react
cd to you react project name
npm install
npm run dev

---

root
│ .gitignore
│ index.html
│ package.json
│ package-lock.json
│ README.md
│ tsconfig.app.json
│ tsconfig.json
│ tsconfig.node.json
│ vite.config.ts
│  
├───public
│ favicon.ico
│ robots.txt
│
├───src
│ │ App.tsx
│ │ app.css
│ │ i18n.js
│ │ main.tsx
│ │ setupTests.ts
│ │ vite-env.d.ts
| | app,test.tsx
| | app.ps
| |
│ │
│ │
│ ├───components
│ │ Cards.tsx
│ │ Cards.css
│ │ ChatBoard.tsx
│ │ ChatBoard.css
│ │ Dashboard.tsx
│ │ Dashboard.css
│ │ Footer.tsx
│ │ Header.tsx
│ │ Languages.tsx
│ │ Languages.css
| | Languageswitcher.tsx
| | Languageswitcher.css
│ │ MainLayout.tsx
│ │ MainLayout.css
│ │ SearchNotification.tsx
│ │ SearchNotification.css
│ │ TaskManager.tsx
│ │ TaskManager.test.tsx
│ │ TopCenter.tsx
│ │ TopCenter.css
│ │
│ ├───locales
│ │ en.json
│ │ fr.json
│ │ ko.json
│ │
│ ├───pages
│ │ crud.tsx
│ │ crud.css
│ │
│ ├───pages
│ │ CRUD.tsx
│ │ CRUD.css
│ │
│ ├───styles
│ globalStyles.ts
│ themes.ts

# root // this root directort which contains the core files and folders needed to configure, build, and run the application

# public //contains all system images and icons

# src // contains the application's main code, including components, styles, assets, and logic files.

app// this serves as the root for rendering all other components, setting up the application structure, routing, and context providers
i18n.js // enable multi-language support across the app.

# components //This one holds reusable UI elements and functional components that make up the application's interface.

ChatBoard.tsx // contains staric old chats and dynamic chat that you can type the input  
Languages.tsx // it contains Languages switch case togle code EN,FR AND korean
Languageswitcher.tsx // this one olso is for Languages but this one use i18n it configed to work only to chat

# locales // contains en,fr and ko JSON files for language to manage translations for the i18n (internationalization) setup.

# pages // contain files and components related to Create, Read, Update, and Delete (CRUD) operations. which you can access through main page link from mainlayout div and crud.tsx files

# style // have some of the files related to the visual look of this app. darktheme and normal theme

## Available Scripts

npm run dev - Starts the development server.
npm run build - Builds the project for production.
npm run preview - Serves the built project locally.
# octave-github
# octave-github
