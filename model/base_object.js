class BaseObject {
  constructor(object) {
    this.data = object
  }

  set (value, key) {
    this.data[key] = value
  }

  get (key) {
    return this.data[key]
  }
}
