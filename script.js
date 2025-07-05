import { PALAVRAS_RUINS } from "./palavrasRuins.js";

const inputText = document.getElementById("input-text");
const btnAnalyze = document.getElementById("btn-analyze");
const outputResult = document.getElementById("output-result");

btnAnalyze.addEventListener("click", () => {
  const texto = inputText.value.trim();

  if (!texto) {
    outputResult.textContent = "Digite algo para analisar!";
    return;
  }

  const palavras = texto
    .toLowerCase()
    .split(/[^a-zá-úà-ü]+/i)
    .filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));

  if (palavras.length === 0) {
    outputResult.textContent = "Nenhuma palavra relevante encontrada.";
    return;
  }

  const frequencia = {};
  for (const p of palavras) {
    frequencia[p] = (frequencia[p] || 0) + 1;
  }

  const ordenado = Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  outputResult.innerHTML = ordenado
    .map(([palavra, contagem]) => `🔹 <strong>${palavra}</strong> (${contagem}x)`)
    .join("<br>");
});
