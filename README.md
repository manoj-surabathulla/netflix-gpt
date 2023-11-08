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
  - Open AI
    - npm i openai

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
- Fetch TMDB Movie API
- Unsubscribe the onAuthStateChanged callBack
- Create constants file and keep all the hard coded strings
- "why api calls will render twice because of React.StrictMode only in local will render twice."
- created custom hook.
- \*className: "aspect-video" is used to set the video ratio
- For background video we need to take iFrame and to autoplay u need to provide after the key "?autoplay=1&mute=1" then it will work
- GPT search filter
- Created Multi-Language in our application
- \*Every State we are storing by using redux toolkit. "because it is used for data layer"
- Login to the platform-openApi
- Go to personal and click API key and generate the key ("https://platform.openai.com/api-keys")
- \*Promise.all() - read about this topic

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
