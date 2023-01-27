import classNames from 'classnames'

export const addGoalButtonClasses = classNames(
  'flex justify-center items-center',
  'bg-blue-400 p-2 my-2 ml-auto mr-1 mb-1',
  'text-white font-medium uppercase text-xs',
  'rounded-full shadow outline-none',
  'focus:outline-none '
)

export const goalsSectionClasses = classNames(
  'flex flex-col items-start',
  'min-w-full mb-2'
)

export const goalsTitleClasses = classNames('font-medium text-lg mb-2')

export const goalsDateSectionClasses = classNames(
  'flex flex-row items-center justify-between',
  'w-full my-2 ml-auto '
)

export const durationHeadingClasses = classNames(
  'text-center text-md font-semibold',
  'mb-2 ml-1'
)

export const reviewFormPageClasses = classNames(
  'pb-5 bg-slate-50',
  'min-h-screen w-full',
  'text-neutral-600'
)

export const formBodyClasses = classNames(
  'max-w-[100%]',
  'mx-auto px-4 pb-6 my-3',
  'text-neutral-600'
)

export const quarterHeadingClasses = classNames(
  'flex flex-row justify-center items-center',
  'w-full m-auto pb-4',
  'text-2xl font-semibold'
)

export const formHeaderClasses = classNames(
  'flex flex-row',
  'w-full m-auto pb-4'
)

export const userDetailsClasses = classNames(
  'flex flex-col justify-center items-start',
  'text-md font-semibold',
  'ml-2'
)

export const ratingClasses = classNames(
  'flex flex-row items-center justify-between',
  'min-w-full'
)

export const submitButtonClasses = classNames(
  'flex justify-center items-center',
  'font-bold uppercase text-xs text-white',
  'bg-blue-400 py-4 px-6 mt-2 ml-auto mr-1 mb-1',
  'rounded-full shadow',
  'outline-none focus:outline-none',
  'hover:shadow-lg hover:scale-110',
  'transition ease-in-out delay-150'
)

const modalButtonClasses = (bgcolor: string) =>
  classNames(
    'flex justify-center items-center',
    'text-white font-medium uppercase text-xs',
    `${bgcolor} p-4 mt-2 mr-1 mb-1`,
    'rounded-xl shadow',
    'outline-none focus:outline-none'
  )

export const cancelButtonClasses = modalButtonClasses('bg-red-500')

export const confirmButtonClasses = modalButtonClasses('bg-blue-400')

export const cardClasses = classNames(
  'bg-white p-5 m-1 w-80 overflow-x-hidden',
  'rounded-xl',
  'border-solid rounded-md shadow-md',
  'transition-[height] duration-300',
  'cursor-pointer',
  'scrollbar-hide'
)

export const sidebarClasses = classNames(
  'flex flex-col items-center',
  'text-neutral-600',
  'max-w-[25rem]'
)
