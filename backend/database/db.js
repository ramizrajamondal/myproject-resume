import mongoose from "mongoose";
import dbName from "../config/dbName.js";
const dbConnection = async () => {
    try {
        const response = 
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName.database}`);
        if(response){
            console.log("connected to database");
        }else{
            console.log("some problem in db connection");
        }
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}

export default dbConnection;