// Start library express
import "dotenv/config"
import express from "express"


import livroRoutes from "./routes/livrosRoutes.js"
import usuarioRoutes from "./routes/usuariosRoutes.js"

const app = express()

app.use(express.json())

app.use("/livros", livroRoutes)
app.use("/usuarios", usuarioRoutes)

export default app

















































// // Usuarios

// app.get("/usuarios", async (req, res) =>{
//     try {
//         const [usuarios] = await conexao.query("SELECT * FROM usuarios;")
//         res.json(usuarios)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })  


// app.get("/usuarios/:id", async (req, res) =>{
//     try {
//         const [resultado] = await conexao.query("SELECT * FROM usuarios WHERE id = ?;", [req.params.id])
//             if(resultado.length === 0) {
//                 return res.status(404).json({ error: "Usuário não encontrado" })
//             }
//             res.json(resultado)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.post("/usuarios", async (req, res) =>{
//     try {
//         const { nome, email, senha, perfil } = req.body
//         const [resultado] = await conexao.query("SELECT * FROM usuarios WHERE email = ?;", [email])
//         const [Asenha] = await conexao.query("SELECT * FROM usuarios WHERE senha = ?;", [senha])
//         if (resultado.length > 0) {
//             res.status(404).json({ mensagem: "Email ja cadastrado!" })
//         } else if (Asenha.length > 0) {
//             res.status(404).json({ mensagem: "Senha ja cadastrada!" })
//         } else {
//             res.status(201).json({ mensagem: "Usuário adicionado com sucesso! 💕" })
//         }
//          await conexao.query(
//             "INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?);",
//             [nome, email, senha, perfil]
//         )
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })
// // Atualização de dados cadastrais!! Still in user, okay?

// app.put("/usuarios/:id", async (req, res) => {
//     try {
//         const { nome, email, senha, perfil } = req.body
//         await conexao.query(
//             "UPDATE usuarios SET nome = ?, email = ?, senha = ?, perfil = ? WHERE id = ?;",
//             [nome, email, senha, perfil, req.params.id]
//         )
//         res.status(200).json({ mensagem: "Atualização bem sucedida! Parabéns!! ✈️🏣🏣💥😱‼️🫦╰(*°▽°*)╯" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.patch("/usuarios/:id", async (req, res) => {
//     try {
//         const { email, senha } = req.body
//         await conexao.query(
//             "UPDATE usuarios SET email = ?, senha = ? WHERE id = ?;",
//             [email, senha, req.params.id]
//         )
//         res.status(200).json({ mensagem: "Atualização parcial bem sucedida! Parabéns!! 😘👌" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })


// // Hora de excluir alguém 🔪🩸☠️
// // usuario

// app.delete("/usuarios/:id", async (req, res) =>{
//     try {
//         await conexao.query(
//             "DELETE FROM usuarios WHERE id = ?;",
//             [req.params.id]
//         )
//         res.status(200).json({ mensagem: "Usuário removido com sucesso! Foi tardeee " })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })



// // falando em livros 

// app.get("/livros", async (req, res) =>{
//     try {
//         const [livros] = await conexao.query("SELECT * FROM livros;")
//         res.json(livros)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })  

// app.get("/livros/:id", async (req, res) =>{
//     try {
//         const [resultado] = await conexao.query("SELECT * FROM livros WHERE id = ?;", [req.params.id])
//             if(resultado.length === 0) {
//                 return res.status(404).json({ error: "Livro não encontrado" })
//             }
//             res.json(resultado)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })


// app.post("/livros", async (req, res) =>{
//     try {
//         const { titulo, disponibilidade, editora } = req.body

//         await conexao.query(
//             "INSERT INTO livros (titulo, disponibilidade, editora) VALUES (?, ?, ?);",
//             [titulo, disponibilidade, editora]
//         )
//         res.status(201).json({ mensagem: "Livro adicionado com sucesso!" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.put("/livros/:id", async (req, res) =>{
//     try {
//         const { titulo, disponibilidade, editora } = req.body
    

//         await conexao.query(
//             "UPDATE livros SET titulo = ?, disponibilidade = ?, editora = ? WHERE id = ?;",
//             [titulo, disponibilidade, editora, req.params.id]
//         )
//         res.status(200).json({ mensagem: "Livro atualizado com sucesso! ✈️🏣🏣💥😱‼️🫦╰(*°▽°*)╯" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.patch("/livros/:id", async (req, res) =>{
//     try {
//         const { disponibilidade } = req.body

//         await conexao.query(
//             "UPDATE livros SET disponibilidade = ? WHERE id = ?;",
//             [disponibilidade, req.params.id]
//         )
//         res.status(200).json({ mensagem: "Disponibilidade do livro atualizada com sucesso!" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.delete("/livros/:id", async (req, res) =>{
//     try {

//         await conexao.query(
//             "DELETE FROM livros WHERE id = ?;",
//             [req.params.id]
//         )
//         res.status(200).json({ mensagem: "Livro removido com sucesso!" })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })



