// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
//

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        const divWrap = document.createElement('div');
        divWrap.setAttribute('class','wrap');
        document.body.append(divWrap)
        for (const item of value) {
            const innerDiv = document.createElement('div');
            innerDiv.setAttribute('class','inner');
            innerDiv.innerHTML = `
            <h3>ID : ${item.id}</h3>
            <h4>name : ${item.name}</h4>`;
            divWrap.append(innerDiv);
        }
    })




fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let dataUser = document.createElement('div');
        dataUser.classList.add('dataUser');
        for (const user1 of users) {
            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'Подробнее';
            const user_id = document.createElement('div');
            user_id.classList.add('user_id');
            user_id.innerHTML = `
            <h4>${user1.id}</h4>
            <h2>${user1.name}</h2>
            `;

            const keyUser = 'key';


            const saveInUser = (e) => {
                let userArray = JSON.parse(localStorage.getItem(keyUser)) || [];
                userArray.push({e})
                localStorage.setItem(keyUser, JSON.stringify(userArray))

            };

            btn.onclick = () => {
                saveInUser(user1)
                location.href = 'user-details.html';
            }

            dataUser.append(btn, user_id);
            user_id.appendChild(btn);
            document.body.appendChild(dataUser);
        }
    })
