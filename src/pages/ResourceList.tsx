import { useNavigate, useParams } from 'react-router-dom';
import { useFetchResource } from '../hooks/useFetchResource';
import { getStarWarsId } from '../api/swapi';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ApiListResponse, ResourceType } from '../types/types'; //

type ResourceListItem = {
  name: string;
  url: string;
};

export default function ResourceList() {
  const { resourceType, pageNum } = useParams<'resourceType' | 'pageNum'>(); // Add generic to useParams
  const navigate = useNavigate();

  const pageNumber = pageNum ? Number(pageNum) : 1;

  const resource = resourceType as ResourceType | undefined;

  const { data, loading, error } = useFetchResource<
    ApiListResponse<ResourceListItem>
  >(resource, pageNumber);

  // Added type for 'url'
  const onViewDetail = (url: string) => {
    //Get id
    const id = getStarWarsId(url);
    //Load detail
    navigate(`/${resourceType}/${id}`);
  };

  //Handlers
  const handleBack = () => {
    navigate(`/home`);
  };
  // Loading/error/not found
  if (loading) {
    return <h1>LOADING...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  if (!data || !('results' in data)) {
    return (
      <>
        <h1>The requested data does not exist.</h1>
        <button onClick={handleBack}>Go back</button>
      </>
    );
  }

  // Success
  return (
    <>
      <div className="resource-list-container">
        <Header />
        <div>
          <button onClick={handleBack}>Back to Home</button>
          <h1>{resourceType?.toUpperCase()}: </h1>
          <div className="resource-container">
            {data.results.map((item) => (
              <div
                key={item.url}
                onClick={() => onViewDetail(item.url)}
                className="resource"
              >
                <h3>{item.name}  </h3>
              </div>
            ))}
          </div>
          <Pagination
            resourceType={resourceType!}
            currentPage={pageNumber}
            totalItems={data.count}
            itemsPerPage={10}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
