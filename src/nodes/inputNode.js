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

  // Preserve the original inline styles by passing them through
  const containerStyle = { width: 200, height: 80, border: '1px solid black' };

  return (
    <BaseNode title={null} outputs={outputs} containerStyle={containerStyle}>
      <div>
        <div>
          <span>Input</span>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
}
