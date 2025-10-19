import { useState } from "react";
import BaseNode from "./BaseNode";

export const ToggleNode = ({ data }) => {
    const [isOn, setIsOn] = useState(data?.isOn || false);

    return (
        <BaseNode title="Toggle Node">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isOn}
                    onChange={() => setIsOn(!isOn)}
                    className="w-5 h-5 accent-blue-500"
                />
                <span>{isOn ? "ON" : "OFF"}</span>
            </label>
        </BaseNode>
    );
};