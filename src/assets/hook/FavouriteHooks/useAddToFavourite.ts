import { useMutation } from "@tanstack/react-query"
import { DEFAULT_URL } from "../../../constant/DEFAULT_URL"
import axios from "axios"



export const useAddToFavourite = () => {
    return useMutation({
        mutationFn: (id: string) => {
            const data = new URLSearchParams({ id }).toString();
            // console.log(data, 'data add to favourite');
            
            return axios.post(DEFAULT_URL + `/favorites`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',

                },
                withCredentials: true
            })
                .then((res) => {
                    // console.log(res.data, 'useAddToFavourite response');

                    return res.data
                })
                .catch((err) => {
                    // console.log('Произошла ошибка');

                    return console.log(err);

                })
        }
    })
}