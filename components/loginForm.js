import Link from 'next/link';

const loginForm = (props) => (
  <div>
    <div className="flex flex-col">
      <p className="text-blue-500 ">Welcome to </p>
      <p className="text-blue-700 text-4xl font-bold">Managed</p>
    </div>
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
        className="bg-blue-700 text-white font-bold text-lg hover:bg-blue-500 p-2 mt-8 disabled:opacity-75 disabled:cursor-not-allowed">
        Log In
        <i class="fas fa-circle-notch fa-spin" v-show="loading"></i>
      </button>
    </form>
    <div className="pt-4  text-blue-500  font-semibold text-sm text-center">
      Forgotten Password?{' '}
      <span className="underline">
        <Link href="">Click here</Link>
      </span>
    </div>
  </div>
);

export default loginForm;
