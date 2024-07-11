import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">
                Effortless Car Service Booking
              </h2>
              <p>
                Book your car service online anytime, anywhere. Our
                user-friendly platform makes scheduling a breeze. No more
                waiting on calls or in line. Enjoy the convenience of digital
                booking.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          {/* Text design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">
                Reliable and Efficient Service
              </h2>
              <p>
                Experience top-notch car servicing from our skilled technicians.
                Manage everything online for ultimate convenience. Quality
                service is just a click away. We ensure your car is in expert
                hands.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />

          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">
                Track Your Service in Real-Time
              </h2>
              <p>
                Stay updated with real-time notifications and track your car
                service status. Always know the progress of your service.
                Transparency is our priority. Keep informed every step of the
                way.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />

          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">
                Expert Technicians at Your Service
              </h2>
              <p>
                Our certified technicians ensure high-quality car servicing.
                Trust us with your vehicle’s maintenance. Skilled professionals
                handle your car. Reliable service guaranteed.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />

          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">24/7 Customer Support</h2>
              <p>
                Have questions or need assistance? Our customer support team is
                available round-the-clock to help you. We are here for you
                anytime. Contact us whenever you need help.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" />

          {/* Text Design  */}
          <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
            <div className="text-white space-y-8 w-1/2">
              <h2 className="text-6xl font-bold">Eco-Friendly Practices</h2>
              <p>
                We follow green practices to minimize our environmental impact.
                Support sustainable car servicing with us. Environmentally
                responsible solutions. Protecting the planet, one service at a
                time.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;