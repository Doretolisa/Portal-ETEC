function abrirCurso(id) {
    window.location.href = `curso.html?id=${id}`;
}

// Gerar os cursos automaticamente
const container = document.getElementById("listaCursos");

cursos.forEach(curso => {
    const item = document.createElement("div");
    item.className = "item";
    item.onclick = () => abrirCurso(curso.id);

    item.innerHTML = `
        <div class="item-img">
            <img src="${curso.img}" alt="${curso.nome}">
            <p>${curso.nome}</p>
        </div>
    `;

    container.appendChild(item);
});
