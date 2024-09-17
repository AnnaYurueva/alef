export interface IUser {
    name: string
    age?: number | null
}

export interface IChild {
    nameChild: string
    ageChild: number | null
}

export interface IData {
    user: IUser
    childs: IChild[] | []
}