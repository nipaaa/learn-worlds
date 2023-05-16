import React from "react";
import review1 from "../../assets/course/review1.png";
import review2 from "../../assets/course/review2.png";
import review3 from "../../assets/course/review3.png";

const Reviews = () => {
  const reviews = [
    {
      pic: review1,
      name: "James Pattinson",
      comment:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat .”",
    },
    {
      pic: review2,
      name: "James Pattinson",
      comment:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat .”",
    },
    {
      pic: review3,
      name: "James Pattinson",
      comment:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat .”",
    },
  ];
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px]">
        {reviews.map((review, index) => (
          <div className="review_card text-center" key={index}>
            <img className="mb-[6px] mx-auto" src={review.pic} alt="" />
            <h5>{review.name}</h5>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
