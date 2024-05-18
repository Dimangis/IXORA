import { createRoot } from 'react-dom/client';
import 'normalize.css';
import Router from 'router/router';

const app = document.getElementById('app');

if (app) {
  const root = createRoot(app);

  root.render(<Router />);
}
