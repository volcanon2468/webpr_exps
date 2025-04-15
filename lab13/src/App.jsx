import React, { Component, useState, useEffect } from 'react';

const Header = () => {
  const name = "John Doe";
  const regNumber = "REG20259876";
  const today = new Date();
  const hours = today.getHours();
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const getGreeting = () => {
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Night";
  };

  const renderMessage = () => {
    const month = today.getMonth();
    const date = today.getDate();

    if (month === 3 && date === 3) return <p className="flex items-center gap-2">🌈 National Find a Rainbow Day!</p>;
    if (month === 3 && date === 4) return <p className="flex items-center gap-2">🍋 Boost your immunity with Vitamin C day!</p>;
    return <p className="flex items-center gap-2">😊 Make today amazing! A fresh start!</p>;
  };

  return (
    <header className="p-6 border-b text-center">
      <h1 className="text-xl font-semibold">
        {name} - REG2025<span style={{ color: '#4F46E5', fontStyle: 'italic' }}>9876</span>
      </h1>
      <h2 className="text-gray-600 mt-1">{dateStr} - {getGreeting()}</h2>
      <div className="mt-2 text-md text-blue-700">{renderMessage()}</div>
    </header>
  );
};

class Body extends Component {
  state = {
    hobbyInput: '',
    hobbies: [],
    skills: []
  };

  componentDidMount() {
    this.setState({
      skills: [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'C++', level: 'Advanced' }
      ]
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hobbies !== this.state.hobbies || prevState.skills !== this.state.skills) {
      console.debug('Body updated:', this.state);
    }
  }

  handleHobbyChange = (e) => {
    this.setState({ hobbyInput: e.target.value });
  };

  handleAddHobby = () => {
    const { hobbyInput, hobbies } = this.state;
    if (hobbyInput.trim()) {
      this.setState({
        hobbies: [...hobbies, hobbyInput.trim()],
        hobbyInput: ''
      });
    }
  };

  render() {
    const { hobbyInput, hobbies, skills } = this.state;

    return (
      <section className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Hobbies</h3>
          <div className="flex gap-2">
            <input
              value={hobbyInput}
              onChange={this.handleHobbyChange}
              placeholder="Add a hobby"
              className="border rounded px-3 py-1 focus:outline-none focus:ring"
            />
            <button
              onClick={this.handleAddHobby}
              className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-6 mt-3 text-gray-800">
            {hobbies.map((hobby, idx) => (
              <li key={idx}>{idx + 1}. {hobby}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
          <ul className="list-disc pl-6 text-gray-800">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill.name} – {skill.level}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

const Table = () => (
  <section className="p-6">
    <h3 className="text-lg font-medium mb-3">Table Layout</h3>
    <table className="border-collapse border w-full">
      <tbody>
        <tr>
          <td className="border w-1/2 hover:bg-yellow-300 transition-all duration-200 ease-in-out">1</td>
          <td className="border">2</td>
        </tr>
        <tr>
          <td className="border">3</td>
          <td className="border">4</td>
          <td className="border">5</td>
        </tr>
        <tr>
          <td className="border">6</td>
          <td className="border">7</td>
          <td className="border">8</td>
        </tr>
      </tbody>
    </table>
  </section>
);

const Feedback = ({ name, email }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    if (input.trim()) {
      setResponse(input);
      setInput('');
    }
  };

  return (
    <section className="p-6">
      <h3 className="text-lg font-medium mb-2">We value your feedback</h3>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter feedback"
          className="border rounded px-3 py-1 w-full max-w-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
      {response && (
        <div className="mt-4 text-gray-800">
          <p><strong>Feedback:</strong> {response}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </section>
  );
};

const App = () => (
  <main className="font-sans max-w-4xl mx-auto bg-white shadow-lg rounded overflow-hidden">
    <Header />
    <Body />
    <Table />
    <Feedback name="John Doe" email="john.doe@example.com" />
  </main>
);

export default App;
