import { UseQueryResult } from '@tanstack/react-query';
import { useGetGenres } from "./useGetGenres"
import axios from 'axios';
import { useEffect, useState } from 'react';

export interface IGenresAsImage {
    genre: string
    posterUrl: string
}






export const useGenresAsImage = () => {
    const [genresAsImage, setGenresAsImage] = useState<IGenresAsImage[]>([])
    const { data }: UseQueryResult<string[]> = useGetGenres();

    useEffect(() => {
        const fetchGenresAsImage = async () => {
            if (!data) return
            const promises = data.map(async (genre: string) => {
                const response = await axios.get(`https://cinemaguide.skillbox.cc/movie?count=1&page=1&genre=${genre}`);
                // const existingGenre = genresAsImage.find(prev => prev.genre === genre);
                // if (existingGenre) return;
                return { genre, posterUrl: response.data[0].posterUrl } as IGenresAsImage;
            });

            const results = await Promise.all(promises);
            const filteredResults = results.filter((item): item is IGenresAsImage => item !== undefined);
            setGenresAsImage(filteredResults);
        };

        fetchGenresAsImage();
    }, [data]);

    return genresAsImage;
};



