import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { createPortal } from "react-dom";

const queryClient = new QueryClient();

export const testFormatComponent = (component: JSX.Element, portal: boolean = false, idPortal?: string) => {
    const modalRoot = document.createElement('div');
    if (idPortal && portal) modalRoot.setAttribute('id', idPortal);
    document.body.appendChild(modalRoot);


    render(
        <QueryClientProvider client={queryClient}>
            {portal ? createPortal(component, modalRoot) : component}
        </QueryClientProvider>
    )
}