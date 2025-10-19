import { useStore } from './store';

export const SubmitButton = () => {
    const theme = useStore((state) => state.theme);
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        try {
            const formattedNodes = nodes.map(node => {
                let name = "";
                let properties = {};

                switch (node.type) {
                    case "text":
                        name = "Text";
                        properties = { Content: "" };
                        break;
                    case "llm":
                        name = "LLM";
                        properties = { Model: "AI Language Model" };
                        break;
                    case "customInput":
                        name = "Input";
                        properties = { Name: node.id, Type: "Text" };
                        break;
                    case "customOutput":
                        name = "Output";
                        properties = { Name: node.id, Type: "Text" };
                        break;
                    default:
                        name = "Node";
                        properties = {};
                }

                return { id: node.id, name, properties };
            });

            const formattedEdges = edges.map(edge => ({
                source: edge.source,
                target: edge.target,
                source_handle: "output",
                target_handle: "input"
            }));
            console.log({ nodes: formattedNodes, edges: formattedEdges })
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes: formattedNodes, edges: formattedEdges }),
            });

            if (!response.ok) throw new Error(`Network error: ${response.status}`);
            const data = await response.json();

            alert(
                `Pipeline Summary:\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? '✅ Yes' : '❌ No'}`
            );

        } catch (err) {
            alert('Submit failed: ' + err.message);
            console.error(err);
        }
    };


    return (
        <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="flex items-center justify-center">
                <button
                    type="button" // ensures it doesn't trigger a GET form submission
                    onClick={handleSubmit}
                    className={`
            px-6 py-2.5 rounded-md font-medium text-sm
            transition-all duration-150 ease-in-out
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${theme === 'dark'
                            ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-gray-900'
                            : 'bg-slate-600 hover:bg-slate-700 text-slate-100 focus:ring-slate-400 focus:ring-offset-gray-50'
                        }
          `}
                >
                    Submit Pipeline
                </button>
            </div>
        </div>
    );
};
