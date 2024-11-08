import { Carousel } from 'antd'
import { CSSProperties, FC } from 'react'
import { PostProps } from '../../model/types/post'
import cls from './PostCardMain.module.scss'

export const PostCardMain: FC<PostProps> = ({ post }) => {
	const contentStyle: CSSProperties = {
		height: '500px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	}

	return (
		<div className={cls.body}>
			<Carousel effect='fade' draggable>
				{post.images.map((img, index) => (
					<div style={contentStyle} key={index}>
						<img src={img.url} alt='image' className={cls.image} />
					</div>
				))}
			</Carousel>
		</div>
	)
}
