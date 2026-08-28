import jwt from "jsonwebtoken";

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido. Faça login para obter um token.' });
    }

    const [tipo, token] = authHeader.split(" ")
    if(tipo !== "Bearer" || !token){
        return res.status(401).json({
            message:"Formato de token invalido."
        })
    }

    try {
        const dadosU = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = dadosU
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Token invalido ou expirado. Faça login novamante"
        })
    }
}

export default autenticar