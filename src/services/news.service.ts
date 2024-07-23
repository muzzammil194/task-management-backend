import moment from 'moment';
import { INews } from '../models/task.model';
import databaseConnection from "../db/connection";
import { Response } from 'express';

export class newsService {
  postNews = async (res: Response, data: INews): Promise<any> => {
    const { category, title, author, content } = data;
    const queryCategory = 'SELECT id FROM categories WHERE name = ?';
    const queryNews = 'INSERT INTO news (category_id, title, author, content) VALUES (?, ?, ?, ?)';
    try {
      const connection = await databaseConnection.getConnection();
      await connection.beginTransaction();

      try {
        const [categoryResults] = await connection.execute(queryCategory, [category]);
        
        if ([categoryResults].length === 0) {
          await connection.rollback();
          return res.status(400).json({ error: 'Invalid category' });
        }
        console.log("categoryResults", [categoryResults]);
        if ([categoryResults].length!==0) {
          const categoryId = categoryResults[0].id;
          await connection.execute(queryNews, [categoryId, title, author, content]);
          await connection.commit();

          return res.status(201).json({ message: 'News article created successfully' });
        }
        else {
          return res.status(404).json({ message: 'Not Found' });
        }
      } catch (error) {
        await connection.rollback();
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error starting transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getNews = async (res: Response, category?: string): Promise<any> => {
    const query = `SELECT n.title, n.author, n.content, n.created_at 
    FROM news n 
    JOIN categories c ON n.category_id = c.id 
    WHERE c.name = ? 
    ORDER BY n.created_at DESC`;
    try {
      console.log(category);

      const [rows] = await databaseConnection.execute(query, [category]);
      return res.json(rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}