import conexao from "../config/db.js";
import jwt from "jsonwebtoken";

export const listarUsuarios = async (req, res) => {
  try {
    const [usuarios] = await conexao.query("SELECT * FROM usuarios;");
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const buscaUsuario = async (req, res) => {
  try {
    const [resultado] = await conexao.query(
      "SELECT * FROM usuarios WHERE id = ?;",
      [req.params.id],
    );
    if (resultado.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const adicionarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body;
    const [resultado] = await conexao.query(
      "SELECT * FROM usuarios WHERE email = ?;",
      [email],
    );
    const [Asenha] = await conexao.query(
      "SELECT * FROM usuarios WHERE senha = ?;",
      [senha],
    );
    if (resultado.length > 0) {
      return res.status(404).json({ mensagem: "Email ja cadastrado!" });
    } else if (Asenha.length > 0) {
      return res.status(404).json({ mensagem: "Senha ja cadastrada!" });
    } else {
      await conexao.query(
        "INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?);",
        [nome, email, senha, perfil],
      );
      return res.status(201).json({ mensagem: "Usuário adicionado com sucesso! 💕" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const [usuario] = await conexao.query(
      `
            SELECT *
            FROM usuarios
            WHERE email = ?
            AND senha = ?
            `,
      [email, senha],
    );

    if (usuario.length === 0) {
      return res.status(401).json({
        mensagem: "Usuário ou senha inválidos.",
      });
    }

    const payload = {
      id: usuario[0].id,
      nome: usuario[0].nome,
      perfil: usuario[0].perfil,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      usuario: payload,
    });

    // res.status(200).json({
    //     mensagem: "Login realizado com sucesso!",
    //     usuario: {
    //         id: usuario[0].id_usuario,
    //         nome: usuario[0].nome,
    //         perfil: usuario[0].perfil
    //     }
    // })
  } catch (erro) {
    res.status(500).json({
      erro: erro.message,
    });
  }
};
// Atualização de dados cadastrais!! Still in user, okay?

export const atualizarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body;
    await conexao.query(
      "UPDATE usuarios SET nome = ?, email = ?, senha = ?, perfil = ? WHERE id = ?;",
      [nome, email, senha, perfil, req.params.id],
    );
    res
      .status(200)
      .json({
        mensagem:
          "Atualização bem sucedida! Parabéns!! ✈️🏣🏣💥😱‼️🫦╰(*°▽°*)╯",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarDados = async (req, res) => {
  try {
    const { email, senha } = req.body;
    await conexao.query(
      "UPDATE usuarios SET email = ?, senha = ? WHERE id = ?;",
      [email, senha, req.params.id],
    );
    res
      .status(200)
      .json({ mensagem: "Atualização parcial bem sucedida! Parabéns!! 😘👌" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hora de excluir alguém 🔪🩸☠️
// usuario

export const excluirUsuario = async (req, res) => {
  try {
    await conexao.query("DELETE FROM usuarios WHERE id = ?;", [req.params.id]);
    res
      .status(200)
      .json({ mensagem: "Usuário removido com sucesso! Foi tardeee " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
