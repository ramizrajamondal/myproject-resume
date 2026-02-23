import mongose from "mongoose";

const interviewSchema = new mongose.Schema({
    userId:{
        type: mongose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    role:{
        type: String,
    },
    questions:[
        {
            type: String
        }
    ],
    answers: [
        {
            type: String
        }
    ],
    feedback: {
        type: String
    },
    score:{
        type: Number
    }
},{timestamps: true})

const interviewModel = mongose.model("interview",interviewSchema);
export default interviewModel;