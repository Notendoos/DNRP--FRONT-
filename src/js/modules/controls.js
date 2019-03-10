const 
    init = ()=>{
        snapshot()
    },
    snapshot = ()=>{
        let
            button = document.querySelector("button"),
            canvas = document.querySelector("canvas"),
            snapCont = document.querySelector("#snapshot")

        button.addEventListener("click",()=>{
            let 
                img = canvas.toDataURL("image/png"),
                newImg = document.createElement("img"),
                newAn = document.createElement("a"),
                fr = new FileReader()
            
            snapCont.innerHTML = ""
            
            newImg.src = img
            newImg.classList.add("snapshot")

            newAn.href = img
            newAn.setAttribute("download","snapshot.png")

            fr.onload = (e)=>{
                let
                    v = e.target.result.split(",")[1]
                v = atob(v)
                let
                    decoded = btoa(decodeURIComponent(escape(v)))
                newAn.src = `data:image/png;base64,${decoded}`
            }
        
            newAn.appendChild(newImg)
            
            snapCont.appendChild(newAn)
            console.log(img)
        })
    }
export {init}