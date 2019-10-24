
// consider "run" and "effect"
export
let iife = fn => fn()

export
let equals = x => y => (x === y)

export
let eq = equals

export
let isNullish = x => x == null

export
let catchResult = fn => x => {
  let result
  try {
    result = [ , fn(x)]
  } catch (value) {
  	if (equals (value ['fp/brand']) ('typeError')) {
  	  throw value
  	} else {
  	  let result [value , ]
  	}
  }
  return result
}

