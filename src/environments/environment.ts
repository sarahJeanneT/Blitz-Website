// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  default_language: 'fr',
  url_base_api: 'http://localhost:8000',
  environment_paysafe: 'TEST',
  // tslint:disable-next-line:max-line-length
  token_paysafe: 'T1QtMjM1MjAwOkItcWEyLTAtNWI4NDE0ZDYtMS0zMDJjMDIxNDEzMzhmMzEzN2FmZTgxNmUxMmE4YWJmYTk1NTVkN2VlZWQ5ZWU5ZjgwMjE0M2E1NzE5NDZjYzg3ODgwN2ZkZDU0NjkyODA1ZTg3ZjI5MjQ0ZGRiNg==',
  paths_api: {
    activation: '/users/activate',
    authentication: '/authentication',
    users: '/users',
    organizations: '/organizations',
    domains: '/domains',
    academic_fields: '/academic_fields',
    academic_levels: '/academic_levels',
    reset_password: '/reset_password',
    change_password: '/change_password',
    activate_user: '/users/activate',
    workplaces: '/workplaces',
    profile: '/profile',
    time_slots: '/time_slots',
    periods: '/periods',
    memberships: '/memberships',
    reservationPackages: '/packages',
    pictures: '/pictures',
    cards: '/payment_profiles',
    orders: '/orders',
    reservations: '/reservations',
  }
};
