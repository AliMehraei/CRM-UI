import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import ProtectedRoute from '../components/ProtectedRoute';

import { routes } from './routes';

const finalRoutes = routes.map((route) => {
    const Layout = route.layout === 'blank' ? BlankLayout : DefaultLayout;
    let layoutElement = <Layout>{route.element}</Layout>;

    if (route.protected) {
        layoutElement = (
            <ProtectedRoute 
                requiredPermission={route.requiredPermission}
                path={route.path}
                element={route.element}
            >
                {layoutElement}
            </ProtectedRoute>
        );
    }

    return {
        ...route,
        element: layoutElement
    };
});

const router = createBrowserRouter(finalRoutes);

export default router;
