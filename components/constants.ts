import * as Icons from './Icons'

export const menuItems = [
  { id: 1, label: 'Dashboard', icon: Icons.DashboardIcon },
  { id: 2, label: 'Teams', icon: Icons.PeopleIcon },
  { id: 3, label: 'Pending Reviews', icon: Icons.ReviewIcon },
  { id: 4, label: 'Approved Reviews', icon: Icons.ReportIcon },
  { id: 5, label: 'Bi-Weekly Syncs', icon: Icons.HomeIcon },
  { id: 6, label: 'Awards', icon: Icons.AwardIcon },
  { id: 7, label: 'Reports', icon: Icons.ReportIcon },
  { id: 8, label: 'Tags', icon: Icons.TagsIcon },
  { id: 9, label: 'Review Template', icon: Icons.ReviewTemplateIcon },
  { id: 10, label: 'Settings', icon: Icons.SettingsIcon },

]

export const getNavItemClasses = 'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full h-full overflow-hidden whitespace-nowrap'
