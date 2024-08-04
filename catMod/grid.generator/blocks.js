module.exports = [{
    name: 'Create grid with template',
    type: 'command',
    code: 'create grid template',
    icon: 'grid',
    category: 'Utility',
    documentation: 'Creates a grid of a given template inside the current room.\n.Set a batchID to easy get all templates into that grid batch ID.\nAlso a gridID is added to each template starting at 0.\nYou can save the result to a variable this contains an Array with all templates.',
    pieces: [{
        type: 'label',
        name: 'Create grid starting at X:',
        i18nKey: 'create grid starting at X'
    }, {
        type: 'argument',
        key: 'startX',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'Y:',
        i18nKey: 'Y'
    }, {
        type: 'argument',
        key: 'startY',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'with rows:',
        i18nKey: 'with rows'
    }, {
        type: 'argument',
        key: 'rows',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'and columns:',
        i18nKey: 'and columns'
    }, {
        type: 'argument',
        key: 'columns',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'using template:',
        i18nKey: 'using template'
    }, {
        type: 'argument',
        key: 'template',
        typeHint: 'string',
        assets: 'template',
        required: true
    }, {
        type: 'label',
        name: 'add a batchID:',
        i18nKey: 'add a batchID:'
    }, {
        type: 'argument',
        key: 'batchID',
        typeHint: 'number',
        required: true
    }, {
        type: 'filler'
    },{
        type: 'label',
        name: 'store in',
        i18nKey: 'store in'
    }, {
        type: 'argument',
        key: 'return',
        typeHint: 'wildcard'
    }],
    jsTemplate: (values) => {
        if (values.return !== 'undefined') {
            return `${values.return} =  createGrid(${values.template}, ${values.startX}, ${values.startY}, ${values.rows}, ${values.columns}, ${values.batchID});`;
        }
    }
}, {
    name: 'Create grid with padding',
    type: 'command',
    code: 'create grid template with padding',
    icon: 'grid',
    category: 'Utility',
    documentation: 'Creates a grid of a given template with padding inside the current room.\n.Set a batchID to easy get all templates into that grid batch ID.\nAlso a gridID is added to each template starting at 0.\nYou can save the result to a variable this contains an Array with all templates.',
    pieces: [{
        type: 'label',
        name: 'Starting at X:',
        i18nKey: 'Starting at X'
    }, {
        type: 'argument',
        key: 'startX',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'Y:',
        i18nKey: 'Y'
    }, {
        type: 'argument',
        key: 'startY',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'with rows:',
        i18nKey: 'with rows'
    }, {
        type: 'argument',
        key: 'rows',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'and columns:',
        i18nKey: 'and columns'
    }, {
        type: 'argument',
        key: 'columns',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'using template:',
        i18nKey: 'using template'
    }, {
        type: 'argument',
        key: 'template',
        typeHint: 'string',
        assets: 'template',
        required: true
    }, {
        type: 'label',
        name: 'and padding:',
        i18nKey: 'and padding'
    }, {
        type: 'argument',
        key: 'padding',
        typeHint: 'number',
        required: true
    }, {
        type: 'label',
        name: 'add a batchID:',
        i18nKey: 'add a batchID:'
    }, {
        type: 'argument',
        key: 'batchID',
        typeHint: 'number',
        required: true
    }, {
        type: 'filler'
    },{
        type: 'label',
        name: 'store in',
        i18nKey: 'store in'
    }, {
        type: 'argument',
        key: 'return',
        typeHint: 'wildcard'
    }],
    jsTemplate: (values) => {
        if (values.return !== 'undefined') {
            return `${values.return} =  createGridWithPadding(${values.template}, ${values.startX}, ${values.startY}, ${values.rows}, ${values.columns}, ${values.padding}, ${values.batchID});`;
        }
    }
}];