import React from 'react';
import DetailRow from './DetailRow.tsx';
import type { Planet } from '../types/types.ts';

const DetailContentPlanet: React.FC<{ item: Planet }> = ({ item }) => (
  <>
    <DetailRow label="Population" value={item.population} />
    <DetailRow label="Terrain" value={item.terrain} />
    <DetailRow label="Climate" value={item.climate} />
    <DetailRow label="Diameter" value={`${item.diameter} km`} />
    <DetailRow label="Gravity" value={item.gravity} />
    <DetailRow label="Orbital Period" value={`${item.orbital_period} days`} />
    <DetailRow
      label="Rotation Period"
      value={`${item.rotation_period} hours`}
    />
  </>
);

export default DetailContentPlanet;
