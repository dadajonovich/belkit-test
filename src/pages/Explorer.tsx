import { useEffect } from 'react';
import { Card } from '../components/Card';
import { FileInput } from '../components/FileInput';
import { useGetFilesQuery } from '../features/data/files-api';
import { isSuccess } from '../utils/isSuccess';

export const Explorer = () => {
  const { data, error } = useGetFilesQuery();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className="mt-8">
      <FileInput />
      <div className="mt-8 grid grid-cols-4 justify-items-center gap-y-16">
        {data &&
          isSuccess(data) &&
          data.files.map((item) => <Card {...item} key={item.id} />)}
      </div>
    </div>
  );
};
