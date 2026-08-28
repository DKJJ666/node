import { Router } from "express";

import {
    listarLivros,
    buscaLivro,
    adicionarLivro,
    atualizarLivro,
    atualizarDisponibilidadeLivro,
    deletarLivro
} from "../controllers/livrosController.js"

import autenticar from "../middleware/autenticar.js";
import autorizar from "../middleware/autorizar.js";

const router = Router()

router.get("/", autenticar, listarLivros)
router.get("/livros/:id", autenticar, buscaLivro)

router.post("/livros", autenticar, autorizar("funcionario"), adicionarLivro)
router.put("/livros/:id", autenticar, autorizar("funcionario"), atualizarLivro)
router.patch("/livros/:id/disponibilidade", autenticar, autorizar("funcionario"), atualizarDisponibilidadeLivro)
router.delete("/livros/:id", autenticar, autorizar("funcionario"), deletarLivro)

export default router