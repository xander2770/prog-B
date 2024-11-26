
function setup() {
    let styles = {
        background: 'pink',
        shape: 'cirkel'
    }
    let c = new Clock(select('#clock'), styles)
    c.start()
}