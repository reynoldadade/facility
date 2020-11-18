import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const LinkedList = (props) => {
  return props.LinkTemplate.map((links) => (
    <div className="px-2">
      <Link href={links.href}>
        <span className="cursor-pointer hover:underline">
          <FontAwesomeIcon icon={links.icon} /> {links.name}
        </span>
      </Link>
    </div>
  ));
};

export default LinkedList;
