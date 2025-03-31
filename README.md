# StudyTree - Learning Management System (LMS)

## 🚀 Overview
StudyTree is a **Learning Management System (LMS)** that enables students to enroll in courses, track their progress, and access learning materials. It is a full-stack MERN application with **Stripe** integration for secure payments.

## 🌍 Live Demo
[https://lms.virpages.com](https://lms.virpages.com)

## 📌 Features
- 🔐 **User Authentication** (Sign up, Login, Logout with JWT & Cookies)
- 📚 **Course Management** (Add, Update, Delete Courses)
- 🎥 **Media Handling** (Upload & Manage Course Videos)
- 🛒 **Stripe Payment Integration** (Secure course purchases)
- 📈 **Progress Tracking** (Monitor learning progress)
- 📩 **Email Notifications** (For course purchases)
- 🌍 **Deployed on Render (Backend) & Vercel (Frontend)**

## 🛠️ Tech Stack
- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Payment Gateway:** Stripe
- **Deployment:** Render (Backend), Vercel (Frontend)

---

## 🏗️ Project Structure
```
📦 StudyTree
├── 📂 client          # Frontend (React + Vite)
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── 📂 features (Redux)
│   │   ├── 📂 utils
│   │   └── main.jsx
│   ├── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
├── 📂 server          # Backend (Node.js + Express)
│   ├── 📂 controllers
│   ├── 📂 models
│   ├── 📂 routes
│   ├── 📂 middlewares
│   ├── 📂 config
│   ├── 📂 uploads
│   ├── 📄 server.js
│   ├── 📄 .env
│   ├── 📄 package.json
│   └── 📄 database.js
│
└── 📄 README.md       # Project Documentation
```

---

## 🎯 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone git@github.com:Virendra-Nawkar/LMS-Production.git
cd LMS-Production
```

### **2️⃣ Install Dependencies**
```sh
npm install && npm install --prefix client
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file inside the `server/` folder and add the following:
```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=https://lms.virpages.com
```

### **4️⃣ Start the Development Server**
```sh
npm run dev
```
This runs the following:
- **Frontend** on `http://localhost:5173/`
- **Backend** on `http://localhost:8080/`
- **Stripe Webhook Listener**

### **5️⃣ Build for Production**
```sh
npm run build
```

---

## ⚡ API Endpoints
### **🔐 Authentication**
- `POST /api/v1/user/register` → Register a new user
- `POST /api/v1/user/login` → Login & get JWT token
- `GET /api/v1/user/profile` → Get user details

### **📚 Courses**
- `GET /api/v1/course/` → Get all courses
- `POST /api/v1/course/add` → Add a new course (Admin only)

### **🎥 Media**
- `POST /api/v1/media/upload` → Upload course videos

### **🛒 Payments**
- `POST /api/v1/purchase/checkout` → Create a Stripe payment session
- `POST /api/v1/purchase/webhook` → Stripe Webhook

---

## 🚀 Deployment
### **Frontend (Vercel)**
```sh
vercel --prod
```

### **Backend (Render)**
1. Go to [Render](https://render.com)
2. Deploy the backend repository
3. Set up the environment variables
4. Add a custom domain

---

## 🔗 Custom Domain Setup (Render + One.com)
1. In **Render**, add your custom domain (`lms.virpages.com`)
2. In **One.com**, update the **CNAME Record**:
   - **Hostname:** `lms`
   - **Alias:** `vir-lms.onrender.com`
   - **TTL:** Default (3600 seconds)
3. Wait for DNS propagation (~5-10 minutes)
4. Click **Verify** on Render

---

## 👨‍💻 Contributors
- **Virendra Nawkar** ([@virendra](https://github.com/yourgithubprofile))

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🎯 Future Improvements
- ✅ Add Quiz & Assessment Module
- ✅ Implement AI-based Course Recommendations
- ✅ Improve UI/UX with Animations

---

## 📞 Support
For any issues, feel free to open an **issue** on GitHub or contact me at [your.email@example.com](mailto:your.email@example.com).

