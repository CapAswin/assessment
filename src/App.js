import { useEffect } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';
import './index.css';

function App() {
  const { theme, initializeTheme } = useStore();

  useEffect(() => {
    const savedTheme = initializeTheme();
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (currentTheme) => {
    const html = document.documentElement;
    const body = document.body;
    if (currentTheme === 'dark') {
      html.classList.add('dark');
      body.classList.add('bg-slate-900', 'text-slate-100');
      body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      html.classList.remove('dark');
      body.classList.add('bg-slate-50', 'text-slate-900');
      body.classList.remove('bg-slate-900', 'text-slate-100');
    }
  };

  return (
    <div className="min-h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
