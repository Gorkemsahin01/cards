import 'bulma/css/bulma.css'
import './App.css'
import Hobi from './Hobi'
import basketbol from './images/basketbol.jpg'
import barmen from './images/barmen.png'
import kodlama from './images/kodlama.png'
import Yemek from './images/yemek.webp'

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">HOBİLERİM</p>
        </div>
      </section>
      <div className="conteiner">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Hobi
                image={basketbol}
                title="Basketbol oynamak"
                description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime veniam sapiente itaque pariatur optio! Veritatis nulla, corrupti quae eius dolorem odio. Quibusdam, sapiente accusamus?"
              />
            </div>
            <div className="column">
              <Hobi
                image={barmen}
                title="Barmenlik"
                description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime veniam sapiente itaque pariatur optio! Veritatis nulla, corrupti quae eius dolorem odio. Quibusdam, sapiente accusamus?"
              />
            </div>
            <div className="column">
              <Hobi
                image={kodlama}
                title="Kod yazmak"
                description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime veniam sapiente itaque pariatur optio! Veritatis nulla, corrupti quae eius dolorem odio. Quibusdam, sapiente accusamus?"
              />
            </div>
            <div className="column">
              <Hobi
                image={Yemek}
                title="Yemek yapmak"
                description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime veniam sapiente itaque pariatur optio! Veritatis nulla, corrupti quae eius dolorem odio. Quibusdam, sapiente accusamus?"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
