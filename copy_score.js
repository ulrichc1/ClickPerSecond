function copyAttributes(source, target) {
    return Array.from(source.attributes).forEach(attribute => {
      target.setAttribute(
        attribute.nodeName === 'id' ? 'data-id' : attribute.nodeName,
        attribute.nodeValue,
      );
    });
  }
  
  const firstElt = document.getElementById('counter');
  const secondElt = document.getElementById('counter2');
  
  copyAttributes(firstElt, secondElt);
  