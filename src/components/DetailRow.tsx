import React from 'react';

const DetailRow: React.FC<{ label: string; value: string | undefined }> = ({
  label,
  value,
}) => (
  <div className="">
    <span className="">{label}</span>
    <span className="">{value || 'n/a'}</span>
  </div>
);

export default DetailRow;
