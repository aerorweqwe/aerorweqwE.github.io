export const campaings ={
    data:function(){
        return {
            parent:"",
        }
    },
    mounted:function(){
        this.parent = this.$parent.$parent;
        
        if(!this.parent.user){
            this.parent.logout();
        }
    },
    methods:{

    },
    template:`
    Campaings  
    `
};