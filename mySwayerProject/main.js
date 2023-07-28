/** @type {Schema} */
export default {
    namespaces: {
        '@app': 'app',
        '@components': 'app/components',
        '@pages': 'app/pages',
        '@shared': 'app/components/shared',
        '@game': 'app/components/game',
        '@popups': 'app/components/popups',
        '@assets': 'assets',
    },
    children: [{ path: '@pages/page.component' }],
}
