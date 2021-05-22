import React from 'react';
import { ListHeroes } from './ListHeroisStyles';

import hero from '../../assets/vingadores.jpg'

export default function listHerois() {
  return(
    <ListHeroes>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
      <li>
        <figure>
          <img src={hero} alt='hero' />
        </figure>
        <span>Name Hero</span>
      </li>
    </ListHeroes>
  )
}