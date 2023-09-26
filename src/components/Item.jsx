function Item() {
  return (
    <li className="flex justify-between p-3 bg-white border rounded-sm items-center">
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
