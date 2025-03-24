import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SurveyApp } from './SurveyApp';
import 'notyf/notyf.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SurveyApp />
  </StrictMode>,
);
