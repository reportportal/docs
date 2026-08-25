import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import versions from '../../versions.json';
import { splitVersions } from '../utils/splitVersions';

const { minors } = splitVersions(versions);

function versionPathPattern(id) {
  return new RegExp(`/${id.replace(/\./g, '\\.')}(?:/|$)`);
}

function findVersionLink(menu, id) {
  const pattern = versionPathPattern(id);
  return [...menu.querySelectorAll('a.dropdown__link')].find((link) =>
    pattern.test(link.getAttribute('href') || ''),
  );
}

function moveMinorsToEarlierSection() {
  if (!ExecutionEnvironment.canUseDOM || !minors.length) {
    return;
  }

  const menu = document.querySelector('.navbar .dropdown__menu');
  const label = menu?.querySelector('.dropdown__label');
  if (!menu || !label) {
    return;
  }

  minors.reduce(
    (insertAfter, { id }) => {
      const link = findVersionLink(menu, id);
      if (!link) {
        return insertAfter;
      }

      const row = link.closest('li') || link;
      insertAfter.after(row);
      return row;
    },
    label.closest('li') || label,
  );
}

export function onRouteDidUpdate() {
  moveMinorsToEarlierSection();
  requestAnimationFrame(moveMinorsToEarlierSection);
}
