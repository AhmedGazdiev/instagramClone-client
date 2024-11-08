import ActiveFavorite from '@/shared/assets/svg/ActiveFavorite.svg'
import Camera from '@/shared/assets/svg/Camera.svg'
import Clip from '@/shared/assets/svg/Clip.svg'
import Comment from '@/shared/assets/svg/Comment.svg'
import Dark from '@/shared/assets/svg/Dark.svg'
import Dots from '@/shared/assets/svg/Dots.svg'
import Facebook from '@/shared/assets/svg/Facebook.svg'
import Favorite from '@/shared/assets/svg/Favorite.svg'
import FindPeople from '@/shared/assets/svg/FindPeople.svg'
import Google from '@/shared/assets/svg/Google.svg'
import HidePassword from '@/shared/assets/svg/hidePassword.svg'
import Home from '@/shared/assets/svg/Home.svg'
import Light from '@/shared/assets/svg/Light.svg'
import Messenger from '@/shared/assets/svg/Messenger.svg'
import More from '@/shared/assets/svg/More.svg'
import NewPosts from '@/shared/assets/svg/NewPosts.svg'
import Save from '@/shared/assets/svg/Save.svg'
import Search from '@/shared/assets/svg/Search.svg'
import SharePosts from '@/shared/assets/svg/SharePosts.svg'
import ShowPassword from '@/shared/assets/svg/showPassword.svg'

export type IconType =
	| 'Home'
	| 'Messenger'
	| 'Search'
	| 'Favorite'
	| 'ActiveFavorite'
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
	| 'Clip'
	| 'Camera'

export const iconName: Record<IconType, JSX.Element> = {
	Home: <Home />,
	Google: <Google />,
	Facebook: <Facebook />,
	Messenger: <Messenger />,
	Search: <Search />,
	Favorite: <Favorite />,
	ActiveFavorite: <ActiveFavorite />,
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
	Clip: <Clip />,
	Camera: <Camera />,
}
