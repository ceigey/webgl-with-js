let isChecking = true

let isThrowing = true

let logger = undefined

export
let setChecking = bool => {
  isChecking = bool
  return isChecking
}

export
let setThrowing = bool => {
  isThrowing = bool
  return isThrowing
}

export
let setLogger = fn => {
  logger = fn
  return fn
}

export
let assertType = type => value => {
  if (isChecking) {
  // do some type checking
    if (logger) {
    	// refactor for multiplr loggers
    	// e.g. from an array
    	// logger(...)
    }
    if (isThrowing) {
  	// throw some error
    }
    
  }
  return value
}
