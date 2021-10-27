import React, { useState } from "react";

//create a form to add a review

const ReviewForm = (props) => {
  const initialFormState = { id: null, username: "", review: "" };

  const [review, setReview] = useState(initialFormState);

  const handleInputChage = (event) => {
    const { name, value } = event.target;

    setReview({ ...review, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!review.username || !review.review) return;

        props.addReview(review);
        setReview(initialFormState);
      }}
    >
      <div className="form-group">
        <label>Enter Username:</label>
        <input
          type="text"
          class="form-control"
          name="username"
          value={review.username}
          onChange={handleInputChage}
        />
        <br />
        <label>Enter a Review:</label>
        <textarea
          class="form-control"
          name="review"
          value={review.review}
          rows="6"
          onChange={handleInputChage}
        ></textarea>
        <br />
        <button className="btn btn-primary">Add Review</button>
      </div>
    </form>
  );
};

export default ReviewForm;
