<<<<<<< HEAD
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
         <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
            <div class="data"
                <h1>${user.name ?? 'Não possui nome cadastrado. ❌'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado. ❌'}</p>
                <p class="followers"> 👥 Seguidores: ${user.followers} · Seguindo: ${user.following}</p>
            </div>
        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p class="info-repo">⭐: ${repo.stargazers_count}</p>
            <p class="info-repo">Watchers: ${repo.watchers_count}</p>
            <p class="info-repo">Forks: ${repo.forks_count}</p>
            <p class="info-repo">Linguagem: ${repo.language}</p>
            </li>`
        });
            if(user.repositories.length > 0){
                this.userProfile.innerHTML +=`<div class="repositories section">
                <h2>Respositórios</h2>
                <ul>${repositoriesItens}</ul>
                </div>`
            }

            let listaEventos = ''
            const baseUrlGit = 'https://github.com/'
            user.events.forEach( item => {
                listaEventos += `<p><a href="${baseUrlGit}/${item.repo.name}">${item.type} em : ${item.repo.name}</a></p>`
            })

            if(user.events.length > 0){
                this.userProfile.innerHTML +=`<div class="activities">
                <h6>Ultimos eventos:</h6>
                <div>${listaEventos}</div>`
            }


    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}



export { screen }
=======
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
         <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
            <div class="data"
                <h1>${user.name ?? 'Não possui nome cadastrado. ❌'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado. ❌'}</p>
                <p class="followers"> 👥 Seguidores: ${user.followers} · Seguindo: ${user.following}</p>
            </div>
        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p class="info-repo">⭐: ${repo.stargazers_count}</p>
            <p class="info-repo">Watchers: ${repo.watchers_count}</p>
            <p class="info-repo">Forks: ${repo.forks_count}</p>
            <p class="info-repo">Linguagem: ${repo.language}</p>
            </li>`
        });
            if(user.repositories.length > 0){
                this.userProfile.innerHTML +=`<div class="repositories section">
                <h2>Respositórios</h2>
                <ul>${repositoriesItens}</ul>
                </div>`
            }

            let listaEventos = ''
            const baseUrlGit = 'https://github.com/'
            user.events.forEach( item => {
                listaEventos += `<p><a href="${baseUrlGit}/${item.repo.name}">${item.type} em : ${item.repo.name}</a></p>`
            })

            if(user.events.length > 0){
                this.userProfile.innerHTML +=`<div class="activities">
                <h6>Ultimos eventos:</h6>
                <div>${listaEventos}</div>`
            }


    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}
>>>>>>> 703ab3a (refactored)
