import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const NumberNode = ({ id, data }) => {
    const [number, setNumber] = useState(data?.number || 0);
    const outputs = [{ id: `${id}-output`, position: Position.Right }];

    return (
        <BaseNode title={null} outputs={outputs}>
            <div className="space-y-2">
                <div className="text-lg font-medium">🔢 Number</div>
                <div className="flex gap-2">
                    <label className="text-sm font-medium">Value:</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter a number..."
                    />
                </div>
            </div>
        </BaseNode>
    );
};
