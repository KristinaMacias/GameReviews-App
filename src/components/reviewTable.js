import React from "react";

const ReviewTable = (props) => (
  <table className="table">
    <thead className="p-2"></thead>
    <tbody>
      {/* if there are more than zero usernames then map each user */}
      {props.reviews.length > 0 ? (
        props.reviews.map((review) => (
          <tr key={review.id}>
            <td>
              <p>{review.username}</p>
              <p>{review.review}</p>
            </td>
            <td>
              <button
                onClick={() => {
                  props.editRow(review);
                }}
                id="edit-button"
                className="btn btn-info"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => props.deleteReview(review.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Reviews to Display </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ReviewTable;
