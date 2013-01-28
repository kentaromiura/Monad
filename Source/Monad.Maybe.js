// Monad.Maybe.js MIT License, Cristian Carlesso @kentaromiura mykenta.blogspot.com

function Monad(value){
	if (value instanceof Monad) return value
	this.value = function(){return value}
}

Monad.prototype.bind = function(f){
	var value = this.value()
	if (f === Monad || value === null || value === undefined) return this
	if (typeof f === 'function') return new Monad(f(value))
	return this
}

module.exports = Monad
