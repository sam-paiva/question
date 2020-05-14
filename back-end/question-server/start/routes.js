'use strict'

const Route = use('Route');

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.get('/questions', 'QuestionController.index');
Route.post('/questions', 'QuestionController.create');
Route.post('/types', 'TypeController.create');
Route.get('/answers', 'AnswerController.index')
