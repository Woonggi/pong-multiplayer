module.exports = class player{
    constructor(info, xpos = 0, ypos = 0) {
        this.to_trans = {};
        this.to_trans.x = xpos;
        this.to_trans.y = ypos;
        this.to_trans.points = 0;

        this.username = info.username;
        this.id = info.id;
        this.keypress = [];
        
        // HARD-CODED
        this.width = 20;
        this.height = 100
        
    }

};

