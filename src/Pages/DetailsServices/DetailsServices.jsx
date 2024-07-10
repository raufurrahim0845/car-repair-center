import homeService from "../../assets/images/checkout/checkout.png";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const DetailsServices = () => {
  const details = useLoaderData();
  const { title,price, img } = details;
  return (
    <div>
      {/* <h1>Details Services : {title}</h1> */}
      {/* image and heading section  */}
      <div className="carousel-item relative w-full">
        <img src={homeService} className="w-full rounded-xl" />
        {/* Text Design  */}
        <div className="absolute flex items-center  h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] pl-12">
          <div className="text-white space-y-8">
            <h2 className="text-5xl font-bold">Service Details</h2>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-32">
        <div className="">
          <div>
            <div>
              <div className="card bg-base-100 w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Unique Car {title}</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid md:grid-cols-2 gap-8 ">
                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Instant Car Services</h2>
                    <p>
                      It uses a dictionary of over 200 Latin words, combined
                      with a model sentence structures.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">24/7 Quality Service</h2>
                    <p>
                      It uses a dictionary of over 200 Latin words, combined
                      with a model sentence structures.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Easy Customer Service</h2>
                    <p>
                      It uses a dictionary of over 200 Latin words, combined
                      with a model sentence structures.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Quality Cost Service</h2>
                    <p>
                      It uses a dictionary of over 200 Latin words, combined
                      with a model sentence structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div>
          <div className="card card-compact bg-base-100 shadow-xl mt-8">
            <figure>
              <img src={img} alt="Shoes" className="h-[368px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>Product Price : {price}</p>

              <div className="card-actions justify-end">
                <Link className="btn btn-primary font-bold" to="/">
                  Back to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsServices;
