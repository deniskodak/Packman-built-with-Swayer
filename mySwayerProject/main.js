/** @type {Schema} */
export default {
    namespaces: {
        '@app': 'app',
        '@components': 'app/components',
        '@pages': 'app/pages',
        '@shared': 'app/components/shared',
        '@assets': 'assets',
    },
    children: [{ path: '@pages/page.component' }],
}
