let add = x => y => x + y
let log = x => {
  console.log (x)
  return x
}

let val = null

val?.prop?.subProp ?? 10
 |> add (2)
 |> add (-4)
 |> add (21)
 |> log
 |> document.write
