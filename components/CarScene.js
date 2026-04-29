'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const CAR_MODEL_PATH = '/models/car.glb'

function fitModelToHero(model, targetSize = 4.4) {
  const box = new THREE.Box3().setFromObject(model)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())
  const maxDimension = Math.max(size.x, size.y, size.z) || 1
  const scale = targetSize / maxDimension

  model.scale.setScalar(scale)
  model.position.set(-center.x * scale, -box.min.y * scale - 0.08, -center.z * scale)
}

function disposeObject(object) {
  object.traverse((child) => {
    if (!child.isMesh) return
    child.geometry?.dispose()
    const materials = Array.isArray(child.material) ? child.material : [child.material]
    materials.forEach((material) => material?.dispose?.())
  })
}

function buildProceduralCar(scene) {
  const car = new THREE.Group()

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0f, metalness: 0.95, roughness: 0.08 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x1a2a4a, metalness: 0.1, roughness: 0.0, transparent: true, opacity: 0.45 })
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 1.0, roughness: 0.05 })
  const redMat = new THREE.MeshStandardMaterial({ color: 0xc8002a, metalness: 0.6, roughness: 0.3, emissive: 0x3a000a, emissiveIntensity: 0.3 })
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.4, roughness: 0.6 })
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.0, roughness: 0.95 })
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.15 })

  // Body
  const bodyShape = new THREE.Shape()
  bodyShape.moveTo(-2.2, 0)
  bodyShape.lineTo(-2.2, 0.5)
  bodyShape.quadraticCurveTo(-2.0, 0.5, -1.8, 0.6)
  bodyShape.lineTo(-0.8, 1.05)
  bodyShape.quadraticCurveTo(0.0, 1.15, 0.8, 1.05)
  bodyShape.lineTo(1.8, 0.6)
  bodyShape.quadraticCurveTo(2.0, 0.5, 2.2, 0.5)
  bodyShape.lineTo(2.2, 0)
  bodyShape.lineTo(-2.2, 0)
  const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, { depth: 1.7, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 6 })
  bodyGeo.center()
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat)
  bodyMesh.position.y = 0.35
  bodyMesh.castShadow = true
  car.add(bodyMesh)

  // Sills
  const sills = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.18, 1.82), darkMat)
  sills.position.set(0, 0.09, 0)
  car.add(sills)

  // Spoiler
  const spoilerBase = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.06, 0.08), chromeMat)
  spoilerBase.position.set(0, 1.12, -0.85)
  car.add(spoilerBase)
  const spoilerWing = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.32), bodyMat)
  spoilerWing.position.set(0, 1.22, -0.95)
  spoilerWing.rotation.x = -0.15
  car.add(spoilerWing)

  // Windshields
  const wsFront = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.52, 0.06), glassMat)
  wsFront.position.set(0, 0.9, 0.7)
  wsFront.rotation.x = Math.PI * 0.18
  car.add(wsFront)
  const wsRear = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.45, 0.06), glassMat)
  wsRear.position.set(0, 0.9, -0.6)
  wsRear.rotation.x = -Math.PI * 0.22
  car.add(wsRear)

  // Side windows
  const sideWinGeo = new THREE.BoxGeometry(0.06, 0.34, 1.1)
  const sideWinL = new THREE.Mesh(sideWinGeo, glassMat)
  sideWinL.position.set(-0.87, 0.88, 0.08)
  car.add(sideWinL)
  const sideWinR = sideWinL.clone()
  sideWinR.position.x = 0.87
  car.add(sideWinR)

  // Red accent strip
  const accent = new THREE.Mesh(new THREE.BoxGeometry(4.22, 0.035, 0.035), redMat)
  accent.position.y = 0.52
  car.add(accent)

  // Diffuser
  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.28), darkMat)
  diffuser.position.set(0, 0.07, -0.9)
  diffuser.rotation.x = -0.2
  car.add(diffuser)

  // Headlights
  ;[-0.7, 0.7].forEach(x => {
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.14, 0.08), darkMat)
    housing.position.set(x, 0.58, 0.88)
    car.add(housing)
    const lens = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.05),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffee, emissiveIntensity: 0.6, transparent: true, opacity: 0.85 }))
    lens.position.set(x, 0.58, 0.91)
    car.add(lens)
    const drl = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.025, 0.04),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0 }))
    drl.position.set(x, 0.51, 0.91)
    car.add(drl)
  })

  // Taillights
  const tlMat = new THREE.MeshStandardMaterial({ color: 0xc8002a, emissive: 0xc8002a, emissiveIntensity: 0.8, transparent: true, opacity: 0.9 })
  ;[-0.72, 0.72].forEach(x => {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.09, 0.06), tlMat)
    tl.position.set(x, 0.55, -0.87)
    car.add(tl)
  })
  const tlStrip = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.025, 0.04),
    new THREE.MeshStandardMaterial({ color: 0xc8002a, emissive: 0xc8002a, emissiveIntensity: 1.2 }))
  tlStrip.position.set(0, 0.49, -0.88)
  car.add(tlStrip)

  // Grille
  const grilleMat = new THREE.MeshStandardMaterial({ color: 0x080808, metalness: 0.5, roughness: 0.8 })
  const grille = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.22, 0.06), grilleMat)
  grille.position.set(0, 0.38, 0.9)
  car.add(grille)
  for (let i = -2; i <= 2; i++) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.2, 0.04), chromeMat)
    line.position.set(i * 0.22, 0.38, 0.92)
    car.add(line)
  }

  // Bumper
  const bumper = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.28, 0.3), bodyMat)
  bumper.position.set(0, 0.14, 0.85)
  car.add(bumper)

  // Wheels
  const wheels = []
  ;[[-0.98, 0.72], [0.98, 0.72], [-0.98, -0.72], [0.98, -0.72]].forEach(([x, z]) => {
    const group = new THREE.Group()
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.14, 12, 36), tireMat)
    tire.rotation.y = Math.PI / 2
    group.add(tire)
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.04, 24), rimMat)
    rim.rotation.z = Math.PI / 2
    group.add(rim)
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.52, 0.035), rimMat)
      spoke.rotation.z = angle
      spoke.rotation.y = Math.PI / 2
      group.add(spoke)
    }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.06, 12),
      new THREE.MeshStandardMaterial({ color: 0xc8002a, metalness: 0.8, roughness: 0.2 }))
    cap.rotation.z = Math.PI / 2
    group.add(cap)
    group.position.set(x, 0.38, z)
    car.add(group)
    wheels.push(group)
  })

  scene.add(car)
  return { car, wheels }
}

export default function CarScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const container = mountRef.current
    if (!container) return
    container.textContent = ''
    const W = Math.max(1, container.clientWidth)
    const H = Math.max(1, container.clientHeight)
    let disposed = false

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x060608)
    scene.fog = new THREE.FogExp2(0x050508, 0.06)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100)
    camera.position.set(0, 1.2, 6)
    camera.lookAt(0, 0, 0)

    // Renderer
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }
    if (!renderer.getContext()) {
      renderer.dispose()
      return
    }
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lights
    scene.add(new THREE.AmbientLight(0x111122, 0.5))
    const keyLight = new THREE.DirectionalLight(0xffffff, 2)
    keyLight.position.set(5, 8, 5)
    keyLight.castShadow = true
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0xc8002a, 1.5)
    rimLight.position.set(-6, 2, -4)
    scene.add(rimLight)
    const fillLight = new THREE.DirectionalLight(0x2244ff, 0.4)
    fillLight.position.set(-3, 4, 3)
    scene.add(fillLight)
    const groundLight = new THREE.PointLight(0xc8002a, 0.8, 8)
    groundLight.position.set(0, -1, 0)
    scene.add(groundLight)

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0x050508, metalness: 0.1, roughness: 0.9 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // Glow
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x3a0010, transparent: true, opacity: 0.35 })
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 2.2), glowMat)
    glow.rotation.x = -Math.PI / 2
    glow.position.y = 0.01
    scene.add(glow)

    // Particles
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = Math.random() * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(particleGeo,
      new THREE.PointsMaterial({ color: 0x440011, size: 0.06, transparent: true, opacity: 0.6 }))
    scene.add(particles)

    const car = new THREE.Group()
    car.rotation.y = -0.35
    scene.add(car)
    const fallback = buildProceduralCar(new THREE.Scene())
    car.add(fallback.car)
    let wheels = fallback.wheels

    const loader = new GLTFLoader()
    loader.load(
      CAR_MODEL_PATH,
      (gltf) => {
        if (disposed) {
          disposeObject(gltf.scene)
          return
        }

        disposeObject(car)
        car.clear()
        wheels = []
        const model = gltf.scene
        fitModelToHero(model)
        model.traverse((child) => {
          if (!child.isMesh) return
          child.castShadow = true
          child.receiveShadow = true
        })
        car.add(model)
      },
      undefined,
      () => {
        if (disposed) return
        wheels = fallback.wheels
      }
    )

    // Drag interaction
    let targetRotY = -0.35, targetRotX = 0
    let isDragging = false, activePointerId = null, prevX = 0, prevY = 0

    const onPointerDown = (e) => {
      isDragging = true
      activePointerId = e.pointerId
      prevX = e.clientX
      prevY = e.clientY
      container.setPointerCapture?.(e.pointerId)
    }
    const onPointerUp = (e) => {
      isDragging = false
      if (activePointerId !== null) container.releasePointerCapture?.(activePointerId)
      activePointerId = null
    }
    const onPointerMove = (e) => {
      if (!isDragging || e.pointerId !== activePointerId) return
      targetRotY -= (e.clientX - prevX) * 0.008
      targetRotX -= (e.clientY - prevY) * 0.004
      targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX))
      prevX = e.clientX; prevY = e.clientY
    }

    container.addEventListener('pointerdown', onPointerDown, { passive: true })
    container.addEventListener('pointerup', onPointerUp, { passive: true })
    container.addEventListener('pointercancel', onPointerUp, { passive: true })
    container.addEventListener('pointermove', onPointerMove, { passive: true })

    // Resize
    let resizeRaf = 0
    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        const w = Math.max(1, container.clientWidth)
        const h = Math.max(1, container.clientHeight)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      })
    }
    window.addEventListener('resize', onResize)

    // Animate
    let time = 0
    let rafId
    const clock = new THREE.Clock()

    const animate = () => {
      if (disposed) return
      rafId = requestAnimationFrame(animate)
      const dt = clock.getDelta()
      time += dt

      if (!isDragging) targetRotY += 0.003
      car.rotation.y += (targetRotY - car.rotation.y) * 0.06
      car.rotation.x += (targetRotX - car.rotation.x) * 0.06
      car.position.y = Math.sin(time * 0.6) * 0.04

      wheels.forEach(w => { w.children[0].rotation.x += 0.04 })
      particles.rotation.y += 0.0006
      groundLight.intensity = 0.6 + Math.sin(time * 1.2) * 0.2
      glowMat.opacity = 0.28 + Math.sin(time * 0.8) * 0.07

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      cancelAnimationFrame(resizeRaf)
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointerup', onPointerUp)
      container.removeEventListener('pointercancel', onPointerUp)
      container.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      disposeObject(car)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="car-scene-canvas"
    />
  )
}
