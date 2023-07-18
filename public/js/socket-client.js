//este js esta del lado del cliente los console logs y lo de mas se mostrara en el navegador
const socket = io() //socket de cliente

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');
socket.on('connect', () =>{
  /*   console.log('Conectado'); */
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () =>{
    /* console.log('Desconectado'); */
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});

socket.on('enviar-mensaje', () =>{
   console.log('Aqui!!!');
});

btnEnviar.addEventListener('click',() => {
    const mensaje = txtMensaje.value;
    const payload = {
        id: 123,
        fecha: new Date(),
        mensaje
    }
    socket.emit('enviar-mensaje',payload, (id) =>{
        console.log('desde el server', payload);
    })
});

