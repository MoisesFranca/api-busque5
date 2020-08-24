var LOGO = document.querySelector('.LOGO');
var INFORS= document.querySelector('.INFORS');
var form = document.querySelector('form');
var SERIE = document.querySelector("#SERIE")
var pranada = document.querySelector('.pranada')
let Series= JSON.parse(localStorage.getItem('Series')) || [];




function addToLocalStorage(){
  if(Series.length < 5){
 Series.push(NAME.textContent)
  localStorage.setItem('Series', JSON.stringify(Series));

  }
}

  function buscar(SERIE) {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${SERIE}`)
    .then(function(response) {
      return response.json();

})
.then(function(dados) {
    console.log(dados);

    LOGO1.src=dados.image.medium
   

    NAME.innerHTML=dados.name;
    LINGUA.innerHTML=dados.language;
    statuss.innerHTML=dados.status;
    TIPO.innerHTML=dados.genres;
    NAÇÃO.innerHTML=dados.network.country.name;
   
   
 
    
});

LOGO1.addEventListener('click', addToLocalStorage)

}
form.addEventListener('submit', function (evt){

 evt.preventDefault();
buscar(SERIE.value);
 
});



