import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const navigate=useNavigate();

     const handleSignUp = (event) => {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,email,password);

       createUser(email, password)
       .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up successful");
        navigate("/");
       })
       .catch(error => console.log(error))
     };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2 mr-10">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div>
              <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>

          <p className="my-4 text-center">
            Already Have an Account?
            <Link className="text-orange-500 font-bold" to="/login">
              
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
