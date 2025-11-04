import { Link } from 'react-router-dom';
import { fetchResourceList } from '../api/swapi.ts';
import { RESOURCE_TYPES } from '../types/types.ts';

// const results = await fetchResourceList('planets', 1);

function HomePage() {
  return (
    <div>
      {RESOURCE_TYPES.map((resource) => (
        <Link key={resource} to={`/${resource}`} className="">
          <button>{resource}</button>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
