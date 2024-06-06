'use client'
import Link from 'next/link';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid';
import {
  UserGroupIcon,
  HomeIcon,
  MusicalNoteIcon,
  HandRaisedIcon,
  MicrophoneIcon,
  NewspaperIcon,
  ChatBubbleOvalLeftIcon,
  TagIcon,
  RocketLaunchIcon,
  InformationCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';


const baseLinks = [
  { 
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
    description:"NAI home configuration page"
  },
  {
    name: 'Music',
    href: '/dashboard/music',
    icon: MusicalNoteIcon,
    description:"NAI Music configuration page"
  }, 
   {
    name: 'Roles',
    href: '/dashboard/roles',
    icon: TagIcon,
    description:"NAI Roles configuration page"    
  },
  {
    name: 'Gaming',
    href: '/dashboard/gaming',
    icon: RocketLaunchIcon,
    description:"NAI Gaming configuration page"    
  },
  {
    name: 'Help',
    href: '/dashboard/help',
    icon: InformationCircleIcon,
    description:"NAI Help configuration page"    
  },
];
const proLinks = [
  { 
    name: 'Permissions',
    href: '/dashboard/permissions',
    icon: HandRaisedIcon,
    description:"NAI Permissions configuration page"
  },
  {
    name: 'Tickets',
    href: '/dashboard/tickets',
    icon: NewspaperIcon,
    description:"NAI Tickets configuration page"
  },
  {
    name: 'Voice Records',
    href: '/dashboard/voice-records',
    icon: MicrophoneIcon,
    description:"NAI Voice Records configuration page"
  },
  {
    name: 'Statistics',
    href: '/dashboard/statistics  ',
    icon: ChartBarIcon,
    description:"NAI Statistics configuration page"
  }
]

const aiLinks = [
  { 
    name: 'Assistant',
    href: '/dashboard/assistant',
    icon: ChatBubbleBottomCenterTextIcon,
    description:"NAI Assistant configuration page"

  },
];


export default function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="flex-col w-fit px-2 bg-gray-800 shadow-3xl overflow-visible">       
      <div  className="stickygrow flex-col space-x-0 space-y-2 bg-gray-800 h-[calc(100vh-64px)] no-scrollbar overflow-y-auto ">
      <section className="flex-col bg-gray-800   ">
      <p className='flex flex-cloumn text-nowrap ' ><span>Basic&nbsp;</span> <span className='block md:hidden lg:block'> Version</span></p>
      <div className="flex flex-col space-y-3 mr-2 flex-nowrap mt-0 ">
      {baseLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          key={link.name}
          href={link.href}
          className=
          {`group/item transition ease-in-out delay-50  motion-reduce:transition-none overflow-visible relative lg:w-full mr-2 md:mr-0 mt-0   flex h-[48px] grow items-center justify-start gap-2 rounded-md   p-3 text-sm font-medium hover:bg-gray-700   md:flex-none  md:p-2 md:px-3
           ${pathname === link.href ? '  bg-gray-700 text-gray-50 ' : 'text-gray-50  bg-gray-800' } `}
        >
          <LinkIcon className={`w-6 ${pathname === link.href ? '  text-gray-50 ' : '' } `} />
          <p className={`block md:hidden lg:block  ${pathname === link.href ? '  text-gray-50' : ' ' } `}>{link.name}</p>  
          <div className={` hidden absolute md:group-hover/item:block shadow-xl bg-gray-600 rounded-md  text-neutral-50  p-3 text-sm font-normal w-56 z-20 h-fit left-44`}>{link.description}</div>
        </Link>
        );
      })}
      </div>
      </section>
      <section className="flex-col md:py-3">
      <p className='text-nai-7 flex flex-cloumn text-nowrap' ><span>Pro&nbsp;</span> <span className='md:hidden lg:block'> Version</span></p>

      <div className="flex flex-col space-y-3 mr-2 flex-nowrap mt-0 ">
      {proLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          key={link.name}
          href={link.href}
          className=
          {`group/item transition ease-in-out delay-50  motion-reduce:transition-none overflow-visible relative lg:w-full mr-2 md:mr-0 mt-0   flex h-[48px] grow items-center justify-start gap-2 rounded-md   p-3 text-sm font-medium hover:bg-gray-700   md:flex-none  md:p-2 md:px-3
           ${pathname === link.href ? '  bg-gray-700 text-gray-50 ' : 'text-gray-50  bg-gray-800' } `}
        >
          <LinkIcon className={`w-6 ${pathname === link.href ? '  text-gray-50 ' : '' } `} />
          <p className={`block md:hidden lg:block  ${pathname === link.href ? '  text-gray-50' : ' ' } `}>{link.name}</p>  
          <div className={` hidden absolute md:group-hover/item:block shadow-xl bg-gray-600 rounded-md  text-neutral-50  p-3 text-sm font-normal w-56 z-20 h-fit left-44`}>{link.description}</div>
        </Link>
        );
      })}
      </div>
      </section>
      <section className="flex-col md:py-3 ">
      <p className='text-nai-6 flex flex-cloumn text-nowrap'><span>AI&nbsp;</span> <span className='md:hidden lg:block'> Version</span></p>      
      <div className="flex flex-col space-y-3 mr-2 flex-nowrap mt-0 ">
      {aiLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          key={link.name}
          href={link.href}
          className=
          {`group/item transition ease-in-out delay-50  motion-reduce:transition-none overflow-visible relative lg:w-full mr-2 md:mr-0 mt-0   flex h-[48px] grow items-center justify-start gap-2 rounded-md   p-3 text-sm font-medium hover:bg-gray-700   md:flex-none  md:p-2 md:px-3
           ${pathname === link.href ? '  bg-gray-700 text-gray-50 ' : 'text-gray-50  bg-gray-800' } `}
        >
          <LinkIcon className={`w-6 ${pathname === link.href ? '  text-gray-50 ' : '' } `} />
          <p className={`block md:hidden lg:block  ${pathname === link.href ? '  text-gray-50' : ' ' } `}>{link.name}</p>  
          <div className={` hidden absolute md:group-hover/item:block shadow-xl bg-gray-600 rounded-md  text-neutral-50  p-3 text-sm font-normal w-56 z-20 h-fit left-44`}>{link.description}</div>
        </Link>
        );
      })}
      </div>
      </section>
      </div>
    </aside>
  );
}
