const ShoeCard = ({ imageURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    // console.log(imageURL.bigShoe);
    if (imageURL.bigShoe !== bigShoeImg) {
      changeBigShoeImg(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg == imageURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }  cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover w-32 h-32 max-sm:w-28 max-sm:h-28 rounded-xl max-sm:p-4">
        <img src={imageURL.thumbnail} className="object-contain" />
      </div>
    </div>
  );
};
export default ShoeCard;
