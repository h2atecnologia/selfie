import assets from '@/config/assets'

class AssetsLoader {
  constructor () {
    this.pendings = []
  }

  loadAssets (type) {
    Object.keys(assets).forEach(item => {
      Object.keys(assets[item]).forEach(test => {
        this.pendings.push(
          new Promise((resolve, reject) => {
            switch (type) {
              case 'image':
                this.loadImage(assets[item][test].url, resolve)
                break
            }
          })
        )
      })
    })

    return new Promise((resolve, reject) => {
      return Promise.all(this.pendings).then(val => {
        this.pendings = []
        resolve()
      })
    })
  }

  loadAsset (url, type) {
    return new Promise((resolve, reject) => {
      switch (type) {
        case 'image':
          this.loadImage(url)
      }
    })
  }

  loadImage (url, resolve, reject) {
    const image = new Image()
    image.src = url
    image.addEventListener('load', e => {
      if (resolve) {
        resolve(image)
      }
    })
  }
}

export default new AssetsLoader()