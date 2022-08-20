import { FaRegBuilding as CompanyIcon } from 'react-icons/fa';
import { AiOutlineTeam as GroupIcon } from 'react-icons/ai';
import {
  BiDollarCircle as MoneyIcon,
  BiCreditCardAlt as CreditIcon,
} from 'react-icons/bi';
import { BsClipboardCheck as ClipboardIcon } from 'react-icons/bs';
import {
  FiLayers as LayerIcon,
  FiHome as HomeIcon,
  FiCommand as CommandIcon,
  FiBox as BoxIcon,
  FiArchive as ArchiveIcon,
} from 'react-icons/fi';

const navData = [
  {
    link: '#home',
    icon: <HomeIcon />,
    text: 'Home',
  },
  {
    link: '#credit',
    icon: <CreditIcon />,
    text: 'Credit',
  },
  {
    link: '#clipboard',
    icon: <ClipboardIcon />,
    text: 'Clipboard',
  },
  {
    link: '#archive',
    icon: <ArchiveIcon />,
    text: 'Archive',
  },
  {
    link: '#company',
    icon: <CompanyIcon />,
    text: 'Company',
  },
  {
    link: '#group',
    icon: <GroupIcon />,
    text: 'Group',
  },
  {
    link: '#layer',
    icon: <LayerIcon />,
    text: 'Layer',
  },
  {
    link: '#box',
    icon: <BoxIcon />,
    text: 'Box',
  },
  {
    link: '#commnad',
    icon: <CommandIcon />,
    text: 'Command',
  },
  {
    link: '#money',
    icon: <MoneyIcon />,
    text: 'Money',
  },
];

export default navData;
