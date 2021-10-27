import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import ReviewTable from "./components/reviewTable";
import ReviewForm from "./components/reviewForm";
import VideoGame from "./components/videoGame";
import BlogPost from "./components/blogPost";
import Navigation from "./components/navigation";
import About from "./components/about";
import FeaturedConsoles from "./components/featuredConsoles";
import EditReviewForm from "./components/editReviewForm";

const App = () => {
  // USER AND REVIEW DATA
  const gameReviews = [
    {
      id: 1,
      username: "DarkSader",
      review:
        "I really liked this game. The gameplay was always fresh and engaging. The music was thrilling",
    },
    {
      id: 2,
      username: "SlyKilla",
      review: "This game plays best with friends.",
    },
  ];

  const initialFormState = { id: null, username: "", review: "" };

  //SETTING THE STATE
  const [reviews, setReviews] = useState(gameReviews);
  const [currentReview, setCurrentReview] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD OPERATIONS

  //ADD A REVIEW
  const addReview = (review) => {
    review.id = reviews.length + 1;
    setReviews([...reviews, review]);
  };

  //DELETE A REVIEW
  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  // //UPDATE REVIEW

  const updateReview = (id, updatedReview) => {
    setEditing(false);

    setReviews(
      reviews.map((review) => (review.id === id ? updatedReview : review))
    );
  };

  //EDIT ROW
  const editRow = (review) => {
    setEditing(true);

    setCurrentReview({
      id: review.id,
      username: review.username,
      review: review.review,
    });
  };

  return (
    <div id="main-container">
      <About />
      <FeaturedConsoles />
      <VideoGame />
      <BlogPost />

      <h1 id="review-tag">Game Reviews</h1>
      <div className="row">
        <div className="col-sm-p4">
          {editing ? (
            <div>
              <h2>Edit Review</h2>
              <EditReviewForm
                setEditing={setEditing}
                currentReview={currentReview}
                updateReview={updateReview}
              />
            </div>
          ) : (
            <div className="col-sm p-4">
              <h2>Add a Review</h2>
              <ReviewForm addReview={addReview} />
            </div>
          )}
        </div>

        <div className="col-sm p-4">
          <h2>View Reviews</h2>
          <ReviewTable
            reviews={reviews}
            deleteReview={deleteReview}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
