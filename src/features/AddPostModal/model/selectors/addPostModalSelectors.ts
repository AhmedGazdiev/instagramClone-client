import { StateSchema } from "@/app/provider";

export const getIsAddPostModalIsOpen = (state:StateSchema) => state.addPostModal.isOpen || false