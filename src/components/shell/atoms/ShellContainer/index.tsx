import './style.scss'

type Props = {
  children: React.ReactNode;
}

export const ShellContainer = (props: Props) => {
  return (
    <>
      <div className="shell-container">
        {props.children}
      </div>
    </>
  )
}