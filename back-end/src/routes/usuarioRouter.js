// Path: src/routes/usuarios.js

import { Router } from "express";
import { 
    atualizarUsuario,
    criarUsuario,
    deletarUsuario,
    getPorIdUsuario,
    getTodosUsuarios 
} from "../controller/Usuario/UsuarioController.js";



export const usuarioRouter = Router();

usuarioRouter.get("/usuarios", getTodosUsuarios);
usuarioRouter.get("/usuarios/:id", getPorIdUsuario);
usuarioRouter.post("/usuarios", criarUsuario);
usuarioRouter.put("/usuarios/:id", atualizarUsuario);
usuarioRouter.delete("/usuarios/:id", deletarUsuario);
