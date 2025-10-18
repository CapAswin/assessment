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

  const containerStyle = { width: 200, height: 80 };

  return (
    <BaseNode title={null} inputs={inputs} outputs={outputs} containerStyle={containerStyle}>
      <div className="flex flex-col items-center justify-center h-full space-y-1">
        <div className="text-lg font-medium">LLM</div>
        <div className="text-xs text-center opacity-75">AI Language Model</div>
      </div>
    </BaseNode>
  );
}
