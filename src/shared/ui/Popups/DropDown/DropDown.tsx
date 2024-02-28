import { FC, ReactNode } from "react"
import type { DropDownProps, MenuProps } from "antd"
import { Dropdown } from "antd"
import { classNames } from "@/shared/lib/classNames"

interface CustomDropDownProps extends DropDownProps {
   items: MenuProps['items']
   children: ReactNode
   className?: string
   onClick?: (value?: any) => void
}

export const DropDown: FC<CustomDropDownProps> = (props) => {
   const { items, children, className, onClick, ...rest } = props

   return (
      <Dropdown
         menu={{ items }}
         trigger={['click']}
         className={classNames('dropdown', {}, [])}
         {...rest}
      >
         <a href="" onClick={(e) => e.preventDefault()}>
            {children}
         </a>
      </Dropdown>
   )
}
