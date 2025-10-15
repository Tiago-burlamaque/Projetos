import { prismaClient } from "../../../prisma/prisma.js";

export async function getTodosCursos(req, res) {
    try {
        const cursos = prismaClient.curso.findMany()
        return res.json(cursos)
    } catch (error) {
        console.error("Erro no getTodosCursos: ", error)
        return res.status(500).json({ error: "Erro ao buscar cursos" })
    }
}


// Get um usuário por id
export async function getPorIdCurso(req, res) {
    try {
        const usuario = prismaClient.curso.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!usuario) return res.status(404).send("Curso não existe!");
        return res.json(usuario);
    } catch (error) {
        console.error("Erro em getPorId: ", error);
        return res.status(500).json({ error: "Erro ao buscar curso" })
    }
}

// POST /curso
export async function criarCurso(req, res) {
    try {
        console.log("📥 Requisição recebida em /cursos:", req.body);

        const curso = await prismaClient.curso.create({
            data: {
                nome_cursos: req.body.nome,
                link: req.body.link,
                tempo: req.body.tempo
            },
        });

        console.log(" Curso criado:", curso);
        return res.status(201).json(curso);
    } catch (error) {
        console.error("Erro ao criar curso:", error);

        if (error.code === "P2002") {
            return res
                .status(400)
                .send("Falha ao cadastrar curso: curso já cadastrado!");
        }

        return res.status(500).send("Erro inesperado no servidor");
    }
}

// PUT /curso/:id
export async function atualizarCurso(req, res) {
    try {
        const { body, params } = req;

        const cursoAtualizado = await prismaClient.curso.update({
            where: { id: Number(params.id) },
            data: { ...body },
        });

        return res.status(200).json({
            message: "Curso atualizado!",
            data: cursoAtualizado,
        });
    } catch (error) {
        console.error(" Erro ao atualizar curso:", error);

        if (error.code == "P2025") {
            return res.status(404).send("Curso não existe no banco");
        }
        if (error.code === "P2002") {
            return res
                .status(400)
                .send("Falha ao cadastrar curso: curso já cadastrado!");
        }

        return res.status(500).send("Erro inesperado no servidor");
    }
}

// DELETE /curso/:id
export async function deletarCurso(req, res) {
    try {
        const cursoDeletado = await prismaClient.curso.delete({
            where: { id: Number(req.params.id) },
        });
        return res.status(200).json({
            message: "Curso deletado!",
            data: cursoDeletado,
        });
    } catch (error) {
        console.error(" Erro ao deletar curso:", error);

        if (error.code == "P2025") {
            return res.status(404).send("Curso não existe no banco");
        }

        return res.status(500).send("Erro inesperado no servidor");
    }
}
