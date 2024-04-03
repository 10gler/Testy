import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
    baseUrl: "https://localhost:44330/",
    watchForFileChanges: false
  }
})