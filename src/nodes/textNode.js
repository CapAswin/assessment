import { useState, useEffect, useRef } from 'react';
import { Position, Handle } from 'reactflow';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    const regex = /{{\s*([\w$]+)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(value)) !== null) {
      matches.push(match[1]);
    }
    setVariables(matches);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  const outputs = [
    { id: `${id}-output`, position: Position.Right },
  ];

  return (
    <BaseNode title={null} outputs={outputs}>
      <div className="space-y-2">
        <div className="text-lg font-medium">📝 Text</div>
        <div className="flex gap-2 items-start">
          <label className="text-sm font-medium mt-1">Content:</label>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none overflow-hidden"
            placeholder="Enter your text here..."
            rows={1}
          />
        </div>

        {variables.map((v, index) => (
          <Handle
            key={v}
            type="target"
            position={Position.Left}
            id={v}
            style={{ top: 20 + index * 24 }}
          />
        ))}
      </div>
    </BaseNode>
  );
};
