import { ProfileState } from "@/entities/Profile";
import { UserState } from "@/entities/User";
import { AddPostModalState } from "@/features/AddPostModal";
import { AuthState } from "@/features/Auth";
import { AxiosInstance } from "axios";

export interface StateSchema {
   auth: AuthState,
   user: UserState,
   profile:ProfileState
   addPostModal:AddPostModalState
}

export interface ThunkConfig {
   rejectValue: any,
   extra: ThunkExtraArg
   state: StateSchema
}

export interface ThunkExtraArg {
   api: AxiosInstance
}