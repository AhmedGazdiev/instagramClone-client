import { Avatar, Form, Input, Text, VStack } from '@/shared/ui'
import cls from './EditProfile.module.scss'
import { ChangeEvent, FC, useState } from 'react'
import { User } from '@/entities/User'
import { useEditProfileForm } from '../../model/schema/useEditProfileForm'
import { Button } from 'antd'
import { updateProfile } from '../../model/service/updateProfile'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileError } from '../../model/selectors/getProfileError'
import { getProfileSuccess } from '../../model/selectors/getProfileSuccess'

interface EditProfileProps {
   auth: User
   onClose: () => void
}

export const EditProfile: FC<EditProfileProps> = ({ auth, onClose }) => {

   const dispatch = useAppDispatch()
   const successMessage = useSelector(getProfileSuccess);
   const errorMessage = useSelector(getProfileError);

   const { register, watch, errors, isValid, handleSubmit, isSubmitting, EditProfileNames } = useEditProfileForm(auth)

   const [avatar, setAvatar] = useState(null)

   const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0]
      if (file) {
         setAvatar(file)
      }
   }

   const onRemoveAvatar = () => {
      setAvatar(null)
   }

   const onSubmit = async (data: User) => {
      if (!isValid) return;

      await dispatch(updateProfile({ user: data, avatar }))
      setAvatar(null)
      onClose()
   }

   return (
      <VStack gap={40}>
         <VStack max className={cls.editProfile} align="center" gap={12}>
            <label htmlFor='avatarFile' className={cls.avatar}>
               <Avatar src={avatar ? URL.createObjectURL(avatar) : avatar?.avatar} size={150} />
               <input
                  className={cls.inputFile}
                  type="file"
                  id='avatarFile'
                  onChange={onChangeAvatar}
               />
            </label>
            {avatar && <Button type="primary" onClick={onRemoveAvatar}>Удалить</Button>}
         </VStack>

         <Form className={cls.formInputBox} onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={22}>
               <Input
                  {...register(EditProfileNames.FULLNAME)}
                  value={watch(EditProfileNames.FULLNAME)}
                  placeholder={EditProfileNames.FULLNAME}
                  error={errors?.fullname?.message}
               />
               <Input
                  {...register(EditProfileNames.MOBILE)}
                  value={watch(EditProfileNames.MOBILE)}
                  placeholder={EditProfileNames.MOBILE}
                  error={errors?.mobile?.message}
               />
               <Input
                  {...register(EditProfileNames.ADDRES)}
                  value={watch(EditProfileNames.ADDRES)}
                  placeholder={EditProfileNames.ADDRES}
                  error={errors?.address?.message}
               />
               <Input
                  {...register(EditProfileNames.WEBSITE)}
                  value={watch(EditProfileNames.WEBSITE)}
                  placeholder={EditProfileNames.WEBSITE}
                  error={errors?.website?.message}
               />
               <Input
                  {...register(EditProfileNames.STORY)}
                  value={watch(EditProfileNames.STORY)}
                  placeholder={EditProfileNames.STORY}
                  error={errors?.story?.message}
               />

               {errorMessage && <Text color="red">{errorMessage}</Text>}
               {successMessage && <Text color="blue">{successMessage}</Text>}

               <Button htmlType="submit" disabled={!isValid} block type="primary" loading={isSubmitting}>Сохранить</Button>
            </VStack>
         </Form>
      </VStack>
   )
}