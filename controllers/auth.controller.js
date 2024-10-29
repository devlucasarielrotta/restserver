const { request,response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req=request,res=response) => {
    const {correo,password} = req.body;

    const usuario = await Usuario.findOne({correo, estado:true});

    if(!usuario) {
        return res.status(400).json({
            msg:'Uno o mas datos incorrectos'
        })
    }

    const validPassword = bcryptjs.compareSync(password,usuario.password);

    if(!validPassword){
        return res.status(400).json({
            msg:'Uno o mas datos incorrectos'
        })
    }
    const token = await generarJWT(usuario.id);

    try{
        res.json({
           usuario,
           token
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
 
}


module.exports = {
    login
}