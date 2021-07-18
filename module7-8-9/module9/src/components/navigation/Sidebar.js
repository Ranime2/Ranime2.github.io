import Languages from '../../assets/languages';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
let isEnglish = !window.location.href.toString().includes("/fr") ? 0 : 1;
export const SidebarData = [

    {
        title: Languages.NAV_HOME[isEnglish],
        path: !isEnglish? '/home': "/home/fr",
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: Languages.NAV_EXPLORE[isEnglish],
        path: !isEnglish? '/explore':'/explore/fr',
        icon: <AiIcons.AiOutlineFileSearch />,
        cName: 'nav-text'
    },
    {
        title: Languages.NAV_CREATE[isEnglish],
        path: !isEnglish? '/create':'/create/fr',
        icon: <AiIcons.AiFillEdit />,
        cName: 'nav-text'
    }
];

