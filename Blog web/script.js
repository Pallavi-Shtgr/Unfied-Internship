document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');
    const postTemplate = document.getElementById('post-template');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const newPost = postTemplate.cloneNode(true);
        newPost.removeAttribute('id');
        newPost.querySelector('.post-title').textContent = title;
        newPost.querySelector('.post-content').textContent = content;

        postsSection.appendChild(newPost);

        postForm.reset();
    });

    postsSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const post = e.target.closest('.post');
            const content = post.querySelector('.post-content');
            const readMoreButton = e.target;

            if (readMoreButton.textContent === 'Read More') {
                content.style.display = 'block';
                readMoreButton.textContent = 'Show Less';
            } else {
                content.style.display = 'none';
                readMoreButton.textContent = 'Read More';
            }
        }
    });
});
