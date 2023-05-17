import React from "react";

const EventForm = () => {
  return (
    <div className="event_form pt-[139px] pb-[150px]">
      <h2>Join Free Seminar</h2>
      <form>
        <input className="mb-[35px]" type="text" placeholder="Full name" />
        <input
          className="mb-[35px]"
          type="text"
          placeholder="Your email address"
        />
        <input
          className="mb-[35px]"
          type="text"
          placeholder="Your phone number"
        />
        <div className="flex items-center gap-[98px] mb-[30px]">
          <label for="">Select Course</label>
          <select>
            <option value="">Professional Graphics Design</option>
            <option value="">Professional Graphics Design</option>
            <option value="">Professional Graphics Design</option>
            <option value="">Professional Graphics Design</option>
          </select>
        </div>

        <textarea
          className="h-[130px] mb-[30px]"
          placeholder="Your Address"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
