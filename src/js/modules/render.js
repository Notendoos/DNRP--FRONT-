const 
    init = (settings,colors=["#ffffff","#000","#390099","#9e0059","#ff0054","#ff5400","#ffbd00","#d741a7","#5398be","#f2cd5d"])=>{
        grid(settings)
        pallette(colors)
    },
    pallette = (colors)=>{
        const
            palleteCont = document.createElement("div"),
            appCont = document.querySelector("#app")

        colors.forEach(el => {
            const
                swatch = document.createElement("input")
            
            swatch.type = "radio"
            swatch.name = "pallet"
            swatch.value = el
            swatch.classList.add("swatch")
            swatch.style.setProperty("background",el)
            swatch.setAttribute("data-color",el)

            swatch.addEventListener("click",(e)=>{
                const
                    input = document.querySelector("input[type=color]")
                input.value = swatch.getAttribute("data-color")
            })

            palleteCont.appendChild(swatch)
        })

        palleteCont.classList.add("pallette")
        
        appCont.appendChild(palleteCont)
    },
    grid = (settings)=>{
        const
            gridCont = document.createElement("div"),
            appCont = document.querySelector("#app")
        
        gridCont.classList.add("overlay")
        
        for(let i=0;i<settings.width-1;i++){
            let
                hline = document.createElement("div"),
                vline = document.createElement("div")
            
            hline.style.setProperty("top",`${i+1}rem`)
            vline.style.setProperty("left",`${i+1}rem`)

            hline.classList.add("h-line")
            vline.classList.add("v-line")

            gridCont.appendChild(hline)
            gridCont.appendChild(vline)
        }

        appCont.appendChild(gridCont)
    }

export {init}