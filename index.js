const api = require('./modules/api.js')
const http = require('http')
const host = 'localhost'
const port = process.env.PORT || 3000

const server = http
  .createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST")
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.write(JSON.stringify(api, null, 3))
    res.end()
  })
  .listen(port, host, () => {
    console.log(`Servidor rodando com sucesso!`)
    console.log(`Acesse em: http://${host}:${port}`)
  })