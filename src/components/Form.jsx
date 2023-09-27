import { useState } from "react";
import axios from "axios";

function Form() {
  // const BASE_URL = axios.defaults.baseURL("http://localhost:5555");
  // States
  const [input, setInput] = useState("");
  // Handles
  const handleSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post(
        `http://localhost:5555/todo`,
        { title: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log("success!!");
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="rounded-sm outline-none px-3 py-2 focus:ring-2 focus:ring-blue-500 border flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm font-semibold">
        Create
      </button>
    </form>
  );
}

export default Form;
