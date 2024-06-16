import '@testing-library/jest-dom'
import { Login } from "../Login";
import { act, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import userEvent from "@testing-library/user-event";
import { useAuth } from "../../../Store/useModal";

import { testFormatComponent } from '../../../util/testFormatComponent';
// import { useGetProfile } from "../../../assets/hook/useGetProfile";
// import { useRegistration } from "../../../assets/hook/useRegistration";
// import { useAurization } from "../../../assets/hook/useAutorization";



describe('Component Login', () => {
    beforeEach(() => {
        useAuth.setState({ isOpen: true })
    })



    test('компонент отрисовывается', () => {
        testFormatComponent(<Login />)
    });

    test('При клике вне контейнера модальное окно закрывается', () => {
        testFormatComponent(<Login />, true, 'modal-root')
        const close = screen.getByTestId('closeModal')
        act(() => {
            fireEvent.click(close);
        })
        expect(useAuth.getState().isOpen).toBeFalsy();
    })

    test('При клике на кнопку "Регистрация" открывается форма регистрации', () => {
        testFormatComponent(<Login />, true, 'modal-root')
        const btnOn = screen.getByText(/Регистрация/i);
        expect(btnOn).toBeInTheDocument();
        expect(screen.getAllByRole('textbox')).toHaveLength(1);
        act(() => {
            fireEvent.click(btnOn);
        });
        expect(screen.getAllByRole('textbox')).toHaveLength(3);
    })


    test('при клике на кнопку "Войти" если в полях введены невалидные данные появляется сообщение об ошибке', async () => {
        testFormatComponent(<Login />, true, 'modal-root')
        const user = userEvent.setup();
        await user.type(screen.getByPlaceholderText('Пароль'), '12');
        await user.click(screen.getByText(/Войти/i));

        expect(screen.getByTestId('item')).toHaveStyle({ borderColor: expect.stringMatching(/#ff7575/) });

    })


})
