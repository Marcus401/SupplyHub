import React, { useEffect, useRef, useState } from "react";
import product_image from "../../../assets/upload_image_placeholder.png";
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../../api/product.tsx";

interface FAQ {
  question: string;
  answer: string;
}

const SellerEditProductForm = () => {
  const { product_id } = useParams();
  
  function base64ToFile(base64: string, fileName: string, mimeType: string): File {
    // Decode Base64 string to binary string
    const binaryString = atob(base64);

    // Convert binary string to Uint8Array
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    // Create and return the File object
    return new File([byteArray], fileName, { type: mimeType });
  }
  

  useEffect(() => {
    document.title = "Edit Product";
    if (!product_id) {
      return;
    }
    const id = parseInt(product_id);
    fetchProduct(id).then((product) => {
      if (!product) {
        return;
      }
      setProductName(product.productName);
      if(product.productType) setCategory(product.productType);
      if(product.stockAvailable) setStock(product.stockAvailable);
      if(product.timeFrame) setStockUnit(product.timeFrame);
      if(product.unit) setPriceUnit(product.unit);
      if(product.description)setDescription(product.description);
      setImageFile(product.thumbnail ? base64ToFile(product.thumbnail.toString(), "thumbnail", "image/png") : null);

      setPrice(product.price);
      if (!product.faqQuestions || !product.faqAnswers) return;
      setFaqs(
          product.faqQuestions.map((question, index) => ({
            question,
            answer: product.faqAnswers![index],
          }))
      );

    });
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // here
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
    const files = e.target.files;
    if (files) {
      setImageList([...imageList, files[0]]);
    }
  };
  const removeImageFromList = (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index);
    setImageList(newImageList);
  };

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const hasEmptyFields = [
      productName,
      category,
      stock,
      stockUnit,
      price,
      priceUnit,
      description,
    ].some((variable) => variable === "" || variable === 0);
    const isImageFileNull = imageFile === null;
    setFailedSubmission(hasEmptyFields || isImageFileNull);
  };
  const handleAddImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // FAQ Management

  const addFaq = () => {
    if (faqQuestion && faqAnswer) {
      setFaqs([...faqs, { question: faqQuestion, answer: faqAnswer }]);
      setFaqQuestion("");
      setFaqAnswer("");
    }
  };

  const removeFaq = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const toggleFaq = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div className="grid w-full md:grid-rows-[50px_auto] md:grid-cols-[240px_auto] gap-x-2 mx-2 ">
      <div className="row-start-1 justify-between items-center md:col-span-4">
        <h3 className="text-3xl overflow-hidden text-ellipsis line-clamp-1 whtespace-nowrap truncate my-4 ml-5 font-bold">
          Edit Product
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
          value={productName}
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          onChange={handleProductNameChange}
        />
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
          value={category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
      </div>
      <div className="row-start-5 md:row-start-4 col-start-1 md:col-start-2 lg:row-start-3 lg:col-start-3">
        <label htmlFor="stock" className="text-sm font-semibold">
          Stock
        </label>
        <input
          onChange={handleStockChange}
          type="number"
          value={stock}
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
          value={stockUnit}
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
          <p className=" text-lg">₱</p>
          <input
            onChange={handlePriceChange}
            min="0"
            value={price}
            step="100"
            type="number"
            id="price"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
        </div>
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
          value={priceUnit}
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
          <div className="">
            <label htmlFor="description" className="text-sm font-semibold">
              Description
            </label>
            <textarea
                onChange={handleDescriptionChange}
                value={description}
                id="description"
                className="w-full p-2 border border-gray-300 rounded-lg mb-2  h-[10rem]"
            />
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

                    {/* Remove FAQ Button */}
                    <button
                        onClick={() => removeFaq(index)}
                        className="mt-2 text-red-500 text-sm font-semibold hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
              ))}
            </div>
          </div>
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

            <button
                onClick={addProduct}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Publish
            </button>
          </div>

          <div className="flex-col mb-4">
            {imageList.map((image, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
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
    </div>
  );
};

export default SellerEditProductForm;
