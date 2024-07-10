import homeService from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price,img } = service;
    const {user} = useContext(AuthContext);
    const navigate=useNavigate();

    const handelBookService = event =>{
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;


      const booking = {
        customerName : name,
        email,
        date,
        service_id:_id,
        services: title,
        img,
        price: price
      }

      console.log(booking);

      fetch("http://localhost:5000/bookings", {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          //booking successfully or not 
          if(data.insertedId){
            toast.success("Service booked successfully");
            navigate("/bookings");
          }
        });

    }
    return (
      <div>
        {/* image and heading section  */}
        <div className="carousel-item relative w-full">
          <img src={homeService} className="w-full rounded-xl" />
          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8">
              <h2 className="text-5xl font-bold">Book Service</h2>
            </div>
          </div>
        </div>
        <h2 className="text-center text-3xl mt-6">Book Service: {title}</h2>

        {/* form section  */}
        <div>
          <form onSubmit={handelBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Name Field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Date field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email Field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Due Amount  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default BookService;