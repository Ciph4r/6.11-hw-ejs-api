const { default: Axios } = require('axios')
require('dotenv').config()
const key = process.env.KEY

module.exports = {
    movies: (req ,res) => {
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`).then(x =>{ 
            let data =x.data.results
            res.render('main/movie' , {data})
           })
           .catch(err => console.log(err))
    },



    random: (req ,res) => {
        Axios.get('https://randomuser.me/api/?results=20').then(x =>{ 
            let data = x.data.results
            res.render('main/random' , {data})
           })
           .catch(err => console.log(err))
    }
}