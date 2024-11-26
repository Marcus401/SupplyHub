import React, { useEffect, useRef, useState } from "react";
import product_image from "../../../assets/upload_image_placeholder.png";
import {ProductRequestDto} from "../../../Dtos/Seller/ProductRequestDto.ts";

type Props = {};

interface FAQ {
  question: string;
  answer: string;
}

const SellerAddProductForm = (props: Props) => {
  useEffect(() => {
    document.title = "Add Product";
  }, []);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [productName, setProductName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [stockUnit, setStockUnit] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [priceUnit, setPriceUnit] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [failedSubmission, setFailedSubmission] = useState<boolean>(false);
  const [imageList, setImageList] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [faqQuestion, setFaqQuestion] = useState<string>("");
  const [faqAnswer, setFaqAnswer] = useState<string>("");
  const [isAddProductVisible, setIsAddProductVisible] = useState<boolean>(true);

  const [errors, setErrors] = useState({
    productName: false,
    category: false,
    stock: false,
    stockUnit: false,
    price: false,
    priceUnit: false,
    description: false,
    image: false,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(parseInt(e.target.value));
  };

  const handleStockUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStockUnit(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };

  const handlePriceUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceUnit(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const addToImageListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imageList.length < 8) {
      const files = e.target.files;
      if (files) {
        setImageList([...imageList, files[0]]);
      }
    }
  };

  const removeImageFromList = (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index);
    setImageList(newImageList);
  };

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    

    // Check for empty fields and set errors accordingly
    const newErrors = {
      productName: productName === "",
      category: category === "",
      stock: stock === 0,
      stockUnit: stockUnit === "",
      price: price === 0,
      priceUnit: priceUnit === "",
      description: description === "",
      image: imageFile === null,
    };
    
    setErrors(newErrors);
    
    const hasEmptyFields = Object.values(newErrors).includes(true);
    if (hasEmptyFields) {
      setFailedSubmission(true); // Optionally, you can use this state to show a global failure message
    } else {
      setFailedSubmission(false);
    }
    
    const newProduct: ProductRequestDto = {
      productName,
      productType: category,
      stockAvailable: stock,
      price,
      unit: priceUnit,
      timeframe: stockUnit,
      description,
      faqQuestions: faqs.map((faq) => faq.question),
      faqAnswers: faqs.map((faq) => faq.answer),
    };
    
    
  };

  const handleAddImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // FAQ Management
  const handleAddToFaqClick = () => {
    setIsAddProductVisible(false); // Hide the Add Product form and show FAQ section
  };

  const handleBackToForm = () => {
    setIsAddProductVisible(true); // Show the product form again
  };

  const addFaq = () => {
    if (faqQuestion && faqAnswer) {
      setFaqs([...faqs, { question: faqQuestion, answer: faqAnswer }]);
      setFaqQuestion("");
      setFaqAnswer("");
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    /* Add A Product Form */
    <div className="grid w-full md:grid-rows-[50px_auto] md:grid-cols-[240px_auto] gap-x-2 mx-2">
      <div className="row-start-1 justify-between items-center md:col-span-4">
        <h3 className="text-3xl overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap truncate my-4 ml-5 font-bold">
          Add a Product
        </h3>
      </div>

      <div className="flex justify-center md:justify-start md:flex-col row-start-2 md:row-span-3 row-span-1 md:col-start-1 mx-2 my-2">
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .jfif"
          className="hidden"
          id="imageUpload"
          onChange={handleImageChange}
        />
        <label htmlFor="imageUpload">
          <img
            src={imageFile ? URL.createObjectURL(imageFile) : product_image}
            alt="product image"
            className="w-[200px] h-[200px] rounded-2xl row-span-3 row-start-1 col-start-1 mx-4 mt-2 cursor-pointer"
          />
        </label>
      </div>

      <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-2 lg:row-start-2 lg:col-span-2 lg:col-start-2">
        <label htmlFor="product-name" className="text-sm font-semibold">
          Product Name
        </label>
        <input
          type="text"
          className={`w-full p-2 border ${
            errors.productName ? "border-red-500" : "border-gray-300"
          } rounded-lg mb-2`}
          onChange={handleProductNameChange}
        />
        {errors.productName && (
          <p className="text-red-500 text-sm">Product name is required.</p>
        )}
      </div>

      <div className="row-start-4 md:row-start-3 col-start-1 md:col-start-2 lg:row-start-3 lg:col-start-2">
        <label
          htmlFor="comboBox"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="comboBox"
          onChange={handleCategoryChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.category ? "border-red-500" : "border-gray-300"
          } shadow-sm`}
        >
          <option value="Option 1">Food & Drinks</option>
          <option value="Option 2">Hygiene</option>
          <option value="Option 3">Clothing & Accesories</option>
          <option value="Option 4">Make-up & Skincare</option>
          <option value="Option 5">Hardware Supplies</option>
          <option value="Option 6">Computer Parts</option>
          <option value="Option 7">Furniture</option>
          <option value="Option 8">Art Supplies</option>
          <option value="Option 9">Pet Supplies</option>
          <option value="Option 10">Toys</option>
          <option value="Option 11">Books</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">Category is required.</p>
        )}
      </div>

      <div className="row-start-5 md:row-start-4 col-start-1 md:col-start-2 lg:row-start-3 lg:col-start-3">
        <label htmlFor="stock" className="text-sm font-semibold">
          Stock
        </label>
        <input
          onChange={handleStockChange}
          type="number"
          id="stock"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
        />
      </div>

      <div className="row-start-6 md:row-start-5 col-start-1 md:col-span-2 lg:row-start-3 lg:col-start-4 lg:col-span-3">
        <label
          htmlFor="comboBox"
          className="block text-sm font-medium text-gray-700"
        >
          Time Period
        </label>
        <select
          id="comboBox"
          onChange={handleStockUnitChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Option 1">Weekly</option>
          <option value="Option 2">Forthnightly</option>
          <option value="Option 3">Monthly</option>
          <option value="Option 4">Quarterly</option>
          <option value="Option 5">Semi-Annually</option>
          <option value="Option 6">Annually</option>
        </select>
      </div>

      <div className="row-start-7 md:row-start-6 col-start-1 md:col-span-2 lg:row-start-4 lg:col-start-2 lg:col-span-1">
        <label htmlFor="price" className="text-sm font-semibold">
          Price
        </label>
        <div className="flex items-center space-x-2">
          <p className="text-lg">₱</p>
          <input
            onChange={handlePriceChange}
            min="0"
            step="100"
            type="number"
            id="price"
            className={`w-full p-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-lg mb-2`}
          />
        </div>
        {errors.price && (
          <p className="text-red-500 text-sm">Price is required.</p>
        )}
      </div>

      <div className="row-start-8 md:row-start-7 col-start-1 md:col-span-2 lg:row-start-4 lg:col-start-3 lg:col-span-1">
        <label
          htmlFor="comboBox"
          className="block text-sm font-medium text-gray-700"
        >
          Per ???
        </label>
        <select
          id="comboBox"
          onChange={handlePriceUnitChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Option 1">Pre-unit</option>
          <option value="Option 2">Kilogram</option>
          <option value="Option 3">Gallon</option>
          <option value="Option 4">Dozen </option>
        </select>
      </div>

      <div className="row-start-9 md:row-start-8 col-start-1 md:col-span-2 lg:row-start-5 lg:col-span-6 relative h-[calc(12rem+60px)] lg:ml-8">
        <div className="flex-col">
          <div className="row-start-9 md:row-start-8 col-start-1 md:col-span-2 lg:row-start-5 lg:col-span-6 relative h-[calc(12rem+60px)] lg:-inset-3ml-1">
            <div className="flex-col">
              <div className="">
                <label htmlFor="description" className="text-sm font-semibold">
                  Description
                </label>
                <textarea
                  onChange={handleDescriptionChange}
                  id="description"
                  className={`w-full p-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-lg mb-2 h-[10rem]`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    Description is required.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">
              Frequently Asked Questions
            </h4>
            <div className="mb-4">
              <input
                type="text"
                value={faqQuestion}
                onChange={(e) => setFaqQuestion(e.target.value)}
                placeholder="Enter question"
                className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              />
              <input
                type="text"
                value={faqAnswer}
                onChange={(e) => setFaqAnswer(e.target.value)}
                placeholder="Enter answer"
                className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              />
              <button
                onClick={addFaq}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add to FAQ
              </button>
            </div>

            {/* Render FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-3 shadow-sm"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <p
                      className={`font-medium ${
                        expandedIndex === index
                          ? "text-blue-500"
                          : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </p>
                    <button className="text-blue-500 font-bold text-xl">
                      {expandedIndex === index ? "-" : "+"}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image and Publish Button Section */}
          <div className="flex justify-between items-center mb-6">
            {/* Add Image Button */}
            <button
              onClick={handleAddImageButtonClick}
              className="bg-white border-2 border-gray-800 rounded-lg flex items-center space-x-2 p-2 hover:bg-gray-100"
            >
              <input
                type="file"
                accept=".png, .jpg, .jpeg, .jfif"
                className="hidden"
                id="imageUpload"
                onChange={addToImageListChange}
                ref={fileInputRef}
              />
              <span>Add Image {imageList.length} / 8</span>
            </button>

            {/* Publish Button */}
            <button
              onClick={addProduct}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="row-start-12 md:row-start-12 col-start-1 md:col-span-2 lg:row-start-7 lg:col-span-3 relative lg:ml-8">
        <div className="flex-col">
          {imageList.map((image, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={URL.createObjectURL(image)}
                alt="product image"
                className="w-[100px] h-[100px] rounded-2xl"
              />
              <button
                onClick={() => removeImageFromList(index)}
                className="flex no-underline rounded-lg lg:w-[120px] lg:h-[35px] justify-center items-center w-[120px] h-[40px]"
              >
                <h6 className="lg:text-md text-sm overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap text-red-700">
                  Remove Image
                </h6>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerAddProductForm;
