import * as canvas from "./canvas.js"
import * as controls from "./controls.js"
import * as client from "./client.js"

const settings = {width:20,height:20}

const init = ()=>{
    routie({
        "u-*":(username)=>{
            console.log("client for: ",username)
        },
        "*":(hash)=>{
            if(hash != ""){
                window.location.hash = ""
            }else{
                canvas.init(settings)
                controls.init(settings)
                client.init()
            }
        }
    })
}

export {init}
