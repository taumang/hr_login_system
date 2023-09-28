// FilterBox.tsx
import React, { useState } from 'react';

const FilterBox: React.FC = () => {
  const [showStatus] = useState(true);
  const [showDepartment] = useState(true);
  const [showManager] = useState(true);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow">
      <h5 className="text-lg font-semibold mb-4">Filter</h5>
      {showStatus && (
        <div className="mb-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          {/* Add your Status dropdown input here */}
        </div>
      )}
      {showDepartment && (
        <div className="mb-2">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Department
          </label>
          {/* Add your Department dropdown input here */}
        </div>
      )}
      {showManager && (
        <div className="mb-2">
          <label htmlFor="manager" className="block text-sm font-medium text-gray-700">
            Manager
          </label>
          {/* Add your Manager dropdown input here */}
        </div>
      )}
      {/* Add other filter options here */}
    </div>
  );
};

export default FilterBox;
