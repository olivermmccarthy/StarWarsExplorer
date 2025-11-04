import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchResource } from '../hooks/useFetchResource';
import { getStarWarsId } from '../api/swapi';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function ResourceList() {
  const { resourceType, pageNum } = useParams();
  const navigate = useNavigate();

  const pageNumber = pageNum ? Number(pageNum) : 1;

  const { data, loading, error } = useFetchResource(resourceType, pageNumber);

  const onViewDetail = (url) => {
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
    // return <ErrorMessage message={`Failed to fetch details for ${resourceType} ID ${id}.`}
    return <h1>Error</h1>;
  }
  if (!data) {
    return (
      <>
        <h1>The requested data does not exist.</h1>
        {/* <Button>Go back</Button> */}
        <button onClick={handleBack}></button>
      </>
    );
  }

  //Success
  return (
    <div className="resource-list-container">
      <Header />
      <div>
        <button onClick={handleBack}>Back to Home</button>
        <h1>{resourceType?.toUpperCase()}: </h1>
        <div className="resource-container">
          {data.results.map((item) => (
            <div
              key={item.url}
              onClick={() => onViewDetail(getStarWarsId(item.url))}
              className="resource"
            >
              <h3>{item.name}</h3>
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
  );
}
