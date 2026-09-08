document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 切換按鈕 active 樣式
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 取得當前選取的分類
            const filterValue = button.getAttribute("data-filter");

            // 顯示/隱藏卡片
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});