function countRectangles(width, height) {
  /**
   * A boa notícia é que esse problema tem uma fórmula deliciosa, 
   * quase um pequeno truque de bolso da combinatória.
   * 
   * Imagine um retângulo de largura W e altura H formado por quadradinhos. 
   * Cada retângulo possível é escolhido pegando duas linhas verticais 
   * e duas linhas horizontais. Isso cria um retângulo único.
   * 
   * O número total de retângulos é:
   * 𝑊(𝑊+1)/2 × 𝐻(𝐻+1)/2
   * 
   * Ou de forma compacta:
   * total = 𝑊(𝑊+1) × 𝐻(𝐻+1)/4
   */
  return (width * (width + 1) * height * (height + 1)) / 4;
}

module.exports = countRectangles;