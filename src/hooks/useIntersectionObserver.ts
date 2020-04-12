interface ObserverOptions {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
  callback,
  options = {},
}: ObserverOptions): IntersectionObserver => {
  const observer = new IntersectionObserver(callback, options);
  return observer;
};

export default useIntersectionObserver;
