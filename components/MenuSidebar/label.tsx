import { menuLabelClasses } from '@comp/MenuSidebar/style'
import { useRouter } from 'next/router'

import React from 'react'

const Label = ({ label, collapsed, link }) => {
  const router = useRouter()
  return (
    collapsed ?
    <span className={menuLabelClasses + (router.pathname == `${link}` && ' active')}>
      {label}
    </span> : null
  )
}

export default Label
