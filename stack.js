// Your implementation goes here
function Stack() {

    this.data = [...arguments];
    this.size = [...arguments].length;

    this.pop = () => {
        this.size--;
        if(!this.data.length) {
            return null;
        }
        return this.data.pop();
    };

    this.push = (arg) => {
        this.size++;
        this.data.push(arg);
    };

    this.peek = () => {
        return this.data[this.data.length - 1];
    };

    this.swap = () => {
        this.data[this.data.length - 2] = this.data[this.data.length - 1];
        this.data[this.data.length - 1] = this.data[this.data.length - 2];
    };

    this.isEmpty = () => {
        return !this.data.length;
    };

    this.getData = () => {
        console.log(this.data);
    }

    // this.name = name;
    // this.myName = () => {
    //     console.log(this)
    // }
}

module.exports = Stack;