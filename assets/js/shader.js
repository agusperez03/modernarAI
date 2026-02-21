/**
 * shader.js â€” WebGL Voronoi background
 * File: assets/js/shader.js
 *
 * Self-contained module. Call initShader() once after DOM is ready.
 * The canvas renders at full viewport size and tracks mouse movement.
 */

// â”€â”€ GLSL sources â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const VERT_SRC = /* glsl */`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAG_SRC = /* glsl */`
  precision highp float;
  uniform vec2  iResolution;
  uniform float iTime;
  uniform vec2  iMouse;
  uniform float BRIGHTNESS;

  const int   POINTS      = 16;
  const float WAVE_OFFSET = 12000.0;
  const float SPEED       = 1.0 / 20.0;
  const float COLOR_SPEED = 1.0 / 12.0;

  void voronoi(vec2 uv, inout vec3 col) {
    float time           = (iTime + WAVE_OFFSET) * SPEED;
    float bestDistance   = 999.0;
    float lastBestDist   = bestDistance;
    vec3  voronoiVal     = vec3(0.0);

    for (int i = 0; i < POINTS; i++) {
      float fi = float(i);
      vec2 p = vec2(
        mod(fi, 1.0) * 0.1 + sin(fi),
        -0.05 + 0.15 * float(i / 10) + cos(fi + time * cos(uv.x * 0.025))
      );
      p.x += 0.01 * sin(iMouse.x / iResolution.x * 3.14);
      p.y += 0.01 * cos(iMouse.y / iResolution.y * 3.14);

      float d = distance(uv, p);
      if (d < bestDistance) {
        lastBestDist = bestDistance;
        bestDistance = d;
        voronoiVal.x  = p.x;
        voronoiVal.yz = vec2(p.x * 0.4 + p.y, p.y) * vec2(0.9, 0.87);
      }
    }

    col *= 0.5 + 0.4 * voronoiVal;

    float edge = 1.0 - abs(bestDistance - lastBestDist);
    col += vec3(0.1, 0.6, 1.0) * smoothstep(0.985, 1.02, edge) * 0.5;
    col += vec3(0.0, 0.3, 0.8) * smoothstep(0.94,  1.0,  edge) * 0.2;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float t = iTime * COLOR_SPEED;

    vec3 deepSpace = vec3(0.04, 0.06, 0.1);
    vec3 coreBlue  = vec3(0.05, 0.2,  0.5);
    vec3 cyanGlow  = vec3(0.0,  0.5,  0.7);

    float noise  = sin(uv.x * 2.0 + t) * cos(uv.y * 3.0 - t * 0.5);
    vec3 baseCol = mix(deepSpace, coreBlue, 0.5 + 0.5 * noise);
    baseCol = mix(baseCol, cyanGlow, smoothstep(0.6, 1.0, noise) * 0.3);
    baseCol *= smoothstep(-0.4, 1.1, uv.y);

    voronoi(uv * 4.0 - 1.0, baseCol);

    gl_FragColor = vec4(baseCol, 1.0) * BRIGHTNESS;
  }
`;

// â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

/**
 * Compile a GLSL shader and return it, or throw on error.
 * @param {WebGLRenderingContext} gl
 * @param {string} source
 * @param {number} type  gl.VERTEX_SHADER | gl.FRAGMENT_SHADER
 * @returns {WebGLShader}
 */
function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`[shader] Compile error: ${info}`);
  }
  return shader;
}

// â”€â”€ Public API â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

/**
 * Initialise the WebGL Voronoi background on the given canvas element.
 * @param {HTMLCanvasElement} canvas
 */
function initShader(canvas) {
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.warn('[shader] WebGL not supported â€” background disabled.');
    return;
  }

  // â”€â”€ Build programme â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const vert = compileShader(gl, VERT_SRC, gl.VERTEX_SHADER);
  const frag = compileShader(gl, FRAG_SRC, gl.FRAGMENT_SHADER);

  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`[shader] Link error: ${gl.getProgramInfoLog(program)}`);
  }

  // â”€â”€ Geometry (full-screen quad) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );

  const posLoc  = gl.getAttribLocation(program,  'a_position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  // â”€â”€ Uniform locations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const uRes        = gl.getUniformLocation(program, 'iResolution');
  const uTime       = gl.getUniformLocation(program, 'iTime');
  const uMouse      = gl.getUniformLocation(program, 'iMouse');
  const uBrightness = gl.getUniformLocation(program, 'BRIGHTNESS');

  // â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  let mouseX     = 0;
  let mouseY     = 0;
  const startTime = Date.now();
  const BRIGHTNESS = 0.85;

  // Resize canvas to match viewport
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  // Track mouse
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // â”€â”€ Render loop â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function render() {
    requestAnimationFrame(render);
    const t = (Date.now() - startTime) / 1000;

    gl.useProgram(program);
    gl.uniform2f(uRes,        canvas.width, canvas.height);
    gl.uniform1f(uTime,       t);
    gl.uniform2f(uMouse,      mouseX, mouseY);
    gl.uniform1f(uBrightness, BRIGHTNESS);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  requestAnimationFrame(render);
}

window.initShader = initShader;

