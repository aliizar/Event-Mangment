import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from "./Compoents/About.tsx";
import Landing from './Compoents/Landing.tsx';
import Event from "./Events/Event";
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoard from './UserDashBoard/DashBoard.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AsideWelcome from './UserDashBoard/Welcome.tsx';
import EventForm from './UserDashBoard/UploadEvent.tsx';
import YourUploads from './UserDashBoard/YourUploads.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from './Store/strore.tsx'; 
import RegisterEvents from './UserDashBoard/RegisterEvents.tsx';
import { PersistGate } from 'redux-persist/integration/react'; 

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/event",
        element: <Event />
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
          {
            path: '/dashboard',
            element: <AsideWelcome />
          },
          {
            path: '/dashboard/form',
            element: <EventForm />
          },
          {
            path: '/dashboard/uploads',
            element: <YourUploads />
          },
          {
            path: '/dashboard/registered',
            element: <RegisterEvents />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-xlh6twbv44bh6lfu.us.auth0.com"
      clientId="7YKy3VAPJQFZ2zmId1oThOV9lw0eIM4G"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/dashboard"
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate */}
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </Auth0Provider>
  </StrictMode>,
);
