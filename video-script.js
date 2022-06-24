openSocket = () => {

    socket = new WebSocket("ws://127.0.0.1:9997/");
    let msg = document.getElementById("processingPreview");

    socket.addEventListener('message', (e) => {
        // let ctx = msg.getContext("2d");
        // let image = new Image();
        // image.src = URL.createObjectURL(e.data);
        alert('sending data....')
        socket.send(e.data)
        // image.addEventListener("load", (e) => {
        //     ctx.drawImage(image, 0, 0, msg.width, msg.height);
        // });
    });
}

streamVideo = () => {
    socket = new WebSocket("ws://127.0.0.1:9997/");
    let msg = document.getElementById("processingPreview");
    socket.addEventListener('open', (e) => {
        alert('sending data...'+msg);
        socket.send(msg)
    });
}
