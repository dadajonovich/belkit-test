import { AiOutlineUser } from 'react-icons/ai';
import { useTheme } from '../features/theme/use-theme';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthorized } from '../hooks/useAuthorized';
import { useSignOutMutation } from '../features/data/auth-api';
import { useEffect } from 'react';
import { useGetFilesQuery } from '../features/data/files-api';
import { isSuccess } from '../utils/isSuccess';

export const Header = () => {
  const navigate = useNavigate();
  const [, toggleTheme] = useTheme();
  const [isAuthorized, removeAuthorized] = useAuthorized();
  const [signOut, { data, error }] = useSignOutMutation();
  const { data: filesData } = useGetFilesQuery();

  useEffect(() => {
    console.log(data);
    if (data?.status === 'ok') {
      removeAuthorized();
      navigate('/');
    }
  }, [data]);

  useEffect(() => {
    console.log(error);
    if (error && 'status' in error && error.status === 401) {
      removeAuthorized();
      navigate('/');
    }
  }, [error]);

  return (
    <>
      <header className="flex items-center justify-between text-secondary">
        <Link to="/" className="btn btn-ghost text-2xl font-bold uppercase">
          The White Whale
        </Link>
        <div className="flex items-center gap-4">
          {isAuthorized ? (
            <details className="dropdown">
              <summary className="btn indicator">
                <AiOutlineUser className="h-10 w-10 text-secondary" />
                <span className="badge indicator-item badge-secondary">
                  {isSuccess(filesData) && filesData.files.length}
                </span>
              </summary>
              <ul className="menu dropdown-content z-[1] w-[160px] rounded-box bg-base-100 p-2 shadow">
                <li>
                  <Link to="/explorer">File manager</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sign out</button>
                </li>
              </ul>
            </details>
          ) : (
            <Link className="btn btn-ghost" to="/sign-in">
              <AiOutlineUser className="h-10 w-10" />
            </Link>
          )}

          <label className="btn btn-ghost swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={toggleTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </header>
      <hr className="mt-4 h-1 border-transparent bg-secondary " />
    </>
  );
};
