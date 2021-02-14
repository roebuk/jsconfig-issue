import React from 'react'
import { render } from 'react-dom'

/**
 * Adds two numbers together.
 *
 * @param {number} x - A Number.
 * @param {number} y - Number.
 * @returns {number} - Audsh.
 */
function add(x, y) {
  return x + y
}

render(<h1>Hello {add(3, 4)}</h1>, document.querySelector('.root'))
