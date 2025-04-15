import React, { useState, useReducer, useEffect, useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ThemeContext from './ThemeContext.jsx';
import ThemedComponent from './ThemedComponent.jsx';
import Child from './Child.jsx';
import StyledButton from './StyledButton.jsx';
import StyledButtonInternal from './StyledButtonInternal.jsx';
import StyledButtonExternal from './StyledButtonExternal.jsx';
import LifecycleDemo from './LifecycleDemo.jsx';

function App() {
  const [joke, setJoke] = useState('');
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const inputRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState({});
  const [showLifecycle, setShowLifecycle] = useState(true);

  const getJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  };

  useEffect(() => {
    getJoke();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      default: return state;
    }
  };

  const [reducerCount, dispatch] = useReducer(reducer, 0);

  const handleSubmitWithRef = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header title="React Playground App" />

        <h2>Random Joke</h2>
        <button onClick={getJoke}>Get a Random Joke</button>
        <p>{joke}</p>

        <h2>Styled Buttons</h2>
        <StyledButton />
        <StyledButtonInternal />
        <StyledButtonExternal />

        <h2>useState Counter</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>

        <h2>useReducer Counter</h2>
        <p>{reducerCount}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>

        <h2>useRef Focus</h2>
        <input ref={inputRef} type="text" placeholder="Click the button to focus" />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>

        <h2>Theme Toggle with useContext</h2>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemedComponent />

        <h2>Props and Prop Validation</h2>
        <Child message="This is passed from the parent!" />

        <h2>Form using useState</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
          />
        </form>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>

        <h2>Form using useRef</h2>
        <form onSubmit={handleSubmitWithRef}>
          <input ref={nameRef} placeholder="Name" />
          <input ref={emailRef} placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
        {submittedData.name && <p>Name: {submittedData.name}</p>}
        {submittedData.email && <p>Email: {submittedData.email}</p>}

        <h2>Lifecycle Component</h2>
        {showLifecycle && (
          <LifecycleDemo unmount={() => setShowLifecycle(false)} />
        )}

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
