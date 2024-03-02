import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import {
  useGetFilesQuery,
  useUploadMutation,
} from '../features/data/files-api';
import { isSuccess } from '../utils/isSuccess';

export const FileInput = () => {
  const [upload, { data, error }] = useUploadMutation();
  const { data: filesData } = useGetFilesQuery();
  let sum = 0;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isSuccess(filesData)) return;
    const formData = new FormData();
    const files = e.target.files;

    if (!files || files.length === 0) return;
    if (files.length + filesData.files.length > 19) {
      alert('The limit has been exceeded!');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      sum += files[i].size;
      formData.append('files[]', files[i], files[i].name);
    }

    if (sum > 1048576) {
      alert('Размер файлов превышен');
      return;
    }

    console.log(Array.from(formData.entries()));
    upload(formData);
  };

  const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
    if (!isSuccess(filesData)) return;

    if (filesData.files.length >= 19) {
      e.preventDefault();
      alert('The limit has been reached!');
    }
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    console.log('error', error);
  }, [error]);
  return (
    <input
      onClick={handleClick}
      onChange={handleChange}
      type="file"
      multiple
      className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
    />
  );
};
