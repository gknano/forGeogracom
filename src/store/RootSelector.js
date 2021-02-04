export function createRootSelector(root) {
  return (state) => state[root];
}
