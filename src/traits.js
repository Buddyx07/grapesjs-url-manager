export default (editor) => {
  const tm = editor.TraitManager;

  // Custom Href Box Trait with Tabs
  tm.addType('href-box', {
    createInput({ trait, component }) {
      const el = document.createElement('div');
      el.className = 'href-next';
      const tabs = ['url', 'email', 'whatsapp', 'phone'];
      const tabContainer = document.createElement('div');
      const inputs = {};

      tabContainer.className = 'href-next__tabs';
      tabs.forEach(type => {
        const btn = document.createElement('button');
        btn.className = `href-next__tab ${type}`;
                switch (type) {
          case 'url':
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="M684-180v-108H576v-72h108v-108h72v108h108v72H756v108h-72ZM432-288H288q-79.68 0-135.84-56.23Q96-400.45 96-480.23 96-560 152.16-616q56.16-56 135.84-56h144v72H288q-50 0-85 35t-35 85q0 50 35 85t85 35h144v72Zm-96-156v-72h288v72H336Zm528-36h-72q0-50-35-85t-85-35H528v-72h144q79.68 0 135.84 56.16T864-480Z"/></svg>';
            break;
          case 'email':
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg>';
            break;
          case 'whatsapp':
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256"
                              style="fill:#FFFFFF;">
                              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,1.29688 0.41797,2.48438 1.07031,3.5l-1.11719,3.12109l3.47656,-0.98047c0.92188,0.50391 1.94531,0.85938 3.07031,0.85938c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM7.5,2c3.04297,0 5.5,2.45703 5.5,5.5c0,3.04297 -2.45703,5.5 -5.5,5.5c-1.04297,0 -2.00781,-0.29297 -2.84375,-0.79687l-0.18359,-0.11328l-1.92578,0.53906l0.625,-1.73437l-0.15234,-0.21094c-0.64062,-0.90234 -1.01953,-1.99609 -1.01953,-3.18359c0,-3.04297 2.45703,-5.5 5.5,-5.5zM5.0625,4c-0.11328,0 -0.30078,0.04688 -0.46094,0.23438c-0.15625,0.18359 -0.60156,0.63281 -0.60156,1.54688c0,0.91016 0.61719,1.79297 0.70313,1.91797c0.08594,0.125 1.21484,1.99609 2.94141,2.80078c0.41016,0.19141 0.73047,0.30469 0.98047,0.39063c0.41406,0.14063 0.78906,0.12109 1.08594,0.07422c0.33203,-0.05469 1.01953,-0.44922 1.16406,-0.88281c0.14063,-0.43359 0.14453,-0.80469 0.09766,-0.88281c-0.03906,-0.07812 -0.15625,-0.125 -0.32812,-0.21484c-0.17187,-0.09375 -1.01953,-0.54297 -1.17578,-0.60156c-0.15625,-0.06641 -0.27344,-0.09375 -0.39062,0.08984c-0.11328,0.1875 -0.44141,0.60547 -0.54297,0.72656c-0.10156,0.125 -0.19922,0.14063 -0.37109,0.04688c-0.17578,-0.09375 -0.73047,-0.28906 -1.38672,-0.92187c-0.51172,-0.49219 -0.85937,-1.09766 -0.95703,-1.28516c-0.10156,-0.1875 -0.01172,-0.28516 0.07422,-0.375c0.07813,-0.08594 0.17188,-0.21875 0.25781,-0.32812c0.08594,-0.10547 0.11328,-0.1875 0.17188,-0.30859c0.05859,-0.125 0.03125,-0.23437 -0.01172,-0.32422c-0.04687,-0.09375 -0.39062,-1.00781 -0.53125,-1.37891c-0.14062,-0.35938 -0.28516,-0.3125 -0.39062,-0.31641c-0.09766,-0.00781 -0.21484,-0.00781 -0.32812,-0.00781z"></path></g></g>
                              </svg>`;
            break;
          case 'phone':
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z"/></svg>`;
            break;
        }

        btn.addEventListener('click', () => {
          tabs.forEach(t => {
            el.querySelectorAll(`.href-next__tab`).forEach(tab => tab.classList.remove('active'));
            inputs[t].forEach(i => (i.style.display = 'none'));
          });

          btn.classList.add('active');
          inputs[type].forEach(i => (i.style.display = 'block'));
          el.dataset.selected = type;

          const spaCheckbox = document.querySelector('.spa-checkbox');
          if (spaCheckbox) {
            spaCheckbox.style.display = type === 'url' ? 'flex' : 'none';
          }
        });

        tabContainer.appendChild(btn);
      });

      el.appendChild(tabContainer);
      el.dataset.selected = 'url';

      inputs.url = [Object.assign(document.createElement('input'), {
        placeholder: 'https://example.com',
        className: 'href-next__url'
      })];
      inputs.email = [
        Object.assign(document.createElement('input'), {
          placeholder: 'user@example.com',
          className: 'href-next__email',
          style: 'display:none'
        }),
        Object.assign(document.createElement('input'), {
          placeholder: 'Subject',
          className: 'href-next__email-subject',
          style: 'display:none'
        }),
        Object.assign(document.createElement('input'),{
          placeholder:'Massage',
          className:'href-next__email-massage',
          style: 'display:none'
        }
      )
      ];
      inputs.whatsapp = [
        Object.assign(document.createElement('input'), {
          placeholder: 'WhatsApp No',
          className: 'href-next__wa',
          style: 'display:none'
        }),
        Object.assign(document.createElement('input'), {
          placeholder: 'Message',
          className: 'href-next__wa-msg',
          style: 'display:none'
        })
      ];
      inputs.phone = [Object.assign(document.createElement('input'), {
        placeholder: 'Phone No',
        className: 'href-next__phone',
        style: 'display:none'
      })];

      Object.values(inputs).flat().forEach(input => el.appendChild(input));
      setTimeout(() => tabContainer.querySelector('.url').click(), 0);
      return el;
    },

    onEvent({ elInput, component }) {
      const type = elInput.dataset.selected;
      const url = elInput.querySelector('.href-next__url')?.value || '';
      const email = elInput.querySelector('.href-next__email')?.value || '';
      const subj = elInput.querySelector('.href-next__email-subject')?.value || '';
      const emailMas = elInput.querySelector('.href-next__email-massage')?.value||'';
      const waNo = elInput.querySelector('.href-next__wa')?.value || '';
      const waMsg = elInput.querySelector('.href-next__wa-msg')?.value || '';
      const phone = elInput.querySelector('.href-next__phone')?.value || '';

      let href = '';
      if (type === 'url') href = url;
      else if (type === 'email') href = `mailto:${email}?subject=${subj}&body=${emailMas}`;
      else if (type === 'whatsapp') href = `https://wa.me/${waNo}?text=${encodeURIComponent(waMsg)}`;
      else if (type === 'phone') href = `tel:${phone}`;

      component.addAttributes({ href });
    },
    eventCapture: ['change', 'keyup', 'blur', 'input']
  });

  // SPA checkbox trait
  tm.addType('UrlCheck', {
    createInput({ trait }) {
      const label = document.createElement('label');
      label.className = 'material-checkbox spa-checkbox';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';


      const span = document.createElement('span');
      span.className = 'checkmark';

      const h4 = document.createElement('h5');
      h4.textContent = 'SPA Enable';

      label.appendChild(checkbox);
      label.appendChild(span);
      label.appendChild(h4);

      return label;
    },
    onEvent({ elInput, component, event, trait }) {
      const input = elInput.querySelector('input[type="checkbox"]');
      if (input) component.set(trait.get('name'), input.checked);
    },
    setValue(value, { elInput }) {
      const input = elInput.querySelector('input[type="checkbox"]');
      if (input) input.checked = !!value;
    }
  });
};
//Developed by --Buddyx07-- //
