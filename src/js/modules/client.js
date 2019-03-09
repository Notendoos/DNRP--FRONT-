const init = (url = "ws://192.168.178.192:8080/")=>{
        console.log(url)
        const 
            client = Stomp.client(url),
            cred = {
                user:"",
                pass:""
            }

        client.connect({},{},update())
    },
    update = (data)=>{
        console.log("update",data)
    }

export {init, update}