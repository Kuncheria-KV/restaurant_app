import { Button, Label, SizeTokens, Switch, XStack } from 'tamagui'
import { useCurrentTheme } from './useCurrentTheme'

const icons = {
  system: "system",
  light: "light",
  dark: "dark",
}

export const ThemeSwitch = (props: { size: SizeTokens; defaultChecked?: boolean }) => {
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`
  const [currentTheme, toggleTheme] = useCurrentTheme()
  const handleCheckedChange = () => {
    toggleTheme()
  }

  return (
    <XStack width={200} alignItems="center" space="$4">
      <Label
        paddingRight="$0"
        minWidth={90}
        justifyContent="flex-end"
        size={props.size}
        htmlFor={id}
        theme="alt"
      >
        {currentTheme}
      </Label>
      <Button
        onPress={handleCheckedChange}
        {...props}
        aria-label="Toggle light/dark color scheme"
        
      >
        {icons[currentTheme]}
      </Button>
    </XStack>
  )
}
