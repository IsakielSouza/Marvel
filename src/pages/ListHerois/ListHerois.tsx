import React, { useState, useEffect} from 'react';
import { ListHeroes } from './ListHeroisStyles';

import api from '../../service/api'

interface HeroProps{
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }

}

export default function ListHerois() {

const [heroes, setHeroes] = useState<HeroProps[]>([])

useEffect(() => {
    api.get('')
    .then(response => {
    setHeroes(response.data)


  }

)},[])

console.log(heroes)

  return(
    <ListHeroes>
        {heroes.map(hero => (
          <li>
            <figure>
              <img
               src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
               alt={hero.name}
               className="img-fluid" // Resize image on mobile
              />
            </figure>
            <span>{hero.name}</span>
            <a href="/">Detalhes</a>
        </li>
        ))}
    </ListHeroes>
  )
}