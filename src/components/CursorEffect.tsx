'use client';

import { Vec2 } from 'curtainsjs';
import { useEffect, useState } from 'react';
import { Curtains, Plane } from 'react-curtains';

const vertexShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying vec3 vPosition;
  varying vec2 vTextureCoord;

  void main() {
    vPosition = aVertexPosition;
    vTextureCoord = aTextureCoord;
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  }
`;

const fragmentShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  varying vec3 vPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;
  uniform float uTime;
  uniform vec2 uMousePosition;
  uniform float uDisplacement;

  void main() {
    vec2 textureCoords = vTextureCoord;
    vec2 toMouse = uMousePosition - textureCoords;
    float distortion = 1.0 - smoothstep(0.0, 0.15, length(toMouse));
    
    vec2 displacedTextCoords = textureCoords + toMouse * distortion * uDisplacement * sin(uTime * 3.141592);

    gl_FragColor = texture2D(uRenderTexture, displacedTextCoords);
  }
`;

function RippleEffectPlane() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [plane, setPlane] = useState<any>(null);

  const uniforms = {
    time: {
      name: 'uTime',
      type: '1f',
      value: 0,
    },
    mousePosition: {
      name: 'uMousePosition',
      type: '2f',
      value: new Vec2(),
    },
    displacement: {
      name: 'uDisplacement',
      type: '1f',
      value: 0,
    },
  };

  useEffect(() => {
    if (!plane) return;

    const onMouseMove = (e: MouseEvent) => {
      const mouse = new Vec2(e.clientX, e.clientY);
      plane.uniforms.mousePosition.value = plane.mouseToPlaneCoords(mouse);
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [plane]);

  const onRender = () => {
    if (plane) {
      plane.uniforms.time.value++;
      plane.uniforms.displacement.value = Math.max(
        0,
        plane.uniforms.displacement.value - 0.005,
      );
    }
  };

  return (
    <Plane
      className='w-full h-full'
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      onReady={setPlane}
      onRender={onRender}
    />
  );
}

export default function CursorEffect() {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setPixelRatio(Math.min(1.5, window.devicePixelRatio));
  }, []);

  return (
    <Curtains pixelRatio={pixelRatio}>
      <RippleEffectPlane />
    </Curtains>
  );
}
