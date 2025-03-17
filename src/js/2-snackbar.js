import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.querySelector('[name="delay"]');
  const delay = delayInput.value;

  const stateInput = form.querySelector('[name="state"]:checked');
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topCenter',
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topCenter',
      });
    });
});
