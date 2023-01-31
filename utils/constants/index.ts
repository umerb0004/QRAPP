import { format } from 'date-fns'
import * as Icons from '@public/Icons'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const menuItems = [
  { id: 1, label: 'Dashboard', icon: Icons.DashboardIcon, link: '/' },
  { id: 2, label: 'Teams', icon: Icons.PeopleIcon, link: '/teams' },
  { id: 3, label: 'Pending Reviews', icon: Icons.ReviewIcon, link: '/reviews/pending' },
  { id: 4, label: 'Approved Reviews', icon: Icons.ApprovedReviews, link: '/reviews/approved' },
  { id: 5, label: 'Bi-Weekly Syncs', icon: Icons.BiWeeklySync, link: '/' },
  { id: 6, label: 'Awards', icon: Icons.AwardIcon, link: '/' },
  { id: 7, label: 'Reports', icon: Icons.ReportIcon, link: '/' },
  { id: 8, label: 'Tags', icon: Icons.TagsIcon, link: '/' },
  {
    id: 9,
    label: 'Review Template',
    icon: Icons.ReviewTemplateIcon,
    link: '/reviews/template',
  },
  { id: 10, label: 'Settings', icon: Icons.SettingsIcon, link: '/' },
]

export const reviewsTableHeaders = [
  'Name/Email',
  'Designation',
  'Reporting to',
  'Actions',
]

export const usersTabelHeads = [
  { heading: 'Name', left: true },
  { heading: 'Join Date', left: false },
  { heading: 'Designation', left: false },
  { heading: 'Action', left: false },
]

export const quarter = Math.floor((new Date().getMonth() + 3) / 3)
export const currentDateTime = new Date()
export const tomorrow = new Date(currentDateTime)
tomorrow.setDate(tomorrow.getDate() + 1)
export const currentQuarter = Math.floor((currentDateTime.getMonth() + 3) / 3)
export const previousQuarter = currentQuarter === 1 ? 4 : currentQuarter - 1

export const currentYear = currentDateTime.getFullYear()
export const previousYear = currentYear - 1

export const today = format(new Date(), 'dd/MM/yyyy')

export const usersPerPage: number = 10

export const apis ={
  'reviewWeightage':{url:baseURL + 'review/weightage'},
  'weightageUpdate':{url:baseURL + 'review/updateWeightage'},
  'tags':{url:baseURL + 'tags'},
  'designations':{url:baseURL + 'designation'}
}
