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
                    title: 'Homologação',
                    type: 'item',
                    url: '/pastas',
                    icon: 'feather icon-folder',
                },
            ]
        },
        {
            id: 'administradores',
            title: 'Admin',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'admins',
                    title: 'Administradores',
                    type: 'item',
                    url: '/admins',
                    icon: 'feather icon-user',
                }
            ]
        },
    ]
}