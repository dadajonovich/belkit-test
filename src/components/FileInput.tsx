import { ChangeEventHandler, useEffect } from 'react';
import { useUploadMutation } from '../features/data/files-api';

export const FileInput = () => {
  const [upload, { data, error }] = useUploadMutation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const formData = new FormData();
    const files = e.target.files;
    if (!files) return;
    for (let i = 0; i < files.length; i++) {
      formData.append('files[]', files[i], files[i].name);
    }
    console.log(Array.from(formData.entries()));
    upload(formData);
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    console.log('error', error);
  }, [error]);
  return (
    <input
      onChange={handleChange}
      type="file"
      multiple
      className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
    />
  );
};
