import moment from 'moment';
import { INews } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

export class newsService {
  private tasks: INews[] = [];

  postNews = async (task: INews): Promise<any> => {
    try {
      if (task.creationDate < task.dueDate) {
        task.id = uuidv4();
        task.assignedTo = task.assignedTo.toString().toLowerCase().trim();
        task.category = task.category.toString().toLowerCase().trim();
        this.tasks.push(task);
        return task;
      }
    } catch (ex) {
      return ex;
    }
  }
  getNews = async (assignedTo?: string, category?: string): Promise<any> => {
    try {
      if (!assignedTo && !category) {
        const response = this.tasks.map(value => {
          value.creationDate = moment.unix(parseInt(value.creationDate)).format("YYYY-MM-DD hh:mm:ss")
          value.dueDate = moment.unix(parseInt(value.dueDate)).format("YYYY-MM-DD hh:mm:ss")
          return value;
        })
        return response;
      }
      else if (assignedTo && !category) {
        const response = this.tasks.filter(filteredValue => {
          return filteredValue.assignedTo.toLowerCase().trim() === assignedTo.toLowerCase().trim()
        })
          .map(value => {
            value.creationDate = moment.unix(parseInt(value.creationDate)).format("YYYY-MM-DD hh:mm:ss")
            value.dueDate = moment.unix(parseInt(value.dueDate)).format("YYYY-MM-DD hh:mm:ss")
            return value;
          })
        return response;
      }
      else if (!assignedTo && category) {
        const response = this.tasks.filter(filteredValue => {
          return filteredValue.category.toLowerCase().trim() == category.toLowerCase().trim()
        })
          .map(value => {
            value.creationDate = moment.unix(parseInt(value.creationDate)).format("YYYY-MM-DD hh:mm:ss")
            value.dueDate = moment.unix(parseInt(value.dueDate)).format("YYYY-MM-DD hh:mm:ss")
            return value;
          })
        return response;
      }
      return "Please filter assignedTo or category to only one value at a time ";
    } catch (ex) {
      return ex;
    }
  }

  existOrNotEmpty = async (id:string) => {
    try {
      if(this.tasks.length>0){
        return this.tasks.filter(item => item.id == id);
      }
      else{
        return 'data not found'
      }
    } catch (ex) {

    }
  }
}