const bc = new BroadcastChannel('channel');

function sendMessage(event) {
    event.preventDefault();
    var bodymessage = document.getElementById('bodymessage');
    var footermessage = document.getElementById('footermessage');
    var message = {
        bodymessage: bodymessage.value,
        footermessage: footermessage.value
    }
    bc.postMessage(message);
}
