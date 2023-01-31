import { Control } from 'react-hook-form'

export interface SigninProps {
  providers: {
    id: string
    name: string
  }[]
}

interface SignoutProps {
  session:
    | {
        user?: UserInfo | undefined | null
        expires?: string | undefined | null
      }
    | undefined
    | null
}

export type UserInfo = ImageProps & {
  name: string
  email: string
  designation?: string
}

type Person = {
  first_name: string
  last_name: string
  profile_pic: string
  email: string
}

interface UserDetails {
  lead: Person
  manager: Person
  team: Person[]
  userData: Person & {
    manager_id: number
    lead_id: number
    Designations: {
      name: string
    }
  }
}

export interface ModalProps {
  component?: React.FC<unknown>
  props?: { [key: string]: unknown }
  isVisible?: boolean
  onClose?: Function
  closeModal?: Function
  width?: number
  title?: string
  className?: string
  enableBottomSheet?: boolean
  fullScreen?: boolean
  closeIcon?: boolean
  headingClassName?: boolean
  headingComponent?: React.FC<unknown>
  bottomSheetFooter?: React.FC<unknown>
  bottomSheetClassName?: string
  modalFooter?: JSX.Element[]
  closeable?: boolean
  centered?: boolean
  destroyOnClose?: boolean
  children?: React.ReactNode
}

export type Tag<T> = keyof T

export type Tags = {
  OwnerShip: number | undefined
  Innovation: number | undefined
  WorkEthics: number | undefined
  Productivity: number | undefined
  Responsibility: number | undefined
  TimeManagement: number | undefined
}

export type Rating<Type> = {
  [Property in keyof Type as `${Property}.rating`]: number
}

export type Reason<Type> = {
  [Property in keyof Type as `${Property}.reason`]: string
}

type Data = {
  rating: number
  reason: string
}

export type FieldData<Type> = {
  [Property in keyof Type as `${Property}`]: Data
}

type Goal = {
  description: string
  duration: Date
}

export type FormFields = FieldData<Tags> & {
  goals: Goal[]
}

export type InputFieldDetails<T> = {
  id: number
  tag: keyof Rating<T>
  feedback: keyof Reason<T>
  desc: string
  label: Tag<T>
}

export type TagData = {
  rating: number
  reason: string
}

export type FormDataObject = {
  [K in keyof Tags]: TagData
}

export type FormReqData = FormDataObject & {
  userId: number
  goals: Goal[]
}

export type ReviewTags<T> = {
  name: Tag<T>
  description: string
  id: number
}

<<<<<<< HEAD
export type RatingProps = {
  control: Control<FormFields>
  desc: string
  feedback: keyof Reason<Tags>
  label: Tag<Tags>
  tag: keyof Rating<Tags>
}

=======
>>>>>>> 4fe426e (Conflicts Resolved)
export type ReviewModalProps = Person & {
  id: number
  designation_id: number
}

export type LastQuarterReview = {
  marks_received: FormDataObject
  quarter_no: number
  Tasks: Goal[]
}

export type SidebarProps = LastQuarterReview & {
  quarterSelected: number
}

export type ReviewPageProps = {
  user: ReviewFormProps
  quarterReview: LastQuarterReview
}

export type FormProps = {
  quarterSelected: number
  designation_id: number
  userId: number
}

export interface chartProps {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor: string[]
  }[]
}

export interface usersProps {
  id: string
  first_name: string
  last_name: string
  joining_date: string
  department_id: number
  designation_id: number
  Designations: { name: stirng }
  email: string
  employee_id: number
  lead_id: number
  manager_id: number
  on_leave: boolean
  partial_joining_date: string
  profile_pic: string
  created_at: string
  updated_at: string
}

export interface userReviews {
  id: string
  user_id: string
  estimated_point: float
  is_approved: boolean
  reviewed_by_id: number
  quarter_no: number
  created_at: string
}

export interface currentUser{
  id: string
}
interface SessionProps {
  req: IncomingMessage
}

export type ReviewTag = {
  id: number
  name: string
  description: string
}
