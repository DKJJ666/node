import { Router } from "express";

import {
    listarUsuarios,
    buscaUsuario,
    adicionarUsuario,
    atualizarUsuario,
    atualizarDados,
    login,
    excluirUsuario
} from "../controllers/usuariosController.js"

import autenticar from "../middleware/autenticar.js";
import autorizar from "../middleware/autorizar.js";

const router = Router()

router.post("/login", login)

router.get("/", autenticar, autorizar("funcionario"), listarUsuarios)
router.get("/id", autenticar, autorizar("funcionario"), buscaUsuario)
router.post("/usuarios", autenticar, autorizar("funcionario"), adicionarUsuario)
router.put("/:id", autenticar, autorizar("funcionario"), atualizarUsuario)
router.patch("/:id/senha", autenticar, autorizar("funcionario"), atualizarDados)
router.delete("/:id", autenticar, autorizar("funcionario"), excluirUsuario)

export default router