import { ChangeEventHandler } from 'react';

type FileInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const FileInput = ({ onChange }: FileInputProps) => {
  return (
    <input
      onChange={onChange}
      type="file"
      multiple
      className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
    />
  );
};
