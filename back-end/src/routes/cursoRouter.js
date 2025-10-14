// Path: src/routes/usuarios.js

import { Router } from "express";
import { 
    atualizarCurso, 
    criarCurso, 
    deletarCurso, 
    getPorIdCurso, 
    getTodosCursos 
} from "../controller/Curso/CursoController.js";



export const cursoRouter = Router();

cursoRouter.get("/cursos", getTodosCursos);
cursoRouter.get("/cursos/:id", getPorIdCurso);
cursoRouter.post("/cursos", criarCurso);
cursoRouter.put("/cursos/:id", atualizarCurso);
cursoRouter.delete("/cursos/:id", deletarCurso);
