import Home from '@/shared/assets/svg/Home.svg'
import Messenger from '@/shared/assets/svg/Messenger.svg'
import Search from '@/shared/assets/svg/Search.svg'
import Favorite from '@/shared/assets/svg/Favorite.svg'
import FindPeople from '@/shared/assets/svg/FindPeople.svg'
import NewPosts from '@/shared/assets/svg/NewPosts.svg'
import Dark from '@/shared/assets/svg/Dark.svg'
import Light from '@/shared/assets/svg/Light.svg'
import Google from '@/shared/assets/svg/Google.svg'
import Facebook from '@/shared/assets/svg/Facebook.svg'
import ShowPassword from '@/shared/assets/svg/showPassword.svg'
import HidePassword from '@/shared/assets/svg/hidePassword.svg'
import Dots from '@/shared/assets/svg/Dots.svg'
import More from '@/shared/assets/svg/More.svg'
import Save from '@/shared/assets/svg/Save.svg'
import SharePosts from '@/shared/assets/svg/SharePosts.svg'
import Comment from '@/shared/assets/svg/Comment.svg'

export type IconType =
  | 'Home'
  | 'Messenger'
  | 'Search'
  | 'Favorite'
  | 'FindPeople'
  | 'Dark'
  | 'Light'
  | 'NewPosts'
  | 'Google'
  | 'Facebook'
  | 'ShowPassword'
  | 'HidePassword'
  | 'Dots'
  | 'More'
  | 'Save'
  | 'SharePosts'
  | 'Comment'

export const iconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Google: <Google />,
  Facebook: <Facebook />,
  Messenger: <Messenger />,
  Search: <Search />,
  Favorite: <Favorite />,
  FindPeople: <FindPeople />,
  NewPosts: <NewPosts />,
  Light: <Light />,
  Dark: <Dark />,
  ShowPassword: <ShowPassword />,
  HidePassword: <HidePassword />,
  Dots: <Dots />,
  More: <More />,
  Save: <Save />,
  SharePosts: <SharePosts />,
  Comment: <Comment />,
}
