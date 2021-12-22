import { Menu } from 'ant-design-vue'
import RenderIcon from '@/components/renderIcon/'
import useAsiderMenuHooks from '@/components/hooks/useAsiderMenuHooks'
import useMenuHooks from '../hooks/useMenuHooks'
import './index.less'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const renderSubMenu = (item) => {
  return (
    <SubMenu
      key={item.key}
      v-slots={{
        icon: () => <RenderIcon data={item.icon} />,
        title: () => <span>{item.title}</span>,
      }}
    >
      {renderMenuItems(item.children)}
    </SubMenu>
  )
}

const renderMenuItem = (item) => {
  return (
    <MenuItem
      key={item.key}
      v-slots={{
        icon: () => <RenderIcon data={item.icon} />,
      }}
    >
      <span>{item.title}</span>
    </MenuItem>
  )
}

const renderMenuItems = (menuData) => {
  return menuData.map((item) => {
    if (item.children.length) {
      return renderSubMenu(item)
    } else {
      return renderMenuItem(item)
    }
  })
}

export default {
  name: 'AsiderMenu',
  components: {
    Menu,
  },
  setup() {
    const { menuData } = useAsiderMenuHooks()
    const { collapsed, handleMenuClick } = useMenuHooks()

    return () => {
      return (
        <div class="asider-menu-container">
          <Menu
            mode="inline"
            theme="dark"
            inline-collapsed={collapsed.value}
            onClick={handleMenuClick}
          >
            {renderMenuItems(menuData.value)}
          </Menu>
        </div>
      )
    }
  },
}
