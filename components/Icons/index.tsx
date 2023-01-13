import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { DocumentMinusIcon } from '@heroicons/react/24/solid'
import { GiftIcon } from '@heroicons/react/24/solid'
import { PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import { TagIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon, ChevronLeftIcon, EyeIcon, PencilIcon  } from '@heroicons/react/24/solid'

const iconClasses = 'h-6 w-6 color: text-neutral-600 group-hover:fill-blue-500 group-hover:scale-105'

export const AwardIcon = () => <GiftIcon className={iconClasses} />
export const DashboardIcon = () => <RectangleGroupIcon className={iconClasses} />
export const HomeIcon = () => <TagIcon className={iconClasses} />
export const PeopleIcon = () => <UserGroupIcon className={iconClasses} />
export const ReportIcon = () => <PresentationChartBarIcon className={iconClasses} />
export const ReviewIcon = () => <DocumentMinusIcon className={iconClasses} />
export const ReviewTemplateIcon = () => <DocumentTextIcon className={iconClasses} />
export const SettingsIcon = () => <Cog6ToothIcon className={iconClasses} />
export const SignoutIcon = () => <ArrowUpOnSquareIcon className={iconClasses} />
export const TagsIcon = () => <TagIcon className={iconClasses} />
export const EditIcon = () => <PencilIcon className={iconClasses}/>
export const ViewIcon = () => <EyeIcon className={iconClasses}/>
export const RightArrowIcon = () => <ChevronRightIcon className={iconClasses}/>
export const LeftArrowIcon = () => <ChevronLeftIcon className={iconClasses}/>
export { ChevronDownIcon as DropdownIcon } from '@heroicons/react/24/solid'
export { ChevronUpIcon as UpIcon } from '@heroicons/react/24/solid'
export { EnvelopeIcon as EmailIcon } from '@heroicons/react/24/solid'
export { Squares2X2Icon as ViewAllIcon } from '@heroicons/react/24/solid'
