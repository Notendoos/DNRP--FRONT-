import * as helper from "../modules/helper.js"
import * as client from "../modules/client.js"
import * as render from "../modules/render.js"
const
    canvas = document.getElementById("dnrp"),
    ctx = canvas.getContext('2d'),
    init = (settings)=>{
        canvas.height = settings.height
        canvas.width = settings.width

        clear(settings)

        render.init(settings)

        canvas.addEventListener("click",(e)=>{
            set(e.layerX,e.layerY)
        })
    },
    get = (x,y)=>{
        const
            coords = {
                "x":Math.trunc((x/canvas.scrollWidth)*canvas.width),
                "y":Math.trunc((y/canvas.scrollHeight)*canvas.height)
            },
            pixel = ctx.getImageData(coords.x,coords.y,1,1)

            console.log(pixel,coords)
    },
    set = (x,y)=>{
        const
            pixel = ctx.createImageData(1,1),
            colorPicker = document.querySelector("input[type=color]"),
            colors = helper.hexToRgb(colorPicker.value)

        pixel.data[0] = colors.r
        pixel.data[1] = colors.g
        pixel.data[2] = colors.b
        pixel.data[3] = 255

        ctx.putImageData(pixel,Math.trunc((x/canvas.scrollWidth)*canvas.width),Math.trunc((y/canvas.scrollHeight)*canvas.height))

        client.update({
            pixel:{
                coords:{
                    x:Math.trunc((x/canvas.scrollWidth)*canvas.width),
                    y:Math.trunc((y/canvas.scrollHeight)*canvas.height)
                },
                colors
            }
        })
    },
    clear = (settings)=>{
        let
            canvasData = ctx.createImageData(settings.height,settings.width)

        for (let i = 0; i < canvasData.data.length; i+=4) {
            canvasData.data[i] = 255
            canvasData.data[i+1] = 255
            canvasData.data[i+2] = 255
            canvasData.data[i+3] = 255
        }

        ctx.putImageData(canvasData,0,0)
    }


// (()=>{
//   setInterval(
//     ()=>{
//         let
//             pixel = ctx.createImageData(1,1)

//         pixel.data[0] = Math.trunc(Math.random()*255)
//         pixel.data[1] = Math.trunc(Math.random()*255)
//         pixel.data[2] = Math.trunc(Math.random()*255)
//         pixel.data[3] = 225

//         ctx.putImageData(
//             pixel,
//             Math.trunc(Math.random()*canvas.height),
//             Math.trunc(Math.random()*canvas.width)
//         )
//     }
//     ,50)
// })()

export {init,get,set,clear}
