const 
    init = (settings,colors=["#ffffff","#000","#390099","#9e0059","#ff0054","#ff5400","#ffbd00","#d741a7","#5398be","#f2cd5d"])=>{
        grid(settings)
        pallette(colors)
    },
    pallette = (colors)=>{
        const
            palletteCont = document.createElement("div"),
            appCont = document.querySelector("#app"),
            curColor = document.createElement("input")

            curColor.type = "color"

            palletteCont.appendChild(curColor)    

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

            palletteCont.appendChild(swatch)
        })

        palletteCont.classList.add("pallette")
        
        appCont.appendChild(palletteCont)
    },
    grid = (settings)=>{
        const
            gridCont = document.createElement("div"),
            appCont = document.querySelector("#app"),
            canvas = document.querySelector("canvas")
        
        gridCont.classList.add("overlay")


        
        for(let i=0;i<settings.width-1;i++){
            let
                hline = document.createElement("div"),
                vline = document.createElement("div"),
                gutterPer = i/settings.width,
                gutter = gutterPer*canvas.scrollHeight,
                offset = (1/settings.width)*canvas.scrollHeight

            
            hline.style.setProperty("top",`${gutter+offset-.5}px`)
            vline.style.setProperty("left",`${gutter+offset-.5}px`)

            hline.classList.add("h-line")
            vline.classList.add("v-line")

            gridCont.appendChild(hline)
            gridCont.appendChild(vline)
        }

        appCont.appendChild(gridCont)
    }

export {init}