// llmNode.js

import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: `${id}-system`, position: Position.Left, style: { top: `${100 / 3}%` } },
    { id: `${id}-prompt`, position: Position.Left, style: { top: `${200 / 3}%` } },
  ];

  const outputs = [
    { id: `${id}-response`, position: Position.Right },
  ];

  const containerStyle = { width: 200, height: 80, border: '1px solid black' };

  return (
    <BaseNode title={null} inputs={inputs} outputs={outputs} containerStyle={containerStyle}>
      <div>
        <div>
          <span>LLM</span>
        </div>
        <div>
          <span>This is a LLM.</span>
        </div>
      </div>
    </BaseNode>
  );
}
