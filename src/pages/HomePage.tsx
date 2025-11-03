import { fetchResourceList } from '../api/swapi.ts';

const results = await fetchResourceList('planets', 1);

function HomePage() {
  console.log(results.results[0]);
  return (
    <div>
      <p>{results.results[0].name}</p>
    </div>
  );
}

export default HomePage;
