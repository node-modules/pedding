export type Callback = (err?: Error) => void;

export class ExecuteTooManyTimesError extends Error {
  expected: number;
  actual: number;

  constructor(expected: number, actual: number) {
    super(`Expected to execute ${expected} times, but got ${actual} times`);
    this.expected = expected;
    this.actual = actual;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export function pending(fn: Callback, n: number): (err?: Error) => void;
export function pending(n: number, fn: Callback): (err?: Error) => void;
export function pending(n: number | Callback, fn: Callback | number): (err?: Error) => void {
  let _fn: Callback;
  if (typeof n === 'function') {
    // keep compatibility for old version
    // pending(fn, n)
    _fn = n;
    n = fn as number;
  } else {
    _fn = fn as Callback;
  }

  let called = false;
  let times = 0;
  const callStack = new Error();
  callStack.name = 'CallStack';
  return (err?: Error) => {
    if (called) {
      return;
    }
    if (err) {
      called = true;
      return _fn(err);
    }
    times++;
    if (times === n) {
      _fn();
    } else if (times > n) {
      const err = new ExecuteTooManyTimesError(n, times);
      err.stack += '\n' + callStack.stack;
      throw err;
    }
  };
}

/**
 * @deprecated Use `pending` instead
 */
export const pedding = pending;
