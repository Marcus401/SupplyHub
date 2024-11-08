import React, { useState } from "react";

// Mock data structure for the form
interface AdvertisingFormData {
    lastName: string;
    firstName: string;
    email: string;
    companyName: string;
    website?: string;
    description: string;
    advertisingType: "Ad Placement" | "Product/Service Review" | "Social Media Campaign" | "Video";
    file: File | null;
}

const SellerAdvertisingForm: React.FC = () => {
    const [formData, setFormData] = useState<AdvertisingFormData>({
        lastName: "",
        firstName: "",
        email: "",
        companyName: "",
        website: "",
        description: "",
        advertisingType: "Ad Placement",
        file: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        console.log("Form data submitted: ", formData);
    };

    return (
        <div className="max-w-7xl mx-auto my-8 px-8">

            <h1 className="text-3xl font-bold text-left mb-6">Advertising Request Form</h1>

            {/* Form Container */}
            <div className="bg-white shadow-md rounded-md px-16 py-10">
                <div className="grid grid-cols-3 gap-10">
                    {/* File Upload Section */}
                    <div className="flex flex-col items-center">
                        <label className="w-52 h-52 flex items-center justify-center border-[3px] border-gray-800 rounded-xl cursor-pointer">
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
                                <div className="text-gray-400 flex flex-col items-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1092/1092216.png"
                                        alt="Upload icon"
                                        className="w-20 h-20 mb-2"
                                    />
                                    <p className="text-sm">Upload File Here</p>
                                </div>
                            )}
                        </label>
                    </div>

                    {/* Form Fields on the Right */}
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full text-lg"
                        />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full text-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full col-span-2 text-lg"
                        />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full col-span-2 text-lg"
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website (Optional)"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full col-span-2 text-lg"
                        />
                    </div>
                </div>

                {/* Description and Advertising Type */}
                <div className="grid grid-cols-3 gap-10 mt-8">
                    {/* Description Box */}
                    <div className="col-span-2">
                        <textarea
                            name="description"
                            placeholder="Describe your company"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-4 rounded-md w-full text-lg h-40"
                        ></textarea>
                    </div>

                    {/* Advertising Type */}
                    <div className="flex flex-col -space-y-3 -my-1">
                        <div className="text-gray-700 font-medium text-lg">Advertising Type</div>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="advertisingType"
                                value="Ad Placement"
                                checked={formData.advertisingType === "Ad Placement"}
                                onChange={handleInputChange}
                                className="mr-2 mt-5"
                            />
                            Ad Placement
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="advertisingType"
                                value="Product/Service Review"
                                checked={formData.advertisingType === "Product/Service Review"}
                                onChange={handleInputChange}
                                className="mr-2 mt-5"
                            />
                            Product/Service Review
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="advertisingType"
                                value="Social Media Campaign"
                                checked={formData.advertisingType === "Social Media Campaign"}
                                onChange={handleInputChange}
                                className="mr-2 mt-5"
                            />
                            Social Media Campaign
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="advertisingType"
                                value="Video"
                                checked={formData.advertisingType === "Video"}
                                onChange={handleInputChange}
                                className="mr-2 mt-5"
                            />
                            Video
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-gray-800 text-white py-4 rounded-md hover:bg-gray-900 font-semibold text-lg"
                    >
                        Send Advertising Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerAdvertisingForm;
