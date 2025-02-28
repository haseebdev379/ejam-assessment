import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from '@/lib/constants/routes';
import SuperheroesPage from './pages/superheroes';

const NoRouteFound = React.lazy(() => import('@/pages/404'));
const UsersPage = React.lazy(() => import('@/pages/users'));

export default function App() {
  return (
    <BrowserRouter>
      <main className="bg-secondary-50 h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SuperheroesPage />} />
            <Route path="/superheroes" element={<SuperheroesPage />} />
            <Route path={ROUTES.USERS} element={<UsersPage />} />
            <Route path="*" element={<NoRouteFound />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
