import React from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/event/banner.png";
import Events from "./Events";

const EventPage = () => {
  return (
    <div>
      <SectionBanner
        bg="bg-[#70679F]"
        route="Event"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <Events/>
    </div>
  );
};

export default EventPage;
