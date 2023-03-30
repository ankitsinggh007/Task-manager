import express from "express";

export const router=express.Router();



import { deleteOne, getAll, getOne, taskCreate, update } from "../../controller/task-controller.js";

router.post('/tasks',taskCreate);
router.get('/tasks',getAll);
router.get('/tasks/:id',getOne);
router.patch('/tasks/:id',update);
router.delete('/tasks/:id',deleteOne);

router.all('*',(req,res)=>{
    res.status(404).send('<h1>page you looking for is not present</h1>')
})