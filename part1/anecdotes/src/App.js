import { useState } from "react"

const App = () => {
  const [mostVote, setMostVote] = useState(0)
  const [selected, setSelected] = useState(0)
  const [anecdotes, setVote] = useState([
    {
      "anecdote": "Se fazer algo dói, faça isso com mais frequência.",
      "vote" : 0
    },
    {
      "anecdote": "Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!",
      "vote" : 0
    },
    {
      "anecdote": "Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.",
      "vote" : 0
    },
    {
      "anecdote": "Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.",
      "vote" : 0
    },
    {
      "anecdote": "Otimização prematura é a raiz de todo o mal.",
      "vote" : 0
    },
    {
      "anecdote": "Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.",
      "vote" : 0
    },
    {
      "anecdote": "Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.",
      "vote" : 0
    },
    {
      "anecdote": "A única maneira de ir rápido é ir bem." ,
      "vote" : 0    
    }])

function votar() {
  let a = [...anecdotes]
  a[selected].vote = a[selected].vote + 1 
  setVote(a)
  anecdotes.forEach((a, index) => {
    if (a.vote > anecdotes[mostVote].vote) {
      setMostVote(index)
    }
  })
}

function next() {
  if (selected >= anecdotes.length - 1) {
    setSelected(0)
  } else {
    setSelected(selected + 1)
  }
  anecdotes.forEach((a, index) => {
    if (a.vote > anecdotes[mostVote].vote) {
      setMostVote(index)
    }
  })
}

  return (
    <div>
      <div>
        <div>
          <h1>
            Anecdote of the day
          </h1>
          <div>
            {anecdotes[selected].anecdote}
          </div>
          <div>
            has {anecdotes[selected].vote} votes
          </div>
        </div>
        <button onClick={votar}>Votar</button>
        <button onClick={next}>Proxima</button>
      </div>
      <div>
          <h1>
            Anecdote with most votes
          </h1>
           <div>
            {anecdotes[mostVote].anecdote}
          </div>
          <div>
            has {anecdotes[mostVote].vote} votes
          </div>
      </div>

    </div>
  )
}

export default App