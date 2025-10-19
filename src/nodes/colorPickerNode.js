import { useState } from "react";
import BaseNode from "./BaseNode";

export const ColorPickerNode = ({ data }) => {
    const [color, setColor] = useState(data?.color || "#3b82f6");

    return (
        <BaseNode title="Color Picker Node">
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-10 p-0 border-0"
            />
            <div className="text-center mt-1">{color}</div>
        </BaseNode>
    );
};