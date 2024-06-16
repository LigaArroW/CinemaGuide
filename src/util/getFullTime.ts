export const getFullTime = (time: number) => {
    return `${Math.floor(time / 60)}\u00A0ч\u00A0${time % 60}\u00A0мин`
}