import { useThemeSetting } from '@tamagui/next-theme'
import { useState, useEffect } from 'react'
import { useIsomorphicLayoutEffect } from 'tamagui'
import { useRootTheme } from '@tamagui/next-theme'

export const useCurrentTheme = (): [string, () => void] => {
  const themeSetting = useThemeSetting()!
  const [clientTheme, setClientTheme] = useState<string>('light')

  useIsomorphicLayoutEffect(() => {
    const systemIsDark = window.matchMedia(`(prefers-color-scheme: dark)`)?.matches
    const theme =
      themeSetting.resolvedTheme === 'system'
        ? themeSetting.systemTheme
        : themeSetting.resolvedTheme
    const themeColor = theme === 'dark' || systemIsDark ? '#050505' : '#fff'

    document.querySelector('#theme-color')?.setAttribute('content', themeColor)

    setClientTheme(themeSetting.current || 'light')
  }, [themeSetting.current, themeSetting.resolvedTheme])

  return [clientTheme, themeSetting.toggle]
}
