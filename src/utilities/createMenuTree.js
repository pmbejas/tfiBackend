export const createMenuTree = (data) => {

  const roots = data.filter(menuItem => menuItem.parentId === null);

  const menus = roots.map(rootItem => {
    const submenus = data.filter(subMenuItem => subMenuItem.parentId === rootItem.id);

    const menu = {
      title: rootItem.title,
      url: rootItem.url,
      icon: rootItem.icon || null,
      haveLink: rootItem.havelink,
      orden: rootItem.orden,
    };

    if (submenus.length > 0) {
      menu.submenu = submenus.map(sub => ({
        title: sub.title,
        url: sub.url,
        orden: sub.orden,
      }));
    }

    return menu;
  });

  menus.sort((a, b) => a.orden - b.orden);
  menus.forEach(menu => {
    if (menu.submenu) menu.submenu.sort((a, b) => a.orden - b.orden);
  });

  return menus;
}