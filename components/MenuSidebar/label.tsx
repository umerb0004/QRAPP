import { menuLabelClasses } from '@comp/MenuSidebar/style'
import { useRouter } from 'next/router'

import React from 'react'

export default function Label({ label, collapsed, link }) {
  const router = useRouter()
  return (
    collapsed
    ? (<span className={router.pathname == `${link}` ? 'active' : menuLabelClasses}>
      {label}
    </span>
    ) : null
  )
}
