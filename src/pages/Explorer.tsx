import { ChangeEventHandler, useEffect } from 'react';
import { Card } from '../components/Card';
import { FileInput } from '../components/FileInput';
import { useUploadMutation } from '../features/data/files-api';

export const Explorer = () => {
  const [upload, { data, error }] = useUploadMutation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const formData = new FormData();
    const firstFile = e.target.files?.[0];
    const files = e.target.files;
    console.log(firstFile);
    if (!firstFile) return;
    // formData.append('files', firstFile, firstFile.name);
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
    <div className="mt-8">
      <FileInput onChange={handleChange} />
      <div className="mt-8 grid grid-cols-4 justify-items-center gap-y-16">
        {[...new Array(12)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};
