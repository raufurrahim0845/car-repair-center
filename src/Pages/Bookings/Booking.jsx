import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])


    // deleted handelDelete 
    const handelDelete = (id) => {
      const proceed = confirm("Are you sure you want to delete");
      if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert(`Deleted Successfully`);
              const remaining = bookings.filter(booking => booking._id !== id);
              setBookings(remaining);
            }
          });
      }
    };


    return (
      <div>
        <h2 className="text-5xl">Your Bookings : {bookings.length}</h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handelDelete={handelDelete}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Booking;