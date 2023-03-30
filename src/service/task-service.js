import TaskRepo from "../repository/task-respo.js";

class taskService{

constructor(){
    this.taskRepo = new TaskRepo();
}

async Create(data){
    try {
        const task= await this.taskRepo.create(data);
        return task;
    } catch (error) {
        throw error;

    }
}
async getAll(){
    try {
        const response=await this.taskRepo.getAll();
    return response;
    } catch (error) {
        throw error;

    }
}
async getOne(id){
    try {
        const response=await this.taskRepo.getOne(id);
    return response;
    } catch (error) {
        throw error;

    }
}
async deleteOne(id){
    try {
        const response=await this.taskRepo.deleteOne(id);
    return response;
    } catch (error) {
        throw error;

    }
}
async update(obj){
    try {
        const response=await this.taskRepo.update(obj);
    return response;
    } catch (error) {
        throw error;

    }
}
}

export default taskService;