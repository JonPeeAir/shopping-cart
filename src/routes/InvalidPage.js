import starePepe from "../assets/stare-pepe.gif";

const InvalidPage = () => {

  return (
    <div className="h-screen grid gap-8 place-content-center">
      <p className="text-base text-center">staring contest..?</p>
      <img src={starePepe} alt="pepe frog stares into your soul" />
      <p className="text-xl text-center">The page you are looking for doesn't exist...</p>
    </div>
  );

}

export default InvalidPage;

