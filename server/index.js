import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import courseRoute from './routes/course.route.js';
import mediaRoute from './routes/media.route.js';
import purchaseRoute from './routes/purchaseCourse.route.js';
import courseProgressRoute from './routes/courseProgress.route.js';
import path from "path";

dotenv.config({});
connectDB();

const _dirname = path.resolve();

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "https://lms.virpages.com",
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ API routes first (IMPORTANT)
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.get("/home", (_, res) => {
    res.status(200).json({
        success: true,
        message: "Hello I am coming from Backend"
    });
});

// ✅ Serve frontend **AFTER API routes**
app.use(express.static(path.join(_dirname, "/client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
