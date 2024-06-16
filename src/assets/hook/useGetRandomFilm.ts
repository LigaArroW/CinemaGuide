import { useQuery } from "@tanstack/react-query"
import { IFilm } from "./useSearchFilm"
import axios from "axios"
import { DEFAULT_URL } from "../../constant/DEFAULT_URL"


export const useGetRandomFilm = () => {

    return useQuery({
        queryKey: ['randomFilm'],
        queryFn: () => axios.get(DEFAULT_URL + `/movie/random`)
            .then((res) => {
                const data: IFilm = res.data
                return data
            }),

        refetchOnWindowFocus: false,
    })

    // return data
}