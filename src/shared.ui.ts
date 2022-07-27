import { css } from './stitches.config'

export const MAIN = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '2em',
  backgroundColor: '#edf0f2',
  color: '#303030',
  overflowY: 'auto',
})

export const TEXT = css({
  color: 'inherit',

  variants: {
    variant: {
      h1: {
        fontSize: 72,
        fontWeight: 700,
      },
      h2: {
        fontSize: 32,
        fontWeight: 600,
      },
      h4: {
        fontSize: 20,
        fontWeight: 400,
      },
      h5: {
        fontSize: 14,
        fontWeight: 400,
        color: '#a1a9b9',
      },
      h6: {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  },
  defaultVariants: {
    variant: 'h6',
  },
})

export const ROW = css({
  width: 'auto',
  display: 'flex',
  flexDirection: 'row',
  gap: '.5rem',
})

export const COLUMN = css({
  width: 'fit-content',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
})

export const ICON = css({
  width: 42,
  height: 42,
  padding: 8,
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'inherit',

  background: 'rgba(255, 255, 255, 0)',
  backdropFilter: 'blur(13px)',
  '-webkit-backdrop-filter': 'blur(13px)',
  // border: '1px solid rgba(255, 255, 255, 0.31)',
})

export const LIST = css({
  width: 'auto',
  height: 'fit-content',
  listStyleType: 'none',
})

export const LIST_ITEM = css({
  width: '100%',
  height: '3rem',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  '& p': {
    minWidth: 50,
  },
})
