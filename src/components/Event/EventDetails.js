import React from "react";
import eventDetails from "../../assets/event/event-details.jpeg";
import card from "../../assets/event/card.png";
import location from "../../assets/logo/location.png";
import clock from "../../assets/logo/clock.png";
import calender from "../../assets/logo/calender.png";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <div className="event_details mb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
          <div className="col-span-2">
            <img className="mb-[50px]" src={eventDetails} alt="" />
            <h2 className="text-[32px] leading-[42px] font-[700] text-[#31374D] mb-[25px]">
              A Career in UI/UX Skills, Tools, and a Blueprint to Pivot Into the
              Field
            </h2>
            <div className="text-[18px] leading-[27px] font-[400] text-[#5F6765] mb-[50px]">
              <p className="mb-[20px]">
                Eleifend amet elit porta purus placerat at dictum lectus dictum
                semper nunc, id mauris dictum varius montes, adipiscing interdum
                nulla rhoncus ac at mus dignissim eget eu ullamcorper posuere
                condimentum porttitor scelerisque in aenean adipiscing dictum
                pellentesque vehicula amet purus ut odio ullamcorper interdum
                commodo tortor, tincidunt amet fermentum mattis ut lobortis nibh
                id nisl vitae aliquet sit ac urna dolor vitae volutpat risus
                tristique ut ultricies tincidunt amet integer iaculis purus amet
                in amet, vitae, laoreet aliquam volutpat nec elit nec tincidunt
                euismod mi, orci aliquet ut scelerisque eu nisi auctor ornare
                aliquam, tincidunt adipiscing ornare cursus diam pharetra
              </p>
              <p>
                Eleifend amet elit porta purus placerat at dictum lectus dictum
                semper nunc, id mauris dictum varius montes, adipiscing interdum
                nulla rhoncus ac at mus dignissim eget eu ullamcorper posuere
                condimentum porttitor scelerisque in aenean adipiscing dictum
                pellentesque vehicula amet purus ut odio ullamcorper interdum
                commodo tortor, tincidunt amet fermentum mattis ut lobortis nibh
                id nisl vitae aliquet.
              </p>
            </div>
            <div className="mb-[60px]">
              <h2 className="text-[#31374D] text-[32px]  mb-[25px] font-[700]">
                Time & Venue
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
                <div className="bg-[#FBFDFF] py-[20px] flex gap-[10px] items-center justify-center time_venue">
                  <img src={location} alt="" />
                  <p className="text-[#000000cc] text-[20px] font-[600] leading-[30px]">
                    Dhaka
                  </p>
                </div>
                <div className="bg-[#FBFDFF] py-[20px] flex gap-[10px] items-center justify-center time_venue">
                  <img src={clock} alt="" />
                  <p className="text-[#000000cc] text-[20px] font-[600] leading-[30px]">
                    12.00 PM-03.00 AM
                  </p>
                </div>
                <div className="bg-[#FBFDFF] py-[20px] flex gap-[10px] items-center justify-center time_venue">
                  <img src={calender} alt="" />
                  <p className="text-[#000000cc] text-[20px] font-[600] leading-[30px]">
                    20 June 2022
                  </p>
                </div>
              </div>
            </div>
            <Link to="/joinEvent">
            <button className="bg-[#0C1F38] py-[28px] rounded-[15px] w-100 text-white text-[28px] font-[600]">
              Join Now
            </button>
            </Link>
          </div>

          <div>
            <h3 className="mb-[25px]">Recent Event</h3>
            {[1, 2].map((eventttt, index) => (
              <div key={index} className="event_card mb-[50px]">
                <img className="mb-[15px]" src={card} alt="" />
                <div className="px-[15px] pt-[15px] pb-[27px] ">
                  <div className="flex justify-between mb-[25px]">
                    <div>
                      <div className="flex gap-[10px] items-center">
                        <img src={location} alt="" />
                        <p className="text-[#5F6765] text-[14px] font-[400]">
                          Dhaka
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-[10px] items-center">
                        <img src={clock} alt="" />
                        <p className="text-[#5F6765] text-[14px] font-[400]">
                          12.00 PM-03.00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#31374D] text-[22px] font-[600] leading-[27px] mb-[25px]">
                    Web Development and Mobile app Development
                  </p>
                  <div className="flex gap-[22px]">
                    <button className="w-full rounded-[15px] py-[14px] bg-[#0C1F38] text-white font-[600] text-[16px]">
                      Join free
                    </button>
                    <button className="w-full py-[14px] border-2 border-[#000000] rounded-[15px] text-[#31374D] font-[600] leading-[20px]">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
