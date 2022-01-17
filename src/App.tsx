import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Form from "./components/Form";

export type FakeData = {
  title: string;
  description: string;
};
function App() {
  
  const fakeData: FakeData = {
    title: "Poop",
    description: "<b>Boop</b>",
  };


  return (
    <div>
      <Form data={fakeData} />
    </div>
  );
}

export default App;
