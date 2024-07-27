
export enum ButtonTheme {
  Primary = 'primary',
  Text = 'text'
}

export const buttonThemeClassesRegistry: Record<ButtonTheme, string> = {
  [ButtonTheme.Primary]: '--primary',
  [ButtonTheme.Text]: '--text'
}