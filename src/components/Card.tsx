import NotFoundPick from '/404.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { FileDto } from '../types';

export const Card = (props: FileDto) => {
  const { fileName, url } = props;
  return (
    <div className="card indicator">
      <span className="indicator-item m-1 rounded-full bg-secondary text-xl">
        <AiOutlineClose className="m-1 cursor-pointer text-accent-content" />
      </span>
      <div className="card w-32 bg-base-100 shadow-xl">
        <figure>
          <img
            className="aspect-square object-cover"
            // src={imageSrc}
            src={NotFoundPick}
            // alt={title}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-center gap-1 text-base font-bold">
            <p>fileName</p>
          </div>
        </div>
      </div>
    </div>
  );
};
