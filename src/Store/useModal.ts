import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


interface IAuth {
    isOpen: boolean,
    trailerOpen: boolean
    setOpen: (setOpen?: boolean) => void
    setTrailerOpen: (setOpen?: boolean) => void
}

export const useAuth = create<IAuth>()(immer((devtools((set) => ({
    isOpen: false,
    trailerOpen: false,
    setOpen: (setOpen?: boolean) => set(state => {
        state.isOpen = setOpen ? setOpen : !state.isOpen
    }),
    setTrailerOpen: (setOpen?: boolean) => set(state => {
        state.trailerOpen = setOpen ? setOpen : !state.trailerOpen
    })
})))))