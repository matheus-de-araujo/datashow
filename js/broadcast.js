const bc = new BroadcastChannel('channel');

function sendMessage(event) {
    event.preventDefault();
    // var message = document.getElementById('message');
    var message = {
        secret: 'mensagem secreta',
        test: 1
    }
    bc.postMessage(message);
}

bc.onmessage = function (ev) { 
    var message = document.getElementById('messageReceived');    
    message.innerHTML += `<div>${ev.data.secret}</div>`;
}