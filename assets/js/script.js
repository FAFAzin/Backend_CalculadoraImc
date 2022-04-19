
//calcular evento do submit do formulário
const form = document.querySelector('#formulario');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    //verifica se os valores são inválidos e para o código caso seja true
    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    // realiza a o calculo do imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true)



});

function getNivelImc(imc){
    nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1',
     'obesidade grau 2', 'obesidade grau 3']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
    

}

//Função que descobri o valor imc
function getImc(peso, altura){

    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// funcão criada para criar P 
function criaP(){
    const p = document.createElement('p');
    return p;

}

// funcão que recebe os valores inválidos e os trata, passando uma mensagem de retorno.
function setResultado (msg, isValid){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrado-resultado');

    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}