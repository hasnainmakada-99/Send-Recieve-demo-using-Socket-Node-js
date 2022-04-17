import {io} from 'socket.io-client';
const socket=io('http://localhost:3000');


// let send=document.getElementById('send');
// let message=document.getElementById('message');
// let container2=document.getElementsByClassName('container2');
// let textdisplay=document.getElementById('text');

// fucntion which will append the message to the container
// function displaymessage(text){
// container2.innerHTML.append(message);
// textdisplay.innerHTML+=text;
// }

// adding event listener
// send.addEventListener('click', ()=>{
//     displaymessage(message.value);
//     message.value='';
// })




socket.on('connect', ()=>{
    console.log("you connected with the server");
    socket.emit('send-message', 'Hasnain Makada');
    socket.on('recieve-message', (message)=>{
        console.log(message);
    })
})

