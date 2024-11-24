import user_image from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";

type Props = {};

const SellerReviewCard = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-start max-w-[750px] mx-auto border border-gray-100 p-4 space-y-2 rounded-md">
        <div className="flex items-center w-full">
          <div className="max-w-[50px] max-h-[50px] overflow-hidden">
            <img
              src={user_image}
              className="w-full h-full rounded-lg object-cover mb-0"
            />
          </div>
          <div className="max-w-[500px] max-h-[150px] ml-4 flex flex-col justify-between border-gray-500">
            <h1 className="text-[18px] my-0-0 ">User Name</h1>
            <p className="text-sm my-0">Affiliated Company</p>
            <div className="flex flex-row space-x-1 mb-0">
              <VscStarFull />
              <VscStarFull />
              <VscStarFull />
              <VscStarFull />
              <VscStarEmpty />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-1 rounded-md max-w-[600px] ml-16">
          <p className="text-[15px] mb-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            sapiente eos doloribus esse magnam in sed a neque soluta delectus,
            laudantium accusamus! Impedit magni, laborum consectetur ipsa quam
            eaque beatae.
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerReviewCard;
