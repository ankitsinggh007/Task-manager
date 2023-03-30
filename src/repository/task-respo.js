import Task from "../models/task.js"

class TaskRepo{


    async create(data){
        try {
            const task=await Task.create(data);
            return task
            
        } catch (error) {
            throw error;
        }
    }
    async getAll(){
        try {
            const allTask=await Task.find({ });
            return allTask;
        } catch (error) {
                throw error;
        }
    }

    async getOne(id){
        try {
            const allTask=await Task.findById(id);
            return allTask;
        } catch (error) {
                throw error;
        }
    }
    async deleteOne(id){
        try {
            const allTask=await Task.findByIdAndDelete(id);
            return allTask;
        } catch (error) {
                throw error;
        }
    }
    async update(obj){
        try {
            const allTask=await Task.findByIdAndUpdate(obj.id,obj.data,{new: true});
            return allTask;
        } catch (error) {
                throw error;
        }
    }
}

export default TaskRepo;