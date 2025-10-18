// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const theme = useStore((state) => state.theme);

    return (
        <div className={`p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className={`
                        px-6 py-2.5 rounded-md font-medium text-sm
                        transition-all duration-150 ease-in-out
                        hover:scale-102 active:scale-98
                        focus:outline-none focus:ring-2 focus:ring-offset-1
                        ${theme === 'dark'
                            ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-gray-900'
                            : 'bg-slate-600 hover:bg-slate-700 text-slate-100 focus:ring-slate-400 focus:ring-offset-gray-50'
                        }
                    `}
                >
                    Submit Pipeline
                </button>
            </div>
        </div>
    );
}
