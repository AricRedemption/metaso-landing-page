import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./pages/Home/Index.tsx'));
const Intro = lazy(() => import('./pages/Intro/Index.tsx'));
const Install = lazy(() => import('./pages/Install/Index.tsx'));
const Explores = lazy(() => import('./pages/Explores/Index.tsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="install" element={<Install />} />
          <Route path="explores" element={<Explores />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;