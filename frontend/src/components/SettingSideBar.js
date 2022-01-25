import { NavLink } from 'react-router-dom';
import Icon from '@material-tailwind/react/Icon';

export default function SettingSideBar() {
  return (
    <div className="flex flex-col mt-5 mx-10">
      <ul className="flex-col min-w-full flex list-none">
          <li className="rounded-lg mb-4">
            <NavLink
              to="/settings/character"
              exact
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-500 text-white shadow-md"
            >
              <Icon name="person" size="2xl" />
              <span class="text-lg">캐릭터 관리</span>
            </NavLink>
          </li>
          <li className="rounded-lg mb-2">
            <NavLink
              to="/settings/account"
              exact
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-500 text-white shadow-md"
            >
              <Icon name="person" size="2xl" />
              <span class="text-lg">계정 설정</span>
            </NavLink>
          </li>
          <li className="rounded-lg mb-2 text-gray-700">
            <NavLink
              to="/settings/alarm"
              exact
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-500 text-white shadow-md"
            >
              <Icon name="alarm" size="2xl" />
              <span class="text-lg">알림</span>
            </NavLink>
          </li>
          <li className="rounded-lg mb-2 text-gray-700">
            <NavLink
              to="/settings/help"
              exact
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-500 text-white shadow-md"
            >
              <Icon name="help" size="2xl" />
              <span class="text-lg">도움말 및 지원</span>
            </NavLink>
          </li>
      </ul>
    </div>
  );
}
