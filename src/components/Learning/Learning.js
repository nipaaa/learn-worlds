import React from "react";

const Learning = () => {
  return (
    <div className="learning mb-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[47px] mb-[20px]">
          <div className="col-span-2">
            <h6>Web Development</h6>
            <p className="name">by Angelou Canales </p>
          </div>
          <div>
            <h6>Course Content</h6>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
        </div>
        <hr className="mb-[20px]" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[47px]">
          <div className="col-span-2">
            <div className="overflow-hidden rounded-[10px] mb-[20px]">
              <iframe
                width="100%"
                height="507px"
                src="https://www.youtube.com/embed/phWxA89Dy94"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <h2>Chapter 01: Course Introductions</h2>

            <h4>What you’ll learn</h4>
            <p className="content">
              Vestibulum amet sed ultricies vitae sit quis commodo viverra
              aliquam tellus, malesuada congue mattis in proin ac posuere arcu,
              lacus pulvinar diam massa sem phasellus non sagittis, volutpat
              tellus ornare eget tincidunt faucibus elementum tortor
              pellentesque a quis eget morbi amet, eu, donec cras natoque sed
              est donec sed egestas consectetur vestibulum ultrices in urna,
              elit fermentum mi suspendisse donec enim augue massa tempor est
              urna cursus lacus quam pellentesque mauris blandit nunc, fringilla
              pulvinar nec cum eleifend nisi, vestibulum ultrices tellus neque
              at sed enim mattis suspendisse nulla id nec quam ut et.{" "}
            </p>
          </div>
          <div className="learning_video">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
