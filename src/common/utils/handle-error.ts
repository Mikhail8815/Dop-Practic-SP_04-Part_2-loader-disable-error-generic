import { AppDispatch } from '../../app/store.ts'
import { isAxiosError, responseEncoding } from 'axios'
import { ServerError } from '../../features/decks/decks-thunks.ts'
import { setAppErrorAC } from '../../app/app-reducer.ts'
import { Dispatch } from 'redux'

export const handleError = (e: unknown, dispatch: Dispatch): void => {
  let errorMessage: string
  if (isAxiosError<ServerError>(e)) {
    errorMessage = e.response? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(setAppErrorAC(errorMessage))
}