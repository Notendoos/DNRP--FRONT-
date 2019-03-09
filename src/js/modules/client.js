const init = (url = "ws://192.168.178.192:3000/stomp")=>{
        console.log(url)
        const client = Stomp.client(url)
    },
    update = (data)=>{
        console.log("update",data)
    }

export {init, update}