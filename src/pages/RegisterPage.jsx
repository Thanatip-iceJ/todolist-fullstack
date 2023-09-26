function RegisterPage() {
  return (
    <section className="flex flex-col gap-4 bg-white p-6 rounded-md">
      <div id="username">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="rounded-sm outline-none px-3 py-1 focus:ring-2 focus:ring-blue-500 border w-full"
        />
      </div>
      <div id="password">
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          id="password"
          className="rounded-sm outline-none px-3 py-1 focus:ring-2 focus:ring-blue-500 border w-full"
        />
      </div>
      <div id="confirm-password">
        <label htmlFor="confirm" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="text"
          id="confirm"
          className="rounded-sm outline-none px-3 py-1 focus:ring-2 focus:ring-blue-500 border w-full"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-sm font-semibold mt-3">
        Sign Up
      </button>
    </section>
  );
}

export default RegisterPage;
