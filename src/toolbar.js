// toolbar.js

import { DraggableNode } from './draggableNode';
import { useStore } from './store';

export const PipelineToolbar = () => {
    const { theme, toggleTheme } = useStore();

    return (
        <div className={`p-2.5 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className="flex items-center ">
                <div className="flex flex-wrap gap-2.5 flex-1">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                </div>
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-200'}`}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3V5M12 19V21M21 12H19M5 12H3M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};
