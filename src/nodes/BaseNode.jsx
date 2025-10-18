import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = [],
  containerStyle = {  border: '1px solid black' },
  className = "",
}) {
  const theme = useStore((state) => state.theme);

  const mergedStyle = { ...containerStyle };

  return (
    <div
      style={mergedStyle}
      className={`relative text-sm border rounded-xl p-3 min-w-56 shadow-sm ${
        theme === 'dark'
          ? 'border-slate-600 bg-slate-800 text-slate-100'
          : 'border-slate-300 bg-slate-50 text-slate-900'
      } ${className}`}
    >
      {title && (
        <div className={`font-semibold mb-2 text-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          {title}
        </div>
      )}

      {inputs.map((input, idx) => (
        <Handle
          key={input.id || idx}
          type="target"
          position={input.position || Position.Left}
          id={input.id}
          style={{
            background: theme === 'dark' ? '#ffffff' : '#111',
            width: 10,
            height: 10,
            borderRadius: "50%",
            ...input.style,
          }}
        />
      ))}

      <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{children}</div>

      {outputs.map((output, idx) => (
        <Handle
          key={output.id || idx}
          type="source"
          position={output.position || Position.Right}
          id={output.id}
          style={{
            background: theme === 'dark' ? '#ffffff' : '#111',
            width: 10,
            height: 10,
            borderRadius: "50%",
            ...output.style,
          }}
        />
      ))}
    </div>
  );
}
