import { Ionicons } from '@expo/vector-icons'
import { Button, Icon } from 'native-base'
import React from 'react'
import { Share } from 'react-native'

const ShareIcon = ({ route }) => {
  const { label, url } = route.params

  const handleShareRecipe = () => {
    return Share.share(
      {
        label,
        url
      },
      {
        dialogTitle: `Share ${label}`
      }
    )
  }

  return (
    <Button variant='ghost' color='gray.500'>
      <Icon as={Ionicons} name='share-outline' onPress={() => handleShareRecipe()} size={5} />
    </Button>
  )
}

export default ShareIcon
