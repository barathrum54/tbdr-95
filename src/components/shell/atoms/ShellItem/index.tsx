import './style.scss'

type Props = {
  children: React.ReactNode;
}

export const ShellItem = (props: Props) => {
  return (
    <>
      <div className="shell-item">
        {props.children}
      </div>
    </>
  )
}