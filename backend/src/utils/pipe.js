const pipefn = (...fns) => (arguments) => fns.reduce((value, fn) => fn(value), arguments);
