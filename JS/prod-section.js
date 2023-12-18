function toggleCategory() {
    const categorySection = document.getElementById('categorySection');
    categorySection.classList.toggle('show-category');

    const category = document.querySelector('.category');
    const triangle = document.querySelector('.triangle');

    // category.classList.toggle('show-category');

    triangle.classList.toggle('triangle-up');
}