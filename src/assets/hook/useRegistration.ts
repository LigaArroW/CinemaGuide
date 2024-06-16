import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"

export interface IRegistration {
    name: string
    surname: string
    email: string
    password: string
}

export const useRegistration = () => {
  
    
    return useMutation({
        mutationFn: (data: IRegistration) => {
            
            return axios.post(DEFAULT_URL + '/user', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post'
            }).then(() => { })
        }
    })


}


