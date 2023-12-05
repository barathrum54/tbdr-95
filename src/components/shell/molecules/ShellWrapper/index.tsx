import { ShellContainer } from '../../atoms/ShellContainer';
import './style.scss'

type Props = {
  children: React.ReactNode;
}

export const ShellWrapper = (props: Props) => {
  return (
    <>
      <div className="shell-wrapper">
        <ShellContainer>
          {props.children}
        </ShellContainer>
      </div>
    </>
  )
}