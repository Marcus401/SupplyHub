import React, { useState } from "react";

// Mock data structure for the form
interface AdvertisingFormData {
    email: string;
    companyName: string;
    website?: string;
    productLink: string;
    caption: string;
    file: File | null;
}

const SellerAdvertisingForm: React.FC = () => {
    const [formData, setFormData] = useState<AdvertisingFormData>({
        email: "",
        companyName: "",
        website: "",
        productLink: "",
        caption: "",
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
        <div className="max-w-4xl mx-auto my-8 px-8">
            <h1 className="text-3xl font-bold text-left mb-6">Advertising Request Form</h1>

            {/* Form Container */}
            <div className="bg-white shadow-md rounded-md px-12 py-8">
                <div className="grid grid-cols-3 gap-8">
                    {/* File Upload Section */}
                    <div className="flex flex-col items-center">
                        <label className="w-48 h-48 flex items-center justify-center border-[3px] border-gray-600 rounded-xl cursor-pointer">
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
                                <div className="text-gray-600 flex flex-col items-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1092/1092216.png"
                                        alt="Upload icon"
                                        className="w-16 h-16 mb-2"
                                    />
                                    <p className="text-sm">Upload File Here</p>
                                </div>
                            )}
                        </label>
                    </div>

                    {/* Form Fields on the Right */}
                    <div className="col-span-2 grid grid-cols-2 gap-1 gap-x-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-2 border-gray-500 p-4 rounded-md w-full text-base h-12"
                        />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="border-2 border-gray-500 p-4 rounded-md w-full text-base h-12"
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website (Optional)"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="border-2 border-gray-500 p-4 rounded-md w-full text-base h-12"
                        />
                        <input
                            type="text"
                            name="productLink"
                            placeholder="Product Link"
                            value={formData.productLink}
                            onChange={handleInputChange}
                            className="border-2 border-gray-500 p-4 rounded-md w-full text-base h-12"
                        />
                        <textarea
                            name="caption"
                            placeholder="Advertisement Caption"
                            value={formData.caption}
                            onChange={handleInputChange}
                            className="border-2 border-gray-500 p-4 rounded-3xl w-80 text-lg h-32 col-span-2"
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 font-semibold base"
                    >
                        Send Advertising Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerAdvertisingForm;
