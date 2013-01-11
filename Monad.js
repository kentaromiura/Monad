function Monad(value){
	if (value instanceof Monad) return value
	this.value = function(){return value}
}

Monad.prototype.bind = function(f){
	var value = this.value()
	if (f === Monad || value === null || value === undefined) return this
	return new Monad(f(value))
	return this
}
