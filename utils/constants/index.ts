import { format } from 'date-fns'
import * as Icons from '@public/Icons'
import { type InputFieldDetails, type Marks } from '@src/typings'

export const menuItems = [
  { id: 1, label: 'Dashboard', icon: Icons.DashboardIcon, link: '/' },
  { id: 2, label: 'Teams', icon: Icons.PeopleIcon, link: '/teams' },
  { id: 3, label: 'Pending Reviews', icon: Icons.ReviewIcon, link: '/reviews/pending' },
  { id: 4, label: 'Approved Reviews', icon: Icons.ReportIcon, link: '/reviews/approved' },
  { id: 5, label: 'Bi-Weekly Syncs', icon: Icons.HomeIcon, link: '/' },
  { id: 6, label: 'Awards', icon: Icons.AwardIcon, link: '/' },
  { id: 7, label: 'Reports', icon: Icons.ReportIcon, link: '/' },
  { id: 8, label: 'Tags', icon: Icons.TagsIcon, link: '/' },
  { id: 9, label: 'Review Template', icon: Icons.ReviewTemplateIcon, link: '/' },
  { id: 10, label: 'Settings', icon: Icons.SettingsIcon, link: '/' },
]

export const reviewsTableHeaders = ['Name/Email', 'Designation', 'Reporting to', 'Actions']

export const usersTabelHeads = [
  { heading: 'Name', left: true },
  { heading: 'Join Date', left: false },
  { heading: 'Designation', left: false },
  { heading: 'Action', left: false }
]

export const reviewFormFields: InputFieldDetails<Marks>[] = [
  {
    tag: 'Ownership',
    desc: 'feedbackOwnership',
    label: 'Ownership',
  },
  {
    tag: 'Innovation',
    desc: 'feedbackInnovation',
    label: 'Innovation',
  },
  {
    tag: 'Productivity',
    desc: 'feedbackProductivity',
    label: 'Productivity',
  },
  {
    tag: 'Responsibility',
    desc: 'feedbackResponsibility',
    label: 'Responsibility',
  },
  {
    tag: 'TimeManagement',
    desc: 'feedbackTimeManagement',
    label: 'TimeManagement',
  },
]

export const reviewFormDefaultValues = {
  Ownership: 2.5,
  Innovation: 2.5,
  WorkEthics: 2.5,
  Productivity: 2.5,
  Responsibility: 2.5,
  TimeManagement: 2.5,
}

export const quarter = Math.floor((new Date().getMonth() + 3) / 3)

export const today = format(new Date(), 'dd/MM/yyyy')

export const usersPerPage: number = 10 
