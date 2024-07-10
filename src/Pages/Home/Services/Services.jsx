import { useContext, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../../providers/AuthProvider";

const Services = () => {
    const [services, setServices] = useState([]);
     const [bookings, setBookings] = useState([]);
     const { user } = useContext(AuthContext);
     const url = `http://localhost:5000/bookings?email=${user?.email}`;

     useEffect(() => {
       fetch(url)
         .then((res) => res.json())
         .then((data) => setBookings(data));
     }, [url]);

    // data load kora jon no 
    useEffect( ()=>{
        fetch("http://localhost:5000/services")
          .then((res) => res.json()) //j response ta asbea takea json a convert korbo
          .then((data) => setServices(data)); //j data ta pabo takea setServices a data modhea set korbo


    }, [])
    return (
      <div className="mt-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              bookings={bookings}
            ></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Services;