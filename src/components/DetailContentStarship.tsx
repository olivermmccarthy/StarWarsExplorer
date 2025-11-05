import React from 'react';
import DetailRow from './DetailRow.tsx';
import type { Starship } from '../types/types.ts';

const DetailContentStarship: React.FC<{ item: Starship }> = ({ item }) => (
  <>
    <DetailRow label="Model" value={item.model} />
    <DetailRow label="Manufacturer" value={item.manufacturer} />
    <DetailRow label="Class" value={item.starship_class} />
    <DetailRow label="Cost" value={`${item.cost_in_credits} credits`} />
    <DetailRow label="Length" value={`${item.length} m`} />
    <DetailRow label="Crew" value={item.crew} />
    <DetailRow label="Passengers" value={item.passengers} />
  </>
);

export default DetailContentStarship;
