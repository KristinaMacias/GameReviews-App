import React, { useState } from "react";

const EditReviewForm = (props) => {
  const [review, setReview] = useState(props.currentReview);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setReview({ ...review, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateReview(review.id, review);
      }}
    >
      <div className="form-group">
        <label>Enter Username:</label>
        <input
          type="text"
          class="form-control"
          name="username"
          value={review.username}
          onChange={handleInputChange}
        />
        <br />
        <label>Enter a Review:</label>
        <textarea
          class="form-control"
          name="review"
          value={review.review}
          rows="6"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button className="btn btn-primary m-2">Update Review</button>
        <button
          onClick={() => props.setEditing(false)}
          className="btn btn-secondary"
        >
          Cancel Edit
        </button>
      </div>
    </form>
  );
};

export default EditReviewForm;
