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
    default:
      return state
  }
}

type ActionsType = SetAppStatusType

type SetAppStatusType = ReturnType<typeof setAppStatusAC>

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'SET_APP_STATUS' as const,
    payload: {
      status
    }
  }
}