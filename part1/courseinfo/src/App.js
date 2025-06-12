import { useState } from 'react'

const Exibir = ({ contador }) => <div>{contador}</div>

const Botao = ({ onClick, texto }) => <button onClick={onClick}>{texto}</button>

const App = () => {
  const [cliques, setCliques] = useState({ 
    esquerda: 0, direita: 0
  })

  const handleCliqueEsquerda = () => setCliques({ ...cliques, esquerda: cliques.esquerda + 1,  })

  const handleCliqueDireita = () => setCliques({ ...cliques, direita: cliques.direita + 1 })


  return (
    <div>
      {cliques.esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {cliques.direita}
      <p>
        Total cliques: {cliques.esquerda + cliques.direita}
      </p>
    </div>
  )
}

export default App