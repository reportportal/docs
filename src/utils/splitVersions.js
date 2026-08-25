const LATEST_COUNT = 7;
const MINOR_COUNT = 3;

const minorKey = (v) => {
  const [maj, min] = v.split('.');
  return `${maj}.${min}`;
};

const isPatchVersion = (v) => {
  const parts = v.split('.');
  const patch = parts[2] || 0;

  return +patch !== 0;
};

export const splitVersions = (all) => {
  const latest = all.slice(0, LATEST_COUNT);
  const remaining = all.slice(LATEST_COUNT);
  const minors = remaining
    .filter((v) => !isPatchVersion(v))
    .slice(0, MINOR_COUNT)
    .map((v) => ({ id: v, label: minorKey(v) }));

  return { latest, minors };
};
