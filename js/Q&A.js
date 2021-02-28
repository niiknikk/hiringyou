const contents = document.querySelectorAll('.questions-content');
console.log(contents);

contents.forEach( function(content) {
        let btn = content.querySelector('.questions-btn');
        btn.addEventListener('click', () => {
            contents.forEach((item) => {
                if(item !== content){
                    item.classList.remove('active');
                };
            });
            content.classList.toggle('active');
        });
    });