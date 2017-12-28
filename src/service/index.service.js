export default class IndexService {
  heroesUrl = 'http://localhost:3000'
  login (v, user) {
    return v.$http.post('http://test.mihutime.com/seller/v1/accounts/login', user)
  }
  getHeroes (v) {
    return v.$http.get(this.heroesUrl)
  }
  getHero (v) {
    return v.$http.get(`${this.heroesUrl}/${v.id}`)
  }
  put (v, hero) {
    return v.$http.put(`${this.heroesUrl}/${hero.id}`, hero)
  }
  delete (v, hero) {
    return v.$http.delete(`${this.heroesUrl}/${hero.id}`)
  }
  add (v) {
    console.log(v.$refs.heroName.value)
    let name = v.$refs.heroName.value.trim()
    if (name) {
      return v.$http.post(this.heroesUrl, {name: name})
    } else {
    }
  }
  getSlide (v) {
    return v.$http.get(`${this.heroesUrl}/slides`)
  }
  getNav (v) {
    return v.$http.get(`${this.heroesUrl}/nav`)
  }
}
