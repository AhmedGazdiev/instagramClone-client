export const checkImages = (files: File[]) => {
	let err = ''
	let newImages: File[] = []

	files.forEach(file => {
		if (!file) return (err = 'Пожалуйста, выберите фото.')

		if (
			file.type !== 'image/jpeg' &&
			file.type !== 'image/png' &&
			file.type !== 'image/jpg'
		)
			return (err = 'Пожалуйста, выберите фото формата jpeg, jpg или png.')

		if (file.size > 1024 * 1024 * 5)
			return (err = 'Пожалуйста, выберите фото размером до 5 мегабайт.')

		newImages.push(file)
	})

	return { err, newImages }
}
