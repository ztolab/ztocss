const colors = require('../colors')

module.exports = {
  separator: '-',
  prefix: '',
  purge: [],
  constant: {
    column: 12,
    colors: {
      white:  '#fff',
      black:  '#000',
      transparent: 'transparent',
      current:  'currentColor',
      grey:     colors.grey,
      red:      colors.red,
      green:    colors.green,
      blue:     colors.blue,
      orange:   colors.orange,
      indigo:   colors.indigo,
    },
    breakpoints: {
      sm:       '640px',
      md:       '768px',
      lg:       '992px',
      xl:       '1280px',
      xxl:      '1440px'
    },
    spacing: {
      px:       '1px',
      0:        '0',
      0.5:      '0.125rem',
      1:        '0.25rem',
      1.5:      '0.375rem',
      2:        '0.5rem',
      2.5:      '0.625rem',
      3:        '0.75rem',
      3.5:      '0.875rem',
      4:        '1rem',
      5:        '1.25rem',
      6:        '1.5rem',
      7:        '1.75rem',
      8:        '2rem',
      9:        '2.25rem',
      10:       '2.5rem',
      11:       '2.75rem',
      12:       '3rem',
      14:       '3.5rem',
      16:       '4rem',
      20:       '5rem',
      24:       '6rem',
      28:       '7rem',
      32:       '8rem',
      36:       '9rem',
      40:       '10rem',
      44:       '11rem',
      48:       '12rem',
      52:       '13rem',
      56:       '14rem',
      60:       '15rem',
      64:       '16rem',
      72:       '18rem',
      80:       '20rem',
      96:       '24rem',
    },
    opacity: {
      0:        0,
      5:        0.05,
      10:       0.1,
      20:       0.2,
      25:       0.25,
      30:       0.3,
      40:       0.4,
      50:       0.5,
      60:       0.6,
      70:       0.7,
      75:       0.75,
      80:       0.8,
      90:       0.9,
      95:       0.95,
      100:      1,
    },
    radius: {
      0:        '0',
      0.5:      '0.125rem',
      DEFAULT:        '0.25rem',
      1.5:      '0.375rem',
      2:        '0.5rem',
      2.5:      '0.625rem',
      3:        '0.75rem',
      4:        '1rem',
      6:        '1.5rem',
      full:     '9999px'
    },
    borderWidth: {
      0:        '0px',
      DEFAULT:  '1px',
      2:        '2px',
      3:        '3px',
      4:        '4px',
      8:        '8px',
    },
    ratio: {
      full:     '100%',
      half:     '50%',
      '1/3':    `${100/3}%`,
      '2/3':    `${100/3*2}%`,
      '1/4':    `${100/4}%`,
      '2/4':    `${100/4*2}%`,
      '3/4':    `${100/4*3}%`,
      '1/5':    `${100/5}%`,
      '2/5':    `${100/5*2}%`,
      '3/5':    `${100/5*3}%`,
      '4/5':    `${100/5*4}%`,
      '1/6':    `${100/6}%`,
      '2/6':    `${100/6*2}%`,
      '3/6':    `${100/6*3}%`,
      '4/6':    `${100/6*4}%`,
      '5/6':    `${100/6*5}%`,
      '1/12':   `${100/12}%`,
      '2/12':   `${100/12*2}%`,
      '3/12':   `${100/12*3}%`,
      '4/12':   `${100/12*4}%`,
      '5/12':   `${100/12*5}%`,
      '6/12':   `${100/12*6}%`,
      '7/12':   `${100/12*7}%`,
      '8/12':   `${100/12*8}%`,
      '9/12':   `${100/12*9}%`,
      '10/12':  `${100/12*10}%`,
      '11/12':  `${100/12*11}%`,
    },
    duration: {
      75:   '75ms',
      100:  '100ms',
      150:  '150ms',
      200:  '200ms',
      300:  '300ms',
      500:  '500ms',
      700:  '700ms',
      1000: '1000ms',
    },
    transformVariables: {
      '--zto-translate-x': '0',
      '--zto-translate-y': '0',
      '--zto-rotate': '0',
      '--zto-skew-x': '0',
      '--zto-skew-y': '0',
      '--zto-scale-x': '1',
      '--zto-scale-y': '1',
    },
    transform: [
      'rotate(var(--zto-rotate))',
      'skewX(var(--zto-skew-x))',
      'skewY(var(--zto-skew-y))',
      'scaleX(var(--zto-scale-x))',
      'scaleY(var(--zto-scale-y))'
    ],
    rotate: {
      0:    '0deg',
      1:    '1deg',
      2:    '2deg',
      3:    '3deg',
      6:    '6deg',
      12:   '12deg',
      45:   '45deg',
      90:   '90deg',
      180:  '180deg',
    },
    scale: {
      0:    '0',
      50:   '.5',
      75:   '.75',
      90:   '.9',
      95:   '.95',
      100:  '1',
      105:  '1.05',
      110:  '1.1',
      125:  '1.25',
      150:  '1.5',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    abilities: {
      'first':            {pseudo: ':first-child'},
      'last':             {pseudo: ':last-child'},
      'odd':              {pseudo: ':nth-child(odd)'},
      'even':             {pseudo: ':nth-child(even)'},
      'visited':          {pseudo: ':visited'},
      'checked':          {pseudo: ':checked'},
      'dark':             {root:   'dark'},
      'group-hover':      {root:   'group:hover'},
      'group-focus':      {root:   'group:focus'},
      'dark-focus':       {root:   'dark', pseudo: ':focus'},
      'focus-within':     {pseudo: ':focus-within'},
      'dark-hover':       {root:   'dark', pseudo: ':hover'},
      'hover':            {pseudo: ':hover'},
      'focus':            {pseudo: ':focus'},
      'focus-visible':    {pseudo: ':focus-visible'},
      'active':           {pseudo: ':active'},
      'disabled':         {pseudo: ':disabled'},
    }
  },
  theme: {
    accessibility: {
      ABILITY: ['responsive'],
      VALUE: {
        'sr-only':   {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          'white-space': 'nowrap',
          'border-width': 0
        },
        'not-sr-only': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 0,
          margin: 0,
          overflow: 'visible',
          clip: 'auto',
          'white-space': 'normal',
        },
      }
    },
    alignContent: {
      ABILITY: ['responsive'],
      PROP: { content: 'align-content' },
      VALUE: {
        center:   'center',
        start:    'flex-start',
        end:      'flex-end',
        between:  'space-between',
        around:   'space-around',
        evenly:   'space-evenly'
      },
    },
    alignItems: {
      ABILITY: ['responsive'],
      PROP: { items: 'align-items' },
      VALUE: {
        center:   'center',
        start:    'flex-start',
        end:      'flex-end',
        baseline: 'baseline',
        stretch:  'stretch',
      },
    },
    alignSelf: {
      ABILITY: ['responsive'],
      PROP: { self: 'align-self' },
      VALUE: {
        auto:     'auto',
        start:    'flex-start',
        end:      'flex-end',
        center:   'center',
        stretch:  'stretch',
      },
    },
    animation: {
      ABILITY: ['responsive'],
      PROP: { animate: 'animation' },
      VALUE: {
        none:   'none',
        spin:   'spin 1s linear infinite',
        ping:   'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse:  'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
    },
    appearance: {
      ABILITY: ['responsive'],
      PROP: { appearance: 'appearance' },
      VALUE: {
        none:  'none'
      },
    },
    backgroundAttachment: {
      ABILITY: ['responsive'],
      PROP: { bg: 'background-attachment' },
      VALUE: {
        fixed:  'fixed',
        local:  'local',
        scroll: 'scroll',
      },
    },
    backgroundClip: {
      ABILITY: ['responsive'],
      PROP: { 'bg-clip': 'background-clip' },
      VALUE: {
        border:  'border-box',
        padding: 'padding-box',
        content: 'content-box',
        text:    'text',
      },
    },
    backgroundColor: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'hover', 'active', 'focus'],
      PROP: { bg: 'background-color' },
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-bg-opacity') > -1
          && { '--zto-bg-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-bg-opacity)'),
    },
    backgroundImage: {
      ABILITY:['responsive'],
      PROP: { bg: 'background-image' },
      VALUE: {
        none: 'none',
        'gradient-to-t':  'linear-gradient(to top, var(--zto-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--zto-gradient-stops))',
        'gradient-to-r':  'linear-gradient(to right, var(--zto-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--zto-gradient-stops))',
        'gradient-to-b':  'linear-gradient(to bottom, var(--zto-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--zto-gradient-stops))',
        'gradient-to-l':  'linear-gradient(to left, var(--zto-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--zto-gradient-stops))',
      },
    },
    gradientStops: {
      ABILITY:['responsive', 'dark', 'dark-hover', 'dark-focus', 'hover', 'focus'],
      VALUE: ({palette, rgba, each}) => {
        let res = {}
        each((val, key) => {
          let toColor = val === 'currentColor' ? '#fff' : val
          res[`to-${key}`] = {'--zto-gradient-to': val}
          res[`from-${key}`] = {
            '--zto-gradient-from': val,
            '--zto-gradient-stops': `var(--zto-gradient-from), var(--zto-gradient-to, ${rgba(toColor, 0)})`
          }
        }, palette())
        return res
      },
    },
    backgroundOpacity: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'hover', 'active', 'focus'],
      PROP: { 'bg-opacity': '--zto-bg-opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    backgroundPosition: {
      ABILITY: ['responsive'],
      PROP: { bg: 'background-position' },
      VALUE: {
        'bottom':       'bottom',
        'center':       'center',
        'left':         'left',
        'left-bottom':  'left bottom',
        'left-top':     'left top',
        'right':        'right',
        'right-bottom': 'right bottom',
        'right-top':    'right top',
        'top':          'top',
      },
    },
    backgroundRepeat: {
      ABILITY: ['responsive'],
      PROP: { bg: 'background-repeat' },
      VALUE: {
        'repeat':       'repeat',
        'no-repeat':    'no-repeat',
        'repeat-x':     'repeat-x',
        'repeat-y':     'repeat-y',
        'repeat-round': 'round',
        'epeat-space':  'space',
      },
    },
    backgroundSize: {
      ABILITY: ['responsive'],
      PROP: { bg: 'background-size' },
      VALUE: {
        auto:     'auto',
        cover:    'cover',
        contain:  'contain',
      },
    },
    borderCollapse: {
      ABILITY: ['responsive'],
      PROP: { border: 'border-collapse' },
      VALUE: {
        collapse: 'collapse',
        separate: 'separate',
      },
    },
    borderColor: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'active', 'hover', 'focus'],
      PROP: { border: 'border-color' },
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-border-opacity') > -1
          && { '--zto-border-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-border-opacity)'),
    },
    borderOpacity: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'hover', 'focus'],
      PROP: { 'border-opacity': '--zto-border-opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    borderRadius: {
      ABILITY: ['responsive'],
      VALUE: ({config}) => config('radius'),
      PROP: {
        'rounded':    'border-radius',
        'rounded-t':  ['border-top-left-radius', 'border-top-right-radius'],
        'rounded-r':  ['border-top-right-radius', 'border-bottom-right-radius'],
        'rounded-b':  ['border-bottom-right-radius', 'border-bottom-left-radius'],
        'rounded-l':  ['border-top-left-radius', 'border-bottom-left-radius'],
        'rounded-tl': 'border-top-left-radius',
        'rounded-tr': 'border-top-right-radius',
        'rounded-bl': 'border-bottom-left-radius',
        'rounded-br': 'border-bottom-right-radius',
      },
    },
    borderStyle: {
      ABILITY: ['responsive'],
      PROP: { border: 'border-style' },
      VALUE: {
        solid:  'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none:   'none',
      },
    },
    borderWidth: {
      ABILITY: ['responsive'],
      VALUE: ({config}) => config('borderWidth'),
      PROP: {
        'border':   'border-width',
        'border-t': 'border-top-width',
        'border-r': 'border-right-width',
        'border-b': 'border-bottom-width',
        'border-l': 'border-left-width',
      },
    },
    boxShadow: {
      ABILITY: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      PROP: { shadow: '--zto-shadow' },
      GLOBAL: {'box-shadow': 'var(--zto-ring-offset-shadow, 0 0 #0000), var(--zto-ring-shadow, 0 0 #0000), var(--zto-shadow)'},
      VALUE: {
        1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        3: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        4: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        5: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        6: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: '0 0 #0000',
      },
    },
    boxSizing: {
      ABILITY: ['responsive'],
      PROP: { box: 'box-sizing' },
      VALUE: {
        border: 'border-box',
        content: 'content-box'
      },
    },
    clear: {
      ABILITY: ['responsive'],
      PROP: { clear: 'clear' },
      VALUE: {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      },
    },
    // container: {},
    cursor: {
      ABILITY: ['responsive'],
      PROP: { cursor: 'cursor' },
      VALUE: {
        auto:         'auto',
        'default':    'default',
        pointer:      'pointer',
        wait:         'wait',
        text:         'text',
        move:         'move',
        help:         'help',
        'not-allowed':'not-allowed',
      },
    },
    display: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'display' },
      VALUE: {
        'flex': 'flex',
        'block': 'block',
        'inline-flex': 'inline-flex',
        'inline': 'inline',
        'grid': 'grid',
        'inline-block': 'inline-block',
        'inline-grid': 'inline-grid',
        'hidden': 'none',
        'table': 'table',
        'table-caption': 'table-caption',
        'table-cell': 'table-cell',
        'table-column': 'table-column',
        'table-column-group': 'table-column-group',
        'table-footer-group': 'table-footer-group',
        'table-header-group': 'table-header-group',
        'table-row-group': 'table-row-group',
        'table-row': 'table-row',
        'flow-root': 'flow-root',
        'contents': 'contents',
      }
    },
    divideColor: {
      ABILITY: ['responsive', 'dark'],
      PROP: { divide: 'border-color' },
      PSEUDO: '>:not(:first-child)',
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-divide-opacity') > -1
          && { '--zto-divide-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-divide-opacity)'),
    },
    divideOpacity: {
      ABILITY: ['responsive', 'dark'],
      PROP: { 'divide-opacity': '--zto-divide-opacity' },
      PSEUDO: '>:not(:first-child)',
      VALUE: ({config}) => config('opacity'),
    },
    divideStyle: {
      ABILITY: ['responsive'],
      PROP: { divide: 'border-style' },
      PSEUDO: '>:not(:first-child)',
      VALUE: {
        solid:  'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none:   'none',
      },
    },
    divideWidth: {
      ABILITY: ['responsive'],
      VALUE: ({config}) => config('borderWidth'),
      PSEUDO: '>:not(:first-child)',
      PROP: {
        'divide-x': 'border-left-width',
        'divide-y': 'border-top-width',
      },
    },
    fill: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'flex' },
      VALUE: {
        current:  'currentColor',
      }
    },
    flex: {
      ABILITY: ['responsive'],
      PROP: { flex: 'flex' },
      VALUE: {
        1:        '1 1 0%',
        auto:     '1 1 auto',
        initial:  '0 1 auto',
        none:     'none',
      },
    },
    flexDirection: {
      ABILITY: ['responsive'],
      PROP: { flex: 'flex-direction' },
      VALUE: {
        'row':          'row',
        'row-reverse':  'row-reverse',
        'col':          'column',
        'col-reverse':  'column-reverse',
      },
    },
    flexGrow: {
      ABILITY: ['responsive'],
      PROP: { flex: 'flex-grow' },
      VALUE: {
        'grow-0':  '0',
        'grow':    '1',
      },
    },
    flexShrink: {
      ABILITY: ['responsive'],
      PROP: { flex: 'flex-shrink' },
      VALUE: {
        'shrink-0':  '0',
        'shrink':    '1',
      },
    },
    flexWrap: {
      ABILITY: ['responsive'],
      PROP: { flex: 'flex-wrap' },
      VALUE: {
        'wrap':          'wrap',
        'wrap-reverse':  'wrap-reverse',
        'nowrap':        'nowrap',
      },
    },
    float: {
      ABILITY: ['responsive'],
      PROP: { float: 'float' },
      VALUE: {
        left:   'left',
        right:  'right',
        none:   'none',
      },
    },
    fontFamily: {
      ABILITY: ['responsive'],
      PROP: { font: 'font-family' },
      VALUE: {
        sans:   'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif:  'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono:   'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
    fontSize: {
      ABILITY: ['responsive'],
      PROP: { 'text': '' },
      VALUE: {
        'xs': {'font-size': '0.75rem', 'line-height': '1rem'},
        'sm': {'font-size': '0.875rem', 'line-height': '1.25rem'},
        'base': {'font-size': '1rem', 'line-height': '1.5rem'},
        'lg': {'font-size': '1.125rem', 'line-height': '1.75rem'},
        'xl': {'font-size': '1.25rem', 'line-height': '1.75rem'},
        '2xl': {'font-size': '1.5rem', 'line-height': '2rem'},
        '3xl': {'font-size': '1.875rem', 'line-height': '2.25rem'},
        '4xl': {'font-size': '2.25rem', 'line-height': '2.5rem'},
        '5xl': {'font-size': '3rem', 'line-height': 1},
        '6xl': {'font-size': '3.75rem', 'line-height': 1},
        '7xl': {'font-size': '4.5rem', 'line-height': 1},
        '8xl': {'font-size': '6rem', 'line-height': 1},
        '9xl': {'font-size': '8rem', 'line-height': 1},
      },
    },
    fontSmoothing: {
      ABILITY: ['responsive'],
      VALUE: {
        'antialiased': {'-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale'},
        'subpixel-antialiased': {'-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto',},
      },
    },
    fontStyle: {
      ABILITY: ['responsive'],
      PROP: { font: 'font-style' },
      VALUE: {
        'italic':     'italic',
        'not-italic': 'normal',
      },
    },
    fontWeight: {
      ABILITY: ['responsive'],
      PROP: { font: 'font-weight' },
      VALUE: ({through}) => through(i => i * 100, 9, 1, '', '00'),
    },
    gap: {
      ABILITY: ['responsive'],
      VALUE: ({config}) => config('spacing'),
      PROP: {
        'gap': 'gap',
        'gap-x': 'column-gap',
        'gap-y': 'row-gap',
      },
    },
    gridAutoColumns: {
      ABILITY: ['responsive'],
      PROP: { 'auto-cols': 'grid-auto-columns' },
      VALUE: {
        auto:   'auto',
        min:    'min-content',
        max:    'max-content',
        fr:     'minmax(0, 1fr)',
      },
    },
    gridAutoRows: {
      ABILITY: ['responsive'],
      PROP: { 'auto-rows': 'grid-auto-rows' },
      VALUE: {
        auto:   'auto',
        min:    'min-content',
        max:    'max-content',
        fr:     'minmax(0, 1fr)',
      },
    },
    gridAutoFlow: {
      ABILITY: ['responsive'],
      PROP: { 'grid-flow': 'grid-auto-flow' },
      VALUE: {
        'row':        'row',
        'col':        'column',
        'row-dense':  'row dense',
        'col-dense':  'column dense',
      },
    },
    gridTemplateColumns: {
      ABILITY: ['responsive'],
      PROP: { 'grid-cols': 'grid-template-columns' },
      VALUE: ({config, through}) => ({
        none: 'none',
        ...through(i => `repeat(${i}, minmax(0, 1fr))`, config('column'))
      }),
    },
    gridTemplateRows: {
      ABILITY: ['responsive'],
      PROP: { 'grid-rows': 'grid-template-rows' },
      VALUE: ({through}) => ({
        none: 'none',
        ...through(i => `repeat(${i}, minmax(0, 1fr))`, 6)
      }),
    },
    gridColumn: {
      ABILITY: ['responsive'],
      PROP: { col: 'grid-column' },
      VALUE: ({config, through}) => ({
        auto: 'auto',
        'span-full': '1 / -1',
        ...through(i => `span ${i} / span ${i}`, config('column'), 1, 'span-')
      })
    },
    gridColumnStart: {
      ABILITY: ['responsive'],
      PROP: { 'col-start': 'grid-column-start' },
      VALUE: ({config, through}) => ({auto: 'auto', ...through(i => i, config('column'))}),
    },
    gridColumnEnd: {
      ABILITY: ['responsive'],
      PROP: { 'col-end': 'grid-column-end' },
      VALUE: ({config, through}) => ({auto: 'auto', ...through(i => i, config('column'))}),
    },
    gridRow: {
      ABILITY: ['responsive'],
      PROP: { row: 'grid-row' },
      VALUE: ({through}) => ({
        auto: 'auto',
        'span-full': '1 / -1',
        ...through(i => `span ${i} / span ${i}`, 6, 1, 'span-')
      }),
    },
    gridRowStart: {
      ABILITY: ['responsive'],
      PROP: { 'row-start': 'grid-row-start' },
      VALUE: ({through}) => ({auto: 'auto', ...through(i => i, 6)}),
    },
    gridRowEnd: {
      ABILITY: ['responsive'],
      PROP: { 'row-end': 'grid-row-end' },
      VALUE: ({through}) => ({auto: 'auto', ...through(i => i, 6)}),
    },
    height: {
      ABILITY: ['responsive'],
      PROP: { h: 'height' },
      VALUE: ({config}) => ({screen: '100vh', auto: 'auto', ...config('spacing'), ...config('ratio')}),
    },
    inset: {
      ABILITY: ['responsive'],
      VALUE: ({config, minus}) => ({
        ...config('spacing'),
        ...config('ratio'),
        ...minus(config('spacing')),
        ...minus(config('ratio'))
      }),
      PROP: {
        inset:      ['top', 'right', 'bottom', 'left'],
        'inset-x':  ['left', 'right'],
        'inset-y':  ['top', 'bottom'],
        top:        'top',
        right:      'right',
        bottom:     'bottom',
        left:       'left',
      },
    },
    justifyContent: {
      ABILITY: ['responsive'],
      PROP: { justify: 'justify-content' },
      VALUE: {
        center:   'center',
        start:    'flex-start',
        end:      'flex-end',
        between:  'space-between',
        around:   'space-around',
        evenly:   'space-evenly'
      },
    },
    justifyItems: {
      ABILITY: ['responsive'],
      PROP: { 'justify-items': 'justify-items' },
      VALUE: {
        auto:     'auto',
        start:    'start',
        end:      'end',
        center:   'center',
        stretch:  'stretch',
      },
    },
    justifySelf: {
      ABILITY: ['responsive'],
      PROP: { 'justify-self': 'justify-self' },
      VALUE: {
        auto:     'auto',
        start:    'start',
        end:      'end',
        center:   'center',
        stretch:  'stretch',
      }
    },
    letterSpacing: {
      ABILITY: ['responsive'],
      PROP: { tracking: 'letter-spacing' },
      VALUE: {
        tighter:  '-0.05em',
        tight:    '-0.025em',
        normal:   '0em',
        wide:     '0.025em',
        wider:    '0.05em',
        widest:   '0.1em',
      },
    },
    lineHeight: {
      ABILITY: ['responsive'],
      PROP: { lh: 'line-height' },
      VALUE: {
        1:      '1',
        1.25:   '1.25',
        1.375:  '1.375',
        1.5:    '1.5',
        1.625:  '1.625',
        2:      '2',
        3:      '3',
      },
    },
    listStyleType: {
      ABILITY: ['responsive'],
      PROP: { list: 'list-style-type' },
      VALUE: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
      },
    },
    listStylePosition: {
      ABILITY: ['responsive'],
      PROP: { list: 'list-style-position' },
      VALUE: {
        inside:   'inside',
        outside:  'outside',
      },
    },
    margin: {
      ABILITY: ['responsive'],
      VALUE: ({config, minus}) => ({
        auto: 'auto',
        ...config('spacing'),
        ...minus(config('spacing'))
      }),
      PROP: {
        m:  'margin',
        mt: 'margin-top',
        ml: 'margin-left',
        mr: 'margin-right',
        mb: 'margin-bottom',
        mx: ['margin-left', 'margin-right'],
        my: ['margin-top', 'margin-bottom'],
      },

    },
    maxHeight: {
      ABILITY: ['responsive'],
      PROP: { 'max-h': 'max-height' },
      VALUE: ({config}) => ({screen: '100vh', auto: 'auto', ...config('spacing')}),
    },
    maxWidth: {
      ABILITY: ['responsive'],
      PROP: { 'max-w': 'max-width' },
      VALUE: {
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
      },
    },
    minHeight: {
      ABILITY: ['responsive'],
      PROP: { 'min-h': 'min-height' },
      VALUE: {
        0: '0px',
        full: '100%',
        screen: '100vh',
      },
    },
    minWidth: {
      ABILITY: ['responsive'],
      PROP: { 'min-w': 'min-width' },
      VALUE: {
        0: '0px',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
      },
    },
    objectFit: {
      ABILITY: ['responsive'],
      PROP: { object: 'object-fit' },
      VALUE: {
        contain:      'contain',
        cover:        'cover',
        fill:         'fill',
        none:         'none',
        'scale-down': 'scale-down',
      },
    },
    objectPosition: {
      ABILITY: ['responsive'],
      PROP: { object: 'object-position' },
      VALUE: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
    },
    opacity: {
      ABILITY: ['responsive','group-hover','focus-within','hover','focus'],
      PROP: { opacity: 'opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    order: {
      ABILITY: ['responsive'],
      PROP: { order: 'order' },
      VALUE: ({config}) => {
        let res = {'first': -9999, 'last': 9999, none: 0}
        for(let i=1, len=config('column'); i<=len;) {res[i] = i++}
        return res
      }
    },
    outline: {
      ABILITY: ['responsive','focus-within','focus'],
      PROP: { outline: 'outline' },
      GLOBAL: {'outline-offset': '2px'},
      VALUE: {
        'none': '2px solid transparent',
        'white': '2px solid white',
        'black': '2px solid black',
      },
    },
    overflow: {
      ABILITY: ['responsive'],
      VALUE: {auto: 'auto', visible: 'visible', hidden: 'hidden', scroll: 'scroll'},
      PROP: {
        'overflow':   'overflow',
        'overflow-x': 'overflow',
        'overflow-y': 'overflow',
      },
    },
    overscrollBehavior: {
      ABILITY: ['responsive'],
      VALUE: {auto: 'auto', none: 'none', contain: 'contain'},
      PROP: {
        'overscroll':   'overscroll-behavior',
        'overscroll-x': 'overscroll-behavior-x',
        'overscroll-y': 'overscroll-behavior-y',
      },
    },
    padding: {
      ABILITY: ['responsive'],
      VALUE: ({config}) => config('spacing'),
      PROP: {
        p:  'padding',
        pt: 'padding-top',
        pl: 'padding-left',
        pr: 'padding-right',
        pb: 'padding-bottom',
        px: ['padding-left', 'padding-right'],
        py: ['padding-top', 'padding-bottom'],
      },
    },
    placeContent: {
      ABILITY: ['responsive'],
      PROP: { 'place-content': 'place-content' },
      VALUE: {
        center:   'center',
        start:    'start',
        end:      'end',
        between:  'space-between',
        around:   'space-around',
        evenly:   'space-evenly',
        stretch:  'stretch'
      },
    },
    placeItems: {
      ABILITY: ['responsive'],
      PROP: { 'place-items': 'place-items' },
      VALUE: {
        center:   'center',
        start:    'start',
        end:      'end',
        auto:     'auto',
        stretch:  'stretch'
      },
    },
    placeSelf: {
      ABILITY: ['responsive'],
      PROP: { 'place-self': 'place-self' },
      VALUE: {
        center:   'center',
        start:    'start',
        end:      'end',
        auto:     'auto',
        stretch:  'stretch'
      },
    },
    placeholderColor: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'focus'],
      PSEUDO: '::placeholder',
      PROP: { placeholder: 'color' },
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-placeholder-opacity') > -1
          && { '--zto-placeholder-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-placeholder-opacity)'),
    },
    placeholderOpacity: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'focus'],
      PROP: { 'placeholder-opacity': '--zto-placeholder-opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    pointerEvents: {
      ABILITY: ['responsive'],
      PROP: { 'pointer-events': 'pointer-events' },
      VALUE: {
        'none': 'none',
        'auto': 'auto',
      },
    },
    position: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'position' },
      VALUE: {
        static:     'static',
        fixed:      'fixed',
        absolute:   'absolute',
        relative:   'relative',
        sticky:     'sticky',
      }
    },
    resize: {
      ABILITY: ['responsive'],
      PROP: { resize: 'resize' },
      VALUE: {
        DEFAULT:    'both',
        none:       'none',
        x:          'horizontal',
        y:          'vertical',
      },
    },
    ringColor: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'focus-within', 'focus'],
      PROP: { ring: '--zto-ring-color' },
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-ring-opacity') > -1
          && { '--zto-ring-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-ring-opacity)'),
    },
    ringOffsetColor: {
      ABILITY: ['responsive','dark', 'dark-hover', 'dark-focus','focus-within', 'focus', 'hover', 'active'],
      PROP: { 'ring-offset': '--zto-ring-offset-color' },
      VALUE: ({palette}) => palette(),
    },
    ringOffsetWidth: {
      ABILITY: ['responsive','focus-within','focus'],
      PROP: { 'ring-offset': '--zto-ring-offset-width' },
      VALUE: ({config}) => config('borderWidth'),
    },
    ringOpacity: {
      ABILITY: ['responsive','dark', 'dark-hover', 'dark-focus','focus-within','focus'],
      PROP: { 'ring-opacity': '--zto-ring-opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    ringWidth: {
      ABILITY: ['responsive', 'hover', 'focus'],
      VALUE: ({each, config}) => {
        let res = {'ring-inset': {'--zto-ring-inset': 'inset'}}
        each(
          (val, key) => {
            key = key === 'DEFAULT' ? 'ring' : `ring-${key}`
            res[key] = {
              '--zto-ring-offset-shadow': `var(--zto-ring-inset) 0 0 0 var(--zto-ring-offset-width) var(--zto-ring-offset-color)`,
              '--zto-ring-shadow': `var(--zto-ring-inset) 0 0 0 calc(${val} + var(--zto-ring-offset-width)) var(--zto-ring-color)`,
              'box-shadow': `var(--zto-ring-offset-shadow), var(--zto-ring-shadow), var(--zto-shadow, 0 0 #0000)`
            }
          },
          {DEFAULT: '3px', ...config('borderWidth')}
        )
        return res
      }
    },
    rotate: {
      ABILITY: ['responsive', 'hover', 'focus'],
      PROP: { rotate: '--zto-rotate' },
      VALUE: ({config, minus}) => ({...config('rotate'), ...minus(config('rotate'))}),
    },
    scale: {
      ABILITY: ['responsive', 'hover', 'focus'],
      VALUE: ({config}) => config('scale'),
      PROP: {
        'scale':   ['--zto-scale-x', '--zto-scale-y'],
        'scale-x': '--zto-scale-x',
        'scale-y': '--zto-scale-y',
      },
    },
    skew: {
      ABILITY: ['responsive', 'hover', 'focus'],
      VALUE: ({config, minus}) => ({...config('skew'), ...minus(config('skew'))}),
      PROP: {
        'skew-x': '--zto-skew-x',
        'skew-y': '--zto-skew-y',
      },
    },
    space: {
      ABILITY: ['responsive'],
      PROP: {
        'space-x': 'margin-right',
        'space-y': 'margin-bottom',
      },
      PSEUDO: '>:not(:last-child)',
      VALUE: ({config, minus}) => ({...config('spacing'), ...minus(config('spacing'))}),
    },
    stroke: {
      ABILITY: ['responsive'],
      PROP: { stroke: 'stroke' },
      VALUE: {
        current: 'currentColor',
      },
    },
    strokeWidth: {
      ABILITY: ['responsive'],
      PROP: { stroke: 'stroke-width' },
      VALUE: {
        0: '0',
        1: '1',
        2: '2',
      },
    },
    tableLayout: {
      ABILITY: ['responsive'],
      PROP: { table: 'table-layout' },
      VALUE: {
        auto:   'auto',
        fixed:  'fixed',
      },
    },
    textAlign: {
      ABILITY: ['responsive'],
      PROP: { text: 'text-align' },
      VALUE: {
        left: 'left',
        center: 'center',
        right: 'right',
        justify: 'justify',
      },
    },
    textColor: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'hover', 'active', 'focus'],
      PROP: { text: 'color' },
      VARIABLE: ({},{value}) => {
        return value.indexOf('--zto-text-opacity') > -1
          && { '--zto-text-opacity': 1 }
      },
      VALUE: ({palette}) => palette('var(--zto-text-opacity)'),
    },
    textDecoration: {
      ABILITY: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      PROP: { DEFAULT: 'text-decoration' },
      VALUE: {
        'underline':    'underline',
        'line-through': 'line-through',
        'no-underline': 'none',
      }
    },
    textOpacity: {
      ABILITY: ['responsive', 'dark', 'dark-hover', 'dark-focus', 'group-hover', 'focus-within', 'hover', 'active', 'focus'],
      PROP: { 'text-opacity': '--zto-text-opacity' },
      VALUE: ({config}) => config('opacity'),
    },
    textOverflow: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'text-overflow' },
      VALUE: {
        'overflow-ellipsis':  'ellipsis',
        'overflow-clip':      'clip',
        'truncate': {
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap'
        }
      }
    },
    textTransform: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'text-transform' },
      VALUE: {
        'uppercase': 'uppercase',
        'lowercase': 'lowercase',
        'capitalize': 'capitalize',
        'normal-case': 'none',
      }
    },
    lineClamp: {
      ABILITY: ['responsive', 'hover'],
      PROP: { 'line-clamp': '-webkit-line-clamp' },
      VALUE: ({through}) => ({'none': 'unset', ...through(i => i, 6)}),
    },
    transform: {
      ABILITY: ['responsive'],
      VALUE: {
        'transform': ({config}) => ({
          ...config('transformVariables'),
          transform: [
            'translateX(var(--zto-translate-x))', 'translateY(var(--zto-translate-y))',
            ...config('transform')
          ].join(' ')
        }),
        'transform-gpu': ({config}) => ({
          ...config('transformVariables'),
          transform: [
            'translate3d(var(--zto-translate-x), var(--zto-translate-y), 0)',
            ...config('transform')
          ].join(' ')
        }),
        'transform-none': {'transform': 'none'}
      },
    },
    transformOrigin: {
      ABILITY: ['responsive'],
      PROP: { origin: 'transform-origin' },
      VALUE: {
        'center':       'center',
        'top':          'top',
        'top-right':    'top right',
        'right':        'right',
        'bottom-right': 'bottom right',
        'bottom':       'bottom',
        'bottom-left':  'bottom left',
        'left':         'left',
        'top-left':     'top left',
      },
    },
    transitionDelay: {
      ABILITY: ['responsive'],
      PROP: { delay: 'transition-delay' },
      VALUE: ({config}) => config('duration'),
    },
    transitionDuration: {
      ABILITY: ['responsive'],
      PROP: { duration: 'transition-duration' },
      VALUE: ({config}) => ({DEFAULT: '150ms', ...config('duration')}),
    },
    transitionProperty: {
      ABILITY: ['responsive'],
      PROP: { transition: 'transition-property' },
      GLOBAL: {'transition-timing-function':'cubic-bezier(0.4, 0, 0.2, 1)','transition-duration': '150ms'},
      VALUE: {
        none: 'none',
        all: 'all',
        DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        colors: 'background-color, border-color, color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform',
      },
    },
    transitionTimingFunction: {
      ABILITY: ['responsive'],
      PROP: { ease: 'transition-timing-function' },
      VALUE: {
        DEFAULT:  'cubic-bezier(0.4, 0, 0.2, 1)',
        linear:   'linear',
        in:       'cubic-bezier(0.4, 0, 1, 1)',
        out:      'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    translate: {
      ABILITY: ['responsive'],
      PROP: {
        'translate-x': '--zto-translate-x',
        'translate-y': '--zto-translate-y',
      },
      VALUE: ({config, minus}) => ({
        ...config('spacing'),
        ...config('ratio'),
        ...minus(config('spacing')),
        ...minus(config('ratio'))
      }),
    },
    userSelect: {
      ABILITY: ['responsive'],
      PROP: { select: 'user-select' },
      VALUE: {
        'none':   'none',
        'text':   'text',
        'all':    'all',
        'auto':   'auto',
      },
    },
    verticalAlign: {
      ABILITY: ['responsive'],
      PROP: { align: 'vertical-align' },
      VALUE: {
        'baseline':   'baseline',
        'top':        'top',
        'middle':     'middle',
        'bottom':     'bottom',
        'text-top':   'text-top',
        'text-bottom':'text-bottom',
      },
    },
    visibility: {
      ABILITY: ['responsive'],
      PROP: { DEFAULT: 'visibility' },
      VALUE: {
        'visible':   'visible',
        'invisible': 'hidden',
      }
    },
    whitespace: {
      ABILITY: ['responsive'],
      PROP: { whitespace: 'white-space' },
      VALUE: {
        'normal':   'normal',
        'nowrap':   'nowrap',
        'pre':      'pre',
        'pre-line': 'pre-line',
        'pre-wrap': 'pre-wrap',
      },
    },
    width: {
      ABILITY: ['responsive'],
      PROP: { w: 'width' },
      VALUE: ({config}) => ({
        screen: '100vw', auto: 'auto', min: 'min-content', max: 'max-content',
        ...config('spacing'),
        ...config('ratio')
      }),
    },
    wordBreak: {
      ABILITY: ['responsive'],
      VALUE: {
        'break-normal': {'overflow-wrap': 'normal', 'word-break': 'normal',},
        'break-words':  {'overflow-wrap': 'break-word'},
        'break-all':    {'word-break': 'break-all'}
      },
    },
    zIndex: {
      ABILITY: ['responsive', 'focus-within', 'focus', 'hover'],
      PROP: { z: 'z-index' },
      VALUE: {
        auto: 'auto',
        0:    '0',
        1:    '1',
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
      },
    },
  }
}
