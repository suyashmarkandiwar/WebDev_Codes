import { getImageUrl }  from './utils'
import { people } from './data'

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person => {
    // FIX 1: Add key={person.id} here
    // FIX 2: Use <li> as the wrapper, not <ul>
    return(
      <li key={person.id} className="person-card">
        <img src={getImageUrl(person)} alt={person.name} />
        <p><b>ID:</b> {person.id}</p>
        <p><b>Name:</b> {person.name}</p>
        <p><b>Profession:</b> {person.profession}</p>
        <p><b>Accomplishment:</b> {person.accomplishment}</p>
      </li>

    );
  });

  return (
    <ul>{listItems}</ul>
  );
}