function normalizarNumero(valor) {
    if (typeof valor === "string") valor = valor.replace(",", ".");
    const n = Number(valor);
    return Number.isFinite(n) ? n : NaN;
}

function calcular() {
    const campo1 = document.getElementById("num1").value.trim();
    const campo2 = document.getElementById("num2").value.trim();
    const n1 = normalizarNumero(campo1);
    const n2 = normalizarNumero(campo2);
    const resDiv = document.getElementById("resultado");

    // Verifica se ambos estão vazios
    if (campo1 === "" && campo2 === "") {
        resDiv.innerHTML = `<p class="op aviso"><span class="label">⚠</span> <span class="valor">Por favor, informe os dois números.</span></p>`;
        return;
    }

    // Verifica se apenas um está vazio
    if (campo1 === "") {
        resDiv.innerHTML = `<p class="op aviso"><span class="label">⚠</span> <span class="valor">Informe o Número 1.</span></p>`;
        return;
    }
    if (campo2 === "") {
        resDiv.innerHTML = `<p class="op aviso"><span class="label">⚠</span> <span class="valor">Informe o Número 2.</span></p>`;
        return;
    }

    // Verifica se os valores são inválidos (ex.: texto)
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        resDiv.innerHTML = `<p class="op aviso"><span class="label">⚠</span> <span class="valor">Insira apenas números válidos.</span></p>`;
        return;
    }

    // Calcula resultados
    const soma = n1 + n2;
    const sub = n1 - n2;
    const mult = n1 * n2;
    const div = n2 !== 0 ? (n1 / n2) : null;
    const resto = n2 !== 0 ? (n1 % n2) : null;

    // Monta HTML colorido
    resDiv.innerHTML = `
        <div class="op soma"><span class="label">Soma</span><span class="valor">${soma}</span></div>
        <div class="op sub"><span class="label">Subtração</span><span class="valor">${sub}</span></div>
        <div class="op mult"><span class="label">Multiplicação</span><span class="valor">${mult}</span></div>
        <div class="op div ${div === null ? 'aviso' : ''}">
            <span class="label">Divisão</span>
            <span class="valor">${div !== null ? div : "Não é possível dividir por zero"}</span>
        </div>
        <div class="op resto ${resto === null ? 'aviso' : ''}">
            <span class="label">Resto</span>
            <span class="valor">${resto !== null ? resto : "—"}</span>
        </div>
    `;
}

// Ativa o evento de clique no botão
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalcular").addEventListener("click", calcular);
});