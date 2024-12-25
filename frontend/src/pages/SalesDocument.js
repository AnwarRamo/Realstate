import React, { useState } from 'react';

function AddProperties() {
  const [formData, setFormData] = useState({
    transactionType: '',
    property: '', 
    customer: '',
    rentalPrice: '',
    leaseTerm: '',
    leaseStartDate: '',
    leaseEndDate: '',
    salePrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:4000/property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Property added successfully');
      } else {
        alert('Failed to add property');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding property');
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg py-36">
      <h1 className="text-2xl font-bold mb-6 text-[#1F4B43]">
        Add Property<span className="text-2xl font-bold text-[#E7C873]"> Form</span>
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">
            Transaction Type
          </label>
          <select
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
            required
          >
            <option value="" disabled>
              Select Transaction Type
            </option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>

        {formData.transactionType === 'rent' && (
          <>
            <div>
              <label htmlFor="rentalPrice" className="block text-sm font-medium text-gray-700">
                Rental Price
              </label>
              <input
                type="number"
                name="rentalPrice"
                value={formData.rentalPrice}
                onChange={handleChange}
                placeholder="Enter Rental Price"
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="leaseTerm" className="block text-sm font-medium text-gray-700">
                Lease Term
              </label>
              <textarea
                name="leaseTerm"
                value={formData.leaseTerm}
                onChange={handleChange}
                placeholder="Enter Lease Term"
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
                rows="4"
                required
              />
            </div>
            <div>
              <label htmlFor="leaseStartDate" className="block text-sm font-medium text-gray-700">
                Lease Start Date
              </label>
              <input
                type="date"
                name="leaseStartDate"
                value={formData.leaseStartDate}
                onChange={handleChange}
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="leaseEndDate" className="block text-sm font-medium text-gray-700">
                Lease End Date
              </label>
              <input
                type="date"
                name="leaseEndDate"
                value={formData.leaseEndDate}
                onChange={handleChange}
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
                required
              />
            </div>
          </>
        )}

        {formData.transactionType === 'sale' && (
          <div>
            <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
              Sale Price
            </label>
            <input
              type="number"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              placeholder="Enter Sale Price"
              className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-[#E7C873] hover:bg-yellow-500 text-[#1F4B43] font-bold py-2 px-40 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProperties;
