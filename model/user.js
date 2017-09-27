import BaseObject from "./base_object.js"

class User extends BaseObject {
  constructor(object) {
    super(object)
    this._id = object.id
    this._name = object.name
    this._address = object.address
  }

  set name (name) {
    this._name = super.set(name, "name")
  }

  get name () {
    return  super.get("name")
  }

  set id (id) {
    this._id = super.set(id, "id")
  }

  get id () {
    return super.get("id")
  }
}

let user = new User({id: "a", name: "phuong"})
console.log(user.name)
console.log(user.get('name'))