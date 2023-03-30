import mongoose from "mongoose";


const TaskSchemma=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'important to mention task '],
    },
    completion:{
        type:Boolean,
        default:false,
    }
    
},{timestamps:true});

const Task=new mongoose.model('Task',TaskSchemma);

export default Task;