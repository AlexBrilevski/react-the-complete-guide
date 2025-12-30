import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import EventsLayout from './pages/EventsLayout';
import EventsPage, { eventsLoader } from './pages/Events';
import EventDetailPage, { eventDetailLoader, deleteEventAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import { eventFormAction } from './components/EventForm';
import NewsletterPage, { newsletterAction } from './pages/Newsletter';
import AuthenticationPage, { authAction } from './pages/Authentication';
import { logoutAction } from './pages/Logout';
import { tokenLoader } from './utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventFormAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventFormAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
