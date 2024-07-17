import { Button, type ButtonProps } from 'react-aria-components'
interface IconButtonProps extends ButtonProps {
  icon: JSX.Element
}

/** 图标按钮 */
export function IconButton(props: IconButtonProps): JSX.Element {
  return (
    <Button
      {...props}
      className="py-1 px-2 border border-transparent hover:bg-black/5 rounded-md hover:border-black/5 cursor-pointer drag-none"
    >
      {props.icon}
    </Button>
  )
}
