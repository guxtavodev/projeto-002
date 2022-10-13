var data = { 
  datasets: [
    { 
      data: [50, 50, 50], 
      backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    
    }
  ], // These labels appear in the legend and in the tooltips when hovering different arcs 
  labels: [ 'Presença', 'Atividades', 'Trabalho'] 
  
}; 

var pieOptions = { 
  responsive: false, 
  maintainAspectRatio:false,
};

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "pie",
  data: data,
  options: pieOptions
});