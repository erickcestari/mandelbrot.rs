precision mediump float;

uniform float u_time;

void main() {
    float r = abs(sin(u_time * 0.0003));
    float g = abs(sin(u_time * 0.0005));
    float b = abs(sin(u_time * 0.0007));

    gl_FragColor = vec4(r, g, b, 1.0);
}