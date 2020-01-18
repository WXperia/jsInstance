   //寄生组合继承
   var elements = [];
   var SnakeEls = [];
   function inheritObject(o){
       function f(){}
       f.prototype = o
       return new f()
   }
   function inheritPrototype(son,father){
       var p = inheritObject(father.prototype)
       p.constructor = son
       son.prototype = p
   }
   function MAP(width, height, color){
       this.width = width || 600;
       this.height = height || 600;
       this.color = color || '#eee';
   }
   MAP.prototype.init = function (el) {
       var map = document.createElement('div')
       var e = document.querySelector(el || 'body')
       map.style.width = this.width + 'px'
       map.style.height = this.height + 'px'
       map.style.background = this.color
       map.style.position = 'absolute'
       e.appendChild(map)
       return map
   }
/*     function MAP(mobj,el){
       if(this instanceof MAP){
       var map = document.createElement('div');
       map.style.height = mobj.height +'px' || 600 + 'px';
       map.style.width = mobj.width +'px' || 600 + 'px';
       map.style.background = mobj.color || '#eee';
       var body = document.querySelector(el || 'body')
       body.appendChild(map)
       return map;
       }else {
           console.error('请使用new 关键字初始化')
           return new MAP(mobj)
       }
   } */
   //寄生组合继承： 继承父类的原型prototype
   inheritPrototype(Food,Color)
   function Food(x,y,width,height,color) {
       if(this instanceof Food){
           Color.call(this)//执行一遍Color的构造方法
           this.color = color || this.getColor('rgb')
           this.x = x;
           this.y = y;
           this.width = width || 10;
           this.height = height || 10;
       }else {
           return new Food(x,y,width,height,color)
       }
    
       
   }
   function remove(type){
       if(type == 'Snake'){
           var i =  SnakeEls.length - 1 ;
           for(; i >= 0; i--){
           var ele = SnakeEls[i];
          
           ele.parentNode.removeChild(ele);
           SnakeEls.splice(i, 1)
       }
       return ;
       }
       var i = 0,len = elements.length;
       for(; i<len; i++){
           var ele = elements[i];
           ele.parentNode.removeChild(ele);
           elements.splice(i, 1)
       }
   }
   Food.prototype.init = function (map) {
       remove()
       var food = document.createElement('div');
       food.style.background = this.color || this.getColor('rgb')
       food.style.width = this.width + 'px' || '10px';
       food.style.height = this.height + 'px' || '10px';
       this.x = parseInt(Math.random()*(map.offsetWidth/this.width)-1)*this.width;
       this.y = parseInt(Math.random()*(map.offsetHeight/this.height)-1)*this.height;
       food.style.left = this.x + 'px';
       food.style.top = this.y + 'px';
       food.style.position = 'absolute';
       map.appendChild(food)
       elements.push(food)
   }
   function Snake(width,height,direction){
       this.width = width || 10;
       this.height = height || 10;
       this.Snakebody = [
           {x:3,y:2,color: "red"},
           {x:2,y:2,color: "orange"},
           {x:1,y:2,color: "orange"}
       ];
       this.direction = direction || "right"
   }
   Snake.prototype.init = function (map){
       remove('Snake')
       console.log(`${this.Snakebody}来自`)
       var i = 0,
           len = this.Snakebody.length;  
       for(; i<len; i++){
           var o = this.Snakebody[i]
           var sb = document.createElement('div');
           sb.style.width = this.width + 'px';
           sb.style.height = this.height + 'px';
           sb.style.left = o.x * this.width + 'px';
           sb.style.top = o.y * this.height + 'px';
           sb.style.background = o.color
           sb.style.position = 'absolute'
           map.appendChild(sb)
           SnakeEls.push(sb)
       }
   }
   Snake.prototype.move = function (map,food) {
    var sX = SnakeEls[0].style.left,
        fX = elements[0].style.left,
        sY = SnakeEls[0].style.top,
        fY = elements[0].style.top;
       if( sX == fX && sY == fY) {
           var sb = {
               x: SnakeEls[SnakeEls.length-1].x + 1,
               y: SnakeEls[SnakeEls.length-1].y,
               color: elements[0].style.background
           }
           this.Snakebody.push(sb)
           var food2 = new Food('','',10,10,color.getColor('rgb'));
           food2.init(map)
           console.log(this.Snakebody)
       }
       var i = this.Snakebody.length-1;

       for(; i > 0; i--){
           this.Snakebody[i].x = this.Snakebody[i-1].x;
           this.Snakebody[i].y = this.Snakebody[i-1].y;
       }
       switch (this.direction){
           case 'right':
               this.Snakebody[0].x +=1;break;
           case 'left' :
               this.Snakebody[0].x -=1;break;
           case 'top'  :
               this.Snakebody[0].y -=1;break;
           case 'bottom': 
               this.Snakebody[0].y +=1;break;
       }
       
   }
   function Game(map,snake,food) {
       if(this instanceof Game){
           this.m = null;
           this.snake = new Snake();
           this.food = new Food('','',10,10,color.getColor('rgb'));
           this.map = new MAP();
       }else {
           return new Game(map,snake,food)
       }
   }
   Game.prototype.init = function () {
       this.m = this.map.init()
       
       this.food.init(this.m)
       this.snake.init(this.m,this.food)
       this.ctrl()
   }
   Game.prototype.go = function (food) {
       var that = this ;
           var mwidth = that.m.offsetWidth,
               mheight = that.m.offsetHeight;
      
       var timer = setInterval(function(){
               var sy = this.snake.Snakebody[0].y * this.snake.height,
                   sx = this.snake.Snakebody[0].x * this.snake.width;
                 
                   that.snake.move(that.m,that.food);
                   that.snake.init(that.m);
                var test = setTimeout(function(){
                    if(sx + 10 > mwidth || sy + 10 > mheight || sy <0 || sx <0){
                        alert('游戏结束')
                        clearInterval(timer)
                        clearTimeout(test)
                        that.snake.init(that.m)
                    }
                })
              
       }.bind(that),150)
   }
   Game.prototype.ctrl = function () {
       var b = document.body,
           that = this,
           direction = '';

       b.addEventListener('keydown',function(e){
           var kc = e.keyCode;
           direction = that.snake.direction;
           console.log(kc)
           that.rules(kc,direction)
          
       })
   }
   Game.prototype.rules = function (kc,direction) {
       var that = this;
       switch(kc){
        case direction != 'bottom'? 87 : '': 
          that.snake.direction = 'top';
          break;
        case direction != 'top' ? 83 : '':
          that.snake.direction = 'bottom';
          break;
        case direction != 'right'? 65 : '':
          that.snake.direction = 'left'; 
          break;
        case direction != 'left' ? 68 :'':
          that.snake.direction = 'right';
          break;
      }
    //    if(kc === 87 && direction != 'bottom') {
    //         switch(kc){
    //             case 87: that.snake.direction = 'top';break;
    //             case 65: that.snake.direction = 'left'; break;
    //             case 68: that.snake.direction = 'right';break;
    //         }
    //    }else if (kc === 83 && direction != 'top' ) {
    //         switch(kc){
    //             case 83: that.snake.direction = 'bottom';break;
    //             case 65: that.snake.direction = 'left'; break;
    //             case 68: that.snake.direction = 'right';break;
    //     }
    //    }else if (kc === 65 && direction != 'right') {
    //         switch(kc){
    //             case 87: that.snake.direction = 'top';break;
    //             case 83: that.snake.direction = 'bottom';break;
    //             case 65: that.snake.direction = 'left'; break;
              
    //         }    
    //    }else if (kc === 68 && direction != 'left') {
    //         switch(kc){
    //             case 87: that.snake.direction = 'top';break;
    //             case 83: that.snake.direction = 'bottom';break;
    //             case 68: that.snake.direction = 'right';break;
    //         }    
    //     }
   }
