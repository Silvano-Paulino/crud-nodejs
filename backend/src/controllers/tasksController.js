const { request, response } = require('express');
const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks)
}

const createTask = async (request, response) => {
    const createTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createTask);
}

const deleteTask = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deleteTask(id);
    return response.status(204).json();

    // ATT: O status 204 diz que executou mas não espera retornar nenhuma mensagem (o json é vazio).
}

const updateTask = async (request, response) => {
    const { id } = request.params;
    await tasksModel.updateTask(id, request.body);
    return response.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}