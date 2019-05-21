

class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }


    // SHOW PROFILE -----------------------------------------------------------------------------------------------------------

    showProfile(user){
        // console.log(user);
        this.profile.innerHTML = `
        
        
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}"   alt=""              class="img-fluid mb-2">
                    <a href= "${user.html_url}"     target='_blank'     class="btn btn-primary">    View Profile</a>
                </div>
            
            <div class="col-md-9">
                <span class="badge badge-primary">   Public Repos:   ${user.public_repos}  </span>
                <span class="badge badge-secondary"> Public Gists:   ${user.public_gists}  </span>
                <span class="badge badge-success">   Followers:      ${user.followers}     </span>
                <span class="badge badge-info">      Following:      ${user.following}     </span>
                <br>
                <br>

                
                <ul class="list-group">
                    <li class="list-group-item">    Company:        ${user.company}     </li>
                    <li class="list-group-item">    Website/Blog:   ${user.blog}        </li>
                    <li class="list-group-item">    Location:       ${user.location}    </li>
                    <li class="list-group-item">    Member Since:   ${user.created_at}  </li>
                </ul>
            </div> 
        </div>
        </div>

        <h3 class="page-heading  mb-3">Latest Repos</h3>
        <div id="repos"></div>

        `;
    }
    // <!-- .card.card-body.mb-3>.row>.col-md-3>img.img-fluid.mb-2+a.btn.btn-primary{View Profile} TAB -->
    // <!-- .col-md-9>span.badge.badge-primary{Public Repos: ${user.public_repos}} TAB -->
    // <!-- ul.list-group>li.list-group-item{: ${}}*4 TAB -->
    // <!-- h3.page-heading mb-3{Latest Repos} TAB -->
    // <!-- div#repos -->


    // 

    showRepos(repos){
        let output = '';
        // console.log(repos);
        
        repos.forEach(repo => {     // dahil isa lang yung repo, kayakahit wala na sa loob ng '()'
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repos.html_url}" target="_blank">    ${repo.name}    </a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">      Stars:      ${repo.stargazers_count}    </span>
                            <span class="badge badge-secondary">    Watchers:   ${repo.watchers_count}      </span>
                            <span class="badge badge-success">      Forks:      ${repo.forks_count}         </span>
                        </div>
                    </div>
                </div>
            `; 
            // <!-- .card.card-body.mb-2>.row>.col-md-6>a TAB -->
            // <!-- .col-md-6>span.badge.badge-primary{Stars: ${repo.stargazers-count}} TAB -->
        });

        document.querySelector('#repos').innerHTML = output;

    }



    // SHOW ALERT MESSAGE -----------------------------------------------------------------------------------------------------------

    showAlert(message, className){
        this.clearAlert();                                                  // CLEAR ALERT
        const div = document.createElement('div');                          // CREATE DIV
        div.className = className;                                          // ADD CLASS
        div.appendChild(document.createTextNode(message));                  // ADD TEXT
        const container = document.querySelector('.searchContainer');       // GET PARENT
        const search = document.querySelector('.search');                   // GET SEARCH BOX
        container.insertBefore(div, search);                                // INSERT ALERT
        setTimeout( () => {                                                 // TIME OUT FOR ALERT
            this.clearAlert();
        }, 1000);
    }


    // CLEAR ALERT -----------------------------------------------------------------------------------------------------------

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }



    // CLEAR PROFILE -----------------------------------------------------------------------------------------------------------

    clearProfile(){
        this.profile.innerHTML = '';
    }


}