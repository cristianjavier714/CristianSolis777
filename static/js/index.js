//https://www.eclipse.org/paho/clients/js/

function Led1_on() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "javi_solis99@hotmail.com/t1";
    	client.send(message);
      

}


function Led1_off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "javi_solis99@hotmail.com/t1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
    
  




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "javi_solis99@hotmail.com",
    password: "xiaomiredminote10",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("javi_solis99@hotmail.com/t2");
    message = new Paho.MQTT.Message("Hola Mundo ");
    message.destinationName = "javi_solis99@hotmail.com/t1";
    client.send(message);

  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    var la=message.payloadString.split("-");
	  document.getElementById("sensor").innerHTML=la[0];
    document.getElementById("sensor1").innerHTML=la[1];
    document.getElementByld("sensor2").innerHTLM=la[1]; 

  }
 
  function Boton3(){
  {document.getElementById('sensor1').innerHTML='Cristian Solis';}
console.log('SE presiono el boton 3:')
  ;}
function Boton4(){
  {document.getElementById('sensor1').innerHTML='Quinto Semestre';}
console.log('SE presiono el boton 4:')
  ;}  
  
