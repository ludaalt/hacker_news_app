export const renderComments = (arr: Array<any>, rootElem: any) => {
  if (arr && arr.length != 0) {
    for (let i = 0; i < arr.length; i += 1) {
      const li = createNode('li', arr[i]['content']);
      rootElem && rootElem.appendChild(li);

      if (arr[i]['comments']) {
        const ul = createNode('ul', '');
        renderComments(arr[i], ul);
      }
    }
  }
};

const createNode = (tag: string, content: string) => {
  const node = document.createElement(tag);
  node.textContent = content;
  return node;
};
