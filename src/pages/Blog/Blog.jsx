import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-5">
      <h3 className="text-center text-3xl font-semibold my-5">
        Question & Answer Section
      </h3>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="my-2 border rounded-lg p-5">
          <h6 className="font-bold text-2xl mb-2">
            Question One :: Tell us the differences between uncontrolled and
            controlled components?
          </h6>
          <p className="font-bold mb-2">
            Ans:: Controlled components are those that are explicitly managed and
            versioned by a central authority. These components are typically
            created by a team or organization with the responsibility of
            maintaining them, and users of the component must adhere to specific
            guidelines and procedures when using them.
          </p>
          <p className="font-bold">
            Uncontrolled components are those that are not centrally managed or
            versioned, and can be used by any developer without any
            restrictions. These components are typically created by individual
            developers or open-source communities, and users are not required to
            adhere to any specific guidelines or procedures when using them.
          </p>
        </div>
        <div className="my-2 border rounded-lg p-5">
          <h6 className="font-bold text-2xl mb-2">
            Question Two :: How to validate React props using PropTypes?
          </h6>
          <p className="font-bold mb-2">
          Ans:: React PropTypes is a library that allows developers to validate the types of props passed to a React component. PropTypes is built into React and can be imported from the 'prop-types' package.
          </p>
        </div>
        <div className="my-2 border rounded-lg p-5">
          <h6 className="font-bold text-2xl mb-2">
            Question Three :: Tell us the difference between nodejs and express js.?
          </h6>
          <p className="font-bold mb-2">
          Ans:: Node.js provides the foundation for building network applications with JavaScript, while Express.js builds on top of Node.js to provide a framework for building web applications. While Node.js can be used without Express.js, Express.js requires Node.js to function.
          </p>
          <p className="font-bold mb-2">
          1. Node.js is a runtime environment for executing JavaScript code, while Express.js is a framework for building web applications.
          </p>
          <p className="font-bold mb-2">
          2. Node.js can be used without Express.js, but Express.js requires Node.js to function.
          </p>
          <p className="font-bold mb-2">
          3. Node.js can be used to build a wide range of applications, including web applications, command-line tools, and desktop applications. Express.js is primarily used for building web applications etc.
          </p>
        </div>
        <div className="my-2 border rounded-lg p-5">
          <h6 className="font-bold text-2xl mb-2">
            Question Three :: What is a custom hook, and why will you create a custom hook?
          </h6>
          <p className="font-bold mb-2">
          Ans:: In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks are functions that start with the use prefix and can call other hooks inside them. Custom hooks allow you to encapsulate complex logic and reuse it across your application.
          </p>
          <p className="font-bold mb-2">
          1. Reusability: Custom hooks can help you avoid code duplication by encapsulating complex logic that can be reused across multiple components.
          </p>
          <p className="font-bold mb-2">
          2. Abstraction: Custom hooks can abstract away complex logic into simple, easy-to-use functions that can be easily understood by other developers.
          </p>
          <p className="font-bold mb-2">
          3. Readability: Custom hooks can help to make your code more readable by breaking down complex logic into small, manageable pieces.
          </p>
          <p className="font-bold mb-2">
          3. Testing: Custom hooks can be tested in isolation, making it easier to identify and fix bugs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
