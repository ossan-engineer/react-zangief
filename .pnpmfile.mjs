// Storybook の起動で ajv-formats から ajv@8 を読み込めるようにするため（経緯は PR 説明を参照）
const removeAjvPeer = (pkg) => {
  const { ajv: _peer, ...peerDependencies } = pkg.peerDependencies ?? {}
  const { ajv: _meta, ...peerDependenciesMeta } = pkg.peerDependenciesMeta ?? {}
  return { ...pkg, peerDependencies, peerDependenciesMeta }
}

export const hooks = {
  readPackage: (pkg) =>
    pkg.name === 'ajv-formats' && pkg.version.startsWith('2.') ? removeAjvPeer(pkg) : pkg,
}
