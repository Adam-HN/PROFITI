import Right from "./section/Right";
import Left from "./section/Left";

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Left Section */}
      <Left />
      {/* Right Section */}
      <Right />
    </section>
  );
};

export default Login;
