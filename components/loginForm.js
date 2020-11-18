const loginForm = (props) => (
  <div className="m-2 shadow p-2">
    <p className="text-gray-700 font-bold">Welcome </p>
    <form className="flex flex-col pt-3 md:pt-8">
      <div className="flex flex-col pt-4">
        <input
          type="email"
          placeholder="email"
          className=" focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex flex-col pt-4">
        <input
          type="password"
          placeholder="Password"
          className="focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        id="loginButton"
        type="submit"
        className="bg-blue-500 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 disabled:opacity-75 disabled:cursor-not-allowed">
        Log In
        <i class="fas fa-circle-notch fa-spin" v-show="loading"></i>
      </button>
    </form>
  </div>
);

export default loginForm;
