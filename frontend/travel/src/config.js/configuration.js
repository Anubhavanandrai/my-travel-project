const bearer = localStorage.getItem("JWTtoken")

   export  const headers = {
        'authorization': `Bearer ${bearer}`,
        'Content-Type': 'application/json'
    }

    export const fileheader={
        'authorization': `Bearer ${bearer}`,
        'Content-Type': 'multipart/form-data'
    }
    
    //Authorization header is typically prefixed with 
    //the word Bearer followed by the token itself. 
    //This prefix is a part of the standard format for
    // authorization tokens. Without this prefix, the 
    //server might not recognize the token correctly