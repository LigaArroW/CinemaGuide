import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { DEFAULT_URL } from "../../../constant/DEFAULT_URL"

export const useRemoveFovourite = () => {
    return useMutation({
        mutationFn: (id: string) => axios.delete(`${DEFAULT_URL}/favorites/${id}`, {
            withCredentials: true
        }),
    })
}