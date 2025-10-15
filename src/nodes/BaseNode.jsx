// BaseNode.jsx
import { Handle } from "reactflow";

// A small reusable container for node UIs. It renders optional title,
// input handles (targets) and output handles (sources) and accepts a
// `containerStyle` prop so callers can keep their existing inline styles.
export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = [],
  containerStyle = {},
  className = undefined,
}) {
  const baseStyle = { border: "1px solid black", padding: 8, borderRadius: 6, width: 220 };
  const mergedStyle = { ...baseStyle, ...containerStyle };

  return (
    <div style={mergedStyle} className={className}>
      {title ? <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div> : null}

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
