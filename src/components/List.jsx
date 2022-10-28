import { people } from "./data";
import { getImageUrl } from './utils.jsx';
function List(){
    const chemist=people.filter(person => person.profession==="chemist")
    const nonChemist=people.filter(person => person.profession !== "chemist")
    const chemistList=chemist.map(
        person => 
        <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
             <b>{person.name}:</b>
             {' ' + person.profession + ' '}
             known for {person.accomplishment}
            </p>
        </li>
        )
    const nonChemistList=nonChemist.map(
        person =>
        <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
             <b>{person.name}:</b>
             {' ' + person.profession + ' '}
             known for {person.accomplishment}
            </p>
        </li>
    )
    return(
        <ul>
            <h1>Chemist</h1>
            {chemistList}
            <h1> Every one else</h1>
            {nonChemistList}
        </ul>
    )
}

export default List;