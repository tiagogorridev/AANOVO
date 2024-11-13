const ctx = document.getElementById('meuGrafico').getContext('2d');
ctx.canvas.width = 400; // Ajuste a largura conforme necessário
ctx.canvas.height = 400; // Ajuste a altura conforme necessário

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Realizado', 'Pendente'],
        datasets: [{
            data: [10, 6],
            backgroundColor: ['#36a2eb', '#FF9F40']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Mantém o gráfico responsivo dentro do limite de altura/ largura
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Status de Pagamento'
            }
        }
    }
});
