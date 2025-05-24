# 💬 Responsive Chat App Using React

This is a fully responsive chat application built with **React** and **Vite**. It features a modern UI design and is inspired by a real-time chat interface, ideal for frontend practice and React projects.

![Chat App Demo](https://img.youtube.com/vi/domt_Sx-wTY/0.jpg)

## 🚀 Features

- ⚡ Built using React + Vite for fast performance
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 💬 Beautiful and intuitive chat UI
- 🎨 Styled with modern CSS techniques (Flexbox/Grid)
- 🧼 Clean, maintainable code with ESLint integration

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS / Flexbox / Grid
- [ESLint](https://eslint.org/)

## 📦 Installation

```bash
git clone https://github.com/binghazy/Resposive-Chat-App-Using-React.git
cd Resposive-Chat-App-Using-React
npm install
npm run dev
```
## 🔥 Firebase Integration

This project uses **Firebase** for real-time backend services, including:

- **Authentication**: Firebase Authentication allows users to sign in securely using email and password (or other providers).
- **Firestore Database**: A NoSQL cloud database used to store users, messages, and chat rooms in real time.
- **Firebase Hosting** *(optional)*: To deploy and host the application online.

### 🧩 Firebase Features in Use

- **Real-time Messaging**: Messages are synced instantly using Firestore listeners.
- **User Management**: Auth state is tracked to show/hide UI elements (e.g., chat screen vs. login).
- **Data Security**: Rules set in Firestore for secure access control.

### 🔧 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable Authentication (Email/Password).
4. Create a Firestore database (start in test mode).
5. Copy your config and replace in your project (usually in `firebase.js`):

```js
// Example: firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP_ID",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

