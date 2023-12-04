type Theme = {
  background: string;
  backgroundFocus: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  borderColor: string;
  borderColorFocus: string;
  borderColorHover: string;
  borderColorPress: string;
  color: string;
  colorFocus: string;
  colorHover: string;
  colorPress: string;
  colorTransparent: string;
  placeholderColor: string;
  shadowColor: string;
  shadowColorFocus: string;
  shadowColorHover: string;
  shadowColorPress: string;

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
  '#FFF',
  '#779897',
  '#648083',
  '#3E505B',
  '#32494C',
  '#03120E',
  '#1A1D1A',
  '#26413C',
  '#8AB0AB',
  '#202F2B',
  '#0F1814',
]

const ks = [
'background',
'backgroundFocus',
'backgroundHover',
'backgroundPress',
'backgroundStrong',
'backgroundTransparent',
'borderColor',
'borderColorFocus',
'borderColorHover',
'borderColorPress',
'color',
'colorFocus',
'colorHover',
'colorPress',
'colorTransparent',
'placeholderColor',
'shadowColor',
'shadowColorFocus',
'shadowColorHover',
'shadowColorPress']


const n1 = t([[0, 0],[1, 1],[2, 1],[3, 1],[4, 1],[5, 2],[6, 3],[7, 4],[8, 4],[9, 4],[10, 5],[11, 6],[12, 6],[13, 6],[14, 7],[15, 8],[16, 7],[17, 7],[18, 7],[19, 3]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 5],[1, 6],[2, 6],[3, 6],[4, 6],[5, 9],[6, 7],[7, 4],[8, 4],[9, 4],[10, 0],[11, 1],[12, 1],[13, 1],[14, 3],[15, 10],[16, 3],[17, 3],[18, 3],[19, 7]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 8],[1, 2],[2, 2],[3, 2],[4, 2],[5, 3],[6, 4],[7, 7],[8, 7],[9, 7],[10, 10],[11, 9],[12, 9],[13, 9],[14, 4],[15, 1],[16, 4],[17, 4],[18, 4],[19, 2]]) as Theme

export const light_subtle = n3 as Theme
const n4 = t([[0, 1],[1, 3],[2, 3],[3, 3],[4, 3],[5, 4],[6, 7],[7, 9],[8, 9],[9, 9],[10, 6],[11, 7],[12, 7],[13, 7],[14, 3],[15, 2],[16, 3],[17, 3],[18, 3],[19, 1]]) as Theme

export const light_alt = n4 as Theme
const n5 = t([[0, 2],[1, 4],[2, 4],[3, 4],[4, 4],[5, 7],[6, 9],[7, 6],[8, 6],[9, 6],[11, 4],[12, 4],[13, 4],[14, 2],[15, 3],[16, 2],[17, 2],[18, 2],[19, 8]]) as Theme

export const light_active = n5 as Theme
const n6 = t([[0, 10],[1, 9],[2, 9],[3, 9],[4, 9],[5, 7],[6, 4],[7, 3],[8, 3],[9, 3],[10, 8],[11, 2],[12, 2],[13, 2],[14, 4],[15, 6],[16, 4],[17, 4],[18, 4],[19, 9]]) as Theme

export const dark_subtle = n6 as Theme
const n7 = t([[0, 6],[1, 7],[2, 7],[3, 7],[4, 7],[5, 4],[6, 3],[7, 2],[8, 2],[9, 2],[10, 1],[11, 3],[12, 3],[13, 3],[14, 7],[15, 9],[16, 7],[17, 7],[18, 7],[19, 6]]) as Theme

export const dark_alt = n7 as Theme
const n8 = t([[0, 9],[1, 4],[2, 4],[3, 4],[4, 4],[5, 3],[6, 2],[7, 1],[8, 1],[9, 1],[11, 4],[12, 4],[13, 4],[14, 9],[15, 7],[16, 9],[17, 9],[18, 9],[19, 10]]) as Theme

export const dark_active = n8 as Theme