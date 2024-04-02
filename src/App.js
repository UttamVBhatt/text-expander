import { useState } from "react";

const text = [
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, a voluptatibus adipisci laudantium magnam maxime sunt doloribus consequatur distinctio aperiam quam perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus!",
  },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, a voluptatibus adipisci laudantium magnam maxime sunt doloribus consequatur distinctio aperiam quam perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus! maxime sunt doloribus consequatur distinctio aperiam quam perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus! maxime sunt doloribus consequatur distinctio aperiam quam perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus!",
  },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed, a voluptatibus adipisci laudantium magnam maxime sunt doloribus consequatur distinctio aperiam quam  perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus! perspiciatis, voluptate laborum eius, maiores enim natus architecto iste ducimus!",
  },
];

function App() {
  return (
    <div className="App">
      {text.map((text, index) => (
        <Text key={index} data={text} />
      ))}
    </div>
  );
}

function Text({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? data.text
    : data.text.split(" ").slice(0, 18).join(" ") + "...";

  const buttonStyle = {
    border: "none",
    background: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <span>{displayText}</span>
      <button
        style={
          isExpanded
            ? { ...buttonStyle, color: "orange" }
            : { ...buttonStyle, color: "blue" }
        }
        onClick={() => setIsExpanded((s) => !s)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default App;
