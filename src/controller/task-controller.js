import { response } from "express";
import taskService from "../service/task-service.js";

const TaskService=new taskService();

export const taskCreate=async(req,res)=>{
    try {
        const response=await TaskService.Create(req.body);
        return res.status(201).json({
            success:true,
            message:"task has been created successfully",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}
export const getAll=async(req,res)=>{
    try {
        const response=await TaskService.getAll();
        return res.status(200).json({
            success:true,
            message:"all task has been fetched succesfully",
            data:response,
            error:{}

        });
    } catch (error) {
        return
        res.status(500).json({
            success:false,
            message:"can't fetched all task",
            data:{},
            error:error
        })
    }
}
export const getOne=async(req,res)=>{

    try {
    const response=await TaskService.getOne(req.params.id);
    return res.status(200).json({
        success:true,
        message:"successfully fetched",
        data:response,
        error:{}
    })
    } catch (error) {
        return
        res.status(500).json({
            success:false,
            message:"can't fetched task",
            data:{},
            error:error
        })
    }
}

export const deleteOne=async(req,res)=>{

    try {
    const response=await TaskService.deleteOne(req.params.id);
    return res.status(200).json({
        success:true,
        message:"successfully deleted the task",
        data:response,
        error:{}
    })
    } catch (error) {
        return
        res.status(500).json({
            success:false,
            message:"can't able to delete task",
            data:{},
            error:error
        })
    }
}
export const update=async(req,res)=>{

    try {
    const response=await TaskService.update({id:req.params.id,
    data:req.body
    });
    return res.status(200).json({
        success:true,
        message:"successfully updated the task",
        data:response,
        error:{}
    })
    } catch (error) {
        return
        res.status(500).json({
            success:false,
            message:"can't able to update the task",
            data:{},
            error:error
        })
    }
}
