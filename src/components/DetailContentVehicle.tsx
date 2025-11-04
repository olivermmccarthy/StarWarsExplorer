import React from 'react';
import DetailRow from './DetailRow.tsx';
import type { Vehicle } from '../types/types.ts';

const DetailContentVehicle: React.FC<{ item: Vehicle }> = ({ item }) => (
  <>
    <DetailRow label="Model" value={item.model} />
    <DetailRow label="Manufacturer" value={item.manufacturer} />
    <DetailRow label="Class" value={item.vehicle_class} />
    <DetailRow label="Cost" value={`${item.cost_in_credits} credits`} />
    <DetailRow label="Length" value={`${item.length} m`} />
    <DetailRow label="Crew" value={item.crew} />
    <DetailRow label="Passengers" value={item.passengers} />
  </>
);

export default DetailContentVehicle;
