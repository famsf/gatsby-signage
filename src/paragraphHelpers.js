// paragraphHelpers.js
import React from "react"
import { admissionparagraph } from "./components/admissionparagraph"
import { imageparagraph } from "./components/imageparagraph"
import { descriptionparagraph } from "./components/descriptionparagraph"

const components = {
    paragraph__admission_type: admissionparagraph,
    paragraph__signage_image: imageparagraph,
    paragraph__description: descriptionparagraph,
};

export const getParagraph = node => {
    if (components.hasOwnProperty(node.type)) {
        const ParagraphComponent = components[node.type];
        return <ParagraphComponent key={node.id} node={node} />;
    }
    return <p key={node.id}>Unknown type {node.__typename}</p>;
};
