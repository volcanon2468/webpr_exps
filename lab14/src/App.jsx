import React from 'react';
import profilePic from '../public/.jpg';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>1. Image Display</h2>

      <h4>a) From public/Images folder:</h4>
      <img src="/assets/.jpg" alt="Public" width="200" />

      <h4>b) From src/Images folder:</h4>
      <img src={profilePic} alt="From Src" width="200" />

      <hr />

      <h2>2. Novell Services Login Form</h2>
      <form style={{ border: '1px solid #ccc', padding: '20px', width: '400px' }}>
        <h3 style={{ textAlign: 'center' }}>Novell Services Login</h3>
        <div>
          <label>Username: </label>
          <input type="text" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" />
        </div>
        <div>
          <label>City of Employment: </label>
          <input type="text" />
        </div>
        <div>
          <label>Web server: </label>
          <select>
            <option>-- Choose a server --</option>
            <option>Server 1</option>
            <option>Server 2</option>
          </select>
        </div>
        <br />
        <div>
          <p>Please specify your role:</p>
          <input type="radio" name="role" /> Admin <br />
          <input type="radio" name="role" /> Engineer <br />
          <input type="radio" name="role" /> Manager <br />
          <input type="radio" name="role" /> Guest <br />
        </div>
        <br />
        <div>
          <p>Single Sign-on to the following:</p>
          <input type="checkbox" /> Mail <br />
          <input type="checkbox" /> Payroll <br />
          <input type="checkbox" /> Self-service <br />
        </div>
        <br />
        <div>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>

      <hr />

      <h2>3. User Profile Page</h2>
      <ProfilePage />
    </div>
  );
};

const ProfileImage = () => (
  <div>
    <h3>Profile Image</h3>
    <img src={profilePic} alt="Profile" width="150" />
  </div>
);

const UserInfo = () => (
  <div>
    <h3>User Information</h3>
    <p><strong>Name:</strong> Divyaroop</p>
    <p><strong>Email:</strong> divyaroopsagar.kovi2023@vitstudent.ac.in</p>
    <p><strong>Bio:</strong> Frontend Developer who loves building beautiful UIs.</p>
  </div>
);

const UserPosts = () => (
  <div>
    <h3>User Posts</h3>
    <ul>
      <li>Post 1: Learning React</li>
      <li>Post 2: Exploring Redux</li>
      <li>Post 3: Styling with Tailwind</li>
    </ul>
  </div>
);

const ProfilePage = () => (
  <div style={{ border: '1px solid #999', padding: '15px', marginTop: '10px' }}>
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);

export default App;