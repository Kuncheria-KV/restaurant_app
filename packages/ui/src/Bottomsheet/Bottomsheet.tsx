import {Sheet} from '@my/ui'

export const BottomSheet = ({isOpen = false, toggleSheet, children}) => {
  return (
    <Sheet
      modal
      animation="medium"
      open={isOpen}
      onOpenChange={toggleSheet}
      snapPoints={[80]}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame ai="center" jc="center">
        <Sheet.Handle />
        {children}
      </Sheet.Frame>
    </Sheet>
  )
}
