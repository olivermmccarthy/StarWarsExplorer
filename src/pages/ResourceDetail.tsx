import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchResource } from '../hooks/useFetchResource';

export default function ResourceDetail() {
  const { resourceType, id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchResource(resourceType, id);

  //Handlers
  const handleBack = () => {
    navigate(`/${resourceType}`);
  };
  // Loading/error/not found
  if (loading) {
    return <h1>LOADING SPINNER</h1>;
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

  //Success
  return (
    <>
      <button onClick={handleBack}></button>
      <h1>RESOURCE: </h1>
      <p>{data}</p>
    </>
  );
}
