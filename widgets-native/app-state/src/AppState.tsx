import { type ActionValue } from 'mendix'
import { useEffect } from 'react'
import { AppState as RNAppState, type AppStateStatus, type ViewStyle } from 'react-native'

import { type AppStateProps } from '../typings/AppStateProps'

export function AppState({ onActive, onBackground, onInactive }: AppStateProps<ViewStyle>): null {
  const handlerForAppState = (nextAppState: string): ActionValue | undefined => {
    switch (nextAppState) {
      case 'active': return onActive
      case 'background': return onBackground
      case 'inactive': return onInactive
    }
  }

  useEffect(() => {
    const listener = (nextAppState: AppStateStatus): void => {
      const handler = handlerForAppState(nextAppState)
      if (handler?.canExecute) handler.execute()
    }
    RNAppState.addEventListener('change', listener)
    return () => { RNAppState.removeEventListener('change', listener) }
  }, [])

  return null
}
