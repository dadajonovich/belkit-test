import { FormEventHandler, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignInArg } from '../types/SignInArg';
import { useSignInMutation } from '../features/data/data-api';

export const SignIn = () => {
  // const [isUninitialized, setIsUninitialized] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [signIn, { data, error, isError }] = useSignInMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const arg = Object.fromEntries(formData) as SignInArg;
    console.log(arg);
    signIn(arg);
  };

  useEffect(() => {
    console.log(data);
    if (data?.status === 'ok') {
      localStorage.setItem('token', data.token || '');
      // setIsUninitialized(true);
      navigate('/');
    }
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="hero flex grow items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              {isError && (
                <div className="label">
                  <span className="label-text-alt  text-secondary">
                    Incorrect authentication credentials
                  </span>
                </div>
              )}
              <Link
                to="/sign-up"
                className="link-hover link label-text-alt mt-4 text-center"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
