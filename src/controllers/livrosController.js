import conexao from "../config/db.js"

export const listarLivros = async (req, res) =>{
    try {
        const [livros] = await conexao.query("SELECT * FROM livros;")
        res.json(livros)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const buscaLivro = async (req, res) =>{
    try {
        const [resultado] = await conexao.query("SELECT * FROM livros WHERE id = ?;", [req.params.id])
            if(resultado.length === 0) {
                return res.status(404).json({ error: "Livro não encontrado" })
            }
            res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const adicionarLivro = async (req, res) =>{
    try {
        const { titulo, disponibilidade, editora } = req.body

        await conexao.query(
            "INSERT INTO livros (titulo, disponibilidade, editora) VALUES (?, ?, ?);",
            [titulo, disponibilidade, editora]
        )
        res.status(201).json({ mensagem: "Livro adicionado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const atualizarLivro = async (req, res) =>{
    try {
        const { titulo, disponibilidade, editora } = req.body
    

        await conexao.query(
            "UPDATE livros SET titulo = ?, disponibilidade = ?, editora = ? WHERE id = ?;",
            [titulo, disponibilidade, editora, req.params.id]
        )
        res.status(200).json({ mensagem: "Livro atualizado com sucesso! ✈️🏣🏣💥😱‼️🫦╰(*°▽°*)╯" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const atualizarDisponibilidadeLivro = async (req, res) =>{
    try {
        const { disponibilidade } = req.body

        await conexao.query(
            "UPDATE livros SET disponibilidade = ? WHERE id = ?;",
            [disponibilidade, req.params.id]
        )
        res.status(200).json({ mensagem: "Disponibilidade do livro atualizada com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deletarLivro = async (req, res) =>{
    try {

        await conexao.query(
            "DELETE FROM livros WHERE id = ?;",
            [req.params.id]
        )
        res.status(200).json({ mensagem: "Livro removido com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
