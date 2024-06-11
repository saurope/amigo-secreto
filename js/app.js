let arrayLista = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    
    
    if (nomeAmigo.value == '' || arrayLista.includes(nomeAmigo.value)) {
        alert("Nome não pode ser vazio, nem igual a outro nome");
    } else{
        arrayLista.push(nomeAmigo.value);
        
        if (listaAmigos.textContent == '') {
            listaAmigos.textContent = nomeAmigo.value;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
        }
    }

    
    nomeAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    embaralhar(arrayLista);
    let listaSorteio = document.getElementById('lista-sorteio');
    if (arrayLista.length > 3){
        for (let i = 0; i < arrayLista.length; i++) {
            if(i == arrayLista.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML + arrayLista[i] + '-->' + arrayLista[0] + '<br/>';
            } else{
                listaSorteio.innerHTML = listaSorteio.innerHTML + arrayLista[i] + '-->' + arrayLista[i+1] + '<br/>';
            }
        }
    } else {
        alert("A quantidade de amigos para sorteio tem que ser de pelo menos 4.");
    }
}

function excluirAmigo(index) {
    arrayLista.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < arrayLista.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = arrayLista[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    arrayLista = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

