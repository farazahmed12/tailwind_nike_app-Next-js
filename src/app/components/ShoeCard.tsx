import React from "react";

type ShoeCardProps = {
  imageUrl: any;
  changeBigShowImage: (a: any) => void;
  bigShoeImage: any;
};

const ShoeCard = ({
  imageUrl,
  changeBigShowImage,
  bigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (imageUrl.bigShoe.src !== bigShoeImage.src) {
      changeBigShowImage(imageUrl.bigShoe.src);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imageUrl.bigShoe.src
          ? " border-coral-red "
          : " border-gray-300 "
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-primary bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          className="object-contain"
          src={imageUrl.thumbnail.src}
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
