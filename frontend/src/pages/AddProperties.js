import React, { useState } from 'react';
// import { Footer } from '../components';
import Input from '../components/Input';

function AddProperties() {
  const [formData, setFormData] = useState({
    city: '',
    region: '',
    address: '',
    propType: '',
    operationType: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    numberOfRooms: '',
    description: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: Array.from(files), // تحويل الملفات إلى مصفوفة
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");  // تحقق من تنفيذ الدالة

    // التحقق من الحقول المطلوبة
    const requiredFields = ['city', 'region', 'address', 'propType', 'operationType', 'price', 'bedrooms', 'bathrooms', 'size', 'description'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill out the ${field} field`);
        return; // التوقف عن الإرسال إذا كانت هناك حقول فارغة
      }
    }

    // بناء البيانات وإرسالها
    const data = new FormData();
    data.append('City', formData.city);
    data.append('region', formData.region);
    data.append('Address', formData.address);
    data.append('propType', formData.propType);
    data.append('operation', formData.operationType);
    data.append('Price', formData.price);
    data.append('Bedrooms', formData.bedrooms);
    data.append('Bathrooms', formData.bathrooms);
    data.append('squaremeter', formData.size);
    data.append('Description', formData.description);

    // إضافة الصور إلى البيانات المرسلة
    formData.images.forEach((file) => {
      data.append('images', file);
    });

    const token = localStorage.getItem('token');
    if (!token) {
      alert("No token found, please log in.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/properties/createProperty', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (response.ok) {
        alert('Property added successfully');
      } else {
        const errorData = await response.json();
        alert(`Failed to add property: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding property');
    }
  };

  return (
    <>
      <div className="container mx-auto p-8 bg-white shadow-md rounded-lg py-36">
        <h1 className="text-2xl font-bold mb-6 text-[#1F4B43]">
          Let's Add Your <span className="text-2xl font-bold text-[#E7C873]">Apartments</span>
        </h1>
        <form className="flex flex-col md:flex-row gap-20" onSubmit={handleSubmit}>
          {/* First Section */}
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="damascus">Damascus</option>
                <option value="aleppo">Aleppo</option>
                <option value="homs">Homs</option>
                <option value="hama">Hama</option>
                <option value="latakia">Latakia</option>
                <option value="tartus">Tartus</option>
                <option value="draa">Draa</option>
              </select>
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region
              </label>
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Enter Region"
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              />
            </div>

            <div>
              <label htmlFor="propType" className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                name="propType"
                value={formData.propType}
                onChange={handleChange}
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <div>
              <label htmlFor="operationType" className="block text-sm font-medium text-gray-700">
                Operation Type
              </label>
              <select
                name="operationType"
                value={formData.operationType}
                onChange={handleChange}
                className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873] w-full"
              >
                <option value="" disabled>
                  Select Operation Type
                </option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </select>
            </div>
 
            <input
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873]"
            />
          

            <input
              label="Bedrooms"
              name="bedrooms"
              type="number"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Number of bedrooms"
              className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873]"
            />
            
            <input
              label="Bathrooms"
              name="bathrooms"
              type="number"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Number of bathrooms"
              className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873]"
            />
          </div>

          {/* Second Section */}
          <div className="flex-1 space-y-4">
            <input
              label="Size"
              name="size"
              type="number"
              value={formData.size}
              onChange={handleChange}
              placeholder="Enter Size in m²"
              className="border-2 border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#E7C873]"
            />
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#1F4B43]">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the property"
                className="w-full border-2 border-dashed border-gray-400 rounded-lg p-2 text-gray-700 focus:outline-none focus:border-[#E7C873]"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#1F4B43]">Upload Image/Video</label>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleChange}
                className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-24">
          <button
            onClick={handleSubmit}
            className="bg-[#1F4B43] text-white font-semibold py-2 px-8 rounded-md text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProperties;
