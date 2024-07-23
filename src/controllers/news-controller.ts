import express,{ Request, Response } from 'express';
import { newsService } from '../services/news.service';
import { INews } from '../models/task.model';
import { GenericErrorResponse, GenericSuccessResponse } from '../helpers/response.helper';

const router = express.Router();
const service = new newsService();

router
.post('/create-post', async (req:Request, res:Response) => {
  try {
    const task:INews = req.body;
    const response =await service.postNews(res,task);
    return response;
  } catch (ex) {
    return res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
})
.get('/get-by-category/:category', async (req:Request, res:Response) => {
  try {
    const category = req.params?.category as string;
    const response = await  service.getNews(res,category);
    return response;
  } catch (ex) {
    return res.status(500).json(GenericErrorResponse("Internal Server Error",ex))
  }
});


export default router;