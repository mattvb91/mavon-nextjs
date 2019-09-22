//This is used to get around the github rate limiting.
//We make the request here but pass the caching headers so we can use the Zeit CDN.

import fetch from "isomorphic-unfetch";

export default async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'max-age=60, public')
    res.statusCode = 200

    const data = await (fetch('https://api.github.com/users/mattvb91/events?per_page=10'))
    const json = await data.json()
    res.end(JSON.stringify(json))
  }