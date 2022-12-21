import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { DocumentMinusIcon } from '@heroicons/react/24/solid'
import { GiftIcon } from '@heroicons/react/24/solid'
import { PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import { TagIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'

const iconClasses = 'h-6 w-6 color: text-neutral-600 group-hover:fill-blue-500 group-hover:scale-105'

export const AwardIcon = () => <GiftIcon className={iconClasses} />
export const DashboardIcon = () => <RectangleGroupIcon className={iconClasses} />
export const HomeIcon = () => <TagIcon className={iconClasses} />
export const PeopleIcon = () => <UserGroupIcon className={iconClasses} />
export const ReportIcon = () => <PresentationChartBarIcon className={iconClasses} />
export const ReviewIcon = () => <DocumentMinusIcon className={iconClasses} />
export const ReviewTemplateIcon = () => <DocumentTextIcon className={iconClasses} />
export const SettingsIcon = () => <Cog6ToothIcon className={iconClasses} />
export const TagsIcon = () => <TagIcon className={iconClasses} />
