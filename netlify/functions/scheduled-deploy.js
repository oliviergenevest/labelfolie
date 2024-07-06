const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/66891acae53931839d508f09'

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule('30 12 * * 6', async () => {
    await fetch(BUILD_HOOK, {
      method: 'POST'
    }).then(response => {
      console.log('Build hook response:', response)
    })
  

  return {
    statusCode: 200
  }
})

export {
  handler
}