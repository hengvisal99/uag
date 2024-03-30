export interface Footer {
    menu: Menu[],
    social: Social[],
    logo : string[]
}
export interface Menu {
    name: string,
    subMenu: SubMenu[],
}
export interface SubMenu{
    name : string ,
    icon : string,
}
export interface Social {
    name: string,
    icon?: string
}
