import RegisterForm from "./forms/RegisterForm";

const Register = () => {
  return (
    <section className="h-screen w-9/12 mx-auto">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap-reverse h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
