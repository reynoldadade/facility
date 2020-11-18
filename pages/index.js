import Head from 'next/head';
import LoginForm from '../components/loginForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </div>
  );
}
