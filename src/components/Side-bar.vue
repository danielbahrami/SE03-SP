<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Sidebar',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-user'
        },
        {
          href: '/playlist',
          title: 'Playlist',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/playlist/sublink',
              title: '#1'
            },
            {
              href: '/playlist/sublink',
              title: '#2'
            }

          ]
        },
        {
          href: '/hitlist',
          title: 'Hitlist',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/hitlist/sublink',
              title: '#1'
            },
            {
              href: '/hitlist/sublink',
              title: '#2'
            }

          ]
        },
        {
          href: '/genre',
          title: 'Genre',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/genre/sublink',
              title: '#1'
            },
            {
              href: '/genre/sublink',
              title: '#2'
            }

          ]
        },
        {
          href: '/recently_played',
          title: 'Recently Played',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '//recently_played/sublink',
              title: '#1'
            },
            {
              href: '//recently_played/sublink',
              title: '#2'
            }

          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>