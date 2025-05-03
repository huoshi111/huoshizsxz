    // ❓ **特殊问题模态框**
        // 获取必要元素
        const questionButton1 = document.querySelector('#unique-question-button-id1');
        const modalOverlay1 = document.querySelector('#unique-modal-overlay-id1');
        const modal1 = document.querySelector('#unique-modal-id1');
        const closeButton1 = document.querySelector('#unique-close-button-id1');
        const categoryButtons1 = document.querySelectorAll('.category-btn1');
        const contentAreas1 = document.querySelectorAll('.content1');

        // 打开模态框
        questionButton1.addEventListener('click', () => {
            modalOverlay1.style.display = 'flex';
        });

        // 关闭模态框
        closeButton1.addEventListener('click', () => {
            modalOverlay1.style.display = 'none';
        });

        modalOverlay1.addEventListener('click', (e) => {
            if (e.target === modalOverlay1) {
                modalOverlay1.style.display = 'none';
            }
        });

        // 切换内容区域
        categoryButtons1.forEach(button => {
            button.addEventListener('click', () => {
                const targetContent = button.getAttribute('data-target');
                contentAreas1.forEach(content => {
                    content.classList.toggle('active', content.id === targetContent);
                });
                categoryButtons1.forEach(btn => {
                    btn.classList.toggle('active', btn === button);
                });
            });
        });