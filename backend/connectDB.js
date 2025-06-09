import mongoose from 'mongoose'

const MONGO_URI = "mongodb://localhost:27017/fullStack"
const connectDB = async() => {
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // const userSchema = new mongoose.Schema({
        //     name: String,
        //     email: String,
        //   });
      
        //   const User = mongoose.model('User', userSchema);
      
        
        //   const testUser = new User({
        //     name: 'Narasimha Gonela',
        //     email: 'narasimha@example.com',
        //   });
      
        //   await testUser.save();
    } catch (error) {
        console.error( error);
    }
}

export default connectDB;
