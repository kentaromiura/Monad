var expect = require('expect.js')
var Monad  = require('../Source/Monad.js')
var Maybe  = require('../Source/Monad.Maybe.js')

describe('Monad.js', function(){

    var add1 = function(x){
            return x + 1
        },
        identity = function(x){
            return x
        }

    it('must respect Monad(e).bind(k).value() === k(e)', function(){
        var e = 10,
            k = add1

        expect(new Monad(e).bind(k).value()).to.be(k(e))
    })

    it('must respect Monad(e).bind(k).value() === Monad(k(e)).value()', function(){
        var e = 10,
            k = add1

        expect(new Monad(e).bind(k).value()).to.be(new Monad(k(e)).value())
    })

    it('must respect monad.bind(Monad) === monad', function(){
        var monad = new Monad(1)
        expect(monad.bind(Monad)).to.be(monad)
    })

    it('must allow function composition', function(){
        expect(new Monad(1).bind(add1).bind(add1).value()).to.be(3)
    })

    it('must respect monad.bind(add1).bind(identity).value() === monad.bind(function (value) { return new Monad(add1(value)).bind(identity) }).value()', function(){
        var monad = new Monad(1)
        expect(monad.bind(add1).bind(identity).value()).to.be(monad.bind(function (value) { return new Monad(add1(value)).bind(identity) }).value())
    })

    it('should return the monad itself if no function are passed to bind', function(){
        var monad = new Monad(1)
        expect(monad.bind({})).to.be(monad)
    })


    it('should return the maybe monad itself if no value are passed to the monad', function(){

        var undefined,
            monad = new Maybe(null)

        expect(monad.bind(add1)).to.be(monad)
        expect(monad.bind(add1).value()).to.be(null)

        var umonad = new Maybe(undefined)
        expect(umonad.bind(add1)).to.be(umonad)
        expect(umonad).to.not.be(monad)
        expect(umonad.bind(add1).value()).to.be(undefined)
    })

})