/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        SplashScreen entry point
 * CVM-Role:        Model
 * Maintainer:      Hendrik Erz
 * License:         GNU GPL v3
 *
 * Description:     Controls the splash screen
 *
 * END HEADER
 */

import { createApp } from 'vue'
import App from './App.vue'

import windowRegister from '@common/modules/window-register'

windowRegister()
  .then(() => createApp(App).mount('#app'))
  .catch(e => console.error(e))
