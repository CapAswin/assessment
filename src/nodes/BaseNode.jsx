import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = [],
  containerStyle = { width: 200, height: 80, border: '1px solid black' },
  className = "",
}) {
  const baseStyle = {
    border: "1px solid #d1d5db", 
    borderRadius: 12,
    backgroundColor: "white",
    padding: "12px",
    minWidth: 220,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const mergedStyle = { ...baseStyle, ...containerStyle };

  return (
    <div style={mergedStyle} className={`relative text-sm ${className}`}>
      {title && (
        <div className="font-semibold mb-2 text-gray-800 text-center">{title}</div>
      )}

      {inputs.map((input, idx) => (
        <Handle
          key={input.id || idx}
          type="target"
          position={input.position || Position.Left}
          id={input.id}
          style={{
            background: "#111",
            width: 10,
            height: 10,
            borderRadius: "50%",
            ...input.style,
          }}
        />
      ))}

      <div className="text-gray-700">{children}</div>

      {outputs.map((output, idx) => (
        <Handle
          key={output.id || idx}
          type="source"
          position={output.position || Position.Right}
          id={output.id}
          style={{
            background: "#111",
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
