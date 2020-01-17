exports.jArray = {
  /**
   *
   * @param {*} arg
   * @returns {Boolean}
   */
  isArray: (arg) => Array.isArray(arg),
  /**
   *
   * @param {Array} [arrayOfObject=[]]
   * @param {String} [objectKey='']
   * @returns {Array}
   */
  pluck: (arrayOfObject = [], objectKey = '') => {
    var data = []
    Array.isArray(arrayOfObject) &&
    arrayOfObject.map(item => data.push(item[objectKey]))
    return data
  },
  /**
   *
   * @param {Array} [array=[]]
   * @returns {Object}
   */
  toObject: (array = []) => {
    var data = {}
    Array.isArray(array) && array.map((item, index) => data[index] = item)
    return data
  },
  /**
   *
   * @param {Array} [array=[]]
   * @returns {string}
   */
  toStringify: (array = []) => JSON.stringify(array),
  /**
   *
   * @param {String} [string='']
   * @returns {Array}
   */
  toParseArray: (string = '') => {
    var array = []
    try {
      array = JSON.parse(string)
    } catch (e) {
      console.error(e)
    }
    return array
  },
  /**
   *
   * @param {Array} [array=[]]
   * @param {Function} [checkItemFunction=(item)=> false]
   * @returns {Array}
   */
  findAll: (array = [], checkItemFunction = (item) => false) => {
    var data = []
    Array.isArray(array) && typeof checkItemFunction === 'function' &&
    array.map((_item) => {if (checkItemFunction(_item)) data.push(_item)})
    return data
  },
  /**
   *
   * @param {Array} [array=[]]
   * @param {Function} [checkItemFunction=(item)=> false]
   * @returns {Array}
   */
  findAllIndex: (array = [], checkItemFunction = (item) => false) => {
    var data = []
    Array.isArray(array) && typeof checkItemFunction === 'function' &&
    array.map(
      (_item, index) => { if (checkItemFunction(_item)) data.push(index)})
    return data
  },
}
exports.__author = function () {
  console.log('Javad Shariati <jsh1400@yahoo.com>')
}
