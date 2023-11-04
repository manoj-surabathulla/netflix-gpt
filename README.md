# Set Up React App

- npx create-react-app
  - Tailwind
    - npm install -D tailwindcss
    - npx tailwindcss init
  - Router Dom
    - npm i -D react-router-dom
  - Firebase
    - npm i firebase
    - npm i -g firebase-tools
  - Redux-toolkit
    - npm i -D @reduxjs/toolkit
    - npm i react-redux

# Steps

- created react app
- configure tailwindcss and router dom
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase
- Deploy our App to production
- Create SignUp user Account
- Create Sign In User Account
- Implemented Redux toolkit

# Features

- Login/ SignUp
  - Sign In/Sign Up Form
  - redirect to the browser page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestion
      - Movie Lists \* N
- Netflix GPT
  - Search Bar
  - Movie Suggestions

# Steps for firebase hosting

- open terminal:
  - firebase login
  - install firebase cli with using the command : "npm i -g firebase-tools"
  - firebase init
    - Select the continuous deploy or manual deploy as ur wish (using up and down arrow and select by pressing "space bar" press enter )
    - default index.html 'No'
    - change Public file to 'build' or (if ur using vite u need to provide 'dist')
  - npm run build
  - firebase deploy
