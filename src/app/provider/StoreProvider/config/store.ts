import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { authReducer } from "@/features/Auth";
import { userReducer } from "@/entities/User";
import { profileReduser } from "@/entities/Profile";
import { $api } from "@/shared/api";
import { addPostModalReducer } from "@/features/AddPostModal";

export const createStore = () => {
   const rootReducers: ReducersMapObject<StateSchema> = {
      auth: authReducer,
      user: userReducer,
      profile: profileReduser,
      addPostModal: addPostModalReducer
   }

   const extraArg: ThunkExtraArg = {
      api: $api
   }

   const store = configureStore({
      reducer: rootReducers,
      devTools: DEV,
      // @ts-ignore
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: {
               extraArgument: extraArg
            }
         })
   })

   return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']