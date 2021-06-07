const bc = new BroadcastChannel('channel');

bc.onmessage = function (ev) { 
    var bodymessage = document.getElementById('bodymessage');
    var footermessage = document.getElementById('footermessage');

    bodymessage.innerHTML += `<div>${ev.data.bodymessage}</div>`;
    footermessage.innerHTML += `<div>${ev.data.footermessage}</div>`;
}
