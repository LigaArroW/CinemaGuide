import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../../constant/DEFAULT_URL"

export const useGetAllfavourite = () => {
    return useQuery({
        queryKey: ['favourite'],
        queryFn: () => axios.get(DEFAULT_URL + '/favorites',
            { withCredentials: true })
            .then((res) => {
                // console.log(res.data, 'useGetAllfavourite');

                return res.data
            })
            .catch(() => {
                // console.log('Произошла ошибка');
                return []
            }),
            enabled: localStorage.getItem('auth') === 'true' || false

    }
    )
}