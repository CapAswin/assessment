import { useState } from "react";
import BaseNode from "./BaseNode";

export const SliderNode = ({ data }) => {
    const [value, setValue] = useState(data?.value || 50);

    return (
        <BaseNode title="Slider Node">
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full"
            />
            <div className="text-center mt-1">{value}</div>
        </BaseNode>
    );
};