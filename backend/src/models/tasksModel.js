const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
}

const createTask = async (task) => {
    // Query desejada
    const { title } = task;

    // SQL
    const query = "INSERT INTO tasks(title, status, create_at) VALUES(?, ?, ?)";

    // Convertendo pra data atual
    const dateUtc = new Date(Date.now()).toUTCString();

    // Executando a query
    const [createTask] = await connection.execute(query, [title, 'pendente', dateUtc]);

    return {insertId: createTask.insertId};
}

const deleteTask = async (id) => {
    const [removedTask] = connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
}

const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}