import { Camera, Renderer, Transform } from "ogl";

import Home from "./Home";

export default class Canvas {
    constructor() {
        this.createRenderer();
        this.createScene();
        this.createCamera();
        this.createHome();
    }

    createRenderer() {
        this.renderer = new Renderer();
        this.gl = this.renderer.gl;
        document.body.appendChild(this.gl.canvas);
    }

    createScene() {
        this.scene = new Transform();
    }

    createHome() {
        this.home = new Home({ gl: this.gl, scene: this.scene });
    }

    createCamera() {
        this.camera = new Camera(this.gl);
        this.camera.position.z = 5;
    }

    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.perspective({
            aspect: window.innerWidth / window.innerHeight,
        });
    }

    update() {
        this.renderer.render({ scene: this.scene, camera: this.camera });
    }
}
