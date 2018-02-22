function layer(context, layer) {
    var object = {
        "layerName": layer.name,
        "projectName": context.project.name
    };

    var JSONString = JSON.stringify(object, null, 2);

    return {
        code: JSONString,
        language: "json"
    };
};