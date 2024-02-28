import { HStack, Icon, Text, VStack } from '@/shared/ui'
import cls from './PostCard.module.scss'

export const PostCardFooter = () => {
  return (
    <VStack className={cls.footer} gap={22}>
      <HStack align='center' justify='between'>
        <HStack gap={16} align='center'>
          <Icon type='Favorite' />
          <Icon type='Comment' />
          <Icon type='SharePosts' />
        </HStack>
        <Icon type='Save' />
      </HStack>
      <VStack className={cls.body} gap={8}>
        <Text color='default' fw={700} size={14}>*** likes</Text>  
        <div>
          <Text className={cls.username} color='default' as='span' fw={700}>terrylucas</Text>
          <Text as='span' fw={500}>Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</Text>
        </div>
      </VStack>
    </VStack>
  )
}
