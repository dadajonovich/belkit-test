import { classNames } from '../utils/classNames';

type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
};

export const Skeleton = ({ className, width, height }: SkeletonProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={classNames(className, 'skeleton bg-base-200')}
    ></div>
  );
};
