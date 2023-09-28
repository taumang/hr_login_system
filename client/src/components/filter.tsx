// FilterBox.tsx
import React, { useState } from 'react';
import axios from 'axios';

const FilterBox: React.FC = () => {
  const [showStatus, setShowStatus] = useState(true);
  const [showDepartment, setShowDepartment] = useState(true);
  const [showManager, setShowManager] = useState(true);

  const getDepartments = async () => {
    try {
      const response = await axios.get('/api/department'); 
      console.log(response.data);
      setShowStatus(response.data.showStatus);
      setShowDepartment(response.data.showDepartment);
      setShowManager(response.data.showManager);  
    } catch (error) {
      console.error('Error in fetching the departments:', error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow">
      <h5 className="text-lg font-semibold mb-4">Filter</h5>
      {showStatus && (
        <div className="mb-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          
        </div>
      )}
      {showDepartment && (
        <div className="mb-2">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Department
          </label>
          
        </div>
      )}
      {showManager && (
        <div className="mb-2">
          <label htmlFor="manager" className="block text-sm font-medium text-gray-700">
            Manager
          </label>
          
        </div>
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={getDepartments}>Filter</button>
    </div>
  );
};

export default FilterBox;
