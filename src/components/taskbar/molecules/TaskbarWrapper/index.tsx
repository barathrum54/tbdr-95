import { TaskbarContainer } from '../../atoms/TaskbarContainer';
import { StartButton } from '../../atoms/StartButton';
import { SystemTrayWrapper } from '../SystemTrayWrapper';
type Props = {}

export const TaskbarWrapper = (props: Props) => {
  return (
    <>
      <TaskbarContainer>
        <StartButton />
        <SystemTrayWrapper />
      </TaskbarContainer>
    </>
  )
}