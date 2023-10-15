import moment from 'moment';
import { expect } from 'chai';
import { taskService } from '../services/task.service';
import { v4 as uuid4 } from 'uuid';

describe('taskService', () => {
  let service: taskService;

  beforeEach(() => {
    service = new taskService();
  });

  it('should post a task successfully', async () => {
    const task = {
      creationDate: moment().unix().toString(),
      dueDate: (moment().unix() + 3600).toString(),
      assignedTo: 'John Doe',
      category: 'Work',
    };

    const response = await service.postTask(task);

    expect(response).to.be.an('object');
    expect(response).to.have.property('id');
    expect(response).to.have.property('creationDate');
    expect(response).to.have.property('dueDate');
    expect(response).to.have.property('assignedTo', 'john doe');
    expect(response).to.have.property('category', 'work');
  });

  it('should return tasks filtered by assignedTo', async () => {
    const task1 = {
      creationDate: moment().unix().toString(),
      dueDate: (moment().unix() + 3600).toString(),
      assignedTo: 'John Doe',
      category: 'Work',
    };

    const task2 = {
      creationDate: moment().unix().toString(),
      dueDate: (moment().unix() + 3600).toString(),
      assignedTo: 'Alice Smith',
      category: 'Personal',
    };

    await service.postTask(task1);
    await service.postTask(task2);

    const response = await service.getTask('john doe');

    expect(response).to.be.an('array');
    expect(response).to.have.length(1);
    expect(response[0]).to.have.property('assignedTo', 'john doe');
  });

  it('should delete a task by ID', async () => {
    const task = {
      assignedTo: 'John Doe',
      category: 'Work',
      creationDate: moment().unix().toString(),
      dueDate: (moment().unix() + 3600).toString(),
    };

    const response = await service.postTask(task);

    const deleteResponse = await service.taskDeleteById(response.id);

    expect(deleteResponse).to.equal(`Successfully Deleted the record for this id=${response.id}`);
  });

  it('should update a task by ID', async () => {
    const task = {
      creationDate: moment().unix().toString(),
      dueDate: (moment().unix() + 3600).toString(),
      assignedTo: 'John Doe',
      category: 'Work',
    };

    const response = await service.postTask(task);

    const updatedTask = { ...response, assignedTo: 'Updated User' };
    const updateResponse = await service.taskUpdateById(response.id, updatedTask);

    expect(updateResponse).to.equal(`Record Updated Successfully against this id=${response.id}`);

    const getResponse: any = await service.taskGetById(response.id);
    expect(getResponse[0].assignedTo).to.equal('Updated User');
  });

  it('should return an error if a task is not found for deletion or update', async () => {
    const deleteResponse = await service.taskDeleteById('non-existent-id');
    const updateResponse = await service.taskUpdateById('non-existent-id', {});

    expect(deleteResponse).to.equal('this id is not found!');
    expect(updateResponse).to.equal('this id is not found!');
  });

  it('should return an error if data is not found for taskGetById', async () => {
    const getResponse = await service.taskGetById('non-existent-id');
    expect(getResponse).to.deep.equal([]);
  });
});
