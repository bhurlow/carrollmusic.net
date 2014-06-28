
console.log('hi')

/*
 * daytah
 */

var fs = require('fs')
var level = require('level')
var db = level('/data/carroll')

/*
 * sec
 */

var crypto = require('crypto')

function hash(str) {
  var shasum = crypto.createHash('sha1')
  shasum.update(str)
  return shasum.digest('hex')
}

/* 
 * webapp
 */

var es = require('event-stream')
var express = require('express')
var app = express()

var static = require('serve-static')
var body = require('body-parser')
var basicAuth = require('basic-auth-connect')

app.use(static(__dirname + '/public'))
app.use(body())

app.get('/onesheet', function(req, res) {
  res.redirect('/onesheet.pdf')
})

app.post('/signup', function(req, res) {
  var email = req.body.email
  db.put(Date.now(), email, function(err) {
    if (err) console.error(err)
    res.send(200)
  })
})

function test(user, pass, next) {
  var correct = '84a516841ba77a5b4648de2cd0dfcb30ea46dbb4'
  var hashed = hash(pass)
  if (correct === hashed) return next(null, 'll')
}

app.get('/emails', basicAuth(test), function(req, res) {
  db.createReadStream()
    .pipe(es.stringify())
    .pipe(res)
})

app.listen(process.env.PORT || 3000)

