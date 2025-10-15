// BaseNode.jsx
import { Handle } from "reactflow";

export default function BaseNode({ title, children, inputs = [], outputs = [] }) {
  return (
    <div style={{ border: "1px solid black", padding: 8, borderRadius: 6, width: 220 }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={input.position}
          id={input.id}
          style={input.style}
        />
      ))}
      {children}
      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={output.position}
          id={output.id}
          style={output.style}
        />
      ))}
    </div>
  );
}
