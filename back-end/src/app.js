// Path: src/app.js

import express from "express";
import cors from "cors";
import { usuarioRouter } from "./routes/usuarioRouter";
import { cursoRouter } from "./routes/cursoRouter";
import authRouter from "./routes/authRouter";


const app = express();

// Middlewares globais
app.use(cors()); 
app.use(express.json());

app.get("/ping", (req, res) => {
  console.log(" GET /ping chegou");
  res.send("pong");
});

// Rotas
app.use('/auth', authRouter)

app.use(auth);
// rotas privadas
app.use(usuarioRouter);
app.use(cursoRouter)


const port = 3000;
app.listen(port, () => console.log(`Api rodando na porta ${port}`));
