class Auto {
  constructor(data) {
    this._name = data.name
    this._email = data.email
    this._address = data.address
  }

  set name (name) {
    this._name = name
  }

  get name () {
    return this._name
  }

  set email (email) {
    this._email = email
  }

  get email () {
    return this._email
  }

  set address (address) {
    this._address = address
  }

  get address () {
    return this._address
  }
}

let auto = new Auto({name: "nguyen phuong", email: "phuong.nt@neo-lab.vn", address: "nghe an"})
console.log(auto.name)