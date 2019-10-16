export default {
    items: [
        {
            id: 'navigation',
            title: 'Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'Actions',
            title: 'Pastas',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'folders',
                    title: 'Pastas',
                    type: 'item',
                    url: '/pastas',
                    icon: 'feather icon-folder',
                },
                {
                    id: 'folders_homogation',
                    title: 'Homologação',
                    type: 'item',
                    url: '/pastas/homologar',
                    icon: 'feather icon-filter',
                },
            ]
        },
        {
            id: 'usuarios',
            title: 'Usuários',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'admins',
                    title: 'Administradores',
                    type: 'item',
                    url: '/admin',
                    icon: 'feather icon-user',
                },
                {
                    id: 'usuarios',
                    title: 'Usuários',
                    type: 'item',
                    url: '/usuarios',
                    icon: 'feather icon-users',
                }
            ]
        },
    ]
}