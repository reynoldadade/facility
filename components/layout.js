import {
  faUser,
  faBuilding,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import LinkedList from './common/Links';

const LinkTemplate = [
  {
    name: 'Buildings',
    icon: faBuilding,
    href: '/buildings',
  },
  {
    name: 'Assets',
    icon: faToolbox,
    href: '/assets',
  },
  {
    name: 'Account',
    icon: faUser,
    href: '/account',
  },
];

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 p-2 bg-gray-200  flex justify-between">
        <div className="font-semibold">Managed</div>
        <div className="flex px-2 text-sm">
          <LinkedList LinkTemplate={LinkTemplate} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
