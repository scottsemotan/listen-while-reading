// granim.js library for animated gradient in background

var granimInstance = new Granim({
  element: '#canvas-complex',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              [
                  { color: '#833ab4', pos: .2 },
                  { color: '#fd1d1d', pos: .8 },
                  { color: '#38ef7d', pos: 1 }
              ], [
                  { color: '#40e0d0', pos: 0 },
                  { color: '#ff8c00', pos: .2 },
                  { color: '#ff0080', pos: .75 }
              ],
          ]
      }
  }
});