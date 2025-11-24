# full-stack-web-application (React + Node.js + MongoDB + Firebase)

**Overview**

This is a full-stack web application designed to create and manage articles with user authentication.
Users can sign up, log in, post articles, comment, and view content through a clean and interactive UI built using React.

The backend is powered by Node.js & Express, data is stored in MongoDB, and authentication is handled through Firebase Auth.
Features

**Features**

Create, read, and display articles

Post comments on articles

User authentication using Firebase (Login/Signup)

Reusable React components for dynamic UI

REST APIs built using Express

MongoDB integration for storing articles & comments

Axios for API communication

Organized frontend & backend structure

**Tech Stack**

**Frontend**:

    React.js
    
    JavaScript
    
    Axios
    
    Firebase (for authentication)

**Backend**

    Node.js
    
    Express.js
    
    MongoDB
    
    Firebase Admin SDK

**Backend Dependencies:**


      "express": "^5.1.0",
      
      "firebase-admin": "^13.6.0",
      
      "mongodb": "^7.0.0"


**Frontend Dependencies:**

    "axios": "^1.13.2",
    
    "firebase": "^12.6.0",
    
    "react": "^18.3.1",
    
    "react-dom": "^18.3.1"

**Installation & Setup**

**1. Clone the Repository**

    git clone https://github.com/your-username/your-repo-name.git
    
    cd your-repo-name

**Backend Setup**

    cd backend
    
    npm install
    
    npm run dev

**Frontend Setup**

    cd frontend
    
    npm install
    
    npm run dev

**Run Locally:**

The frontend will run on: http://localhost:5173/
    
Backend on: http://localhost:8000/

**User Authentication (Firebase)**

This project uses Firebase Authentication to manage user login and signup securely.

1. Implemented Email & Password Authentication, which allows users to:

2. Create a new account using email and password

3. Log in with their registered email and password

4. Firebase automatically stores and manages these user credentials in its secure authentication system

5. No passwords are stored in our backend — Firebase handles everything safely

**How it works:**

1. When a user signs up, we call Firebase’s
createUserWithEmailAndPassword() method.
Firebase creates the account and stores the user credentials.

2. When a user logs in, we use
signInWithEmailAndPassword()
to validate the credentials with Firebase.

3. After successful login, Firebase returns a secure user token.

4. This token is used to verify the user on the backend using the Firebase Admin SDK.

**Why Firebase Authentication?**

Secure & reliable

Easy login and signup flow

No need to manually hash/store passwords

Built-in support for tokens and session management


**Learning Resources:**
1. Learning using linked in: https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/
2. Axios Guide: https://axios-http.com/docs/intro
3. Firebase Authentication (Web) :https://console.firebase.google.com/project/full-stack-react-e0068/authentication/users




























  

  
























  
