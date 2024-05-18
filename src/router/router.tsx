import { HomePage } from 'pages/homePage';
import { HashRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
