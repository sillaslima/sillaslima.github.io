function preencher() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(posicao) {
      var url = "http://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";
      
      var script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    });
  } else {
    alert('seu navegador não suporta geolocation');
  }
}

function preencherDados(dados) {
  document.querySelector('[name=rua]').value = dados.address.road;
  document.querySelector('[name=numero]').value = dados.address.house_number;
  document.querySelector('[name=cidade]').value = dados.address.city;
  document.querySelector('[name=cep]').value = dados.address.postcode;  
}