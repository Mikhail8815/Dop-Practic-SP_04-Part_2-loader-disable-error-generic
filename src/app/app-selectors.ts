import { AppRootState } from './store.ts'
export const selectStatus = (state: AppRootState) => state.app.status
export const selectError = (state: AppRootState) => state.app.error