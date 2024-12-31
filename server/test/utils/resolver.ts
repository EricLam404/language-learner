export function getResolverFunction(fn) {
    return typeof fn === 'function' ? fn : fn.resolve;
}
