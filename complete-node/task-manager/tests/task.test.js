const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {
    // userOneId,
    userOne,
    // userTwoId,
    userTwo,
    taskOne,
    // taskTwo,
    // taskThree,
    setupDatabase,
    teardownDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)
afterEach(teardownDatabase)

test('Should create task for user', async (done) => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'From my test'
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
    done();
})

test('Should fetch user tasks', async (done) => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
    done();
})

test('Should not delete other users tasks', async (done) => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
    done();
})
