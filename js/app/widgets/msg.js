export const msg ={
    data: function() {
        return {
            alert:"",
            success:"",
            t1:"",
            t2:"",
            confirmTitle:"Pleas confirm next action",
            confirm:"",
            code:0,
            interval:""
        }
    },
    watch:{},
    mounted(){
        this.parent = this.$parent.$parent.$parent;
    },
    methods:{
        fadeIn(el,timeout,display){
            el.style.opacity = 0;
            el.style.display = display || 'block';
            el.style.transition = `opacity ${timeout}ms`;
            setTimeout(()=>{
                el.style.opacity =1;
            },10);
        },
        fadeOut(el,timeout){
            el.style.opacity = 1;
            el.style.transition = `opacity ${timeout}ms`;
            el.style.opacity = 0;

            setTimeout(()=>{
                el.style.display='none0';
            },timeout);
        },
            successFun(msg){
                this.success = msg;

                var self = this;
                if(document.querySelector('.successMsg')) document.querySelector('.successMsg').style="";
                clearTimeout(self.t1);
                clearTimeout(self.t2);
                self.t1=setTimeout(() => {
                    const block =   document.querySelector('.successMsg');
                    self.fadeIn(block, 1000, 'flex');
                    self.t2 =setTimeout(() => {
                        self.fadeOut(block,1000);
                    }, 3000);
                }, 100);
                
            },

            alertFun(msg){
                this.alert = msg;

                var self = this;
                if(document.querySelector('.successMsg')) document.querySelector('.successMsg').style="";
                clearTimeout(self.t1);
                clearTimeout(self.t2);
                self.t1=setTimeout(() => {
                  const block = document.querySelector('.alertMsg');

                  self.fadeIn(block, 1000, 'flex');
                  self.t2 =setTimeout(function(){
                    self.fadeOut(block, 1000);
                  },3000)
                }, 100);
            }
    },
    template:`
        <div class="alertMsg" v-if="alert">
            <div class="wrapper al">
                <i class="fas fa-times-circle"></i> {{alert}}
            </div>
        </div>
        <div class="successMsg" v-if="success">
            <div class="wrapper al">
                <i class="fas fa-times-circle"></i> {{success}}
            </div>
        </div>
    `

};