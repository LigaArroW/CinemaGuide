// export const Burger = () => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3 4.99988H21V6.74988H3V4.99988ZM3 11.1249H21V12.8749H3V11.1249ZM3 17.2499H21V18.9999H3V17.2499Z" fill="black" />
//     </svg>
// )

const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
            fill="#000"
            d="M3 5h18v1.75H3V5Zm0 6.125h18v1.75H3v-1.75Zm0 6.125h18V19H3v-1.75Z"
        />
    </svg>
)
export { SvgComponent as Burger }