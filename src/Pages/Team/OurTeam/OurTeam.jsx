import person1 from "../../../assets/images/team/1.jpg"
import person2 from "../../../assets/images/team/2.jpg"
import person3 from "../../../assets/images/team/3.jpg"
import ContactUs from "../Contact/ContactUs";

const OurTeam = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-center text-3xl md:mt-6 text-[#FF3811]">
          Team
        </h2>
        <h3 className="font-bold text-center text-2xl">Meet Our Team</h3>
        <p className="text-center capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br></br> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-7">
        {/* person 1 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={person1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Engine Expert</p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        {/* person 2 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={person2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Engine Expert</p>
            </div>
          </div>
        </div>
        {/* person 3 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={person3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Engine Expert</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default OurTeam;
