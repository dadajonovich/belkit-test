import { Skeleton } from '../components/Skeleton';

export const Home = () => {
  return (
    <div className="flex grow justify-center">
      {' '}
      <div className="mt-8 grid grid-cols-2 justify-items-center gap-16">
        {[...new Array(4)].map((_, index) => (
          <Skeleton className={'h-96 w-96'} key={index} />
        ))}
      </div>
    </div>
  );
};
