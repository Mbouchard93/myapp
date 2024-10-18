import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */


export default {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'static',  // Par défaut
      routes: 'src/routes',
      lib: 'src/lib',
    }
  }
};
