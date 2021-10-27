import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <section id="learn" class="p-3">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-md">
                <img src="/videogame-modified.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md p-5">
                <h2>About NextGen</h2>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem aliquid impedit, illo distinctio beatae quibusdam?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat porro minus, impedit quod sunt architecto placeat
                  necessitatibus, vel, possimus alias assumenda quam cupiditate.
                  Laudantium molestias quaerat molestiae sequi iusto dicta?
                </p>
                <a href="#" class="btn btn-light mt-3">
                  <i class="bi bi-chevron-right"></i> Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
