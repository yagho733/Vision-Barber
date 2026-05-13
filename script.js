let service = "";
let time = "";

function selectService(s){
  service = s;
  update();
}

function selectTime(t){
  time = t;
  update();
}

function update(){

  let date = document.getElementById("date")?.value || "sem data";

  let summary = document.getElementById("summary");

  if(summary){
    summary.innerText =
    `Serviço: ${service || "?"} | Data: ${date} | Horário: ${time || "?"}`;
  }
}

function sendWhatsApp(){

  let date = document.getElementById("date").value;

  if(!service || !time || !date){
    alert("Preencha tudo!");
    return;
  }

  let msg =
`💈 Agendamento:

Serviço: ${service}
Data: ${date}
Horário: ${time}`;

  let url = `https://wa.me/555399101284?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}