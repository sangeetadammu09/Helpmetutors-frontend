import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'My Profile',
    url: '/parent/dashboard/',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'List of Teachers',
    url: '/parent/dashboard/teachers-list',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'History',
    url: '/parent/dashboard/history',
    iconComponent: { name: 'cil-pen' }
  },
  

  
];
