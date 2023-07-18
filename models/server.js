const express = require('express');
var cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server{
    constructor(){
        this.app   = express();
        this.port  = process.env.PORT;
        this.paths = {
        }
        ///propiedades de sockets ==>
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Conectar a base datos
        //Middlewares
        this.middleWares();

        //Rutas de aplicacion
        this.routes();

        //Configuracion de sockets
        this.sockets();
    }

    middleWares(){
        //Cors
        this.app.use(cors()); //cors -> cross domain access

        ///Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        /* this.app.use(this.paths.auth,require('../routes/auth')); */
    }

    sockets(){
        this.io.on('connection',socketController)
    }

    listen(){
        this.server.listen(this.port, () =>{ //aqui cambia por server en vez de app
            console.log('Aplicacion corriendo en', this.port);
        });
    }
}

module.exports = Server;