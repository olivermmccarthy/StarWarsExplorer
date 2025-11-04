import React from 'react';
import type { Person } from '../types/types.ts';
import DetailRow from './DetailRow.tsx';

const DetailContentPerson: React.FC<{ item: Person }> = ({ item }) => (
  <>
    <DetailRow label="Height" value={`${item.height} cm`} />
    <DetailRow label="Mass" value={`${item.mass} kg`} />
    <DetailRow label="Gender" value={item.gender} />
    <DetailRow label="Birth Year" value={item.birth_year} />
    <DetailRow label="Eye Color" value={item.eye_color} />
    <DetailRow label="Hair Color" value={item.hair_color} />
    <DetailRow label="Skin Color" value={item.skin_color} />
  </>
);

export default DetailContentPerson;
