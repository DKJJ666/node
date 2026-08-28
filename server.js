// import http from "node:http"
import app from "./src/app.js";
import "dotenv/config.js";

// const PORT = process.env.PORT || 3000;
// const rotas = {
//     "/": "Back end dos cria com Node.js",
//     "/linguagens": "JavaScript, TypeScript, Python ...",
//     "/linguagens/javascript": "JavaScript é uma linguagem de programação versátil...."
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(rotas[req.url]);
// })

// http://localhost:3000/
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});