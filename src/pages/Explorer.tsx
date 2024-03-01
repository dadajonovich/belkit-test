import { Card } from '../components/Card';
import { FileInput } from '../components/FileInput';

export const Explorer = () => {
  return (
    <div className="mt-8">
      <FileInput />
      <div className="mt-8 grid grid-cols-4 justify-items-center gap-y-16">
        {[...new Array(12)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};
