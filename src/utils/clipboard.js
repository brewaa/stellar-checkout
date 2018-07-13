export function copy (target) {
  var result = false
  if (target) {
    try {
      target.select()
      var copied = document.execCommand('copy')
      if (copied) {
        result = true
      } else {
        result = false
      }
      target.setSelectionRange(0, 0)
    } catch (err) {
      console.log(err)
    }
  }
  return result
}
