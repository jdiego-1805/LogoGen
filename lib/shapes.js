class Shape{

    constructor(fill = "green"){
     this.fill = fill;   
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
    }

    render(){
        return `<polygon points="150, 0 0, 150 150, 100" fill="blue"/>`
    }

}