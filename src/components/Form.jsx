function Form() {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        className="rounded-sm outline-none px-3 py-2 focus:ring-2 focus:ring-blue-500 border flex-grow"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-sm font-semibold">
        Create
      </button>
    </div>
  );
}

export default Form;
