import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Characters } from '../pages/characters.tsx';
import { CharacterDetails } from '../pages/character-details.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Characters />,
    children: [
      {
        path: '/:id',
        element: <CharacterDetails />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
