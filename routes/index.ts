import express from "express";
import ProjectController from "../app/controllers/project.controller";

const Route = express.Router()

Route.get('/', (req, res)=> {
    res.json('hello');
});

Route.get('/projects', ProjectController.index)
Route.post('/projects/create', ProjectController.create)
Route.patch('/projects/:id/edit', ProjectController.update)
Route.get('/projects/:id/show', ProjectController.show)
Route.delete('/projects/:id/delete', ProjectController.delete)

Route.post('/upload', ProjectController.upload)

export default Route;