import Head from 'next/head';
import LoginForm from '../components/loginForm';
import MessageBoard from '../components/messageBoard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 gap-4 m-2 p-20">
        <MessageBoard />
        <LoginForm />
      </div>
    </div>
  );
}
