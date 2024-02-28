import { StateSchema } from "@/app/provider";

export const getAuthLoading = (state:StateSchema) => state.user.loading || false