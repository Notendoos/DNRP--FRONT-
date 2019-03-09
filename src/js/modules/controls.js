const 
    init = ()=>{
        snapshot()
    },
    snapshot = ()=>{
        let
            button = document.querySelector("button"),
            canvas = document.querySelector("canvas")
        button.addEventListener("click",()=>{
            let 
                img = canvas.toDataURL("image/png"),
                newImg = document.createElement("img"),
                newAn = document.createElement("a")
            
            newImg.src = img
            newImg.classList.add("snapshot")

            newAn.href = img
            newAn.setAttribute("download",true)

            newAn.appendChild(newImg)
            
            document.body.appendChild(newAn)
            console.log(img)
        })
    }
export {init}