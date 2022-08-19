import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/images/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
