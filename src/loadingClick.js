const defaultConfig = {
  template: `<span class="sg-loading-btn"></span>`
}

function createElement(html) {
  if (typeof html === "string") {
    let dom = document.createElement("div");
    dom.innerHTML = html;
    return dom.firstChild;
  } else if (html instanceof Element) {
    return html;
  }
}

function addLoading($event, el, attr, vnode, config) {
  let parent = vnode.context;
  let template = config.template;
  let eventPromise;

  if (attr.expression in parent) {
    eventPromise = Promise.resolve(parent[attr.expression]($event));
  } else {
    throw new Error(`${attr.expression} in not exist in define`);
  }

  let iconDom = createElement(template);
  el.insertBefore(iconDom, el.firstChild);
  
  let removeChild = () => {
    el.removeChild(iconDom);
  }

  return eventPromise.then(() => {
    return removeChild();
  });
}

function ClickHandler(pending, ...args) {
  if (!pending) {
    addLoading(...args);
  }
}

function makeDir(config = defaultConfig) {
  return {
    bind: function(el, attr, vnode) {
      let pending = false;
      el.addEventListener('click', ($event) => {
        if (!pending) {
          pending = true;
          addLoading($event, el, attr, vnode, config).then(() => {
            pending = false;
          })
        }
      }, false)
    },
  }
}

export default makeDir;