import { useState } from 'react'
import {
  Label,
  Separator,
  SizeTokens,
  Switch,
  XStack,
  useIsomorphicLayoutEffect,
  useTheme,
} from 'tamagui'
import { useThemeSetting } from '@tamagui/next-theme'

export const ThemeSwitch = (props: { size: SizeTokens; defaultChecked?: boolean }) => {
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`
  const themeSetting = useThemeSetting()!
  const [clientTheme, setClientTheme] = useState<string>('light')

  // Works only for next
  // TODO Find alternative for mobile
  useIsomorphicLayoutEffect(() => {
    const theme =
      themeSetting.resolvedTheme === 'system'
        ? themeSetting.systemTheme
        : themeSetting.resolvedTheme

    setClientTheme(theme || 'light')
  }, [themeSetting.current, themeSetting.resolvedTheme])
  
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
        {clientTheme}
      </Label>
      <Switch id={id} size={props.size} defaultChecked={props.defaultChecked}>
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  )
}
