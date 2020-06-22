export const getBrowserInfo = (userAgent: string, appName: string, appVersion: string) => {
  let tem;
  let M = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return { name: 'IE ', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = userAgent.match(/\bOPR\/(\d+)/);
    if (tem != null) {
      return { name: 'Opera', version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [appName, appVersion, '-?'];
  tem = userAgent.match(/version\/(\d+)/i);
  if (tem != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1],
  };
};
