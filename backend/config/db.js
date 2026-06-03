import mongoose from "mongoose";

export const connectDB = async () => {
    // Reads MONGO_URI from docker-compose, or falls back to localhost if running manually
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/food-delivery';
    
    try {
        await mongoose.connect(uri);
        console.log(`DB Connected successfully to: ${uri}`);
    } catch (error) {
        console.error("DB Connection Error: ", error);
        process.exit(1);
    }
}
