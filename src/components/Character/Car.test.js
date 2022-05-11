import { render, screen } from "@testing-library/react";
import Card from './Card';

test('renders benders to the screen', async () => {
render(
    <Card />
);

screen.getByAltText('bender');

}
)