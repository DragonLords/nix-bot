import { Static, Type } from "@sinclair/typebox";

export interface UserData {
    username:string;
    uid:number;
}

export const User=Type.Object({
    uid:Type.String(),
    username:Type.String()
})

export type UserType = Static<typeof User>