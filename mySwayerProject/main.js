/** @type {Schema} */
export default {
    namespaces: {
        '@app': 'app',
        '@content': 'app/content',
        '@creature:': 'app/creature',
        '@shared': 'app/shared',
        '@assets': 'assets',
    },
    children: [{ path: '@app/page.component' }],
}
