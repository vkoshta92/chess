const socket= io();

socket.emit("churan"); // server ko bheja

socket.on("churan papdi",function(){
    console.log('churan papdi mil gayi hai');
})