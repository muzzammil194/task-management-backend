import express,{ Request, Response } from 'express';
import { newsService } from '../services/news.service';
import { INews } from '../models/task.model';
import { GenericErrorResponse, GenericSuccessResponse } from '../helpers/response.helper';

const router = express.Router();
const task_service = new newsService();

router
.post('/create-post', async (req:Request, res:Response) => {
  try {
    const task:INews = req.body;
    const response =await task_service.postNews(task);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.get('/get-by-category', async (req:Request, res:Response) => {
  try {
    const category = req.query?.category as string;
    const assignedTo = req.query?.assignedTo as string;
    const response = await  task_service.getNews(assignedTo,category);
    res.status(200).json(GenericSuccessResponse(response));
  } catch (ex) {
    res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
});


export default router;