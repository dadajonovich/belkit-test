// import NotFoundPick from '/404.jpg';
import { AiOutlineClose, AiOutlineFile } from 'react-icons/ai';
import { FileDto } from '../types';
import {
  useDeleteFileMutation,
  useGetFileQuery,
} from '../features/data/files-api';
import { useEffect } from 'react';

export const Card = (props: FileDto) => {
  const { fileName, url, id, mimeType } = props;
  const { data, error } = useGetFileQuery(id);

  const [deleteFile] = useDeleteFileMutation();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div className="indicator">
      <button
        onClick={() => deleteFile(id)}
        className="indicator-item m-1 rounded-full bg-secondary text-xl"
      >
        <AiOutlineClose className="m-1 cursor-pointer text-accent-content" />
      </button>
      <a download={fileName} href={data} className="w-32">
        <figure className="h-32">
          {mimeType.startsWith('image') ? (
            <img
              className="aspect-square object-cover"
              // src={imageSrc}
              src={data}
              // alt={title}
            />
          ) : (
            <AiOutlineFile size={'100%'} />
          )}
        </figure>
        <p className="text-center	 text-base font-bold">{fileName}</p>
      </a>
    </div>
  );
};
