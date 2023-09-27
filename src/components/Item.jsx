import axios from "axios";

function Item() {
  // axios
  //   .get("http://localhost:5555/todo", {
  //     userId:
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.body);
  //   })
  //   .catch((err) => console.log(err));

  return (
    <li className="flex justify-between p-3 bg-white border rounded-md items-center">
      <span>Do something bro</span>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-sm font-semibold">
          Edit
        </button>
        <button className="bg-red-600 text-white px-4 py-1 rounded-sm font-semibold">
          Del
        </button>
      </div>
    </li>
  );
}

export default Item;
