import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { SignIn } from '../pages/SignIn';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/SignIn" element={<SignIn />} />
         <Route path="/Profile" element={<Profile />} />
      </Routes>
   )
}