const 
    log = (e)=>{
        console.log(e)
    },
    colorCoords = (data,width)=>{
        let colors =[]
        for (let i = 0; i < data.data.length; i += 4) {
            let obj ={
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
    }


export {log,colorCoords,hexToRgb}