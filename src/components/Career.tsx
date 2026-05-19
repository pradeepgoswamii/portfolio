import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fronted Developer</h4>
                <h5></h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              I have a basic understanding of frontend development
              and enjoy creating simple, responsive web pages.
              My skills include working with HTML, CSS, and JavaScript to design clean layouts and interactive elements.
              I am continuously learning and improving my knowledge,
              and I love experimenting with new ideas to make websites more engaging and user-friendly."
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>compelete c++</h4>

              </div>
              <h3>2025</h3>
            </div>
            <p>
              I have successfully completed my learning in C++ programming language.
              Through this journey, I gained a strong understanding of core concepts
              such as data types, loops, functions, arrays, and object-oriented programming.
              I have also practiced implementing algorithms like factorial calculation, sorting techniques, and debugging code.
              My experience with C++ has helped me build a solid foundation in problem-solving and logical thinking,
              which I am now eager to apply in real-world projects and further development work."

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Doing DSA in C++</h4>
                <h5>Logic</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am currently focusing on Data Structures and Algorithms (DSA) using C++.
              This journey is helping me strengthen my problem-solving skills and logical thinking.
               I am practicing concepts such as arrays, linked lists, stacks, queues, recursion, and sorting algorithms.
                By solving coding problems and implementing these structures, I am building a strong foundation that will
                 support my future work in software development and competitive programming."

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
