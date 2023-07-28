const bounceDownKeyframe = {
    from: {
        transform: 'translateY(-45px)',
        props: 'ease-in',
        opacity: 1,
    },
    '24%': {
        opacity: 1,
    },
    '40%': {
        transform: 'translateY(-24px)',
        props: 'ease-in',
    },
    '65%': {
        transform: 'translateY(-12px)',
        props: 'ease-in',
    },
    '82%': {
        transform: 'translateY(-6px)',
        props: 'ease-in',
    },
    '93%': {
        transform: 'translateY(-4px)',
        props: 'ease-in',
    },
    '25%': {
        transform: 'translateY(0px)',
        props: 'ease-out',
    },
    '55%': {
        transform: 'translateY(0px)',
        props: 'ease-out',
    },
    '75%': {
        transform: 'translateY(0px)',
        props: 'ease-out',
    },
    '87%': {
        transform: 'translateY(0px)',
        props: 'ease-out',
        opacity: 0,
    },
    '100%': {
        transform: 'translateY(0px)',
        props: 'ease-out',
        opacity: 0,
    },
}

export const bounceTopAnimation = {
    name: 'bounce-top',
    keyframes: bounceDownKeyframe,
}
