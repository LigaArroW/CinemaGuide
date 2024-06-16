import { FC } from "react"

interface PlayerDProps {
    double: boolean
}

export const PlayerD: FC<PlayerDProps> = ({ double }) => {
    return (
        <>
            {double
                ?
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H2V18H0V0ZM10 0H12V18H10V0Z" fill="white" />
                </svg>
                :
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18.1957V1.80421C0 1.01878 0.86395 0.539932 1.53 0.956212L14.6432 9.152C15.2699 9.5436 15.2699 10.4563 14.6432 10.848L1.53 19.0437C0.86395 19.46 0 18.9812 0 18.1957Z" fill="white" />
                </svg>


            }
        </>
    )
}