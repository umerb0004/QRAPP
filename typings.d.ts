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
  closable?: boolean
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
  children?: unknown
}

export type Tag<T> = keyof T

export type Marks = {
  Ownership: number | undefined
  Innovation: number | undefined
  WorkEthics: number | undefined
  Productivity: number | undefined
  Responsibility: number | undefined
  TimeManagement: number | undefined
}

export type Feedback<Type> = {
  [Property in keyof Type as `feedback${Capitalize<string & Property>}`]: string
}

export type InputFieldDetails<T> = {
  tag: Tag<T>
  desc: keyof Feedback<T>
  label: Tag<T>
}

export type ReviewFormProps = {
  name: string
  email: string
  profile: string
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

interface SessionProps {
  req: IncomingMessage
}
