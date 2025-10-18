import { useEffect } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';
import './index.css';

function App() {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('bg-slate-900', 'text-slate-100');
      body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      html.classList.remove('dark');
      body.classList.add('bg-slate-50', 'text-slate-900');
      body.classList.remove('bg-slate-900', 'text-slate-100');
    }
  }, [theme]);

  return (
    <div className="min-h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
