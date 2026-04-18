import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';

const BlogPage = lazy(() => import('./pages/Blog'));
const postsLoader = () => import('./pages/Blog').then(module => module.loader());

const PostPage = lazy(() => import('./pages/Post'));
const postLoader = (meta) => import('./pages/Post').then(module => module.loader(meta));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            loader: postsLoader,
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
