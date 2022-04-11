import dancingPepe from "../../../assets/sad-dancing-pepe.gif";

const LoadingScreen = () => {

  return (
    <div className="flex flex-col items-center justify-center flex-1 border">
      <p>** are you entertained yet? **</p>
      <img src={dancingPepe} alt="sad dancing pepe" className="h-[350px]" />
      <p>Loading Shop...</p>
    </div>
  );

}

export default LoadingScreen;
