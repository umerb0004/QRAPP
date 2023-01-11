import * as Icons from '../Icons'

export const menuItems = [
  { id: 1, label: 'Dashboard', icon: Icons.DashboardIcon, link: '/' },
  { id: 2, label: 'Teams', icon: Icons.PeopleIcon, link: '/teams' },
  { id: 3, label: 'Pending Reviews', icon: Icons.ReviewIcon, link: '/pendingReview' },
  { id: 4, label: 'Approved Reviews', icon: Icons.ReportIcon, link: '/review' },
  { id: 5, label: 'Bi-Weekly Syncs', icon: Icons.HomeIcon, link: '/' },
  { id: 6, label: 'Awards', icon: Icons.AwardIcon, link: '/' },
  { id: 7, label: 'Reports', icon: Icons.ReportIcon, link: '/' },
  { id: 8, label: 'Tags', icon: Icons.TagsIcon, link: '/' },
  { id: 9, label: 'Review Template', icon: Icons.ReviewTemplateIcon, link: '/' },
  { id: 10, label: 'Settings', icon: Icons.SettingsIcon, link: '/' },
]

export const TableHeaders = ['Name/Email', 'Designation', 'Reporting to', 'Actions']

export const getNavItemClasses = 'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full h-full overflow-hidden whitespace-nowrap'
