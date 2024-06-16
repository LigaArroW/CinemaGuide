import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface IFilm {
    id: number
    genres: string[]
    tmdbRating: number
    releaseYear: number
    revenue: string
    title: string
    posterUrl: string
    runtime: number
    backdropUrl: string
    plot: string
    trailerUrl: string
    budget: string
    awardsSummary: string
    languages: string[]
    director: string
    production: string
}



export const useSearchFilm = (search: string) => {

    const { data } = useQuery({
        queryKey: ['searchFilm', search],
        queryFn: () => axios.get(`https://cinemaguide.skillbox.cc/movie?count=5&title=${search}&page=1`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                const data: IFilm[] = res.data
                return data
            })
    });

    if (!search) return []


    return data
}

/**
 * id: 10770
 * genres : (3) ['adventure', 'action', 'scifi']
 * tmdbRating: 7.21
 * releaseYear: 2009
 * revenue: "524028679"   продолжительность
 * title: "The Sheriff and the Satellite Kid"
 * backdropUrl: "https://image.tmdb.org/t/p/w1280/qviAZShx8MVNwZjk1MoFFEdLUnx.jpg"
 * 
 * 
 * 
 */