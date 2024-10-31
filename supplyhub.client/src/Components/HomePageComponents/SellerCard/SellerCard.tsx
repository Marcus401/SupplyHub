import company_logo from "../../../assets/default-placeholder.png";
type Props = {};

const SellerCard = (props: Props) => {
  return (
    <div className="w-full max-w-[1000px] mx-auto p-4 flex items-center bg-white shadow-lg rounded-lg hover:bg-gray-50">
      <div className="w-[100px] h-[100px] bg-gray-200 rounded-lg overflow-hidden">
        <img src={company_logo} className="w-full h-full object-cover" />
      </div>
      <div className="ml-6 flex flex-col justify-between">
        <h1 className="text-lg font-semibold mb-0">Company Name</h1>
        <p className="text-sm text-gray-600 m-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          sit, qui itaque nemo totam asperiores earum quaerat optio.
        </p>
        <button className="mt-2 bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800 w-max h-9">
          Inquire
        </button>
      </div>
    </div>
  );
};

export default SellerCard;
