import { useState, useEffect } from 'react'
import './App.css'
import Bolly1 from "./bollywood1.jpg"
import Bolly2 from "./bollywood3.jpg"
import Bolly3 from "./bollywood2.jpg"
import Bolly5 from "./bollywood5.jpg"
import Holly1 from "./hollywood1.jpg"
import Holly2 from "./hollywood2.jpg"
import Holly3 from "./hollywood3.jpg"
import Holly4 from "./hollywood4.jpg"
import Tolly1 from "./tollywood1.jpg"
import Tolly2 from "./tollywood2.jpg"
import Tolly3 from "./tollywood3.jpg"
import Tolly4 from "./tollywood.jpg"

let data = [
  {
    imagepath: Holly2,
    alt: "Hollywood"
  },
  {
    imagepath: Bolly1,
    alt: "Bollywood"
  },
  {
    imagepath: Tolly4,
    alt: "Tollywood"
  },
  {
    imagepath: Bolly5,
    alt: "Bollywood"
  },
  {
    imagepath: Holly1,
    alt: "Hollywood"
  }
  ,
  {
    imagepath: Holly3,
    alt: "Hollywood"
  }
  ,
  {
    imagepath: Bolly2,
    alt: "Bollywood"
  },
  {
    imagepath: Tolly2,
    alt: "Tollywood"
  },
  {
    imagepath: Bolly3,
    alt: "Bollywood"
  },
  {
    imagepath: Tolly1,
    alt: "Tollywood"
  }
  ,
  {
    imagepath: Holly4,
    alt: "Hollywood"
  }
  ,
  {
    imagepath: Tolly3,
    alt: "Tollywood"
  }
]

function App() {
  const [show, setshow] = useState([]);
  useEffect(() => {
    setshow(data);
  }, []
  );
 
  const hsearch = (e) => {
    const Choose = e.target.value;
    if (Choose === "All") {
      setshow(data);
    } else {
      const result = data.filter(item => item.alt === Choose);
      setshow(result);
    }
  };


  return (
    <>
      <select className='boox' onClick={hsearch}>
        <option value='All'>All</option>
        <option value='Bollywood'>Bollywood</option>
        <option value='Hollywood'>Hollywood</option>
        <option value='Tollywood'>Tollywood</option>
      </select>
      <div className='box-container'>
        {
          show.map((item, index) => (
            <div key={index} className='box'>
              <img src={item.imagepath} className='ima' />
              <p>{item.alt}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
