// TODO: create a config to enable dynamic language loading

import merge from 'deepmerge';
import copy from 'rollup-plugin-copy';

// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const OUTPUT_DIR = 'dist/';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  outputDir: OUTPUT_DIR,

  // IE11 compatibility
  legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: './index.html',
  plugins: [
    copy({
      targets: [
        { src: 'manifest.json', dest: OUTPUT_DIR },
        { src: 'assets/icons', dest: OUTPUT_DIR },
        { src: 'service-worker.js', dest: OUTPUT_DIR },
        { src: 'offline.html', dest: OUTPUT_DIR },
      ],
    }),
  ],

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
});
