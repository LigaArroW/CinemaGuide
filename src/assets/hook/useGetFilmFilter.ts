import axios from "axios"
import { useQuery } from "@tanstack/react-query"


export const useGetFilmFilter = (count?: number, title?: string, page?: number, genre?: string) => {
    // console.log(title);
    // console.log(`https://cinemaguide.skillbox.cc/movie?${count ? `count=${count}` : ''}${page ? `&page=${page}` : ''}${title ? `&title=${title}` : ''}${genre ? `&genre=${genre}` : ''}`);


    return useQuery({
        queryKey: ['filmFilter', title, count, page, genre],
        queryFn: () => {
            if (!title && !genre) return Promise.resolve([])
            return axios.get(`https://cinemaguide.skillbox.cc/movie?${count ? `count=${count}` : ''}${page ? `&page=${page}` : ''}${title ? `&title=${title}` : ''}${genre ? `&genre=${genre}` : ''}`)
                .then((res) => {

                    const data = (count && count === 1) ? res.data[0] : res.data
                    return data
                })


        },
        refetchOnWindowFocus: false

    })



}