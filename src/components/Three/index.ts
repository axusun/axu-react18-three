/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 19:17:09
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:30:17
 * @FilePath: /my-app/src/components/Three/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// MeshBasicMaterial,MeshStandardMaterial,Mesh,Texture,TextureLoader,Raycaster, Vector2,
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// GLTF 模型加载器
const gltfLoader = new GLTFLoader();

export default class ThreeDom {
  // 渲染器
  renderer: WebGLRenderer;
  // 场景
  scene: Scene;
  // 相机
  camera: PerspectiveCamera;
  // 轨道控制器
  controls: OrbitControls;
  // 存放模型文件的目录
  modelPath: string;

  // 初始化场景
  constructor(canvas: HTMLCanvasElement, modelPath: string = "@/models/") {
    this.renderer = new WebGLRenderer({ canvas });
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      10,
      canvas.width / canvas.height,
      1,
      1000
    );
    this.camera.position.set(0, 180, 180);
    this.camera.lookAt(0, 0, 0);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.modelPath = modelPath;
    this.scene.add(new AmbientLight(0xffffff, 0.5));
    const directionalLight1 = new DirectionalLight(0xffffff, 0.4);
    directionalLight1.position.set(0, 1, -1);
    this.scene.add(directionalLight1);
    const directionalLight2 = new DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(0, 0, 1);
    this.scene.add(directionalLight2);
    const directionalLight3 = new DirectionalLight(0xffffff, 0.4);
    directionalLight3.position.set(-1, 0, 0);
    this.scene.add(directionalLight3);
    const directionalLight4 = new DirectionalLight(0xffffff, 0.4);
    directionalLight4.position.set(1, 0, 0);
    this.scene.add(directionalLight4);
  }

  // 加载GLTF模型
  loadGLTF(modelName: string = "") {
    gltfLoader.load("./models/test.glb", ({ scene: { children } }) => {
      this.scene.add(...children);
    });
  }

  // 连续渲染
  animate() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.animate();
    });
  }
}
