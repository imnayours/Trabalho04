let livros = [];
function adicionar(livros, livro) { 
    livros.push(livro);
}
function alterar(livros, livro, id) {
    livros[id] = livro

}
function deletar(livros, id) {
    livros.splice(id, 1)
}
function listar(livros) {
    return livros
}
function administrar_lista(livros) {
    livros = listar(livros);
    ver_lista(livros)

}

function controlar_edicao(livros, id) { 
    let livro = livros[id]
    let livroNovo = mostrar_edicao(livro)
    //model
    alterar(livros, livroNovo, id)
}

function mostrar_cadastro() {
    let nome = prompt('Título do livro: ');
    let autor = prompt('Autor: ');
    let paginas = parseInt(prompt('Quantidade de páginas: '));
    let genero = prompt('Gênero literário: ')
    let livro = {
        nome: nome,
        autor: autor,
        paginas: paginas,
        genero : genero
    };
    return livro
}
function mostrar_edicao() {
    let id = parseInt(prompt('Qual id quer editar?'))
    let livro = livros[id]
    let nome = prompt(`nome do livro? [${livro.nome}]`); 
    if (nome == '') {
        nome = livro.nome        
    } 
    let autor = prompt(`nome do autor? [${livro.autor}]`);
    if (autor == '') {
        autor = livro.autor        
    } 
    let paginas = prompt(`paginas  do livro? [${livro.paginas}]`);
    if (paginas == '') {
        paginas = livro.paginas        
    }
    let genero = prompt(`genero  do livro? [${livro.genero}]`);
    if (genero == '') {
        genero = livro.genero       
    }
    let livroNovo = {
        nome: nome,
        autor: autor,
        paginas: paginas,
        genero: genero
    };
    return [livroNovo, id]
    
}

function deleteRow(i){
    document.getElementById('tbody').deleteRow(i)
}

function mostrar_delete() {
    let id = parseInt(prompt('Qual id quer apagar?'))
    return id 
}

function cadastrar(livros) {
    let livro = mostrar_cadastro()
    adicionar(livros, livro)
}

function ver_lista(livros) {
    let mensagem = '';
    let id = 0;
    for (let livro of livros) {
        mensagem += id + ':' + livro['nome'] + '-' + livro.autor + ':' + livro.paginas + ':' + livro.genero + ':' + '\n';
        id++ ;
    }
    alert(mensagem);
}

async function cadastrar(livros) {
    let livro = mostrar_cadastro()
    let resultado = await adicionar(livros, livro)
    mostrar_resultado(resultado)
}

function editar(livros) {
    administrar_lista(livros)
    let [livroNovo, id] = mostrar_edicao()
    alterar(livros, livroNovo, id)
    
}  
function apagar(livros) {
    controlar_lista(livros)
    //control and view
    let id = mostrar_delete() 
    //model
    deletar(livros, id)
}

function mostrar_resultado(resultado) {
    alert(resultado);
}

function menu() {
    loop:
        while (true) {
            alert('1-Cadastrar\n2-Listar\n3-Editar\n4-Apagar\n5-Sair');
            opcao = prompt('');
            switch (opcao) {
                case '1': 
                    cadastrar(livros)
                    break
                case '2': 
                    administrar_lista(livros)
                    break
                case '3':
                    editar(livros)
                    break
                case '4':
                    apagar(livros)
                    break         
                case '5': 
                    alert('sair')
                    break loop;
            }
        }
}

