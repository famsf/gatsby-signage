// paragraphHelpers.js
import React from "react";
import { admissionparagraph } from "./components/admissionparagraph";

const components = {
    paragraph__admission_type: admissionparagraph,
};

export const getParagraph = node => {
    if (components.hasOwnProperty(node.type)) {
        const ParagraphComponent = components[node.type];
        return <ParagraphComponent key={node.id} node={node} />;
    }
    return <p key={node.id}>Unknown type {node.__typename}</p>;
};
