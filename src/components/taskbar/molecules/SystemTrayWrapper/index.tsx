import { SystemTrayContainer } from '../../atoms/SystemTrayContainer';
import { Time } from '../../atoms/Time';
type Props = {}

export const SystemTrayWrapper = (props: Props) => {
  return (
    <>
      <SystemTrayContainer>
        <Time />
      </SystemTrayContainer>
    </>
  )
}