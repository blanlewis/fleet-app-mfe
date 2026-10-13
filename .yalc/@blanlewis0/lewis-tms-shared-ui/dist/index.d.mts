import * as react from 'react';

type NavigationItem = {
    label: string;
    href: string;
    icon: string;
};
type CustomSidebarProps = {
    readonly navigationItems: NavigationItem[];
    readonly activeHref: string;
};
declare function CustomSidebar({ navigationItems, activeHref, }: CustomSidebarProps): react.JSX.Element;

export { CustomSidebar };
