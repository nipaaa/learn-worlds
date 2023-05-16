import React from "react";
import eventDetails from "../../assets/event/event-details.jpeg";

const EventDetails = () => {
  return (
    <div className="event-details">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <img className="mb-[50px]" src={eventDetails} alt="" />
            <h2>
              A Career in UI/UX Skills, Tools, and a Blueprint to Pivot Into the
              Field
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
