import { type ReactElement, createElement } from 'react'
import { View, Text } from 'react-native'

import { type ChatBubbleProps } from '../typings/ChatBubbleProps'

import { leftStyles, rightStyles } from './styles'

export function ChatBubble({ remote, text }: ChatBubbleProps<null>): ReactElement | null {
  if (remote.status !== 'available') return null
  if (text.status !== 'available') return null

  const styles = remote.value ? leftStyles : rightStyles

  return (
    <View style={styles.outer}>
      <Text style={styles.text}>{text.value}</Text>
      <View style={styles.arrow} />
      <View style={styles.arrowOverlap} />
    </View>
  )
}
