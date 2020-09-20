import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'

/**
 * 1. Create a project using create-react-app. 

 * 2. Create Main.js file in src folder and use it as a root component for your React app 

 * 3. Create profile folder (path: src/profile) 

 *4. Under profile folder Create (ProfilPhoto.js / FullName.js / Address.js ) in profile folder 

 *5. ProfilPhoto.js: a functional component that returns a Photo of your profile. 

 *6. FullName.js: a functional component that returns your full name. 

 *7. Address.js: a functional component that returns your address. 

 *8. Importe profile components into Main.js and use them. 

 *9. Feel free to style your app as you wish
*/

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
