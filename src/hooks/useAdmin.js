import { useEffect, useState } from "react";

// Step- 06(Admin)
const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);

    // Step- 11(Admin)
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}
export default useAdmin;