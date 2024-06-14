'use strict';

const body = document.body;
const cardBtnMore = document.querySelectorAll('.card__btn-more');
const cardBtnWatch = document.querySelectorAll('.card__btn-watch');

cardBtnMore.forEach((btn) => {
	btn.addEventListener('click', () => {
		body.classList.add('lock');
		const dataModal = btn.getAttribute('data-modal');
		const currentModal = document.getElementById(`modal-${dataModal}`);
		const modalContent = currentModal.querySelector('.modal__content');

		currentModal.classList.add('active');

		const closeModal = currentModal.querySelector('.modal__close');

		closeModal.addEventListener('click', () => {
			body.classList.remove('lock');
			modalContent.scrollTop = 0;
			currentModal.classList.remove('active');
		});
	});
});

cardBtnWatch.forEach((btn) => {
	btn.addEventListener('click', () => {
		body.classList.add('lock');
		const dataVideo = btn.getAttribute('data-modal');
		const currentVideo = document.getElementById(`modal-${dataVideo}`);

		currentVideo.classList.add('active');

		const closeVideo = currentVideo.querySelector('span i');

		closeVideo.addEventListener('click', () => {
			body.classList.remove('lock');
			currentVideo.classList.remove('active');
		});
	});
});
