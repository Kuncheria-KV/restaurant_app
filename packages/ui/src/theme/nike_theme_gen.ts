type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(155, 40.0%, 14.0%, 0)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(137, 72.0%, 94.0%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
  'transparent',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 20],[7, 21],[8, 22],[9, 23],[10, 24],[11, 0],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 13],[18, 0],[19, 24],[20, 0],[21, 24],[22, 12],[23, 18],[24, 19],[25, 17],[26, 18],[27, 22]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 25],[1, 26],[2, 27],[3, 28],[4, 29],[5, 30],[6, 31],[7, 32],[8, 33],[9, 34],[10, 35],[11, 11],[12, 26],[13, 27],[14, 28],[15, 29],[16, 25],[17, 36],[18, 11],[19, 35],[20, 11],[21, 35],[22, 37],[23, 28],[24, 29],[25, 28],[26, 28],[27, 33]]) as Theme

export const light_orange = n3 as Theme
const n4 = t([[0, 38],[1, 39],[2, 40],[3, 41],[4, 42],[5, 43],[6, 44],[7, 45],[8, 46],[9, 47],[10, 48],[11, 11],[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 49],[18, 11],[19, 48],[20, 11],[21, 48],[22, 50],[23, 41],[24, 42],[25, 41],[26, 41],[27, 46]]) as Theme

export const light_green = n4 as Theme
const n5 = t([[0, 51],[1, 52],[2, 53],[3, 54],[4, 55],[5, 56],[6, 57],[7, 32],[8, 58],[9, 59],[10, 60],[11, 0],[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 61],[18, 0],[19, 60],[20, 0],[21, 60],[22, 62],[23, 55],[24, 56],[25, 54],[26, 55],[27, 58]]) as Theme

export const dark_orange = n5 as Theme
const n6 = t([[0, 63],[1, 64],[2, 65],[3, 66],[4, 67],[5, 68],[6, 69],[7, 45],[8, 70],[9, 71],[10, 72],[11, 0],[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 73],[18, 0],[19, 72],[20, 0],[21, 72],[22, 74],[23, 67],[24, 68],[25, 66],[26, 67],[27, 70]]) as Theme

export const dark_green = n6 as Theme
const n7 = t([[12, 75]]) as Theme

export const light_SheetOverlay = n7 as Theme
export const light_DialogOverlay = n7 as Theme
export const light_ModalOverlay = n7 as Theme
export const light_orange_SheetOverlay = n7 as Theme
export const light_orange_DialogOverlay = n7 as Theme
export const light_orange_ModalOverlay = n7 as Theme
export const light_green_SheetOverlay = n7 as Theme
export const light_green_DialogOverlay = n7 as Theme
export const light_green_ModalOverlay = n7 as Theme
export const light_subtle_SheetOverlay = n7 as Theme
export const light_subtle_DialogOverlay = n7 as Theme
export const light_subtle_ModalOverlay = n7 as Theme
export const light_alt_SheetOverlay = n7 as Theme
export const light_alt_DialogOverlay = n7 as Theme
export const light_alt_ModalOverlay = n7 as Theme
export const light_active_SheetOverlay = n7 as Theme
export const light_active_DialogOverlay = n7 as Theme
export const light_active_ModalOverlay = n7 as Theme
export const light_orange_subtle_SheetOverlay = n7 as Theme
export const light_orange_subtle_DialogOverlay = n7 as Theme
export const light_orange_subtle_ModalOverlay = n7 as Theme
export const light_orange_alt_SheetOverlay = n7 as Theme
export const light_orange_alt_DialogOverlay = n7 as Theme
export const light_orange_alt_ModalOverlay = n7 as Theme
export const light_orange_active_SheetOverlay = n7 as Theme
export const light_orange_active_DialogOverlay = n7 as Theme
export const light_orange_active_ModalOverlay = n7 as Theme
export const light_green_subtle_SheetOverlay = n7 as Theme
export const light_green_subtle_DialogOverlay = n7 as Theme
export const light_green_subtle_ModalOverlay = n7 as Theme
export const light_green_alt_SheetOverlay = n7 as Theme
export const light_green_alt_DialogOverlay = n7 as Theme
export const light_green_alt_ModalOverlay = n7 as Theme
export const light_green_active_SheetOverlay = n7 as Theme
export const light_green_active_DialogOverlay = n7 as Theme
export const light_green_active_ModalOverlay = n7 as Theme
const n8 = t([[12, 76]]) as Theme

export const dark_SheetOverlay = n8 as Theme
export const dark_DialogOverlay = n8 as Theme
export const dark_ModalOverlay = n8 as Theme
export const dark_orange_SheetOverlay = n8 as Theme
export const dark_orange_DialogOverlay = n8 as Theme
export const dark_orange_ModalOverlay = n8 as Theme
export const dark_green_SheetOverlay = n8 as Theme
export const dark_green_DialogOverlay = n8 as Theme
export const dark_green_ModalOverlay = n8 as Theme
export const dark_subtle_SheetOverlay = n8 as Theme
export const dark_subtle_DialogOverlay = n8 as Theme
export const dark_subtle_ModalOverlay = n8 as Theme
export const dark_alt_SheetOverlay = n8 as Theme
export const dark_alt_DialogOverlay = n8 as Theme
export const dark_alt_ModalOverlay = n8 as Theme
export const dark_active_SheetOverlay = n8 as Theme
export const dark_active_DialogOverlay = n8 as Theme
export const dark_active_ModalOverlay = n8 as Theme
export const dark_orange_subtle_SheetOverlay = n8 as Theme
export const dark_orange_subtle_DialogOverlay = n8 as Theme
export const dark_orange_subtle_ModalOverlay = n8 as Theme
export const dark_orange_alt_SheetOverlay = n8 as Theme
export const dark_orange_alt_DialogOverlay = n8 as Theme
export const dark_orange_alt_ModalOverlay = n8 as Theme
export const dark_orange_active_SheetOverlay = n8 as Theme
export const dark_orange_active_DialogOverlay = n8 as Theme
export const dark_orange_active_ModalOverlay = n8 as Theme
export const dark_green_subtle_SheetOverlay = n8 as Theme
export const dark_green_subtle_DialogOverlay = n8 as Theme
export const dark_green_subtle_ModalOverlay = n8 as Theme
export const dark_green_alt_SheetOverlay = n8 as Theme
export const dark_green_alt_DialogOverlay = n8 as Theme
export const dark_green_alt_ModalOverlay = n8 as Theme
export const dark_green_active_SheetOverlay = n8 as Theme
export const dark_green_active_DialogOverlay = n8 as Theme
export const dark_green_active_ModalOverlay = n8 as Theme
const n9 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_subtle = n9 as Theme
const n10 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt = n10 as Theme
const n11 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_active = n11 as Theme
const n12 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 20],[6, 21],[7, 22],[8, 23],[9, 24],[10, 0],[11, 0],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 0],[23, 19],[24, 20],[25, 18],[26, 19],[27, 21]]) as Theme

export const dark_subtle = n12 as Theme
const n13 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 20],[5, 21],[6, 22],[7, 23],[8, 24],[9, 0],[10, 0],[11, 0],[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 23],[19, 22],[20, 23],[21, 22],[22, 24],[23, 20],[24, 21],[25, 19],[26, 20],[27, 20]]) as Theme

export const dark_alt = n13 as Theme
const n14 = t([[0, 17],[1, 18],[2, 19],[3, 20],[4, 21],[5, 22],[6, 23],[7, 24],[8, 0],[9, 12],[10, 12],[11, 12],[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[19, 21],[20, 22],[21, 21],[22, 23],[23, 21],[24, 22],[25, 20],[26, 21],[27, 19]]) as Theme

export const dark_active = n14 as Theme
const n15 = t([[0, 26],[1, 27],[2, 28],[3, 29],[4, 30],[5, 31],[6, 32],[7, 33],[8, 34],[9, 35],[10, 11],[11, 11],[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 25],[18, 35],[19, 34],[20, 35],[21, 34],[22, 11],[23, 29],[24, 30],[25, 29],[26, 29],[27, 32]]) as Theme

export const light_orange_subtle = n15 as Theme
const n16 = t([[0, 27],[1, 28],[2, 29],[3, 30],[4, 31],[5, 32],[6, 33],[7, 34],[8, 35],[9, 11],[10, 11],[11, 11],[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 34],[19, 33],[20, 34],[21, 33],[22, 35],[23, 30],[24, 31],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_alt = n16 as Theme
const n17 = t([[0, 28],[1, 29],[2, 30],[3, 31],[4, 32],[5, 33],[6, 34],[7, 35],[8, 11],[9, 37],[10, 37],[11, 37],[12, 29],[13, 30],[14, 31],[15, 32],[16, 28],[17, 27],[19, 32],[20, 33],[21, 32],[22, 34],[23, 31],[24, 32],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_active = n17 as Theme
const n18 = t([[0, 39],[1, 40],[2, 41],[3, 42],[4, 43],[5, 44],[6, 45],[7, 46],[8, 47],[9, 48],[10, 11],[11, 11],[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 48],[19, 47],[20, 48],[21, 47],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]]) as Theme

export const light_green_subtle = n18 as Theme
const n19 = t([[0, 40],[1, 41],[2, 42],[3, 43],[4, 44],[5, 45],[6, 46],[7, 47],[8, 48],[9, 11],[10, 11],[11, 11],[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[18, 47],[19, 46],[20, 47],[21, 46],[22, 48],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_alt = n19 as Theme
const n20 = t([[0, 41],[1, 42],[2, 43],[3, 44],[4, 45],[5, 46],[6, 47],[7, 48],[8, 11],[9, 50],[10, 50],[11, 50],[12, 42],[13, 43],[14, 44],[15, 45],[16, 41],[17, 40],[19, 45],[20, 46],[21, 45],[22, 47],[23, 44],[24, 45],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_active = n20 as Theme
const n21 = t([[0, 52],[1, 53],[2, 54],[3, 55],[4, 56],[5, 57],[6, 32],[7, 58],[8, 59],[9, 60],[10, 0],[11, 0],[12, 53],[13, 54],[14, 55],[15, 56],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 0],[23, 56],[24, 57],[25, 55],[26, 56],[27, 32]]) as Theme

export const dark_orange_subtle = n21 as Theme
const n22 = t([[0, 53],[1, 54],[2, 55],[3, 56],[4, 57],[5, 32],[6, 58],[7, 59],[8, 60],[9, 0],[10, 0],[11, 0],[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 59],[19, 58],[20, 59],[21, 58],[22, 60],[23, 57],[24, 32],[25, 56],[26, 57],[27, 57]]) as Theme

export const dark_orange_alt = n22 as Theme
const n23 = t([[0, 54],[1, 55],[2, 56],[3, 57],[4, 32],[5, 58],[6, 59],[7, 60],[8, 0],[9, 62],[10, 62],[11, 62],[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[19, 32],[20, 58],[21, 32],[22, 59],[23, 32],[24, 58],[25, 57],[26, 32],[27, 56]]) as Theme

export const dark_orange_active = n23 as Theme
const n24 = t([[0, 64],[1, 65],[2, 66],[3, 67],[4, 68],[5, 69],[6, 45],[7, 70],[8, 71],[9, 72],[10, 0],[11, 0],[12, 65],[13, 66],[14, 67],[15, 68],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 0],[23, 68],[24, 69],[25, 67],[26, 68],[27, 45]]) as Theme

export const dark_green_subtle = n24 as Theme
const n25 = t([[0, 65],[1, 66],[2, 67],[3, 68],[4, 69],[5, 45],[6, 70],[7, 71],[8, 72],[9, 0],[10, 0],[11, 0],[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 71],[19, 70],[20, 71],[21, 70],[22, 72],[23, 69],[24, 45],[25, 68],[26, 69],[27, 69]]) as Theme

export const dark_green_alt = n25 as Theme
const n26 = t([[0, 66],[1, 67],[2, 68],[3, 69],[4, 45],[5, 70],[6, 71],[7, 72],[8, 0],[9, 74],[10, 74],[11, 74],[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[19, 45],[20, 70],[21, 45],[22, 71],[23, 45],[24, 70],[25, 69],[26, 45],[27, 68]]) as Theme

export const dark_green_active = n26 as Theme
const n27 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n27 as Theme
const n28 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n28 as Theme
export const light_DrawerFrame = n28 as Theme
export const light_Progress = n28 as Theme
export const light_TooltipArrow = n28 as Theme
const n29 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 77],[24, 77],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Button = n29 as Theme
const n30 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_Checkbox = n30 as Theme
export const light_RadioGroupItem = n30 as Theme
export const light_Input = n30 as Theme
export const light_TextArea = n30 as Theme
const n31 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Switch = n31 as Theme
export const light_TooltipContent = n31 as Theme
export const light_SliderTrack = n31 as Theme
const n32 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n32 as Theme
const n33 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n33 as Theme
const n34 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n34 as Theme
export const light_Tooltip = n34 as Theme
export const light_ProgressIndicator = n34 as Theme
const n35 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 13],[18, 0],[19, 24],[20, 0],[21, 24],[22, 12],[23, 18],[24, 19],[25, 17],[26, 18],[27, 22]]) as Theme

export const dark_ListItem = n35 as Theme
const n36 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 0],[19, 24],[20, 0],[21, 24],[22, 0],[23, 19],[24, 20],[25, 18],[26, 19],[27, 21]]) as Theme

export const dark_Card = n36 as Theme
export const dark_DrawerFrame = n36 as Theme
export const dark_Progress = n36 as Theme
export const dark_TooltipArrow = n36 as Theme
const n37 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 0],[19, 24],[20, 0],[21, 24],[22, 24],[23, 77],[24, 77],[25, 19],[26, 20],[27, 20]]) as Theme

export const dark_Button = n37 as Theme
const n38 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 13],[18, 0],[19, 24],[20, 0],[21, 24],[22, 12],[23, 20],[24, 21],[25, 19],[26, 20],[27, 22]]) as Theme

export const dark_Checkbox = n38 as Theme
export const dark_RadioGroupItem = n38 as Theme
export const dark_Input = n38 as Theme
export const dark_TextArea = n38 as Theme
const n39 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 0],[19, 24],[20, 0],[21, 24],[22, 24],[23, 20],[24, 21],[25, 19],[26, 20],[27, 20]]) as Theme

export const dark_Switch = n39 as Theme
export const dark_TooltipContent = n39 as Theme
export const dark_SliderTrack = n39 as Theme
const n40 = t([[12, 0],[13, 0],[14, 24],[15, 23],[16, 0],[17, 0],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 23],[24, 22],[25, 24],[26, 23],[27, 15]]) as Theme

export const dark_SwitchThumb = n40 as Theme
const n41 = t([[12, 22],[13, 21],[14, 20],[15, 19],[16, 23],[17, 24],[18, 14],[19, 15],[20, 14],[21, 15],[22, 15],[23, 19],[24, 18],[25, 20],[26, 19],[27, 19]]) as Theme

export const dark_SliderTrackActive = n41 as Theme
const n42 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 0],[17, 12],[18, 14],[19, 15],[20, 14],[21, 15],[22, 13],[23, 21],[24, 20],[25, 22],[26, 21],[27, 17]]) as Theme

export const dark_SliderThumb = n42 as Theme
export const dark_Tooltip = n42 as Theme
export const dark_ProgressIndicator = n42 as Theme
const n43 = t([[12, 25],[13, 26],[14, 27],[15, 28],[16, 25],[17, 25],[18, 11],[19, 35],[20, 11],[21, 35],[22, 11],[23, 27],[24, 28],[25, 27],[26, 27],[27, 34]]) as Theme

export const light_orange_ListItem = n43 as Theme
const n44 = t([[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 25],[18, 11],[19, 35],[20, 11],[21, 35],[22, 11],[23, 29],[24, 30],[25, 29],[26, 29],[27, 32]]) as Theme

export const light_orange_Card = n44 as Theme
export const light_orange_DrawerFrame = n44 as Theme
export const light_orange_Progress = n44 as Theme
export const light_orange_TooltipArrow = n44 as Theme
const n45 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 11],[19, 35],[20, 11],[21, 35],[22, 35],[23, 77],[24, 77],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_Button = n45 as Theme
const n46 = t([[12, 26],[13, 27],[14, 28],[15, 29],[16, 25],[17, 36],[18, 11],[19, 35],[20, 11],[21, 35],[22, 37],[23, 30],[24, 31],[25, 30],[26, 30],[27, 33]]) as Theme

export const light_orange_Checkbox = n46 as Theme
export const light_orange_RadioGroupItem = n46 as Theme
export const light_orange_Input = n46 as Theme
export const light_orange_TextArea = n46 as Theme
const n47 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 11],[19, 35],[20, 11],[21, 35],[22, 35],[23, 30],[24, 31],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_Switch = n47 as Theme
export const light_orange_TooltipContent = n47 as Theme
export const light_orange_SliderTrack = n47 as Theme
const n48 = t([[12, 11],[13, 11],[14, 35],[15, 34],[16, 11],[17, 11],[18, 25],[19, 26],[20, 25],[21, 26],[22, 25],[23, 35],[24, 34],[25, 35],[26, 35],[27, 26]]) as Theme

export const light_orange_SwitchThumb = n48 as Theme
const n49 = t([[12, 33],[13, 32],[14, 31],[15, 30],[16, 34],[17, 35],[18, 25],[19, 26],[20, 25],[21, 26],[22, 26],[23, 31],[24, 30],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_SliderTrackActive = n49 as Theme
const n50 = t([[12, 35],[13, 34],[14, 33],[15, 32],[16, 11],[17, 37],[18, 25],[19, 26],[20, 25],[21, 26],[22, 36],[23, 33],[24, 32],[25, 33],[26, 33],[27, 28]]) as Theme

export const light_orange_SliderThumb = n50 as Theme
export const light_orange_Tooltip = n50 as Theme
export const light_orange_ProgressIndicator = n50 as Theme
const n51 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 38],[17, 38],[18, 11],[19, 48],[20, 11],[21, 48],[22, 11],[23, 40],[24, 41],[25, 40],[26, 40],[27, 47]]) as Theme

export const light_green_ListItem = n51 as Theme
const n52 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 11],[19, 48],[20, 11],[21, 48],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]]) as Theme

export const light_green_Card = n52 as Theme
export const light_green_DrawerFrame = n52 as Theme
export const light_green_Progress = n52 as Theme
export const light_green_TooltipArrow = n52 as Theme
const n53 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[18, 11],[19, 48],[20, 11],[21, 48],[22, 48],[23, 77],[24, 77],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_Button = n53 as Theme
const n54 = t([[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 49],[18, 11],[19, 48],[20, 11],[21, 48],[22, 50],[23, 43],[24, 44],[25, 43],[26, 43],[27, 46]]) as Theme

export const light_green_Checkbox = n54 as Theme
export const light_green_RadioGroupItem = n54 as Theme
export const light_green_Input = n54 as Theme
export const light_green_TextArea = n54 as Theme
const n55 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[18, 11],[19, 48],[20, 11],[21, 48],[22, 48],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_Switch = n55 as Theme
export const light_green_TooltipContent = n55 as Theme
export const light_green_SliderTrack = n55 as Theme
const n56 = t([[12, 11],[13, 11],[14, 48],[15, 47],[16, 11],[17, 11],[18, 38],[19, 39],[20, 38],[21, 39],[22, 38],[23, 48],[24, 47],[25, 48],[26, 48],[27, 39]]) as Theme

export const light_green_SwitchThumb = n56 as Theme
const n57 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 47],[17, 48],[18, 38],[19, 39],[20, 38],[21, 39],[22, 39],[23, 44],[24, 43],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_SliderTrackActive = n57 as Theme
const n58 = t([[12, 48],[13, 47],[14, 46],[15, 45],[16, 11],[17, 50],[18, 38],[19, 39],[20, 38],[21, 39],[22, 49],[23, 46],[24, 45],[25, 46],[26, 46],[27, 41]]) as Theme

export const light_green_SliderThumb = n58 as Theme
export const light_green_Tooltip = n58 as Theme
export const light_green_ProgressIndicator = n58 as Theme
const n59 = t([[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 61],[18, 0],[19, 60],[20, 0],[21, 60],[22, 62],[23, 55],[24, 56],[25, 54],[26, 55],[27, 58]]) as Theme

export const dark_orange_ListItem = n59 as Theme
const n60 = t([[12, 53],[13, 54],[14, 55],[15, 56],[16, 52],[17, 51],[18, 0],[19, 60],[20, 0],[21, 60],[22, 0],[23, 56],[24, 57],[25, 55],[26, 56],[27, 32]]) as Theme

export const dark_orange_Card = n60 as Theme
export const dark_orange_DrawerFrame = n60 as Theme
export const dark_orange_Progress = n60 as Theme
export const dark_orange_TooltipArrow = n60 as Theme
const n61 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 0],[19, 60],[20, 0],[21, 60],[22, 60],[23, 77],[24, 77],[25, 56],[26, 57],[27, 57]]) as Theme

export const dark_orange_Button = n61 as Theme
const n62 = t([[12, 52],[13, 53],[14, 54],[15, 55],[16, 51],[17, 61],[18, 0],[19, 60],[20, 0],[21, 60],[22, 62],[23, 57],[24, 32],[25, 56],[26, 57],[27, 58]]) as Theme

export const dark_orange_Checkbox = n62 as Theme
export const dark_orange_RadioGroupItem = n62 as Theme
export const dark_orange_Input = n62 as Theme
export const dark_orange_TextArea = n62 as Theme
const n63 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 0],[19, 60],[20, 0],[21, 60],[22, 60],[23, 57],[24, 32],[25, 56],[26, 57],[27, 57]]) as Theme

export const dark_orange_Switch = n63 as Theme
export const dark_orange_TooltipContent = n63 as Theme
export const dark_orange_SliderTrack = n63 as Theme
const n64 = t([[12, 0],[13, 0],[14, 60],[15, 59],[16, 0],[17, 0],[18, 51],[19, 52],[20, 51],[21, 52],[22, 51],[23, 59],[24, 58],[25, 60],[26, 59],[27, 52]]) as Theme

export const dark_orange_SwitchThumb = n64 as Theme
const n65 = t([[12, 58],[13, 32],[14, 57],[15, 56],[16, 59],[17, 60],[18, 51],[19, 52],[20, 51],[21, 52],[22, 52],[23, 56],[24, 55],[25, 57],[26, 56],[27, 56]]) as Theme

export const dark_orange_SliderTrackActive = n65 as Theme
const n66 = t([[12, 60],[13, 59],[14, 58],[15, 32],[16, 0],[17, 62],[18, 51],[19, 52],[20, 51],[21, 52],[22, 61],[23, 32],[24, 57],[25, 58],[26, 32],[27, 54]]) as Theme

export const dark_orange_SliderThumb = n66 as Theme
export const dark_orange_Tooltip = n66 as Theme
export const dark_orange_ProgressIndicator = n66 as Theme
const n67 = t([[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 73],[18, 0],[19, 72],[20, 0],[21, 72],[22, 74],[23, 67],[24, 68],[25, 66],[26, 67],[27, 70]]) as Theme

export const dark_green_ListItem = n67 as Theme
const n68 = t([[12, 65],[13, 66],[14, 67],[15, 68],[16, 64],[17, 63],[18, 0],[19, 72],[20, 0],[21, 72],[22, 0],[23, 68],[24, 69],[25, 67],[26, 68],[27, 45]]) as Theme

export const dark_green_Card = n68 as Theme
export const dark_green_DrawerFrame = n68 as Theme
export const dark_green_Progress = n68 as Theme
export const dark_green_TooltipArrow = n68 as Theme
const n69 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 0],[19, 72],[20, 0],[21, 72],[22, 72],[23, 77],[24, 77],[25, 68],[26, 69],[27, 69]]) as Theme

export const dark_green_Button = n69 as Theme
const n70 = t([[12, 64],[13, 65],[14, 66],[15, 67],[16, 63],[17, 73],[18, 0],[19, 72],[20, 0],[21, 72],[22, 74],[23, 69],[24, 45],[25, 68],[26, 69],[27, 70]]) as Theme

export const dark_green_Checkbox = n70 as Theme
export const dark_green_RadioGroupItem = n70 as Theme
export const dark_green_Input = n70 as Theme
export const dark_green_TextArea = n70 as Theme
const n71 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 0],[19, 72],[20, 0],[21, 72],[22, 72],[23, 69],[24, 45],[25, 68],[26, 69],[27, 69]]) as Theme

export const dark_green_Switch = n71 as Theme
export const dark_green_TooltipContent = n71 as Theme
export const dark_green_SliderTrack = n71 as Theme
const n72 = t([[12, 0],[13, 0],[14, 72],[15, 71],[16, 0],[17, 0],[18, 63],[19, 64],[20, 63],[21, 64],[22, 63],[23, 71],[24, 70],[25, 72],[26, 71],[27, 64]]) as Theme

export const dark_green_SwitchThumb = n72 as Theme
const n73 = t([[12, 70],[13, 45],[14, 69],[15, 68],[16, 71],[17, 72],[18, 63],[19, 64],[20, 63],[21, 64],[22, 64],[23, 68],[24, 67],[25, 69],[26, 68],[27, 68]]) as Theme

export const dark_green_SliderTrackActive = n73 as Theme
const n74 = t([[12, 72],[13, 71],[14, 70],[15, 45],[16, 0],[17, 74],[18, 63],[19, 64],[20, 63],[21, 64],[22, 73],[23, 45],[24, 69],[25, 70],[26, 45],[27, 66]]) as Theme

export const dark_green_SliderThumb = n74 as Theme
export const dark_green_Tooltip = n74 as Theme
export const dark_green_ProgressIndicator = n74 as Theme
const n75 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_subtle_ListItem = n75 as Theme
const n76 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_subtle_Card = n76 as Theme
export const light_subtle_DrawerFrame = n76 as Theme
export const light_subtle_Progress = n76 as Theme
export const light_subtle_TooltipArrow = n76 as Theme
const n77 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 77],[24, 77],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_subtle_Button = n77 as Theme
const n78 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_subtle_Checkbox = n78 as Theme
export const light_subtle_RadioGroupItem = n78 as Theme
export const light_subtle_Input = n78 as Theme
export const light_subtle_TextArea = n78 as Theme
const n79 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_subtle_Switch = n79 as Theme
export const light_subtle_TooltipContent = n79 as Theme
export const light_subtle_SliderTrack = n79 as Theme
const n80 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_subtle_SwitchThumb = n80 as Theme
const n81 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_subtle_SliderTrackActive = n81 as Theme
const n82 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_subtle_SliderThumb = n82 as Theme
export const light_subtle_Tooltip = n82 as Theme
export const light_subtle_ProgressIndicator = n82 as Theme
const n83 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt_ListItem = n83 as Theme
const n84 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt_Card = n84 as Theme
export const light_alt_DrawerFrame = n84 as Theme
export const light_alt_Progress = n84 as Theme
export const light_alt_TooltipArrow = n84 as Theme
const n85 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 77],[24, 77],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt_Button = n85 as Theme
const n86 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 8],[24, 9],[25, 7],[26, 8],[27, 6]]) as Theme

export const light_alt_Checkbox = n86 as Theme
export const light_alt_RadioGroupItem = n86 as Theme
export const light_alt_Input = n86 as Theme
export const light_alt_TextArea = n86 as Theme
const n87 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt_Switch = n87 as Theme
export const light_alt_TooltipContent = n87 as Theme
export const light_alt_SliderTrack = n87 as Theme
const n88 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_alt_SwitchThumb = n88 as Theme
const n89 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 3],[24, 2],[25, 4],[26, 3],[27, 7]]) as Theme

export const light_alt_SliderTrackActive = n89 as Theme
const n90 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_alt_SliderThumb = n90 as Theme
export const light_alt_Tooltip = n90 as Theme
export const light_alt_ProgressIndicator = n90 as Theme
const n91 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_active_ListItem = n91 as Theme
const n92 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[19, 7],[20, 8],[21, 7],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_active_Card = n92 as Theme
export const light_active_DrawerFrame = n92 as Theme
export const light_active_Progress = n92 as Theme
export const light_active_TooltipArrow = n92 as Theme
const n93 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 77],[24, 77],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Button = n93 as Theme
const n94 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 9],[24, 10],[25, 8],[26, 9],[27, 5]]) as Theme

export const light_active_Checkbox = n94 as Theme
export const light_active_RadioGroupItem = n94 as Theme
export const light_active_Input = n94 as Theme
export const light_active_TextArea = n94 as Theme
const n95 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 9],[24, 10],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Switch = n95 as Theme
export const light_active_TooltipContent = n95 as Theme
export const light_active_SliderTrack = n95 as Theme
const n96 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[19, 4],[20, 3],[21, 4],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_active_SwitchThumb = n96 as Theme
const n97 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 2],[24, 1],[25, 3],[26, 2],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n97 as Theme
const n98 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[19, 4],[20, 3],[21, 4],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_active_SliderThumb = n98 as Theme
export const light_active_Tooltip = n98 as Theme
export const light_active_ProgressIndicator = n98 as Theme
const n99 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 0],[23, 19],[24, 20],[25, 18],[26, 19],[27, 21]]) as Theme

export const dark_subtle_ListItem = n99 as Theme
const n100 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 24],[23, 20],[24, 21],[25, 19],[26, 20],[27, 20]]) as Theme

export const dark_subtle_Card = n100 as Theme
export const dark_subtle_DrawerFrame = n100 as Theme
export const dark_subtle_Progress = n100 as Theme
export const dark_subtle_TooltipArrow = n100 as Theme
const n101 = t([[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 77],[24, 77],[25, 20],[26, 21],[27, 19]]) as Theme

export const dark_subtle_Button = n101 as Theme
const n102 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 0],[23, 21],[24, 22],[25, 20],[26, 21],[27, 21]]) as Theme

export const dark_subtle_Checkbox = n102 as Theme
export const dark_subtle_RadioGroupItem = n102 as Theme
export const dark_subtle_Input = n102 as Theme
export const dark_subtle_TextArea = n102 as Theme
const n103 = t([[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 21],[24, 22],[25, 20],[26, 21],[27, 19]]) as Theme

export const dark_subtle_Switch = n103 as Theme
export const dark_subtle_TooltipContent = n103 as Theme
export const dark_subtle_SliderTrack = n103 as Theme
const n104 = t([[12, 0],[13, 24],[14, 23],[15, 22],[16, 0],[17, 0],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 22],[24, 21],[25, 23],[26, 22],[27, 16]]) as Theme

export const dark_subtle_SwitchThumb = n104 as Theme
const n105 = t([[12, 21],[13, 20],[14, 19],[15, 18],[16, 22],[17, 23],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 18],[24, 17],[25, 19],[26, 18],[27, 20]]) as Theme

export const dark_subtle_SliderTrackActive = n105 as Theme
const n106 = t([[12, 23],[13, 22],[14, 21],[15, 20],[16, 24],[17, 0],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 20],[24, 19],[25, 21],[26, 20],[27, 18]]) as Theme

export const dark_subtle_SliderThumb = n106 as Theme
export const dark_subtle_Tooltip = n106 as Theme
export const dark_subtle_ProgressIndicator = n106 as Theme
const n107 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 23],[19, 22],[20, 23],[21, 22],[22, 24],[23, 20],[24, 21],[25, 19],[26, 20],[27, 20]]) as Theme

export const dark_alt_ListItem = n107 as Theme
const n108 = t([[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[18, 23],[19, 22],[20, 23],[21, 22],[22, 23],[23, 21],[24, 22],[25, 20],[26, 21],[27, 19]]) as Theme

export const dark_alt_Card = n108 as Theme
export const dark_alt_DrawerFrame = n108 as Theme
export const dark_alt_Progress = n108 as Theme
export const dark_alt_TooltipArrow = n108 as Theme
const n109 = t([[12, 19],[13, 20],[14, 21],[15, 22],[16, 18],[17, 17],[18, 23],[19, 22],[20, 23],[21, 22],[22, 22],[23, 77],[24, 77],[25, 21],[26, 22],[27, 18]]) as Theme

export const dark_alt_Button = n109 as Theme
const n110 = t([[12, 17],[13, 18],[14, 19],[15, 20],[16, 16],[17, 15],[18, 23],[19, 22],[20, 23],[21, 22],[22, 24],[23, 22],[24, 23],[25, 21],[26, 22],[27, 20]]) as Theme

export const dark_alt_Checkbox = n110 as Theme
export const dark_alt_RadioGroupItem = n110 as Theme
export const dark_alt_Input = n110 as Theme
export const dark_alt_TextArea = n110 as Theme
const n111 = t([[12, 19],[13, 20],[14, 21],[15, 22],[16, 18],[17, 17],[18, 23],[19, 22],[20, 23],[21, 22],[22, 22],[23, 22],[24, 23],[25, 21],[26, 22],[27, 18]]) as Theme

export const dark_alt_Switch = n111 as Theme
export const dark_alt_TooltipContent = n111 as Theme
export const dark_alt_SliderTrack = n111 as Theme
const n112 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 0],[17, 0],[18, 16],[19, 17],[20, 16],[21, 17],[22, 14],[23, 21],[24, 20],[25, 22],[26, 21],[27, 17]]) as Theme

export const dark_alt_SwitchThumb = n112 as Theme
const n113 = t([[12, 20],[13, 19],[14, 18],[15, 17],[16, 21],[17, 22],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 17],[24, 16],[25, 18],[26, 17],[27, 21]]) as Theme

export const dark_alt_SliderTrackActive = n113 as Theme
const n114 = t([[12, 22],[13, 21],[14, 20],[15, 19],[16, 23],[17, 24],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 19],[24, 18],[25, 20],[26, 19],[27, 19]]) as Theme

export const dark_alt_SliderThumb = n114 as Theme
export const dark_alt_Tooltip = n114 as Theme
export const dark_alt_ProgressIndicator = n114 as Theme
const n115 = t([[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[19, 21],[20, 22],[21, 21],[22, 23],[23, 21],[24, 22],[25, 20],[26, 21],[27, 19]]) as Theme

export const dark_active_ListItem = n115 as Theme
const n116 = t([[12, 19],[13, 20],[14, 21],[15, 22],[16, 18],[17, 17],[19, 21],[20, 22],[21, 21],[22, 22],[23, 22],[24, 23],[25, 21],[26, 22],[27, 18]]) as Theme

export const dark_active_Card = n116 as Theme
export const dark_active_DrawerFrame = n116 as Theme
export const dark_active_Progress = n116 as Theme
export const dark_active_TooltipArrow = n116 as Theme
const n117 = t([[12, 20],[13, 21],[14, 22],[15, 23],[16, 19],[17, 18],[19, 21],[20, 22],[21, 21],[22, 21],[23, 77],[24, 77],[25, 22],[26, 23],[27, 17]]) as Theme

export const dark_active_Button = n117 as Theme
const n118 = t([[12, 18],[13, 19],[14, 20],[15, 21],[16, 17],[17, 16],[19, 21],[20, 22],[21, 21],[22, 23],[23, 23],[24, 24],[25, 22],[26, 23],[27, 19]]) as Theme

export const dark_active_Checkbox = n118 as Theme
export const dark_active_RadioGroupItem = n118 as Theme
export const dark_active_Input = n118 as Theme
export const dark_active_TextArea = n118 as Theme
const n119 = t([[12, 20],[13, 21],[14, 22],[15, 23],[16, 19],[17, 18],[19, 21],[20, 22],[21, 21],[22, 21],[23, 23],[24, 24],[25, 22],[26, 23],[27, 17]]) as Theme

export const dark_active_Switch = n119 as Theme
export const dark_active_TooltipContent = n119 as Theme
export const dark_active_SliderTrack = n119 as Theme
const n120 = t([[12, 23],[13, 22],[14, 21],[15, 20],[16, 24],[17, 0],[19, 18],[20, 17],[21, 18],[22, 14],[23, 20],[24, 19],[25, 21],[26, 20],[27, 18]]) as Theme

export const dark_active_SwitchThumb = n120 as Theme
const n121 = t([[12, 19],[13, 18],[14, 17],[15, 16],[16, 20],[17, 21],[19, 18],[20, 17],[21, 18],[22, 18],[23, 16],[24, 15],[25, 17],[26, 16],[27, 22]]) as Theme

export const dark_active_SliderTrackActive = n121 as Theme
const n122 = t([[12, 21],[13, 20],[14, 19],[15, 18],[16, 22],[17, 23],[19, 18],[20, 17],[21, 18],[22, 16],[23, 18],[24, 17],[25, 19],[26, 18],[27, 20]]) as Theme

export const dark_active_SliderThumb = n122 as Theme
export const dark_active_Tooltip = n122 as Theme
export const dark_active_ProgressIndicator = n122 as Theme
const n123 = t([[12, 26],[13, 27],[14, 28],[15, 29],[16, 25],[17, 25],[18, 35],[19, 34],[20, 35],[21, 34],[22, 11],[23, 28],[24, 29],[25, 28],[26, 28],[27, 33]]) as Theme

export const light_orange_subtle_ListItem = n123 as Theme
const n124 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 35],[19, 34],[20, 35],[21, 34],[22, 35],[23, 30],[24, 31],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_subtle_Card = n124 as Theme
export const light_orange_subtle_DrawerFrame = n124 as Theme
export const light_orange_subtle_Progress = n124 as Theme
export const light_orange_subtle_TooltipArrow = n124 as Theme
const n125 = t([[12, 29],[13, 30],[14, 31],[15, 32],[16, 28],[17, 27],[18, 35],[19, 34],[20, 35],[21, 34],[22, 34],[23, 77],[24, 77],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_subtle_Button = n125 as Theme
const n126 = t([[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 25],[18, 35],[19, 34],[20, 35],[21, 34],[22, 11],[23, 31],[24, 32],[25, 31],[26, 31],[27, 32]]) as Theme

export const light_orange_subtle_Checkbox = n126 as Theme
export const light_orange_subtle_RadioGroupItem = n126 as Theme
export const light_orange_subtle_Input = n126 as Theme
export const light_orange_subtle_TextArea = n126 as Theme
const n127 = t([[12, 29],[13, 30],[14, 31],[15, 32],[16, 28],[17, 27],[18, 35],[19, 34],[20, 35],[21, 34],[22, 34],[23, 31],[24, 32],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_subtle_Switch = n127 as Theme
export const light_orange_subtle_TooltipContent = n127 as Theme
export const light_orange_subtle_SliderTrack = n127 as Theme
const n128 = t([[12, 11],[13, 35],[14, 34],[15, 33],[16, 11],[17, 11],[18, 26],[19, 27],[20, 26],[21, 27],[22, 25],[23, 34],[24, 33],[25, 34],[26, 34],[27, 27]]) as Theme

export const light_orange_subtle_SwitchThumb = n128 as Theme
const n129 = t([[12, 32],[13, 31],[14, 30],[15, 29],[16, 33],[17, 34],[18, 26],[19, 27],[20, 26],[21, 27],[22, 27],[23, 30],[24, 29],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_subtle_SliderTrackActive = n129 as Theme
const n130 = t([[12, 34],[13, 33],[14, 32],[15, 31],[16, 35],[17, 11],[18, 26],[19, 27],[20, 26],[21, 27],[22, 25],[23, 32],[24, 31],[25, 32],[26, 32],[27, 29]]) as Theme

export const light_orange_subtle_SliderThumb = n130 as Theme
export const light_orange_subtle_Tooltip = n130 as Theme
export const light_orange_subtle_ProgressIndicator = n130 as Theme
const n131 = t([[12, 27],[13, 28],[14, 29],[15, 30],[16, 26],[17, 25],[18, 34],[19, 33],[20, 34],[21, 33],[22, 11],[23, 29],[24, 30],[25, 29],[26, 29],[27, 32]]) as Theme

export const light_orange_alt_ListItem = n131 as Theme
const n132 = t([[12, 29],[13, 30],[14, 31],[15, 32],[16, 28],[17, 27],[18, 34],[19, 33],[20, 34],[21, 33],[22, 34],[23, 31],[24, 32],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_alt_Card = n132 as Theme
export const light_orange_alt_DrawerFrame = n132 as Theme
export const light_orange_alt_Progress = n132 as Theme
export const light_orange_alt_TooltipArrow = n132 as Theme
const n133 = t([[12, 30],[13, 31],[14, 32],[15, 33],[16, 29],[17, 28],[18, 34],[19, 33],[20, 34],[21, 33],[22, 33],[23, 77],[24, 77],[25, 32],[26, 32],[27, 29]]) as Theme

export const light_orange_alt_Button = n133 as Theme
const n134 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[18, 34],[19, 33],[20, 34],[21, 33],[22, 35],[23, 32],[24, 33],[25, 32],[26, 32],[27, 31]]) as Theme

export const light_orange_alt_Checkbox = n134 as Theme
export const light_orange_alt_RadioGroupItem = n134 as Theme
export const light_orange_alt_Input = n134 as Theme
export const light_orange_alt_TextArea = n134 as Theme
const n135 = t([[12, 30],[13, 31],[14, 32],[15, 33],[16, 29],[17, 28],[18, 34],[19, 33],[20, 34],[21, 33],[22, 33],[23, 32],[24, 33],[25, 32],[26, 32],[27, 29]]) as Theme

export const light_orange_alt_Switch = n135 as Theme
export const light_orange_alt_TooltipContent = n135 as Theme
export const light_orange_alt_SliderTrack = n135 as Theme
const n136 = t([[12, 35],[13, 34],[14, 33],[15, 32],[16, 11],[17, 11],[18, 27],[19, 28],[20, 27],[21, 28],[22, 25],[23, 33],[24, 32],[25, 33],[26, 33],[27, 28]]) as Theme

export const light_orange_alt_SwitchThumb = n136 as Theme
const n137 = t([[12, 31],[13, 30],[14, 29],[15, 28],[16, 32],[17, 33],[18, 27],[19, 28],[20, 27],[21, 28],[22, 28],[23, 29],[24, 28],[25, 29],[26, 29],[27, 32]]) as Theme

export const light_orange_alt_SliderTrackActive = n137 as Theme
const n138 = t([[12, 33],[13, 32],[14, 31],[15, 30],[16, 34],[17, 35],[18, 27],[19, 28],[20, 27],[21, 28],[22, 26],[23, 31],[24, 30],[25, 31],[26, 31],[27, 30]]) as Theme

export const light_orange_alt_SliderThumb = n138 as Theme
export const light_orange_alt_Tooltip = n138 as Theme
export const light_orange_alt_ProgressIndicator = n138 as Theme
const n139 = t([[12, 28],[13, 29],[14, 30],[15, 31],[16, 27],[17, 26],[19, 32],[20, 33],[21, 32],[22, 35],[23, 30],[24, 31],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_active_ListItem = n139 as Theme
const n140 = t([[12, 30],[13, 31],[14, 32],[15, 33],[16, 29],[17, 28],[19, 32],[20, 33],[21, 32],[22, 33],[23, 32],[24, 33],[25, 32],[26, 32],[27, 29]]) as Theme

export const light_orange_active_Card = n140 as Theme
export const light_orange_active_DrawerFrame = n140 as Theme
export const light_orange_active_Progress = n140 as Theme
export const light_orange_active_TooltipArrow = n140 as Theme
const n141 = t([[12, 31],[13, 32],[14, 33],[15, 34],[16, 30],[17, 29],[19, 32],[20, 33],[21, 32],[22, 32],[23, 77],[24, 77],[25, 33],[26, 33],[27, 28]]) as Theme

export const light_orange_active_Button = n141 as Theme
const n142 = t([[12, 29],[13, 30],[14, 31],[15, 32],[16, 28],[17, 27],[19, 32],[20, 33],[21, 32],[22, 34],[23, 33],[24, 34],[25, 33],[26, 33],[27, 30]]) as Theme

export const light_orange_active_Checkbox = n142 as Theme
export const light_orange_active_RadioGroupItem = n142 as Theme
export const light_orange_active_Input = n142 as Theme
export const light_orange_active_TextArea = n142 as Theme
const n143 = t([[12, 31],[13, 32],[14, 33],[15, 34],[16, 30],[17, 29],[19, 32],[20, 33],[21, 32],[22, 32],[23, 33],[24, 34],[25, 33],[26, 33],[27, 28]]) as Theme

export const light_orange_active_Switch = n143 as Theme
export const light_orange_active_TooltipContent = n143 as Theme
export const light_orange_active_SliderTrack = n143 as Theme
const n144 = t([[12, 34],[13, 33],[14, 32],[15, 31],[16, 35],[17, 11],[19, 29],[20, 28],[21, 29],[22, 25],[23, 32],[24, 31],[25, 32],[26, 32],[27, 29]]) as Theme

export const light_orange_active_SwitchThumb = n144 as Theme
const n145 = t([[12, 30],[13, 29],[14, 28],[15, 27],[16, 31],[17, 32],[19, 29],[20, 28],[21, 29],[22, 29],[23, 28],[24, 27],[25, 28],[26, 28],[27, 33]]) as Theme

export const light_orange_active_SliderTrackActive = n145 as Theme
const n146 = t([[12, 32],[13, 31],[14, 30],[15, 29],[16, 33],[17, 34],[19, 29],[20, 28],[21, 29],[22, 27],[23, 30],[24, 29],[25, 30],[26, 30],[27, 31]]) as Theme

export const light_orange_active_SliderThumb = n146 as Theme
export const light_orange_active_Tooltip = n146 as Theme
export const light_orange_active_ProgressIndicator = n146 as Theme
const n147 = t([[12, 39],[13, 40],[14, 41],[15, 42],[16, 38],[17, 38],[18, 48],[19, 47],[20, 48],[21, 47],[22, 11],[23, 41],[24, 42],[25, 41],[26, 41],[27, 46]]) as Theme

export const light_green_subtle_ListItem = n147 as Theme
const n148 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[18, 48],[19, 47],[20, 48],[21, 47],[22, 48],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_subtle_Card = n148 as Theme
export const light_green_subtle_DrawerFrame = n148 as Theme
export const light_green_subtle_Progress = n148 as Theme
export const light_green_subtle_TooltipArrow = n148 as Theme
const n149 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 41],[17, 40],[18, 48],[19, 47],[20, 48],[21, 47],[22, 47],[23, 77],[24, 77],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_subtle_Button = n149 as Theme
const n150 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 48],[19, 47],[20, 48],[21, 47],[22, 11],[23, 44],[24, 45],[25, 44],[26, 44],[27, 45]]) as Theme

export const light_green_subtle_Checkbox = n150 as Theme
export const light_green_subtle_RadioGroupItem = n150 as Theme
export const light_green_subtle_Input = n150 as Theme
export const light_green_subtle_TextArea = n150 as Theme
const n151 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 41],[17, 40],[18, 48],[19, 47],[20, 48],[21, 47],[22, 47],[23, 44],[24, 45],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_subtle_Switch = n151 as Theme
export const light_green_subtle_TooltipContent = n151 as Theme
export const light_green_subtle_SliderTrack = n151 as Theme
const n152 = t([[12, 11],[13, 48],[14, 47],[15, 46],[16, 11],[17, 11],[18, 39],[19, 40],[20, 39],[21, 40],[22, 38],[23, 47],[24, 46],[25, 47],[26, 47],[27, 40]]) as Theme

export const light_green_subtle_SwitchThumb = n152 as Theme
const n153 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 46],[17, 47],[18, 39],[19, 40],[20, 39],[21, 40],[22, 40],[23, 43],[24, 42],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_subtle_SliderTrackActive = n153 as Theme
const n154 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 48],[17, 11],[18, 39],[19, 40],[20, 39],[21, 40],[22, 38],[23, 45],[24, 44],[25, 45],[26, 45],[27, 42]]) as Theme

export const light_green_subtle_SliderThumb = n154 as Theme
export const light_green_subtle_Tooltip = n154 as Theme
export const light_green_subtle_ProgressIndicator = n154 as Theme
const n155 = t([[12, 40],[13, 41],[14, 42],[15, 43],[16, 39],[17, 38],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 42],[24, 43],[25, 42],[26, 42],[27, 45]]) as Theme

export const light_green_alt_ListItem = n155 as Theme
const n156 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 41],[17, 40],[18, 47],[19, 46],[20, 47],[21, 46],[22, 47],[23, 44],[24, 45],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_alt_Card = n156 as Theme
export const light_green_alt_DrawerFrame = n156 as Theme
export const light_green_alt_Progress = n156 as Theme
export const light_green_alt_TooltipArrow = n156 as Theme
const n157 = t([[12, 43],[13, 44],[14, 45],[15, 46],[16, 42],[17, 41],[18, 47],[19, 46],[20, 47],[21, 46],[22, 46],[23, 77],[24, 77],[25, 45],[26, 45],[27, 42]]) as Theme

export const light_green_alt_Button = n157 as Theme
const n158 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[18, 47],[19, 46],[20, 47],[21, 46],[22, 48],[23, 45],[24, 46],[25, 45],[26, 45],[27, 44]]) as Theme

export const light_green_alt_Checkbox = n158 as Theme
export const light_green_alt_RadioGroupItem = n158 as Theme
export const light_green_alt_Input = n158 as Theme
export const light_green_alt_TextArea = n158 as Theme
const n159 = t([[12, 43],[13, 44],[14, 45],[15, 46],[16, 42],[17, 41],[18, 47],[19, 46],[20, 47],[21, 46],[22, 46],[23, 45],[24, 46],[25, 45],[26, 45],[27, 42]]) as Theme

export const light_green_alt_Switch = n159 as Theme
export const light_green_alt_TooltipContent = n159 as Theme
export const light_green_alt_SliderTrack = n159 as Theme
const n160 = t([[12, 48],[13, 47],[14, 46],[15, 45],[16, 11],[17, 11],[18, 40],[19, 41],[20, 40],[21, 41],[22, 38],[23, 46],[24, 45],[25, 46],[26, 46],[27, 41]]) as Theme

export const light_green_alt_SwitchThumb = n160 as Theme
const n161 = t([[12, 44],[13, 43],[14, 42],[15, 41],[16, 45],[17, 46],[18, 40],[19, 41],[20, 40],[21, 41],[22, 41],[23, 42],[24, 41],[25, 42],[26, 42],[27, 45]]) as Theme

export const light_green_alt_SliderTrackActive = n161 as Theme
const n162 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 47],[17, 48],[18, 40],[19, 41],[20, 40],[21, 41],[22, 39],[23, 44],[24, 43],[25, 44],[26, 44],[27, 43]]) as Theme

export const light_green_alt_SliderThumb = n162 as Theme
export const light_green_alt_Tooltip = n162 as Theme
export const light_green_alt_ProgressIndicator = n162 as Theme
const n163 = t([[12, 41],[13, 42],[14, 43],[15, 44],[16, 40],[17, 39],[19, 45],[20, 46],[21, 45],[22, 48],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_active_ListItem = n163 as Theme
const n164 = t([[12, 43],[13, 44],[14, 45],[15, 46],[16, 42],[17, 41],[19, 45],[20, 46],[21, 45],[22, 46],[23, 45],[24, 46],[25, 45],[26, 45],[27, 42]]) as Theme

export const light_green_active_Card = n164 as Theme
export const light_green_active_DrawerFrame = n164 as Theme
export const light_green_active_Progress = n164 as Theme
export const light_green_active_TooltipArrow = n164 as Theme
const n165 = t([[12, 44],[13, 45],[14, 46],[15, 47],[16, 43],[17, 42],[19, 45],[20, 46],[21, 45],[22, 45],[23, 77],[24, 77],[25, 46],[26, 46],[27, 41]]) as Theme

export const light_green_active_Button = n165 as Theme
const n166 = t([[12, 42],[13, 43],[14, 44],[15, 45],[16, 41],[17, 40],[19, 45],[20, 46],[21, 45],[22, 47],[23, 46],[24, 47],[25, 46],[26, 46],[27, 43]]) as Theme

export const light_green_active_Checkbox = n166 as Theme
export const light_green_active_RadioGroupItem = n166 as Theme
export const light_green_active_Input = n166 as Theme
export const light_green_active_TextArea = n166 as Theme
const n167 = t([[12, 44],[13, 45],[14, 46],[15, 47],[16, 43],[17, 42],[19, 45],[20, 46],[21, 45],[22, 45],[23, 46],[24, 47],[25, 46],[26, 46],[27, 41]]) as Theme

export const light_green_active_Switch = n167 as Theme
export const light_green_active_TooltipContent = n167 as Theme
export const light_green_active_SliderTrack = n167 as Theme
const n168 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 48],[17, 11],[19, 42],[20, 41],[21, 42],[22, 38],[23, 45],[24, 44],[25, 45],[26, 45],[27, 42]]) as Theme

export const light_green_active_SwitchThumb = n168 as Theme
const n169 = t([[12, 43],[13, 42],[14, 41],[15, 40],[16, 44],[17, 45],[19, 42],[20, 41],[21, 42],[22, 42],[23, 41],[24, 40],[25, 41],[26, 41],[27, 46]]) as Theme

export const light_green_active_SliderTrackActive = n169 as Theme
const n170 = t([[12, 45],[13, 44],[14, 43],[15, 42],[16, 46],[17, 47],[19, 42],[20, 41],[21, 42],[22, 40],[23, 43],[24, 42],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_active_SliderThumb = n170 as Theme
export const light_green_active_Tooltip = n170 as Theme
export const light_green_active_ProgressIndicator = n170 as Theme
const n171 = t([[12, 53],[13, 54],[14, 55],[15, 56],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 0],[23, 56],[24, 57],[25, 55],[26, 56],[27, 32]]) as Theme

export const dark_orange_subtle_ListItem = n171 as Theme
const n172 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 60],[19, 59],[20, 60],[21, 59],[22, 60],[23, 57],[24, 32],[25, 56],[26, 57],[27, 57]]) as Theme

export const dark_orange_subtle_Card = n172 as Theme
export const dark_orange_subtle_DrawerFrame = n172 as Theme
export const dark_orange_subtle_Progress = n172 as Theme
export const dark_orange_subtle_TooltipArrow = n172 as Theme
const n173 = t([[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[18, 60],[19, 59],[20, 60],[21, 59],[22, 59],[23, 77],[24, 77],[25, 57],[26, 32],[27, 56]]) as Theme

export const dark_orange_subtle_Button = n173 as Theme
const n174 = t([[12, 53],[13, 54],[14, 55],[15, 56],[16, 52],[17, 51],[18, 60],[19, 59],[20, 60],[21, 59],[22, 0],[23, 32],[24, 58],[25, 57],[26, 32],[27, 32]]) as Theme

export const dark_orange_subtle_Checkbox = n174 as Theme
export const dark_orange_subtle_RadioGroupItem = n174 as Theme
export const dark_orange_subtle_Input = n174 as Theme
export const dark_orange_subtle_TextArea = n174 as Theme
const n175 = t([[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[18, 60],[19, 59],[20, 60],[21, 59],[22, 59],[23, 32],[24, 58],[25, 57],[26, 32],[27, 56]]) as Theme

export const dark_orange_subtle_Switch = n175 as Theme
export const dark_orange_subtle_TooltipContent = n175 as Theme
export const dark_orange_subtle_SliderTrack = n175 as Theme
const n176 = t([[12, 0],[13, 60],[14, 59],[15, 58],[16, 0],[17, 0],[18, 52],[19, 53],[20, 52],[21, 53],[22, 51],[23, 58],[24, 32],[25, 59],[26, 58],[27, 53]]) as Theme

export const dark_orange_subtle_SwitchThumb = n176 as Theme
const n177 = t([[12, 32],[13, 57],[14, 56],[15, 55],[16, 58],[17, 59],[18, 52],[19, 53],[20, 52],[21, 53],[22, 53],[23, 55],[24, 54],[25, 56],[26, 55],[27, 57]]) as Theme

export const dark_orange_subtle_SliderTrackActive = n177 as Theme
const n178 = t([[12, 59],[13, 58],[14, 32],[15, 57],[16, 60],[17, 0],[18, 52],[19, 53],[20, 52],[21, 53],[22, 51],[23, 57],[24, 56],[25, 32],[26, 57],[27, 55]]) as Theme

export const dark_orange_subtle_SliderThumb = n178 as Theme
export const dark_orange_subtle_Tooltip = n178 as Theme
export const dark_orange_subtle_ProgressIndicator = n178 as Theme
const n179 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 59],[19, 58],[20, 59],[21, 58],[22, 60],[23, 57],[24, 32],[25, 56],[26, 57],[27, 57]]) as Theme

export const dark_orange_alt_ListItem = n179 as Theme
const n180 = t([[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[18, 59],[19, 58],[20, 59],[21, 58],[22, 59],[23, 32],[24, 58],[25, 57],[26, 32],[27, 56]]) as Theme

export const dark_orange_alt_Card = n180 as Theme
export const dark_orange_alt_DrawerFrame = n180 as Theme
export const dark_orange_alt_Progress = n180 as Theme
export const dark_orange_alt_TooltipArrow = n180 as Theme
const n181 = t([[12, 56],[13, 57],[14, 32],[15, 58],[16, 55],[17, 54],[18, 59],[19, 58],[20, 59],[21, 58],[22, 58],[23, 77],[24, 77],[25, 32],[26, 58],[27, 55]]) as Theme

export const dark_orange_alt_Button = n181 as Theme
const n182 = t([[12, 54],[13, 55],[14, 56],[15, 57],[16, 53],[17, 52],[18, 59],[19, 58],[20, 59],[21, 58],[22, 60],[23, 58],[24, 59],[25, 32],[26, 58],[27, 57]]) as Theme

export const dark_orange_alt_Checkbox = n182 as Theme
export const dark_orange_alt_RadioGroupItem = n182 as Theme
export const dark_orange_alt_Input = n182 as Theme
export const dark_orange_alt_TextArea = n182 as Theme
const n183 = t([[12, 56],[13, 57],[14, 32],[15, 58],[16, 55],[17, 54],[18, 59],[19, 58],[20, 59],[21, 58],[22, 58],[23, 58],[24, 59],[25, 32],[26, 58],[27, 55]]) as Theme

export const dark_orange_alt_Switch = n183 as Theme
export const dark_orange_alt_TooltipContent = n183 as Theme
export const dark_orange_alt_SliderTrack = n183 as Theme
const n184 = t([[12, 60],[13, 59],[14, 58],[15, 32],[16, 0],[17, 0],[18, 53],[19, 54],[20, 53],[21, 54],[22, 51],[23, 32],[24, 57],[25, 58],[26, 32],[27, 54]]) as Theme

export const dark_orange_alt_SwitchThumb = n184 as Theme
const n185 = t([[12, 57],[13, 56],[14, 55],[15, 54],[16, 32],[17, 58],[18, 53],[19, 54],[20, 53],[21, 54],[22, 54],[23, 54],[24, 53],[25, 55],[26, 54],[27, 32]]) as Theme

export const dark_orange_alt_SliderTrackActive = n185 as Theme
const n186 = t([[12, 58],[13, 32],[14, 57],[15, 56],[16, 59],[17, 60],[18, 53],[19, 54],[20, 53],[21, 54],[22, 52],[23, 56],[24, 55],[25, 57],[26, 56],[27, 56]]) as Theme

export const dark_orange_alt_SliderThumb = n186 as Theme
export const dark_orange_alt_Tooltip = n186 as Theme
export const dark_orange_alt_ProgressIndicator = n186 as Theme
const n187 = t([[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[19, 32],[20, 58],[21, 32],[22, 59],[23, 32],[24, 58],[25, 57],[26, 32],[27, 56]]) as Theme

export const dark_orange_active_ListItem = n187 as Theme
const n188 = t([[12, 56],[13, 57],[14, 32],[15, 58],[16, 55],[17, 54],[19, 32],[20, 58],[21, 32],[22, 58],[23, 58],[24, 59],[25, 32],[26, 58],[27, 55]]) as Theme

export const dark_orange_active_Card = n188 as Theme
export const dark_orange_active_DrawerFrame = n188 as Theme
export const dark_orange_active_Progress = n188 as Theme
export const dark_orange_active_TooltipArrow = n188 as Theme
const n189 = t([[12, 57],[13, 32],[14, 58],[15, 59],[16, 56],[17, 55],[19, 32],[20, 58],[21, 32],[22, 32],[23, 77],[24, 77],[25, 58],[26, 59],[27, 54]]) as Theme

export const dark_orange_active_Button = n189 as Theme
const n190 = t([[12, 55],[13, 56],[14, 57],[15, 32],[16, 54],[17, 53],[19, 32],[20, 58],[21, 32],[22, 59],[23, 59],[24, 60],[25, 58],[26, 59],[27, 56]]) as Theme

export const dark_orange_active_Checkbox = n190 as Theme
export const dark_orange_active_RadioGroupItem = n190 as Theme
export const dark_orange_active_Input = n190 as Theme
export const dark_orange_active_TextArea = n190 as Theme
const n191 = t([[12, 57],[13, 32],[14, 58],[15, 59],[16, 56],[17, 55],[19, 32],[20, 58],[21, 32],[22, 32],[23, 59],[24, 60],[25, 58],[26, 59],[27, 54]]) as Theme

export const dark_orange_active_Switch = n191 as Theme
export const dark_orange_active_TooltipContent = n191 as Theme
export const dark_orange_active_SliderTrack = n191 as Theme
const n192 = t([[12, 59],[13, 58],[14, 32],[15, 57],[16, 60],[17, 0],[19, 55],[20, 54],[21, 55],[22, 51],[23, 57],[24, 56],[25, 32],[26, 57],[27, 55]]) as Theme

export const dark_orange_active_SwitchThumb = n192 as Theme
const n193 = t([[12, 56],[13, 55],[14, 54],[15, 53],[16, 57],[17, 32],[19, 55],[20, 54],[21, 55],[22, 55],[23, 53],[24, 52],[25, 54],[26, 53],[27, 58]]) as Theme

export const dark_orange_active_SliderTrackActive = n193 as Theme
const n194 = t([[12, 32],[13, 57],[14, 56],[15, 55],[16, 58],[17, 59],[19, 55],[20, 54],[21, 55],[22, 53],[23, 55],[24, 54],[25, 56],[26, 55],[27, 57]]) as Theme

export const dark_orange_active_SliderThumb = n194 as Theme
export const dark_orange_active_Tooltip = n194 as Theme
export const dark_orange_active_ProgressIndicator = n194 as Theme
const n195 = t([[12, 65],[13, 66],[14, 67],[15, 68],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 0],[23, 68],[24, 69],[25, 67],[26, 68],[27, 45]]) as Theme

export const dark_green_subtle_ListItem = n195 as Theme
const n196 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 72],[19, 71],[20, 72],[21, 71],[22, 72],[23, 69],[24, 45],[25, 68],[26, 69],[27, 69]]) as Theme

export const dark_green_subtle_Card = n196 as Theme
export const dark_green_subtle_DrawerFrame = n196 as Theme
export const dark_green_subtle_Progress = n196 as Theme
export const dark_green_subtle_TooltipArrow = n196 as Theme
const n197 = t([[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[18, 72],[19, 71],[20, 72],[21, 71],[22, 71],[23, 77],[24, 77],[25, 69],[26, 45],[27, 68]]) as Theme

export const dark_green_subtle_Button = n197 as Theme
const n198 = t([[12, 65],[13, 66],[14, 67],[15, 68],[16, 64],[17, 63],[18, 72],[19, 71],[20, 72],[21, 71],[22, 0],[23, 45],[24, 70],[25, 69],[26, 45],[27, 45]]) as Theme

export const dark_green_subtle_Checkbox = n198 as Theme
export const dark_green_subtle_RadioGroupItem = n198 as Theme
export const dark_green_subtle_Input = n198 as Theme
export const dark_green_subtle_TextArea = n198 as Theme
const n199 = t([[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[18, 72],[19, 71],[20, 72],[21, 71],[22, 71],[23, 45],[24, 70],[25, 69],[26, 45],[27, 68]]) as Theme

export const dark_green_subtle_Switch = n199 as Theme
export const dark_green_subtle_TooltipContent = n199 as Theme
export const dark_green_subtle_SliderTrack = n199 as Theme
const n200 = t([[12, 0],[13, 72],[14, 71],[15, 70],[16, 0],[17, 0],[18, 64],[19, 65],[20, 64],[21, 65],[22, 63],[23, 70],[24, 45],[25, 71],[26, 70],[27, 65]]) as Theme

export const dark_green_subtle_SwitchThumb = n200 as Theme
const n201 = t([[12, 45],[13, 69],[14, 68],[15, 67],[16, 70],[17, 71],[18, 64],[19, 65],[20, 64],[21, 65],[22, 65],[23, 67],[24, 66],[25, 68],[26, 67],[27, 69]]) as Theme

export const dark_green_subtle_SliderTrackActive = n201 as Theme
const n202 = t([[12, 71],[13, 70],[14, 45],[15, 69],[16, 72],[17, 0],[18, 64],[19, 65],[20, 64],[21, 65],[22, 63],[23, 69],[24, 68],[25, 45],[26, 69],[27, 67]]) as Theme

export const dark_green_subtle_SliderThumb = n202 as Theme
export const dark_green_subtle_Tooltip = n202 as Theme
export const dark_green_subtle_ProgressIndicator = n202 as Theme
const n203 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 71],[19, 70],[20, 71],[21, 70],[22, 72],[23, 69],[24, 45],[25, 68],[26, 69],[27, 69]]) as Theme

export const dark_green_alt_ListItem = n203 as Theme
const n204 = t([[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[18, 71],[19, 70],[20, 71],[21, 70],[22, 71],[23, 45],[24, 70],[25, 69],[26, 45],[27, 68]]) as Theme

export const dark_green_alt_Card = n204 as Theme
export const dark_green_alt_DrawerFrame = n204 as Theme
export const dark_green_alt_Progress = n204 as Theme
export const dark_green_alt_TooltipArrow = n204 as Theme
const n205 = t([[12, 68],[13, 69],[14, 45],[15, 70],[16, 67],[17, 66],[18, 71],[19, 70],[20, 71],[21, 70],[22, 70],[23, 77],[24, 77],[25, 45],[26, 70],[27, 67]]) as Theme

export const dark_green_alt_Button = n205 as Theme
const n206 = t([[12, 66],[13, 67],[14, 68],[15, 69],[16, 65],[17, 64],[18, 71],[19, 70],[20, 71],[21, 70],[22, 72],[23, 70],[24, 71],[25, 45],[26, 70],[27, 69]]) as Theme

export const dark_green_alt_Checkbox = n206 as Theme
export const dark_green_alt_RadioGroupItem = n206 as Theme
export const dark_green_alt_Input = n206 as Theme
export const dark_green_alt_TextArea = n206 as Theme
const n207 = t([[12, 68],[13, 69],[14, 45],[15, 70],[16, 67],[17, 66],[18, 71],[19, 70],[20, 71],[21, 70],[22, 70],[23, 70],[24, 71],[25, 45],[26, 70],[27, 67]]) as Theme

export const dark_green_alt_Switch = n207 as Theme
export const dark_green_alt_TooltipContent = n207 as Theme
export const dark_green_alt_SliderTrack = n207 as Theme
const n208 = t([[12, 72],[13, 71],[14, 70],[15, 45],[16, 0],[17, 0],[18, 65],[19, 66],[20, 65],[21, 66],[22, 63],[23, 45],[24, 69],[25, 70],[26, 45],[27, 66]]) as Theme

export const dark_green_alt_SwitchThumb = n208 as Theme
const n209 = t([[12, 69],[13, 68],[14, 67],[15, 66],[16, 45],[17, 70],[18, 65],[19, 66],[20, 65],[21, 66],[22, 66],[23, 66],[24, 65],[25, 67],[26, 66],[27, 45]]) as Theme

export const dark_green_alt_SliderTrackActive = n209 as Theme
const n210 = t([[12, 70],[13, 45],[14, 69],[15, 68],[16, 71],[17, 72],[18, 65],[19, 66],[20, 65],[21, 66],[22, 64],[23, 68],[24, 67],[25, 69],[26, 68],[27, 68]]) as Theme

export const dark_green_alt_SliderThumb = n210 as Theme
export const dark_green_alt_Tooltip = n210 as Theme
export const dark_green_alt_ProgressIndicator = n210 as Theme
const n211 = t([[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[19, 45],[20, 70],[21, 45],[22, 71],[23, 45],[24, 70],[25, 69],[26, 45],[27, 68]]) as Theme

export const dark_green_active_ListItem = n211 as Theme
const n212 = t([[12, 68],[13, 69],[14, 45],[15, 70],[16, 67],[17, 66],[19, 45],[20, 70],[21, 45],[22, 70],[23, 70],[24, 71],[25, 45],[26, 70],[27, 67]]) as Theme

export const dark_green_active_Card = n212 as Theme
export const dark_green_active_DrawerFrame = n212 as Theme
export const dark_green_active_Progress = n212 as Theme
export const dark_green_active_TooltipArrow = n212 as Theme
const n213 = t([[12, 69],[13, 45],[14, 70],[15, 71],[16, 68],[17, 67],[19, 45],[20, 70],[21, 45],[22, 45],[23, 77],[24, 77],[25, 70],[26, 71],[27, 66]]) as Theme

export const dark_green_active_Button = n213 as Theme
const n214 = t([[12, 67],[13, 68],[14, 69],[15, 45],[16, 66],[17, 65],[19, 45],[20, 70],[21, 45],[22, 71],[23, 71],[24, 72],[25, 70],[26, 71],[27, 68]]) as Theme

export const dark_green_active_Checkbox = n214 as Theme
export const dark_green_active_RadioGroupItem = n214 as Theme
export const dark_green_active_Input = n214 as Theme
export const dark_green_active_TextArea = n214 as Theme
const n215 = t([[12, 69],[13, 45],[14, 70],[15, 71],[16, 68],[17, 67],[19, 45],[20, 70],[21, 45],[22, 45],[23, 71],[24, 72],[25, 70],[26, 71],[27, 66]]) as Theme

export const dark_green_active_Switch = n215 as Theme
export const dark_green_active_TooltipContent = n215 as Theme
export const dark_green_active_SliderTrack = n215 as Theme
const n216 = t([[12, 71],[13, 70],[14, 45],[15, 69],[16, 72],[17, 0],[19, 67],[20, 66],[21, 67],[22, 63],[23, 69],[24, 68],[25, 45],[26, 69],[27, 67]]) as Theme

export const dark_green_active_SwitchThumb = n216 as Theme
const n217 = t([[12, 68],[13, 67],[14, 66],[15, 65],[16, 69],[17, 45],[19, 67],[20, 66],[21, 67],[22, 67],[23, 65],[24, 64],[25, 66],[26, 65],[27, 70]]) as Theme

export const dark_green_active_SliderTrackActive = n217 as Theme
const n218 = t([[12, 45],[13, 69],[14, 68],[15, 67],[16, 70],[17, 71],[19, 67],[20, 66],[21, 67],[22, 65],[23, 67],[24, 66],[25, 68],[26, 67],[27, 69]]) as Theme

export const dark_green_active_SliderThumb = n218 as Theme
export const dark_green_active_Tooltip = n218 as Theme
export const dark_green_active_ProgressIndicator = n218 as Theme