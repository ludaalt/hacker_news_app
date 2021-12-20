export const renderComments = (arr: Array<any>, rootElem: any) => {
  if (arr && arr.length != 0) {
    for (let i = 0; i < arr[0].length; i += 1) {
      const parent = createNode('ul', '');
      let child;

      if (arr[0][i]['content'] !== undefined) {
        child = createNode('li', arr[0][i]['content']);
        parent.appendChild(child);
        rootElem.appendChild(parent);
      }

      // if (arr[i]['comments'].length > 0) {
      //   renderComments(arr[i]);
      // }
    }
  }
};

const createNode = (tag: string, content: string) => {
  const node = document.createElement(tag);
  node.textContent = content;
  return node;
};
