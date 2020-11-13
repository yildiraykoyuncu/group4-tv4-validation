// fetch('/api')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.getElementById('root')
//       .innerHTML = data.message;
//   })
//   .catch(err => console.error(err));

import {List} from './list.js'
import {Place} from './place.js'

const placeList = new List(Place, '/api/places');


