import mongoose from "mongoose";

const connectMondoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error connection to MondoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectMondoDB;