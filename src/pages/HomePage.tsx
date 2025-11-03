import { Link } from 'react-router-dom';
import { fetchResourceList } from '../api/swapi.ts';
import { RESOURCE_TYPES } from '../types/types.ts';

const results = await fetchResourceList('planets', 1);

function HomePage() {
  console.log(results.results[0]);
  return (
    <div>
      {/* <button>People</button>
      <button>Planets</button>
      <button>Species</button>
      <button>StarShips</button>
      <button>Vehicles</button> */}
      {RESOURCE_TYPES.map((resource) => (
        <Link key={resource} to={`/${resource}`} className="">
          <button>{resource}</button>
        </Link>
      ))}
      ;
    </div>
  );
}

export default HomePage;
