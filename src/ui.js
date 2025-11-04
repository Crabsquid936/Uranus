export function setupUI(renderer) {
  const uiDiv = document.getElementById('ui');
  // Very basic toolbar:
  uiDiv.innerHTML = `<button id="resetBtn">Reset Rotation</button>`;
  document.getElementById('resetBtn').onclick = () => {
    renderer.cube.rotation.x = 0;
    renderer.cube.rotation.y = 0;
  };
}
