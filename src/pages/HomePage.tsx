import { Link, useNavigate } from 'react-router-dom';
import { RESOURCE_TYPES } from '../types/types.ts';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <button onClick={() => navigate('/')}>Back to Intro</button>
      <div className="menu-container">
        {RESOURCE_TYPES.map((resource) => (
          <Link key={resource} to={`/${resource}`} className="">
            <button className="resource">{resource}</button>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
