export const createInicials = (...prop: string[]) => {
    return prop.map(item => item.slice(0, 1).toUpperCase()).join('')
}