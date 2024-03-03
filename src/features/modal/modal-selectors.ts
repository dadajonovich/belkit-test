import { RootState } from '../../store';

export const modal = (state: RootState) => state.modal;
export const messageModal = (state: RootState) => state.modal.message;
export const visiblityModal = (state: RootState) => state.modal.isVisible;
