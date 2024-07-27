
export enum ParagraphSize {
  Small = 'small',
  Regular = 'regular',
  Large = 'large'
}

export const paragraphSizeClassRegistry: Record<ParagraphSize, string> = {
  [ParagraphSize.Regular]: '--regular',
  [ParagraphSize.Large]: '--large',
  [ParagraphSize.Small]: '--small'
}
