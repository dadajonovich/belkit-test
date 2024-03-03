import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import {
  useGetFilesQuery,
  useUploadMutation,
} from '../features/data/files-api';
import { isSuccess } from '../utils/isSuccess';
import { useAppDispatch } from '../store';
import { showModal } from '../features/modal/modal-slice';

export const FileInput = () => {
  const dispatch = useAppDispatch();
  const [upload, { error }] = useUploadMutation();
  const { data: filesData } = useGetFilesQuery();
  let weightFiles = 0;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isSuccess(filesData)) return;
    const formData = new FormData();
    const files = e.target.files;

    if (!files || files.length === 0) return;
    if (files.length + filesData.files.length > 19) {
      dispatch(showModal('The limit has been exceeded!'));
      // alert('The limit has been exceeded!');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      weightFiles += files[i].size;
      formData.append('files[]', files[i], files[i].name);
    }

    if (weightFiles > 1048576) {
      dispatch(showModal('The file size is more than 1 megabyte'));
      // alert('The file size is more than 1 megabyte');
      return;
    }

    console.log(Array.from(formData.entries()));
    upload(formData);
  };

  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

  const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
    if (!isSuccess(filesData)) return;

    if (filesData.files.length >= 19) {
      e.preventDefault();
      dispatch(showModal('The limit has been reached!'));
      // alert('The limit has been reached!');
    }
  };

  return (
    <input
      onClick={handleClick}
      onChange={handleChange}
      type="file"
      multiple
      className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
    />
  );
};
