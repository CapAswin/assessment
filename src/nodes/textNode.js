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

  const containerStyle = { width: 200, height: 80, border: '1px solid black' };

  return (
    <BaseNode title={null} outputs={outputs} containerStyle={containerStyle}>
      <div>
        <div>
          <span>Text</span>
        </div>
        <div>
          <label>
            Text:
            <input
              type="text"
              value={currText}
              onChange={handleTextChange}
            />
          </label>
        </div>
      </div>
    </BaseNode>
  );
}
