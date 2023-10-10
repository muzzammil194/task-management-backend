import express,{ Request, Response } from 'express';
import { taskService } from '../services/task.service';
import { ITask } from '../models/task.model';
import { GenericErrorResponse, GenericSuccessResponse } from '../helpers/response.helper';

const router = express.Router();
const task_service = new taskService();

router
.post('/task', async (req:Request, res:Response) => {
  try {
    const task:ITask = req.body;
    const response =await task_service.postTask(task);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.get('/task/:id', async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const response =await task_service.taskGetById(id);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.put('/task/:id', async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const task = req.body as ITask;
    const response =await task_service.taskUpdateById(id,task);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.delete('/task/:id', async (req:Request, res:any) => {
  try {
    const id = req.params.id;
    const response =await task_service.taskDeleteById(id);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.get('/task', async (req:Request, res:Response) => {
  try {
    const category = req.query?.category as string;
    const assignedTo = req.query?.assignedTo as string;
    const response = await  task_service.getTask(assignedTo,category);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
});


export default router;