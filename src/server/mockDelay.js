export function mockDelay(timeout, cb) {
  return setTimeout(() => {
    cb();
  }, timeout);
}
