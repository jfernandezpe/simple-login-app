module.exports = {
  stories: ['../**/stories/*.stories.{js,md,mdx}'],
  addons: [
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-actions/register.js',
  ],
  esDevServer: {
    // custom es-dev-server options
    nodeResolve: true,
    watch: true,
    open: true,
  },
  //TODO: disable keyboard shortcuts
};
