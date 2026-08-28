const normalizar = (texto) =>{
    return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const autorizar = (...perfisPermitidos ) => {
    return (req, res, next) =>{

        const perfilUsuario = normalizar(req.usuario.perfil)
        const permitidos = perfisPermitidos.map(normalizar)
        if(!req.usuario){
            return res.status(401).json({
                message: "Usuario não autenticado"
            })
        }

        if(!perfisPermitidos.includes(perfilUsuario)){
            return res.status(403).json({
                message: "Você nâo tem perimssão para realizar essa ação. Contate o ADM"
            })
        }
        next()

    }
    
}
export default autorizar