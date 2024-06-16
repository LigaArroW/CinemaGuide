import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


interface IWidth {
    width: number,
    setWidth: (value: number) => void
}

export const useWidth = create<IWidth>()(immer((devtools((set) => ({
    width: 0,
    setWidth: (value: number) => set(state => {
        state.width = value
    })
})))))