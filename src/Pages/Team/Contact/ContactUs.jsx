import time from "../../../assets/images/contactUs/time.jpg"
import phone from "../../../assets/images/contactUs/phone.jpg"
import address from "../../../assets/images/contactUs/address.jpg"

const ContactUs = () => {
    return (
      <div className="bg-black h-[250px] lg:w-full mt-6 md:mt-8 items-center p-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* first */}
          <div className="flex">
            <div className="h-[40px] w-[40px] mr-5">
              <img src={time} alt="" />
            </div>
            <div>
              <p className="text-[#FFF]">We are open monday-friday</p>
              <h2 className="text-[#FFF] font-semibold text-xl">
                7.00 am - 9.00 pm
              </h2>
            </div>
          </div>
          {/* second  */}
          <div className="flex">
            <div className="h-[40px] w-[40px] mr-5">
              <img src={phone} alt="" />
            </div>
            <div>
              <p className="text-[#FFF]">Have a question?</p>
              <h2 className="text-[#FFF] font-semibold text-xl">
                +2546 251 2658
              </h2>
            </div>
          </div>
          {/* third  */}
          <div className="flex">
            <div className="h-[40px] w-[40px] mr-5">
              <img src={address} alt="" />
            </div>
            <div>
              <p className="text-[#FFF]">Need a repair? our address</p>
              <h2 className="text-[#FFF] font-semibold text-xl">
                Liza Street, New York
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;