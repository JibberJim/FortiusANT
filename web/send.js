var IP="192.168.1.33";


messageChannel = new Paho.MQTT.Client(IP,9001,"/neo/","js_"+1000+(Math.random()*8999))
var connected=false;
var connecting=false;
function connect() {
    var options = {
        timeout:3,
        onSuccess:function() {
            console.log("MQTT:Connected");
            connected=true;
            connecting=false;
        },
        onFailure:function() {
            connected = false;
            connecting = false;
            console.log("MQTT:Disconnected, reconnecting attempt in 1500ms");
            setTimeout(connect,1500);
        }
    };
    messageChannel.onConnectionLost=function() {
        connected = false;
        connecting = false;
        console.log("MQTT:connectionLost, reconnecting attempt in 1500ms");
        setTimeout(connect,1500);
        
    };
    messageChannel.connect(options);
}

function sendChange(event) {
    if (connected) {
        var input = event.target;
        var topic = "/neo/wind/"+input.id;
        var value = parseFloat(input.value).toFixed(3)
        var message = new Paho.MQTT.Message(value);
        message.destinationName = topic;
        console.log("MQTT Message sending:"+topic+" "+value,message);
        message.onMessageDelivered=function(e) {
            console.log("MQTT Message delivered:",e);
        }
        messageChannel.send(message);
    } else {
        alert("Not Connected");
    }
}

function updateValue(input) {
    input.previousSibling.textContent=parseFloat(input.value).toFixed(3);
}

window.onload=function() {
    connect();
    inputs=document.querySelectorAll("input[type=range]");
    for (var i=0;i<inputs.length;i++) {
        inputs[i].onchange=sendChange;
        updateValue(inputs[i])
        console.log("adding "+inputs[i].id)
    }
}