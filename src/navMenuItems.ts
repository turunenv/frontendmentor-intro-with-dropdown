import { MenuItem } from './components/navigation/types.ts';
import iconArrowDownUrl from './assets/icon-arrow-down.svg';
import iconCalendarUrl from './assets/icon-calendar.svg';
import iconTodoUrl from './assets/icon-todo.svg';
import iconReminderUrl from './assets/icon-reminders.svg';
import iconPlanningUrl from './assets/icon-planning.svg';


export const navMenuItems: MenuItem[] = [
  {
    title: 'Features',
    iconUrl: iconArrowDownUrl,
    subMenu: [
      {
        title: 'Todo List',
        iconUrl: iconTodoUrl,
      },
      {
        title: 'Calendar',
        iconUrl: iconCalendarUrl,
      },
      {
        title: 'Reminders',
        iconUrl: iconReminderUrl,
      },
      {
        title: 'Planning',
        iconUrl: iconPlanningUrl,
      }
    ]
  },
  {
    title: 'Company',
    iconUrl: iconArrowDownUrl,
    subMenu: [
      {
        title: 'History',
      },
      {
        title: 'Our Team',
      }, 
      {
        title: 'Blog',
      }
    ]
  },
  {
    title: 'Careers',
  },
  {
    title: 'About',
  },
];