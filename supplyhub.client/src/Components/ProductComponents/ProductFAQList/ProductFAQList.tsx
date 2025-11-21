type props = {
  faqQuestions: string[];
  faqAnswers: string[];
};

const ProductFaqList = ({faqQuestions, faqAnswers} : props) => {
  return (
    <div className="w-full max-w-[1200px] border border-gray-200 items-center mx-auto rounded-md">
      <h1 className="p-2 font-bold text-3xl">Frequently Asked Questions</h1>
      <ul className="p-1 mx-2 text-base">
        {faqQuestions.map((question, index) => (
            <li>
              {question}
              <br/>
              <strong className={"p-6"}>
                {faqAnswers[index]}
              </strong>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default ProductFaqList;
