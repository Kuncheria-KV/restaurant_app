import { useToastController } from '@tamagui/toast';
import { useColorScheme } from 'react-native'

export const useCurrentTheme = (): [string, () => void] => {
    const toast = useToastController()
    const scheme = useColorScheme();

    const toggleTheme = () => {
        toast.show('Toggle not Implemented', {
          message: "Feature not ready yet",
        })
      }

    return [scheme!, toggleTheme]
}