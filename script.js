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
