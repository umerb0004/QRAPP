export interface SigninProps {
  providers: {
    id: string
    name: string
  }[]
}

interface SignoutProps {
  session:
    | {
        user?: UserInfo
        | undefined
        | null
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
  component?: React.FC<any>;
  props?: { [key: string]: unknown };
  isVisible?: boolean;
  closable?: boolean;
  onClose?: Function;
  closeModal?: Function;
  width?: number;
  title?: string;
  className?: string;
  enableBottomSheet?: boolean;
  fullScreen?: boolean;
  closeIcon?: boolean;
  headingClassName?: boolean;
  headingComponent?: React.FC<any>;
  bottomSheetFooter?: React.FC<any>;
  bottomSheetClassName?: string;
  modalFooter?: JSX.Element[];
  closeable?: boolean;
  centered?: boolean;
  children?: any;
}
