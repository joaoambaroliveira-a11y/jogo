function desenharEstacionamento() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const vagasLivres = spots.filter(s => !s.ocupado).length;
  const vagasOcupadas = spots.filter(s => s.ocupado).length;
  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.fillText("Vagas livres: " + vagasLivres, 20, 20);
  ctx.fillText("Vagas ocupadas: " + vagasOcupadas, 20, 40);

  spots.forEach((s, i) => {
    // Fundo da vaga
    ctx.fillStyle = s.ocupado ? "#ffcccc" : "#ccffcc"; // vermelho claro ou verde claro
    ctx.fillRect(s.x, s.y, s.width, s.height);

    // Borda destacada
    ctx.strokeStyle = s.ocupado ? "red" : "green";
    ctx.lineWidth = 5;
    ctx.strokeRect(s.x, s.y, s.width, s.height);

    // Número da vaga
    ctx.fillStyle = "black";
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.fillText("V" + (i+1), s.x + s.width/2, s.y + s.height/2);

    if (s.ocupado && s.carro) {
      // Corpo do carro
      ctx.fillStyle = s.carro.cor;
      ctx.fillRect(s.x + 10, s.y + 20, 40, 60);

      // Vidros
      ctx.fillStyle = "lightblue";
      ctx.fillRect(s.x + 12, s.y + 22, 36, 20);

      // Faróis
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(s.x + 15, s.y + 20, 5, 0, Math.PI * 2);
      ctx.arc(s.x + 45, s.y + 20, 5, 0, Math.PI * 2);
      ctx.fill();

      // Rodas
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(s.x + 15, s.y + 75, 6, 0, Math.PI * 2);
      ctx.arc(s.x + 45, s.y + 75, 6, 0, Math.PI * 2);
      ctx.fill();

      // Texto da placa e modelo
      ctx.fillStyle = "black";
      ctx.font = "12px Arial";
      ctx.textAlign = "left";
      ctx.fillText(s.carro.placa, s.x + 5, s.y + s.height + 15);
      ctx.fillText(s.carro.modelo, s.x + 5, s.y + s.height + 30);
    }
  });
}
