import Post from "../../blogs/post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post
        img="https://wallpapercave.com/wp/wp4923991.png"
        link1="web development  "
        link2="IT"
        title="React JS Tutorial "
        skill="react JS"
        discription="In this ReactJS tutorial, you will learn the basics of React, including components, props, state, JSX, and how to create a simple React application from scratch.The tutorial will begin with an introduction to ReactJS, explaining what it is, why it is used, and its advantages. Next, you will learn how to set up a development environment for ReactJS and start building your first React application."
        link="https://reactjs23.blogspot.com/"
      />
      <Post
        img="https://play-lh.googleusercontent.com/mHEywwrourM3N9Z94du0IqO7tVu0cm78E0NeYdUFUwDAvfPLtFt0jXMGbh8mIcapDio=w240-h480-rw"
        link1="web development  "
        link2="IT"
        title="How to write a BackEnd in Node"
        skill="Node Js/Express Js/Mongodb"
        discription="Building a backend API with Node.js is an essential skill for any developer looking to build scalable and efficient web applications. In this tutorial, you will learn the basics of building a backend API with Node.js, including the logic behind handling API requests and responses.

        The tutorial will begin with an introduction to the fundamentals of RESTful API design, including HTTP methods and response status codes. Next, you will learn how to create a simple API with Node.js, using popular libraries such as Express.js and Mongoose."
        link="https://backendapi.blogspot.com/"
      />

      <Post
        img="https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2022-11%2Fnextjs-13.png&w=3840&q=50"
        link1="web development  "
        link2="IT"
        title="Next JS Tutorial "
        skill="Next JS"
        discription="The tutorial will begin with an introduction to Next.js, explaining what it is and why it is used. Next, you will learn how to set up a development environment for Next.js and start building your first Next.js application.

        Throughout the tutorial, you will work with real-world examples and code snippets to help you understand the concepts better. You will learn how to use Next.js to create dynamic web pages, including how to handle data fetching and manage client-side routing."
        link="https://nextjs2023.blogspot.com/"
      />

      
      <Post img="https://i0.wp.com/www.zen-networks.io/wp-content/uploads/2022/05/Reducing-device-downtime-using-actionable-intelligenxe-1-1.png?fit=500%2C500&ssl=1"
      link1="backend "
      link2="IT"
      title="ElasticSearch Tutorial "
      skill="Elastcisearch/kibana"
      discription=" In this Elasticsearch and Kibana tutorial, you will learn the basics of these tools and how to use them together to manage and analyze data effectively.

      The tutorial will begin with an introduction to Elasticsearch and Kibana, explaining what they are, how they work, and their key features. Next, you will learn how to set up a development environment for Elasticsearch and Kibana and start working with data.
      
      "
      link="https://elasticsearch2023.blogspot.com/" />

<Post img="https://images.ctfassets.net/23aumh6u8s0i/2QjNmyDo6LfK4HC8F1q4qw/b8baddde46d79ec9432a15f14b4a41a2/javascript" 
link1="web development "
link2="IT"
title="Advance JS Tutorial "
skill="JS-ES6"
discription=" In this advanced JavaScript tutorial, you will learn the intricacies of JavaScript, including advanced concepts such as closures, prototypes, and asynchronous programming.

The tutorial will begin with an introduction to JavaScript's basic syntax and data types, but quickly progresses to more advanced topics such as functions, objects, and arrays. Next, you will learn about JavaScript's more complex features such as scope, closures, and hoisting.



"
link="https://js2023.blogspot.com/" />
    </div>
  );
}
