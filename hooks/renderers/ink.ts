import { isDark } from '../theme.ts'

const LIGHT_INK = '#d4d4d4'
const DARK_INK = '#1f1f1f'

/** Text and line color that reads on a transparent background in the theme. */
export const inkFor = (theme: string) => (isDark(theme) ? LIGHT_INK : DARK_INK)
