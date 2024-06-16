import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"
import { useGetProfile } from "./useGetProfile"

export const useLogout = () => {
    const profile = useGetProfile()
    return useQuery({
        queryKey: ['logout'],
        queryFn: () => axios.get(DEFAULT_URL + '/auth/logout', { withCredentials: true }).then((res) => {
            profile.refetch()
            return res.data
        }),
        refetchOnWindowFocus: false,
        enabled: false
    })
}