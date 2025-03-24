
import ARTICLES from '../api/articles.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.includes('about-me.html')) {
        showBlogs()
    } else if (window.location.pathname.includes('sample-post.html')) {
        showBlogs()
    } else if (window.location.pathname.includes('index.html')) {

        showMainArticle()
        showBlogs()
    
        const viewMoreButton = document.querySelector('#view-more-button')
        viewMoreButton.addEventListener('click', viewMore)  
    
        const viewLessButton = document.querySelector('#view-less-button')
        viewLessButton.addEventListener('click', viewLess)
        } 

})

function showMainArticle() {
    const header = document.querySelector('header')
    const mainBlog = document.createElement('main-blog')
    mainBlog.className = 'main-blog'
    mainBlog.setAttribute('date', ARTICLES[0].date)
    mainBlog.setAttribute('title', ARTICLES[0].title)
    mainBlog.setAttribute('description', ARTICLES[0].description)    
    header.appendChild(mainBlog)

}

function showBlogs() {
    const section = document.querySelector('#more-blogs-section')

    const blogs = Object.values(ARTICLES).slice(1)

    blogs.forEach((blog, index) => {
        const moreBlog = document.createElement('more-blogs')
        moreBlog.className = 'more-blogs'
        moreBlog.setAttribute('date', blog.date)
        moreBlog.setAttribute('title', blog.title)
        moreBlog.setAttribute('description', blog.description)
        moreBlog.setAttribute('image', blog.image)

        if (index >= 2) {
            moreBlog.classList.add('hidden')
        }

        section.appendChild(moreBlog)
    })
}

function viewMore() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const moreBlogs = document.querySelectorAll('.more-blogs')
    const viewLessButton = document.querySelector('#view-less-button')
    const viewMoreButton = document.querySelector('#view-more-button')
    viewMoreButton.classList.add('hidden')
    viewLessButton.classList.remove('hidden')

    moreBlogs.forEach((blog, index) => {
        if (index < 2) {
            blog.classList.add('fadeOut');
            setTimeout(() => {
                blog.classList.add('hidden');
            }, 500);
        } else {
            blog.classList.remove('hidden');
            blog.classList.add('fadeIn');
            setTimeout(() => {
                blog.classList.remove('fadeIn');
            }, 500);
        }
    })

}

function viewLess() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const moreBlogs = document.querySelectorAll('.more-blogs')
    const viewLessButton = document.querySelector('#view-less-button')
    const viewMoreButton = document.querySelector('#view-more-button')
    viewMoreButton.classList.remove('hidden')
    viewLessButton.classList.add('hidden')

    moreBlogs.forEach((blog, index) => {
        if (index < 2) {
            blog.classList.remove('hidden');
            blog.classList.add('fadeIn');
            setTimeout(() => {
                blog.classList.remove('fadeIn');
            }, 500);
        } else {
            blog.classList.add('fadeOut');
            setTimeout(() => {
                blog.classList.add('hidden');
            }, 500);
        }   
    })
}