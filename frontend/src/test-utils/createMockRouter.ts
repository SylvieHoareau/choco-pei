import { NextRouter } from 'next/router';

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    isFallback: false,
    isReady: true,
    isLocaleDomain: false,
    isPreview: false,
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    ...router,
  };
}
