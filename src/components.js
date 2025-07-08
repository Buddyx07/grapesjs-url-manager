export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const style1 = document.createElement('style');
  style1.innerHTML = `
.material-checkbox {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #777777;
  cursor: pointer;
}

.material-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: relative;
  display: inline-block;
  left: 5px;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border: 2px solid #454B00;
  border-radius: 4px;
  transition: all 0.3s;
}

.material-checkbox input[type="checkbox"]:checked ~ .checkmark {
  background-color: #2F3300;
  border-color: #454B00;
}

.material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.material-checkbox input[type="checkbox"]:focus ~ .checkmark {
  box-shadow: 0 0 0 2px #dfec5065;
}

.material-checkbox:hover input[type="checkbox"] ~ .checkmark {
  border-color: #C3CF34;
}

.material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
  opacity: 0.5;
  cursor: not-allowed;
}

.material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
  border-color: #4d4d4d;
}

.href-next__tabs {
  display: flex;
  flex-direction:row;
  margin-bottom: 10px;
}
.href-next__tab {
  padding: 5px 10px;
  background:rgb(16, 15, 15);
  border: none;
  cursor: pointer;
}
.href-next__tab.active {
  border-bottom: 3px solid rgb(11, 89, 224);
  color: white;
}

.href-next input {
    display: inline-block;
    height: 25px;
    width: 100%;
    bottom: 5px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background:rgb(120, 180, 229);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slider:before {
  position: absolute;
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  width: 2em;
  inset: 0;
  background-color: white;
  border-radius: 55px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.switch input:checked + .slider {
  background:rgb(11, 89, 224);
}

.switch input:focus + .slider {
  box-shadow: 0 0 1pxrgb(0, 0, 0);
}

.switch input:checked + .slider:before {
  transform: translateX(1.6em);
}
.gjs-field gjs-field-checkbox-span
{
width:1px
}
`;

  document.head.appendChild(style1);
  function navigateSpaRoute(event, path) {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  }

  domc.addType('link', {
    model: {
      defaults: {
        tagName: 'a',
        content: 'Link',
        attributes: { href: '#' },
        traits: [
          { type: 'text', name: 'topic', label: 'Title', changeProp: 1, placeholder: 'Text Here' },
          { type: 'checkbox', name: 'newTab', label: 'Open new Tab', changeProp: 1 },
          { type: 'href-box', name: 'href', label:'select a link', changeProp: 1 },
          { type: 'UrlCheck', name: 'SPA', label:false, changeProp: 1 },

        ],
      },
      init() {
        this.on('change:SPA change:href ', (e) => this.view?.updateLink?.(e));
        this.on('change:newTab', () => this.view?.ViewTab?.());
        this.on(' change:topic ', () => this.view?.SetValue?.());
      },
    },
    view: {
      init() {
        this.updateLink();
        this.ViewTab()
      },

      ViewTab() {
        const newTab = this.model.get('newTab');
        if (newTab) {
          this.model.addAttributes({ target: '_blank' });
        } else {
          this.model.addAttributes({ target: null });
        }
      },
      SetValue() {
        const topic = this.model.get('topic') || '';
        this.model.components(topic);
      },
      updateLink(e) {
        console.log(e);
        const href = this.model.get('href-box') || '#';
        const SPA = this.model.get('SPA');
        this.model.addAttributes({ href });

        if (SPA && href) {
          console.log(this.model.getAttributes());
          e.set({
            script: function () {
              this.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.pushState({}, '', href);
                window.dispatchEvent(new Event('popstate'));
              })
            },
          })
        } else {
          this.model.set({
            script: undefined
          })
        }
      },
    }
  });
}
//Developed by --Buddyx07-- //