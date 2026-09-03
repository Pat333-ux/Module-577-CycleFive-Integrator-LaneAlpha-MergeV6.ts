export const integrateAlphaV6 = (matrix) =>
  matrix
    .map(x => x.normalizeV6())
    .sort((a, b) => a.partition.localeCompare(b.partition))
    .reduce((acc, curr) => acc.merge(curr), INIT_ALPHA_STATE);
