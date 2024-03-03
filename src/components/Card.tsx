// import NotFoundPick from '/404.jpg';
import { AiOutlineClose, AiOutlineFile } from 'react-icons/ai';
import { FileDto } from '../types';
import {
  useDeleteFileMutation,
  useGetFileQuery,
} from '../features/data/files-api';

export const Card = (props: FileDto) => {
  const { fileName, id, mimeType } = props;
  const { data } = useGetFileQuery(id);

  const [deleteFile] = useDeleteFileMutation();

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
            <img className="aspect-square object-cover" src={data} />
          ) : (
            <AiOutlineFile size={'100%'} />
          )}
        </figure>
        <p className="text-center	 text-base font-bold">{fileName}</p>
      </a>
    </div>
  );
};
