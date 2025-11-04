import React from 'react';
import DetailRow from './DetailRow.tsx';
import type { Species } from '../types/types.ts';

const DetailContentSpecies: React.FC<{ item: Species }> = ({ item }) => (
  <>
    <DetailRow label="Classification" value={item.classification} />
    <DetailRow label="Designation" value={item.designation} />
    <DetailRow label="Language" value={item.language} />
    <DetailRow label="Avg Height" value={`${item.average_height} cm`} />
    <DetailRow label="Avg Lifespan" value={`${item.average_lifespan} years`} />
    <DetailRow label="Skin Colors" value={item.skin_colors} />
    <DetailRow label="Hair Colors" value={item.hair_colors} />
    <DetailRow label="Eye Colors" value={item.eye_colors} />
  </>
);

export default DetailContentSpecies;
