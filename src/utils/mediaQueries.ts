const breakpoints = [300, 600, 900, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mq;
