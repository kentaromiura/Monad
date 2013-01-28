// Monad.js MIT License, Cristian Carlesso @kentaromiura mykenta.blogspot.com
//
// I used the following resurces as a inspiration.
// http://blogs.msdn.com/b/wesdyer/archive/2008/01/11/the-marvels-of-monads.aspx
// http://stackoverflow.com/questions/2704652/monad-in-plain-english-for-the-oop-programmer-with-no-fp-background
// Douglas Crockford: Monads and Gonads (YUIConf Evening Keynote) http://www.youtube.com/watch?v=dkZFtimgAcM

function Monad(value){
	if (value instanceof Monad) return value
	this.value = function(){return value}
}

Monad.prototype.bind = function(f){
	var value = this.value()
	if (f === Monad) return this
	if (typeof f === 'function') return new Monad(f(value))
	return this
}

module.exports = Monad
