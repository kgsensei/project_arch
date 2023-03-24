elem1 = null
elem2 = null

function dragStart(event) {
    event.dataTransfer.setData("SVG", event.srcElement.childNodes["1"].innerHTML)
}

function allowDrop(event) {
    event.preventDefault()
}

function drop(event) {
    event.preventDefault()
    let icon_width = 50 // Only half though
    gid("builder").addHTML(`
        <div class="builder_item" style="top:${event.pageY - icon_width}px;left:${event.pageX - icon_width}px;" ondblclick="this.remove()" onclick="buildLines(this)">
            ${event.dataTransfer.getData("SVG")}
        </div>
    `)
}

function buildLines(elem) {
    if(elem1 == null) {
        elem1 = elem
    } else {
        elem2 = elem
        connectorLine()
    }
}

function connectorLine() {
	let off1 = getElementProperty(elem1)
	let off2 = getElementProperty(elem2)
	let dx1 = off1.left + off1.width / 2
	let dy1 = off1.top + off1.height / 2
	let dx2 = off2.left + off2.width / 2
	let dy2 = off2.top + off2.height / 2
	let length = Math.sqrt(((dx2 - dx1) * (dx2 - dx1)) + ((dy2 - dy1) * (dy2 - dy1)))
	let cx = ((dx1 + dx2) / 2) - (length / 2)
	let cy = ((dy1 + dy2) / 2)
	let angle = Math.atan2((dy1 - dy2),(dx1 - dx2)) * (180 / Math.PI)
	gid("builder").addHTML(`<section class="conn_line" ondblclick="this.remove()" style="left:${cx}px;top:${cy}px;width:${length}px;transform:rotate(${angle}deg);">`)
    elem1 = null
    elem2 = null
}

function getElementProperty(elem) {
	let width = elem.width()
	let height = elem.height()
	let dx = elem.left()
	let dy = elem.top()
	return {
        top:dy,
        left:dx,
        width:width,
        height:height
    }
}
