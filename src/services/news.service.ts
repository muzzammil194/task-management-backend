import moment from 'moment';
import { INews } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
const  database_connection   = require("../db/connection")

export class newsService {
  postNews = async (task: INews): Promise<any> => {
    try {
    } catch (ex) {
      return ex;
    }
  }
  getNews = async (assignedTo?: string, category?: string): Promise<any> => {
    try {
      return "";
    } catch (ex) {
      return ex;
    }
  }
}