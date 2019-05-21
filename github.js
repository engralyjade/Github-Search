

// https://github.com/settings/applications/new


class Github{
    constructor(){
        this.client_id = 'd7af77b79e673502eb2c';
        this.client_secret = '0db8422ad5c6ef0391b447e352bb624a9f115b42';        // API KEY HAS CLIENT_ID & CLIENT_SECRET
        this.repos_count = 3;
        this.repos_sort = 'create:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos   = await repoResponse.json();
        
        return { profile, repos };
        // return { profile: profile };  ==== return{profile};
        // SA ES6, kahit di na ulitin ung profile. return{ profile } na lang
    }

}