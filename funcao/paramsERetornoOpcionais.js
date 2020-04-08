function area (largura, altura) {
    const area = largura * altura
    // Não é recomendável utilizar esse tipo de lógica dentro de uma função, uma condição 
    // que determina ou não o retorno.
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2`); // Devereria retornar um erro, um false
    } else {
        return area
    }
}

    console.log(area(2,2));
    console.log(area(2));
    console.log(area());
    console.log(area(2));
    console.log(area(5,5)); // O retorno dessa função é undefined
    