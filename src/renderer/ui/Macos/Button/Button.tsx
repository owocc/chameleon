type IconButtonProps = {
  icon: JSX.Element
}

export function IconButton(props: IconButtonProps): JSX.Element {
  return (
    <button
      title="Toggle Sidebar"
      className="py-1 px-2 border border-transparent hover:bg-black/5 rounded-md hover:border-black/5 cursor-pointer drag-none"
    >
      {props.icon}
    </button>
  )
}
