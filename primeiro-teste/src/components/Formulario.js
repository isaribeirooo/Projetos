import { useState } from "react"

function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrou o usuario')
        console.log(`Usuartio ${nome} cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('Isadora')
    const [senha, setSenha] = useState('')
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>             
                    <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange = {(e)=> setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                    type="text"
                    id="senha"
                    name="senha" 
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}    
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
            <p>Nome: {nome}</p>
            <p>Senha: {senha}</p>
        </div>
    )
}

export default Formulario