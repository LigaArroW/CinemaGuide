import { render } from '@testing-library/react';
import { TopFilms } from '../TopFilms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



jest.mock('swiper/react', () => ({
    Swiper: () => { },
    SwiperSlide: () => { },
}));
jest.mock('swiper/scss', () => jest.fn());

const queryClient = new QueryClient();

describe('Component TopFilms', () => {
    test('renders without crashing', () => {
        const component = render(
            <QueryClientProvider client={queryClient}>
                <TopFilms films={[]} top />
            </QueryClientProvider>
        )

        expect(component).toBeTruthy()
        const title = component.getByText('Топ 10 фильмов')
        expect(title).toBeTruthy()
    })
})