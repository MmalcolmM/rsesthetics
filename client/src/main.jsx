// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { StoreProvider } from './utils/GlobalState.jsx';

import client from './utils/apolloClient.js'; // Import the Apollo Client configuration
import App from './App';
import './index.css';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import Services from './components/pages/Services';
import BookNow from './components/pages/BookNow';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login'; // Ensure this import is correct
import Signup from './components/pages/Signup';
// import OrderHistory from './components/pages/OrderHistory.jsx';
import AdminUpdate from './components/pages/AdminUpdate';
import { AuthProvider, useAuth } from './utils/auth.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App value="something" />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <ContactForm />,
      },
      {
        path: '/booknow',
        element: <BookNow />,
      },
      {
        path: '/login',
        element: <Login />, // Ensure this path and component are correct
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/admin',
        element: <Admin />, // Admin route, handled in Login
      },
      {
        path: '/update/:id',
        element: <AdminUpdate />, // AdminUpdate route, handled in Login
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>
);
