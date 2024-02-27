import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SignIn } from './pages/SignIn';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <section className="flex h-screen flex-col justify-between">
      <main className="mx-auto my-6 w-11/12	rounded-2xl bg-base-300 p-4">
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
