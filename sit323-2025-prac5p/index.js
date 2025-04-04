const express = require('express')
const app = express()

// addition function
const add = (n1, n2) => {
  return n1 + n2
}

// substraction function
const substract = (n1, n2) => {
  return n1 - n2
}

// multiplication function
const mult = (n1, n2) => {
  return n1 * n2
}

// division function
const divide = (n1, n2) => {
  return n1 / n2
}

// add endpoint
app.get('/add', (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)
    if (isNaN(n1)) {
      throw new Error('n1 incorrectly defined')
    }
    if (isNaN(n2)) {
      throw new Error('n2 incorrectly defined')
    }

    if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error('Parsing Error')
    }
    const result = add(n1, n2)
    res.status(200).json({ statuscocde: 200, data: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ statuscocde: 500, msg: error.toString() })
  }
})

// substraction endpoint
app.get('/substraction', (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)
    if (isNaN(n1)) {
      throw new Error('n1 incorrectly defined')
    }
    if (isNaN(n2)) {
      throw new Error('n2 incorrectly defined')
    }

    // redundant?
    // if (n1 === NaN || n2 === NaN) {
    //   console.log()
    //   throw new Error('Parsing Error')
    // }
    const result = substract(n1, n2)
    res.status(200).json({ statuscocde: 200, data: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ statuscocde: 500, msg: error.toString() })
  }
})

// multiplication endpoint
app.get('/mult', (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)
    if (isNaN(n1)) {
      throw new Error('n1 incorrectly defined')
    }
    if (isNaN(n2)) {
      throw new Error('n2 incorrectly defined')
    }

    if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error('Parsing Error')
    }

    const result = mult(n1, n2)

    res.status(200).json({ statuscocde: 200, data: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ statuscocde: 500, msg: error.toString() })
  }
})

app.get('/division', (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)
    if (isNaN(n1)) {
      throw new Error('n1 incorrectly defined')
    }
    if (isNaN(n2)) {
      throw new Error('n2 incorrectly defined')
    }
    if (n2 === 0) {
      throw new Error('denominator cannot be zero')
    }

    if (n1 === NaN || n2 === NaN || n2 === 0) {
      console.log()
      throw new Error('Parsing Error')
    }

    const result = divide(n1, n2)

    res.status(200).json({ statuscocde: 200, data: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ statuscocde: 500, msg: error.toString() })
  }
})

const port = 3040
app.listen(port, () => {
  console.log("hello i'm listening to port " + port)
})
