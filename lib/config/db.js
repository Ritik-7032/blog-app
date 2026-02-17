// import mongoose from "mongoose";
//  const dbConnect =()=>{
//     mongoose.connect(process.env.MONGODB_URL)
//     .then(()=>{
//         console.log(`Database connected successfully`);
//     })
//     .catch((error)=>{
//         console.log(`Error while connecting db`);
//         console.log(error);
//         process.exit(1)
//     })
//  }

//  export default dbConnect
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URL in environment variables");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
