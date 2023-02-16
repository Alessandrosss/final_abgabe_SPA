import LoginForm from "./forms/LoginForm";

const Login = () => {

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-lg">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
