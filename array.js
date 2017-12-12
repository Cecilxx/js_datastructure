function lxxunpush() {
  var _length1 = this.length
  var _length2 = arguments.length
  var _length = _length1 + _length2

  for (var i = _length - 1; i > _length1 - 1; i--) {
    this[i] = arguments[i - _length1]
  }
  return this
}

function lxxunshift() {
  var _length1 = this.length
  var _length2 = arguments.length
  var _length = _length1 + _length2

  for (var i = _length - 1; i >= 0; i--) {
    this[i] = this[i - _length2]
  }
  for (var j = 0; j <= _length2 - 1; j++) {
    this[j] = arguments[j]
  }
  return this
}

function lxxevery(fn) {
  var _this = this
  var flag = true
  var flagArr = []

  for (var i = 0; i < _this.length; i++) {
    var tiaojian = fn(_this[i])

    flagArr.push(tiaojian)
  }

  for (var j = 0; j < flagArr.length; j++) {
    !flagArr[j] && (flag = false)
  }
  return flag
}

function repetitionNumber(arr) {
  var info = arr.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {})

  return info
}
