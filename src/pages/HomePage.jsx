import { useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import axios from "axios";

function HomePage() {
  useEffect(() => {
    axios
      .get("http://localhost:5555/todo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <Form />
      <List />
    </section>
  );
}

export default HomePage;
