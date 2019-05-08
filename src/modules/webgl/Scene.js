import * as THREE from 'three'
import { guiScene } from './gui'
import Avatar from './Avatar'
import config from '@/config/config'

class Scene {
  constructor (params) {
    this.positions = null

    this.config = params.config
    this.element = params.element
    this.sizes = params.sizes

    this.mode = params.mode ? params.mode : 'default'
    this.configScene = config.webgl[this.mode].scene

    this.state = {
      ready: false
    }

    this.timing = {
      duration: 10000
    }

    this.startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

    this.initScene()
  }

  initScene () {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height, 0.1, 50)
    this.camera.position.set(0, 0, 10)
    this.camera.lookAt(new THREE.Vector3(0, 2, 0))

    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.render(this.scene, this.camera)
    this.element.appendChild(this.renderer.domElement)

    this.avatar = new Avatar({
      scene: this.scene,
      modelPath: this.config.modelPath,
      mode: this.mode,
      onReadyClb: () => this.onAvatarReady()
    })

    const lightConfig = this.configScene.lights.directional
    if (lightConfig) {
      this.directionalLight = new THREE.DirectionalLight(new THREE.Color(lightConfig.color), lightConfig.intensity)
      this.directionalLight.position.set(lightConfig.position.x, lightConfig.position.y, lightConfig.position.z)
      this.scene.add(this.directionalLight)
    }

    // For threeJS inspector
    window.scene = this.scene
    window.THREE = THREE

    this.initGUI()
  }

  onAvatarReady () {
    this.state.ready = true
  }

  initGUI () {
    const lightFolder = guiScene.addFolder('Lights')
    if (this.directionalLight) {
      lightFolder.addLight('Light primary', this.directionalLight)
    }
  }

  loadModel () {

  }

  /**
   *
   * @param {*} positions Array of Objects
   */
  interpolate (positions) {

  }

  /**
   *
   * @param {*} positions Array of Objects
   */
  update (positions) {
    this.renderer.render(this.scene, this.camera)

    this.avatar.update(positions)
  }
}

export default Scene