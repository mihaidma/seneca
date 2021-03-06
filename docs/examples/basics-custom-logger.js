'use strict'

var Seneca = require('../..')

function Logger () {}

Logger.preload = function () {
  var seneca = this

  function pad (content, length) {
    while (content.length < length) {
      content = content + ' '
    }

    return content;
 }

 function adapter (context, payload) {
   var when = payload.when.toString()
   var kind = pad(payload.kind, 8)
   var note = pad(payload.case, 8)

   console.log(when, kind, note, payload.pattern)
}

  return {
    extend: {
      logger: adapter
    }
  }
}

var instance =
Seneca({legacy: {logging: false}})
  .use(Logger)

// Prints
// <Timestamp> <kind> <case> <pattern>
