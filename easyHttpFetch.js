
class EasyHttp{
    
    // HTTP GET request
    async get(url){
        const res = await fetch(url); 
        const resdata = await res.json(); 
        return resdata;
    }

    // HTTP POST request
    async post(url, data){
         
        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)
        });

        const resdata = await res.json(); 
        return resdata; 
    }

    async put(url, data){
        
            const res = await fetch(url, {
                method: 'PUT', 
                headers: {'Content-type':'application/json'}, 
                body: JSON.stringify(data)
            });

            const resData = await res.json();
            return resData; 
        
    }
}