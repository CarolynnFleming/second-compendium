import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const avatarData = {
   data: [
       { 
           _id: '5cf5679a915ecad153ab68c9',
    name:'Aang',
    photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003'},
    {
        _id:'5cf5679a915ecad153ab68cc' ,
    name:'Afiko',
    photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/2/24/Afiko.png/revision/latest?cb=20121121024128'
    },
   ],
};

 

const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(avatarData));
    })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should render a bender', async () => {
    const Aang = {
          _id: '5cf5679a915ecad153ab68c9',
         name:'Aang:)',
         photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003'
        }

        server.use(
            rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
                return res(ctx.json(Aang));
            })
        );
        render(<MemoryRouter>
            <App/>
            </MemoryRouter>)
waitFor(() => {
screen.getByText('Loading Benders...')
const benderName = screen.getAllByRole('listitem')
expect(benderName[0]).toHaveTextContent(Aang.name)

})

        

    
})