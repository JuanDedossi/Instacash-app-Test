function game1(M, N) {
  if (!M.length) {
    return 'Invalid Array'
  }
  M.sort((a, b) => a - b)
  let start = 0
  let end = M.length - 1
  let sum
  while (start < end) {
    sum = M[start] + M[end]
    if (sum === N) {
      return [M[start], M[end]]
    } else if (sum < N) {
      start++
    } else {
      end--
    }
  }
  return 'No Match'
}

