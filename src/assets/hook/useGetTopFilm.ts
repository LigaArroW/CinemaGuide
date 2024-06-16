import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"
import { useQuery } from "@tanstack/react-query"

export const useGetTopFilm = () => {
    return useQuery({
        queryKey: ['topFilm'],
        queryFn: () => axios.get(DEFAULT_URL + `/movie/top10`).then((res) => res.data),
        refetchOnWindowFocus: false
    })

}