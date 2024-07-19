document.getElementById('searchButton').addEventListener('click', function () {
    var searchTerm = document.getElementById('searchTerm').value;
    if (searchTerm.trim() === '') {
        alert('Por favor, ingrese un término de búsqueda.');
        return;
    }

    fetch(`search.php?term=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            var answersDiv = document.getElementById('answers');
            answersDiv.innerHTML = '';
            data.query.search.forEach(answer => {
                var answerItem = document.createElement('div');
                answerItem.classList.add('answer-item');
                answerItem.innerHTML = `<h3>${answer.title}</h3><p>${answer.snippet}</p>`;
                answersDiv.appendChild(answerItem);
            });
        });
});

// Este es el evento que no me han pedido, que me permite traer los registros del historial de búsqueda
document.getElementById('consulta_historial').addEventListener('click', function () {
    fetch('historial.php')
        .then(response => response.json())
        .then(data => {
            var tableBody = document.querySelector('#tabla_historial tbody');
            tableBody.innerHTML = ''; // Limpiar la tabla antes de añadir nuevos datos

            data.forEach(entry => {
                var row = document.createElement('tr');
                row.innerHTML = `<td>${entry.id}</td><td>${entry.search_term}</td><td>${entry.search_time}</td>`;
                tableBody.appendChild(row);
            });

            // La tabla permanece oculta si no tiene datos que mostrar
            document.getElementById('tabla_historial').style.display = 'none';
            if (data.length > 0) {
                document.getElementById('tabla_historial').style.display = 'table';
            }
        });
});