import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"

interface IRegistration {
    email: string
    password: string
}

export const useAurization = () => {
    return useMutation({
        mutationFn: (data: IRegistration) => {

            return axios.post(DEFAULT_URL + '/auth/login', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                },
                method: 'post',
                withCredentials: true
            })
        }
    })


}