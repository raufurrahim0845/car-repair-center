
import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price,img } = service;
    const {user} = useContext(AuthContext)

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

          //alert booking successfully or not 
          if(data.insertedId){
            alert('SService book successfully')
          }
        });

    }
    return (
      <div>
        <h2 className="text-center text-3xl">Book Service: {title}</h2>

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
                  placeholder="user name" defaultValue={user?.displayName}
                  name="name"
                  className="input input-bbookinged"
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
                  placeholder="email" defaultValue={user?.email}
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