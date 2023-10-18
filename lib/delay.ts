const delay = <T>(waitTime: number, fn?: () => T) =>
  new Promise<T | undefined>((res) =>
    setTimeout(() => {
      const data = fn && fn();

      res(data);
    }, waitTime)
  );

export default delay;
