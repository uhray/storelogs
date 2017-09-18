;(function(self) {

  if (typeof (define) !== 'undefined') {
    define(['crud'], storeLogs);
  } else {
    self.storelogs = storeLogs(window.crud);
  }

  function storeLogs(crud) {
    var p = '/api/storelogs';

    return {
      debug: function(m, d) { storeLog('debug', m, d) },
      log: function(m, d) { storeLog('log', m, d) },
      warn: function(m, d) { storeLog('warn', m, d) },
      error: function(m, d) { storeLog('error', m, d) },
      _setPath: function(d) {
        p = d;
      }
    };

    function storeLog(level, message, data) {
      crud(p).create({
        level: level,
        message: message,
        data: data
      });
    }
  }

})(window);
