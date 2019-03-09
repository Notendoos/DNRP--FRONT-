import * as canvas from "./canvas.js"
import * as controls from "./controls.js"
const init = ()=>{
    routie({
        "u-*":(username)=>{
            console.log("client for: ",username)
        },
        "*":(hash)=>{
            if(hash != ""){
                window.location.hash = ""
            }
            canvas.init({
                width:20,
                height:20
            })
            controls.init()
        }
    })
}

export {init}