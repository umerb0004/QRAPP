import { menuLabelClasses } from '@comp/MenuSidebar/style'

const Label = ({ label, collapsed }) =>
  collapsed
    ? (<span className={menuLabelClasses}>
      {label}
    </span>
    ) : null

export default Label
