import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        console.log("Connecting to Mongo...");
        console.log("URI:", process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("✅ Connected to database");
    } catch (error) {
        console.log("❌ MongoDB Connection Failed:");
        console.log(error.message);
    }
};

export default dbConnection;
