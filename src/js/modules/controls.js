import * as helper from "./helper.js"
import * as canvas from "./canvas.js"
const 
    init = (settings)=>{
        snapshot()
        clearCanvas(settings)
    },
    snapshot = ()=>{
        const
            button = document.createElement("button"),
            appCont = document.querySelector("#app")
        
        button.innerHTML = "Create Snapshot"

        button.addEventListener("click",()=>{
            helper.createShot()
        })

        appCont.appendChild(button)

    },
    clearCanvas = (settings)=>{
        const 
            button = document.createElement("button"),
            appCont = document.querySelector("#app")

        button.innerHTML = "Clear Canvas"

        button.addEventListener("click",()=>{
            canvas.clear(settings)
        })

        appCont.appendChild(button)
    }
export {init}