import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"

export const useGetGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => axios.get(DEFAULT_URL + '/movie/genres').then((res) => res.data),
        refetchOnWindowFocus: false,
    })
}