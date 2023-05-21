import { IData } from "../../type";

import React, { useState } from "react";

interface IContent {
  data: IData[];
  title: string;
  img: string;
}

const Content = ({ data, title, img }: IContent) => {
  const [isOpen, setIsOpen] = useState<number | null>();
  const handleClick = (id: number) => {
    if (isOpen === id) {
      return setIsOpen(null);
    }
    setIsOpen(id);
  };

  return (
    <div className="xl:p-[60px]  p-[24px] mt-[132px] lg:mt-0 lg:w-[500px] w-[100%] lg:max-h-[509px]">
      <h1 className="text-[32px] font-[700] leading-[39.69px] text-center lg:text-left mb-[22px]">
        {title}
      </h1>

      {React.Children.toArray(
        data.map((x) => (
          <div
            className={`border-b border-lightGrayishBlue py-[16px]  xl:min-w-[300px] w-[100%] text-desaturatedBlue  items-center`}
          >
            <div className="grid grid-cols-[90%_10%] items-center">
              <h3
                onClick={() => handleClick(x.id)}
                className={`${
                  isOpen === x.id ? "mb-[11px] font-bold" : "mb-0"
                } hover:text-softRed hover:cursor-pointer  `}
              >
                {x.question}
              </h3>
              <img
                className={` ${
                  isOpen === x.id ? "rotate-180" : ""
                } grid justify-self-end transition ease-out duration-500 `}
                src={img}
                width={8}
                height={8}
              ></img>
            </div>

            {isOpen === x.id ? (
              <p className={`text-[12px] leading-[18px] font-[400]`}>
                {x.answer}
              </p>
            ) : null}
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
