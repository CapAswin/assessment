import BaseNode from "./BaseNode";

export const InfoNode = ({ data }) => {
    const infoText = data?.text || "This is an informational node.";

    return (
        <BaseNode title="Info Node">
            <p className="text-sm">{infoText}</p>
        </BaseNode>
    );
};
