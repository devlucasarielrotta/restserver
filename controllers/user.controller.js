const {request,response} = require('express')

const getUsers = (req = request,res = response) => {

    const params = req.query;

    res.json({
        msg:'Get api'
    })
}

const postUsers = (req = request,res = response) => {
    const {nombre,edad} = req.body;
    
    res.json({
        msg:'Post api',
        nombre,
        edad
    })
}

const putUsers = (req=request,res = response) => {
    const {id} = req.params
    res.json({
        msg:'Put api',
        id
    })
}

const deleteUsers = (req,res = response) => {
    res.json({
        msg:'Delete api'
    })
}
module.exports= {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}