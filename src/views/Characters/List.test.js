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
})