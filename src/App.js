import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register';
import Folder from './pages/Folder';
import Logout from './pages/Logout';
import FolderContent from './pages/FolderContent';
import FileContent from './pages/FileContent';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
  BrowserRouter
} from 'react-router-dom';


function App() {
  var script = document.createElement('script');
   
    
    script.onload = function () {
    //do stuff with the script
    };
    script.src = "https://cdn.blackpot.in/dist/builder.js";

    var element = document.createElement('link');
    element.type = 'text/css';
    element.rel = 'stylesheet';
    element.href = "../editorfiles/dist/builder.css"

document.head.appendChild(script);
document.getElementsByTagName('head')[0].appendChild(element);
   function AddLibrary(urlOfTheLibrary) {
    console.log("added script")
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
  AddLibrary("https://cdn.blackpot.in/dist/builder.js");
  AddLibrary("https://cdn.blackpot.in/dist/plugins/rss/RssWidget.js")
  return (
    
    <Router>
      <Routes>



        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="signup" element={<Register />} />
        <Route path="folder" element={<Folder />} />
        <Route path= "folder/view/:id" element={<FolderContent />} />
        <Route path= "file/view/:id" element={<FileContent />} />
        
        
        


      </Routes>
    </Router>
  );
}

export default App;
