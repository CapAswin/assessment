import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const outputs = [
    { id: `${id}-output`, position: Position.Right },
  ];


  return (
    <BaseNode title={null} outputs={outputs} >
      <div className="space-y-2">
        <div className="text-lg font-medium">📝 Text</div>
        <div className="flex gap-2">
          <label className="text-sm font-medium">Content:</label>
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your text here..."
          />
        </div>
      </div>
    </BaseNode>
  );
}
