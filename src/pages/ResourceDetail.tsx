import { useNavigate, useParams } from 'react-router-dom';
import { useFetchResource } from '../hooks/useFetchResource';
import type {
  Person,
  Planet,
  ResourceItem,
  ResourceType,
  Species,
  Starship,
  Vehicle,
} from '../types/types';
import DetailContentPerson from '../components/DetailContentPerson';
import DetailContentPlanet from '../components/DetailContentPlanet';
import DetailContentStarship from '../components/DetailContentStarship';
import DetailContentVehicle from '../components/DetailContentVehicle';
import DetailContentSpecies from '../components/DetailContentSpecies';
import Header from '../components/Header';

export default function ResourceDetail() {
  const { resourceType, id } = useParams();
  const strId = id ? String(id) : undefined;
  const navigate = useNavigate();

  const { data, loading, error } = useFetchResource(
    resourceType as ResourceType,
    strId
  );
  //Handlers
  const handleBack = () => {
    navigate(`/${resourceType}`);
  };
  const handleBackToHome = () => {
    navigate(`/home`);
  };

  // Loading/error/not found
  if (loading) {
    return <h1>LOADING...</h1>;
  }
  if (error) {
    // return <ErrorMessage message={`Failed to fetch details for ${resourceType} ID ${id}.`}
    return <h1>Error</h1>;
  }
  if (!data) {
    return (
      <>
        <h1>The requested data with ID {id} does not exist.</h1>
        {/* <Button>Go back</Button> */}
        <button onClick={handleBack}></button>
      </>
    );
  }

  // Cast to specific type for rendering
  const item = data as ResourceItem;

  //Success
  return (
    <>
      <Header />
      <div className="button-container">
        <button onClick={handleBackToHome}>Back to Home</button>
        <button onClick={handleBack}>Back to {resourceType}</button>
      </div>
      <div className="detail-container">
        <div>
          <h3>{item.name}</h3>
          {/* Render details based on type */}
          {'height' in item && (item as Person).height && (
            <DetailContentPerson item={item as Person} />
          )}
          {'population' in item && (item as Planet).population && (
            <DetailContentPlanet item={item as Planet} />
          )}
          {'model' in item && (item as Starship).starship_class && (
            <DetailContentStarship item={item as Starship} />
          )}
          {'model' in item && (item as Vehicle).vehicle_class && (
            <DetailContentVehicle item={item as Vehicle} />
          )}
          {'classification' in item && (item as Species).classification && (
            <DetailContentSpecies item={item as Species} />
          )}
        </div>
      </div>
    </>
  );
}
