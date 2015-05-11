// ========================================================================== //
//                               LOGS RESOURCE                                //
// ========================================================================== //

// Load Modules ----------------------------------------------------------------

var cm = require('crud-mongoose'),
    debug = require('debug')('api:storelogs'),
    Schema, Model, inited;

module.exports = exports = function(crud, mongoose) {
  var ObjectId = mongoose.Schema.Types.ObjectId,
      Mixed = mongoose.Schema.Types.Mixed;

  if (inited) return { schema: Schema, model: Model }

  inited = true;

  // Create a Schema & Model ---------------------------------------------------

  Schema = new mongoose.Schema({
    level:     { type: String, default: 'info',
                 enum: ['log', 'debug', 'warn', 'error'] },
    message:   { type: String, default: '' },
    data:      { type: Mixed },
    createdAt: { type: Date, default: Date.now }
  });

  Model = mongoose.model('storelogs', Schema);

  // All storelogs -------------------------------------------------------------

  crud.entity('/storelogs').Create()
    .pipe(cm.createNew(Model));

  crud.entity('/storelogs').on('error', function(method, e) {
    debug('%s error: %j', method, e);
  });

  console.log('Created store logs');

  return { schema: Schema, model: Model }
}
