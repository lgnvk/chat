class Service {
  listeners = {}

  on(event, callback) {
    this.listeners[event] = []
    this.listeners[event].push(callback)
  }

  off(event, callback) {
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  emit(event, data) {
    this.listeners[event].forEach(function (listener) {
      listener(data)
    })
  }
}

const service = new Service()

const onLoad = function (data) {
  console.log(data)
}

service.on('ended', onLoad)

service.on('start', onLoad)

console.log(service)

setTimeout(() => service.emit('start', '123'), 3000)
