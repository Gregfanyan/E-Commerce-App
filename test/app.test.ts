import request from 'supertest'
import app from '../src/app'
import '@types/jest'

describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app).get('/reset').expect(404, done)
  })
})

/* npm run watch-node
 */
/* npm run watch
npm run watch-test
*/
