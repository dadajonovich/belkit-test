import { FormEventHandler, useEffect, useRef } from 'react';
import { useSignUpMutation } from '../features/data/auth-api';
import { SignUpArg } from '../types';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [signUp, { data, error, isError }] = useSignUpMutation();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const arg = Object.fromEntries(formData) as SignUpArg;
    signUp(arg);
  };

  useEffect(() => {
    console.log(data);
    if (data?.status === 'ok') {
      navigate('/');
    }
  }, [data]);

  useEffect(() => {
    console.log(error);

    /*     if (error && 'originalStatus' in error && error.originalStatus === 200) {
      // navigate('/');
    } */
  }, [error]);
  return (
    <>
      <div className="hero flex grow items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              {isError && (
                <div className="label">
                  <span className="label-text-alt  text-secondary">
                    Registration error
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
