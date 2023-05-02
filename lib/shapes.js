class Shape{

    constructor(fill = "green"){
     this.fill = fill;
     this.markup = "";
    }

    setColor(fill){

        this.markup = this.markup.replace(/fill="[^"]*"/, `fill="${fill}"`)
    }

}

class Circle extends Shape{

    constructor(fill, radius){

        super(fill)
        this.radius = this.radius       

    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }

}

class Square extends Shape{

    constructor(fill){

        super(fill)
    }

    render(){
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }

}

class Triangle extends Shape{

    constructor(fill){

        super(fill)
        this.markup =  `<polygon points="80, -10 244, 180 10, 180" fill="${this.fill}"/>`
    }

    render() {
        return this.markup;
    }

}