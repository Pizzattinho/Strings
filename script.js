import { PALAVRAS_RUINS } from "./palavrasRuins.js";

const botao = document.getElementById("botao-palavrachave");
const entrada = document.getElementById("entrada-de-texto");
const resultado = document.getElementById("resultado-palavrachave");

botao.addEventListener("click", () => {
  const texto = entrada.value.trim();
  if (!texto) {
    resultado.textContent = "Digite algo para analisar!";
    return;
  }

  const palavras = texto
    .toLowerCase()
    .split(/\P{L}+/u)
    .filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));

  const frequencia = {};

  for (const palavra of palavras) {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  }

  const topPalavras = Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  if (topPalavras.length === 0) {
    resultado.textContent = "Nenhuma palavra relevante encontrada.";
    return;
  }

  resultado.innerHTML = topPalavras
    .map(([palavra, contagem]) => `🔹 <strong>${palavra}</strong> (${contagem}x)`)
    .join("<br>");
});
