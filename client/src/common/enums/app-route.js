const AppRoute = {
  SIGN_IN: '/sign-in',
  SIGNUP: '/sign-up',
  PROJECTS: '/projects',
  PROJECT: '/projects/:projectId',
  SECTION: '/projects/:projectId/:sectionId',
  SHARED: '/shared-projects',
  SHARED_PROJECT: '/shared-projects/:projectId',
  SHARED_SECTION: '/shared-projects/:projectId/:sectionId',
  OPEN_DB: '/open-db',
  ROOT: '/records',
  RECORD_ID: '/:recordId',
  ADD_RECORD: '/add',
  UPDATE_RECORD: '/edit',
  ANY: '*'
};

export default AppRoute;