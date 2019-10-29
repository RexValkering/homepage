import Portfolio from './components/Portfolio.vue'

export const routes = [
  {
    path: '/',
    component: Portfolio,
    props: {
      category: 'highlight',
      title: 'Highlighted projects and experience',
    }
  },
  {
    path: '/experience',
    component: Portfolio,
    props: {
      category: 'experience',
      title: 'Experience',
    }
  },
  {
    path: '/projects',
    component: Portfolio,
    props: {
      category: 'project',
      title: 'Projects',
    }
  },
  {
    path: '/open-source',
    component: Portfolio,
    props: {
      category: 'open-source',
      title: 'Open-source projects',
    }
  }
];
