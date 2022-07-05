

var data = new Date();
var dia = String(data. getDate()). padStart(2,'0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;

const hrs = document.getElementById('horasRestantes')

const horaInicio = document.getElementById('horaInicio')
const horaFim = document.getElementById('horaFim')

  let horaI;
  let horaII;
  let horaF;
  let horaFF;

const btn = document.getElementById('add')
  btn.addEventListener('click', (e) => {
    e.preventDefault();  
  
  let afazeres =document.getElementById('afazeres')

 
  afazeres.innerHTML += `<li>${dataAtual} <span id="inicio">${horaInicio.value}</span> às <span id="fim">${horaFim.value}</span> </li>`
    //tarefa.value = ''

    // function horaSemDoisPontos(value){
    //   return value !== ':'
    // }

    // horaI = horaInicio.value.split('').filter(horaSemDoisPontos).join('')
    // horaF = horaFim.value.split('').filter(horaSemDoisPontos).join('')

    horaI = horaInicio.value.replace(':','.')
    horaF = horaFim.value.replace(':','.')

    horaFF = Number(horaF)
    horaII = Number(horaI)    
     
    let hrsR = Number(hrs.textContent)

      const somaHoras = horaFF - horaII

    horasRestantes.innerHTML = hrsR - (somaHoras -1)

  })
  
 