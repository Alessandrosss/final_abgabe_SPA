import { useNavigate } from "react-router-dom";
import { ButtonCompact } from "./buttons";

const Home = () => {
  return (
    <>
      <div id="heroSect">
        <div className="bg-transparent w-11/12 md:w-9/12 h-screen flex flex-col justify-center gap-4 items-center mx-auto">
          <div className=" w-3/4 text-center  font-bold text-4xl md:text-7xl">
            Improve your Productivity with
            <strong className="text-purple-900"> Vity</strong>
          </div>
          <ButtonCompact path="/login" value="Login" />
        </div>
      </div>
    </>
  );
};

export default Home;
