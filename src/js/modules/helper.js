const
    log = (e)=>{
        console.log(e)
    },
    colorCoords = (data,width)=>{
        let colors =[]
        for (let i = 0; i < data.data.length; i += 4) {
            let obj ={
                pixel:{
                    coord:{
                        x:i%width*4,
                        y:Math.trunc(i/width*4)
                    },
                    color:{
                        red: data.data[0],
                        green: data.data[1],
                        blue: data.data[2],
                        alpha: 225
                    }
                }
            }
            colors.push(obj)
        }
        return colors
    },
    hexToRgb = (hex)=>{
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    },
    createShot = ()=>{
        const
            canvas = document.querySelector("canvas"),
            snapCont = document.querySelector("#snapshot")
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
    }



export {log,colorCoords,hexToRgb,createShot}
