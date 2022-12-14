import { useEffect, useState } from "react";

// Step- 08 (jwt)
const useToken = email => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        if(email){
            fetch(`https://b612-used-products-resale-server-side-fazaly.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if(data.accessToken){
                    localStorage.setItem('accessToken', data.accessToken);
                    setToken(data.accessToken);
                }
            })
        }
    }, [email]);
    return [token];
}
export default useToken;