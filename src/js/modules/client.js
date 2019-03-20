import * as canvas from "../modules/canvas.js"
const
    url = "http://145.28.224.59:8080/stomp",
    socket = new SockJS(url)
let
    stompClient = Stomp.over(socket)

const
    init = ()=>{
        stompClient.connect({},connected)
    },
    update = (data)=>{
        console.log("update",data)
        stompClient.send('/app/pixel-update',{},JSON.stringify(data))
    },
    canvasUpdate = (data)=>{
        console.log(data)
        let
            canvas = document.getElementById("dnrp"),
            ctx = canvas.getContext('2d'),
            pixel = ctx.createImageData(20,20),
            newPixels = data.canvas.pixels.flat().map(el => [el.pixel.color.r,el.pixel.color.g,el.pixel.color.b,255]).flat()

            for (var i = 0; i < newPixels.length; i++) {
                pixel.data[i] = newPixels[i]
            }

        ctx.putImageData(pixel,0,0)

        stompClient.subscribe('/topic/pixel-update', (canvas)=>{
            console.log("PIXEL RECIEVED")
            pixelUpdate(JSON.parse(canvas.body))
        })
    },
    pixelUpdate = (data)=>{
        console.log(data)
        let
            canvas = document.getElementById("dnrp"),
            ctx = canvas.getContext('2d'),
            pixel = ctx.createImageData(1,1),
            newPixels = [data.pixel.color.r,data.pixel.color.g,data.pixel.color.b,255]

            for (var i = 0; i < newPixels.length; i++) {
                pixel.data[i] = newPixels[i]
            }

        ctx.putImageData(pixel,data.pixel.coords.x,data.pixel.coords.y)
    },
    connected = (data)=>{
        console.log("connected")
        stompClient.subscribe('/queue/canvas', (canvas)=>{
            console.log("CANVAS RECIEVED")
            canvasUpdate(JSON.parse(canvas.body))
        })
        stompClient.send('/app/canvas',{},JSON.stringify({}))
    }

export {init, update}
