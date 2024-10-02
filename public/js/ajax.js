// AJAX加载更多文章内容
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read-more').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = link.getAttribute('data-url');
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const content = doc.querySelector('article .content').innerHTML;
                    link.closest('.timeline-item').querySelector('.content').innerHTML = content;
                    link.remove();  // 移除“Read more”链接
                })
                .catch(error => console.error('Error loading content:', error));
        });
    });
});
