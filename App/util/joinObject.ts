let joinObject = (params: object): string => {
  let obj = JSON.parse(JSON.stringify(params));
  let arr: string[] = [];
  for (const key in obj) {
    if (obj[key]) arr.push(`${[key]}=${obj[key]}`);
  }

  return arr.join('&');
};

export default joinObject;
