'use strict'

const Route = use('Route');

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.get('/questions', 'QuestionController.index');
Route.post('/questions', 'QuestionController.create');
Route.post('/types', 'TypeController.create');
Route.get('/types', 'TypeController.index');
Route.get('/answers', 'AnswerController.index');
Route.get('/users', 'UserController.getUserByEmail');
