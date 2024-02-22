export type MenuItem = {
  title: string;
  iconUrl?: string;
  subMenu?: MenuItem[];
};

export type MenuItemWithLink = MenuItem & {
  href: string;
};

export type SubMenuState = {
  [key: string]: boolean;
};
