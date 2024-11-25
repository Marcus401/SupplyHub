import React, { useState } from "react";

// Data structure for the form
interface AdvertisingFormData {
  email: string;
  companyName: string;
  website?: string;
  productLink: string;
  caption: string;
  monthlyBudget: number; // Added budget field
  file: File | null;
}

const SellerAdvertisingForm: React.FC = () => {
  const [formData, setFormData] = useState<AdvertisingFormData>({
    email: "",
    companyName: "",
    website: "",
    productLink: "",
    caption: "",
    monthlyBudget: 0, // Initialize monthly budget
    file: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        file: files[0],
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
    alert("Advertising request submitted!");
  };

  return (
    <div className="flex justify-start px-6 py-8">
      <div className="max-w-[1300px] w-full bg-white shadow-md rounded-md p-8 ml-12">
        <h1 className="text-2xl font-bold mb-6">Advertising Request Form</h1>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* File Upload */}
          <div className="flex flex-col items-center">
            <label className="w-48 h-48 flex items-center justify-center border-2 border-gray-400 rounded-xl cursor-pointer hover:border-wh">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              {formData.file ? (
                <img
                  src={URL.createObjectURL(formData.file)}
                  alt="Uploaded file"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-600">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1092/1092216.png"
                    alt="Upload icon"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm">Upload File Here</p>
                </div>
              )}
            </label>
          </div>

          {/* Form Fields */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-4 rounded-md w-[366px] h-[52px] bg-white focus:bg-white focus:border-white focus:outline-none hover:bg-white placeholder-gray-500"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-4 rounded-md w-[366px] h-[52px] bg-white focus:bg-white focus:border-white focus:outline-none hover:bg-white placeholder-gray-500"
            />
            <input
              type="text"
              name="website"
              placeholder="Website (Optional)"
              value={formData.website}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-4 rounded-md w-[366px] h-[52px] bg-white focus:bg-white focus:border-white focus:outline-none hover:bg-white placeholder-gray-500"
            />
            <input
              type="text"
              name="productLink"
              placeholder="Product Link"
              value={formData.productLink}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-4 rounded-md w-[366px] h-[52px] bg-white focus:bg-white focus:border-white focus:outline-none hover:bg-white placeholder-gray-500"
            />
            <textarea
              name="caption"
              placeholder="Advertisement Caption"
              value={formData.caption}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-4 rounded-md w-full focus:bg-white focus:border-white focus:outline-none col-span-2 resize-none h-40 hover:bg-white placeholder-gray-500"
            ></textarea>

            {/* Monthly Budget at Currency Sign */}
            <div className="relative w-[366px] flex items-center">
              <p className="relative text-4xl text-black">₱</p>
              <input
                type="number"
                name="monthlyBudget"
                placeholder="Monthly Allocated Budget"
                value={formData.monthlyBudget}
                onChange={handleInputChange}
                className="border-2 border-gray-400 ml-4 p-4 pl-8 rounded-md w-full h-[52px] bg-white focus:bg-white focus:border-white focus:outline-none placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold transition"
          >
            Send Advertising Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerAdvertisingForm;
