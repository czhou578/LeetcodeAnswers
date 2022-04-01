var rightSideView = function(root) { //binary tree right side view
  if (!root) return []

  let result = []
  let queue = [root]

  while(queue.length > 0) {
    let length = queue.length

    result.push(queue[queue.length - 1].val)

    while (length > 0) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      length--
    }
  }

  return result
}

var levelOrderBottom = function() { //level order traversal II
  if (root === null) return []
  
  const queue = [root]
  const result = []

  while(queue.length > 0) {
    let length = queue.length
    result.push(queue.map((node) => node.val))

    while(length--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

    }
  }

  return result.reverse()
}

var averageOfLevels = function(root) { //avg levels binary tree
  if (!root) return []
  
  let result = []
  let queue = []

  queue.push(root)

  while(queue.length > 0) {
    let length = queue.length
    let sum = 0

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push((sum / length).toFixed(5))
  }

  return result
}

var connect = function(root) { // populating next right pointers 2
  if (!root) return null

  let queue = [] 
  
  queue.push(root)

  while(queue.length > 0) {
    let length = queue.length

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (i !== length - 1) {
        node.next = queue[0]
      }

      if (node.left) queue.push(node.left)

      if (node.right) queue.push(node.right)
    }

  }

  return root
}

var connect = function(root) { //populating next right pointers 1
  if (!root) return null

  let queue = [] 
  
  queue.push(root)

  while(queue.length > 0) {
    let length = queue.length

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (i !== length - 1) {
        node.next = queue[0]
      }

      if (node.left) queue.push(node.left)

      if (node.right) queue.push(node.right)
    }

  }

  return root

};

function zigzagLevelOrder(root) {
  if (!root) return []

  const queue = [root]
  let result = []
  let counter = 0;

  while (queue.length) {
    let length = queue.length

    if (count % 2 === 0) result.push(queue.map(node => node.val))
    else result.push(queue.map(node => node.val).reverse())
    counter++
  
    while (length--) {
      let node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

    }
  }

  return result
}