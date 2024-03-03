import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SignIn } from './pages/SignIn';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Explorer } from './pages/Explorer';
import { Modal } from './components/Modal';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto my-6 flex w-11/12 grow flex-col rounded-2xl bg-base-300 p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
