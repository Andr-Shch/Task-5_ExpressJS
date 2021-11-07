const request = require('supertest');
const should = require('should')
const {app} = require('../src/app')

it(`should return hello world response`, (done)=>{
    request(app)
     .get('/')
     .expect(200)
     .expect('hello world')
     .end(done)
} )

describe('/api/v1/authors', function(){
     //test get request for all authors
    it(`GET:should be array of objects`, (done)=>{
        request(app)
         .get('/api/v1/authors')
         .expect(200)
         .expect('Content-Type',/json/)
         .end(function(err, res) {
            if (err) return done(err);
            res.body.should.have.property('data').and.be.instanceof(Array);;
            done();
          });
    } )
  //test create one author
   it(`POST:post request`, (done)=>{
      request(app)
       .post('/api/v1/authors')
       .send({"id":"10", "name":"Gorgio"})
       .expect(200)
       .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('data').and.be.instanceof(Array);
        res.body.data.slice(-1)[0].should.have.property('name').eql('Gorgio')
        done();
   })

})

it(`GET: one author`, (done)=>{
    request(app)
     .get('/api/v1/authors/1')
     .expect(200)
     .end(function(err, res) {
      if (err) return done(err);
      res.body.data.should.have.property('id').eql(1)
      res.body.data.should.have.property('name').eql('Nell')
      res.body.data.should.have.property('posts')
      done();
      })
 })


it(`PUT:change name`, (done)=>{
    request(app)
     .put('/api/v1/authors/1')
     .send({"name":"Gorgio"})
     .expect(200)
     .end(function(err, res) {
      if (err) return done(err);
      res.body.should.have.property('data').and.be.instanceof(Object);
      res.body.data.should.have.property('name').eql('Gorgio')
      done();
      })
 })

 it(`GET:posts`, (done)=>{
    request(app)
     .get('/api/v1/authors/1/posts')
     .expect(200, {
        success: true,
        data: [ { id: 1, text: 'Hello Nell' }, { id: 2, text: 'lol Nell' } ]
      })
     .end(done) 
 })

})