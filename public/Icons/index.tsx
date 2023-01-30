import {
  ArrowUpOnSquareIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  DocumentMinusIcon,
  EyeIcon,
  TrophyIcon,
  PencilIcon,
  PresentationChartBarIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/solid'

const iconClasses = 'transform transition duration-500 h-6 w-6 color: text-neutral-600 group-hover:scale-105 hover:fill-gray-900 group-hover:fill-gray-900'

export const AwardIcon = () => <TrophyIcon className={iconClasses} />
export const DashboardIcon = () => <SquaresPlusIcon className={iconClasses} />
export const EditIcon = () => <PencilIcon className={iconClasses} />
export const BiWeeklySync = () => <CalendarDaysIcon className={iconClasses} />
export const LeftArrowIcon = () => <ChevronLeftIcon className={iconClasses} />
export const PeopleIcon = () => <UserGroupIcon className={iconClasses} />
export const ReportIcon = () => <PresentationChartBarIcon className={iconClasses} />
export const ApprovedReviews = () => <ClipboardDocumentListIcon className={iconClasses} />
export const ReviewIcon = () => <DocumentMinusIcon className={iconClasses} />
export const ReviewTemplateIcon = () => <DocumentTextIcon className={iconClasses} />
export const RightArrowIcon = () => <ChevronRightIcon className={iconClasses} />
export const RightArrowIconStyled = () => <ChevronRightIcon className={iconClasses} />
export const SettingsIcon = () => <Cog8ToothIcon className={iconClasses} />
export const SignoutIcon = () => <ArrowUpOnSquareIcon className={iconClasses} />
export const TagsIcon = () => <TagIcon className={iconClasses} />
export const ViewIcon = () => <EyeIcon className={iconClasses} />

export { PlusCircleIcon as AddIcon } from '@heroicons/react/24/outline'
export {
  ChevronDownIcon as DropdownIcon,
  EnvelopeIcon as EmailIcon,
  ChevronUpIcon as UpIcon,
  Squares2X2Icon as ViewAllIcon,
} from '@heroicons/react/24/solid'

export const SearchSvg = () => (
  <svg
    className='w-5 h-5 text-gray-500 dark:text-gray-400'
    aria-hidden='true'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const GoogleSvg = () => (
  <svg
    id='Layer_1'
    enableBackground='new 0 0 512 512'
    viewBox='0 0 512 512'
    className='w-15 h-6 ml-3'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='m472.4 213.9h-190.5c-8.4 0-15.2 6.8-15.2 15.2v60.9c0 8.4 6.8 15.2 15.2 15.2h107.3c-11.7 30.5-33.7 56-61.6 72.2l45.7 79.2c73.3-42.4 116.7-116.9 116.7-200.2 0-11.9-.9-20.4-2.6-29.9-1.4-7.3-7.7-12.6-15-12.6z'
      fill='#167ee6'
    />
    <path
      d='m256.5 396.6c-52.5 0-98.3-28.7-122.9-71.1l-79.2 45.6c40.3 69.9 115.8 116.9 202.1 116.9 42.4 0 82.3-11.4 116.8-31.3v-.1l-45.7-79.2c-21 12.2-45.2 19.2-71.1 19.2z'
      fill='#12b347'
    />
    <path
      d='m373.2 456.7v-.1l-45.7-79.2c-20.9 12.1-45.1 19.2-71 19.2v91.4c42.4 0 82.3-11.4 116.7-31.3z'
      fill='#0f993e'
    />
    <path
      d='m114.4 254.5c0-25.9 7.1-50.1 19.2-71l-79.2-45.6c-20 34.3-31.4 74.1-31.4 116.6s11.4 82.3 31.4 116.6l79.2-45.6c-12.2-20.9-19.2-45.1-19.2-71z'
      fill='#ffd500'
    />
    <path
      d='m256.5 112.4c34.2 0 65.7 12.2 90.2 32.4 6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4-41.1-35.8-94.6-57.4-152.8-57.4-86.3 0-161.8 47-202.1 116.9l79.2 45.6c24.6-42.4 70.4-71.1 122.9-71.1z'
      fill='#ff4b26'
    />
    <path
      d='m346.7 144.8c6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4-41.1-35.8-94.6-57.4-152.8-57.4v91.4c34.2 0 65.7 12.1 90.2 32.4z'
      fill='#d93f21'
    />
  </svg>
)
