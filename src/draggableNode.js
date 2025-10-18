// draggableNode.js

import { useStore } from './store';

export const DraggableNode = ({ type, label }) => {
  const theme = useStore((state) => state.theme);
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} cursor-grab min-w-20 h-15 flex items-center justify-center flex-col rounded-lg ${theme === 'dark' ? 'bg-slate-600 text-slate-100' : 'bg-slate-500 text-slate-50'
        }`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};
