import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';
import List from './List';


test('renders a list of benders tha are filterable', async () => {
render(
    <MemoryRouter>
        <List />
    </MemoryRouter>
);

screen.getByText('Loading Benders...')
await screen.findByText('Aang')
const search = screen.getByPlaceholderText('Find A Bender');

userEvent.type(search, 'Aang');
})