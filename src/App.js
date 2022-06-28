import "./App.css";
import Router from "./Router";
import firebase from "./firebase";

function App() {

  const ref = firebase.firestore().collection("chatroom")
  console.log(ref);
  return (
    <div className="wrapper">
      <Router />
    </div>
  );
}

export default App;
