import React from "react";

type Props = {};

const ProductFaqList = (props: Props) => {
  return (
    <div className="w-full max-w-[1200px] border border-gray-200 items-center mx-auto rounded-md">
      <h1 className="p-2 font-bold text-3xl">Frequently Asked Questions</h1>
      <ul className="p-1 mx-2 text-base">
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          corrupti facere dicta perspiciatis veritatis magnam exercitationem,
          debitis tempore libero possimus cupiditate, voluptatibus, sit cumque
          sequi laudantium harum suscipit ipsa consequuntur.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minima quae alias error odio eaque distinctio! Dolore, libero, placeat
          recusandae atque corporis dolorem quasi praesentium fugit facere
          beatae veritatis reiciendis?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
          incidunt quae quas deleniti.
        </li>
      </ul>
    </div>
  );
};

export default ProductFaqList;
