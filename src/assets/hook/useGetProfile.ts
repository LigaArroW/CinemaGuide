import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"

export const useGetProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => axios.get(DEFAULT_URL + `/profile`, {
            withCredentials: true
        }
        ).then((res) => {

            return res.data
        }).catch(() => {

            return {}
        }),
        enabled: localStorage.getItem('auth') === 'true' || false
        // refetchOnWindowFocus: false
    })
}