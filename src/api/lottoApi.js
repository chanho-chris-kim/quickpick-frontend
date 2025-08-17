import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export async function getLottoStats() {
  try {
    const res = await axios.get(`${BASE_URL}/lotto/stats`)
    return res.data
  } catch (err) {
    console.error('Failed to fetch lotto stats', err)
    throw err
  }
}
