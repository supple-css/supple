const md5 = require('md5');
const htmlEscaper = require('html-escaper');
const stripComments = require('strip-comments');

module.exports = function demo(content) {
  // Strip all comments
  let cleanContent = stripComments(content);
  // Remove newlines because of a markdown bug
  cleanContent = cleanContent
    .replace(/^.*?\/\/.*/gm, '')
    .replace(/(\r\n|\n|\r)/gm, '');

  // Create unique identifier for our demo component
  const unique = md5(htmlEscaper.escape(content));

  return `<div class="c-demo" data-module="demo">
    <div class="c-demo__inner">
      <div class="c-demo__target" data-module-bind="demo__target-${unique}"></div>
      <button class="c-demo__launch" data-module-bind="demo__launch-${unique}">Launch <span aria-hidden="true">↗</span></button>
    </div>
    <template data-module-bind="demo__template-${unique}">${cleanContent}</template>
    <script>
      (function() {
        var root = document.querySelector('[data-module-bind="demo__target-${unique}"]');
        var template = document.querySelector('[data-module-bind="demo__template-${unique}"]');
        var demoDiv = document.createElement('div');
        demoDiv.innerHTML = template.innerHTML;
        var standaloneScript = demoDiv.querySelector('script');
        if (standaloneScript) {
          standaloneScript.textContent = '(function() { document.getElementsByTagName(\\'html\\')[0].setAttribute(\\'lang\\', \\'en\\'); var demo = document;' + standaloneScript.textContent + '})();';
        }
        if (document.head.attachShadow) {
          var templateScript = template.content.querySelector('script');
          if (templateScript) {
            var wrappedScript = '(function() { var demo = document.querySelector(\\'[data-module-bind="demo__target-${unique}"]\\').shadowRoot;' + templateScript.textContent + '})();';
            templateScript.textContent = wrappedScript;
          }
          root.attachShadow({mode: 'open'});
          root.shadowRoot.appendChild(document.importNode(template.content, true));
        } else {
          root.innerHTML = '<p class="site-error"><strong style="font-weight:bold">Site error:</strong> A browser supporting Shadow DOM is needed to run encapsulated demos. You can launch the demo in a separate window ↓</p>';
        }
        var launchButton = document.querySelector('[data-module-bind="demo__launch-${unique}"]');
        launchButton.addEventListener('click', function () {
          var standalone = window.open();
          standalone.document.body.innerHTML = demoDiv.innerHTML;
          var newScript = standalone.document.createElement('script');
          var oldScript = standalone.document.querySelector('script');
          if (oldScript) {
            newScript.textContent = oldScript.textContent;
            oldScript.parentNode.removeChild(oldScript);
            standalone.document.body.appendChild(newScript);
          }
          standalone.document.title = 'demo ${unique}';
          console.log(demoDiv);
        });
      })();
    </script>
  </div>`;
};
