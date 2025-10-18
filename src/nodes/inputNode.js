// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const outputs = [
    { id: `${id}-value`, position: Position.Right },
  ];

  return (
    <BaseNode title={null} outputs={outputs} >
      <div className="space-y-3">
        <div className="text-lg font-medium">Input</div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Name:</label>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Type:</label>
            <select
              value={inputType}
              onChange={handleTypeChange}
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </div>
        </div>
      </div>
    </BaseNode>
  );
}
