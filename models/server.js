const express = require('express');
const cors = require('cors');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        // middlewares
        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes(){
       this.app.use(this.usuariosPath ,require('../routes/user.routes'))
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en https://localhost:'+this.port)
        });
    }
}

module.exports = Server;