export const buildRoute = (route: string, params: Record<string, string | number>) => {
  let builtRoute = new String(route).toString();
  for(const [ key, value ] of Object.entries(params)) {
    builtRoute = builtRoute.replace(new RegExp(`:${key}`, "g"), value.toString());
  }
  return builtRoute;
};