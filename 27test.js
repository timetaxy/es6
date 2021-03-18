function func1() {

    console.log(this.getAttribute());
    //err
    //TypeError: this.getAttribute is not a function
}

func1('aa');