import { useCallback, useState } from 'react'

import { Color } from '@material-ui/lab/Alert'

export interface useNotificationOutput {
  notificationState: boolean
  notificationText: string | undefined
  notificationType: Color

  closeNotification: () => void
  openNotification: openNotificationType
}

export type openNotificationType = (text: string, type: Color) => void

export const useNotification = (): useNotificationOutput => {
  const [notificationState, setNotificationState] = useState(false)
  const [notificationText, setNotificationText] = useState<string>()
  const [notificationType, setNotificationType] = useState<Color>('success')

  const closeNotification = useCallback(() => setNotificationState(false), [])

  const openNotification = (text: string, type: Color) => {
    setNotificationType(type)
    setNotificationText(text)
    setNotificationState(true)
  }

  return { notificationState, notificationText, closeNotification, openNotification, notificationType }
}
