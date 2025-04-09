export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_APP_STATUS':
      return {...state, status: action.payload.status}
    case 'SET_APP_ERROR':
      return {...state, error: action.payload.error}
    default:
      return state
  }
}

type ActionsType = SetAppStatusType | SetAppErrorType

type SetAppStatusType = ReturnType<typeof setAppStatusAC>
type SetAppErrorType = ReturnType<typeof setAppErrorAC>

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'SET_APP_STATUS' as const,
    payload: {
      status
    }
  }
}
export const setAppErrorAC = (error: string | null) => {
  return {
    type: 'SET_APP_ERROR' as const,
    payload: {
      error
    }
  }
}