import React, { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    props.showAlert("Welcome to About Page", "success");
  }, []);

  // Dynamic style based on mode
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
    color: props.mode === "dark" ? "white" : "#212529",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: props.mode === "dark"
      ? "0 0 10px rgba(255,255,255,0.1)"
      : "0 0 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out"
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "800px" }}>
        <h1 className="mb-4 text-center" style={{ color: props.mode === "dark" ? "white" : "#212529" }}>
          About Text Editor App
        </h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
              >
                Free To Use
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This app is completely free to use. There are no hidden charges, subscriptions, or advertisements. It is built to give users quick access to useful text tools without any hassle.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
              >
                Why to Use
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                It saves time and effort when dealing with raw or unformatted text. It’s especially useful for students, writers, and professionals.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
              >
                Who Can Use
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                TextUtils is useful for everyone — students, teachers, professionals, and anyone needing quick formatting tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
