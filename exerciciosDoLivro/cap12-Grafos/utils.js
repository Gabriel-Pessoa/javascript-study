const Colors = {
    WHITE: 0, // vértice não visitado (not visited)
    GREY: 1, // vértice visitado, mas não explorado (visited, but not explored yet)
    BLACK: 2 // vértice foi totalmente explorado
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}

module.exports = { Colors, initializeColor };