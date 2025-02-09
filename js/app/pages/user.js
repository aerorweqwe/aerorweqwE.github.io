// export const user = {
//     data:function() {
//         return{
//             parent:"",
//             data:{},
//             user:[],
//             tab:0,
//             tabs:["Statistics","Sites","Payments"],
//             date:"",
//             date2:"",
//             iChart:-1,
//             loader:1
//         }
//     },
//     mounted:function(){
//         this.parent=this.$parent.$parent;

//         if(!this.parent.user){
//             this.parent.logout();
//         }

//         if(!this.parent.$route.params.id) this.parent.page('/users');
//         this.get();
//         this.GetFirstAndLastDate();

//     },
//     methods:{
//         GetFirstAndLastDate:function(){
//             var year = new Date().getFullYear();
//             var month = new Date().getMonth();
//             var firstDayOfMonth = new Date(year, month, 2);
//             var lastDayOfMonth = new Date(year, month+1, 1);

//             this.date = firstDayOfMonth.toISOString().substring(0,10);
//             this.date2 = lastDayOfMonth.toISOString().substring(0,10);
//         },
//         get:function(){
//             var self = this;
//             var data = self.parent.toFormData(self.parent.formData);
//             data.append('id',this.parent.$route.params.id);
//             data.append('uid',this.parent.$route.params.id);
//             if(this.date!="") data.append('date', this.date);
//             if(this.date2!="") data.append('date2', this.date2);
//             self.loader = 1;
//             axios.post(this.parent.url+"/site/deleteUser?auth="+this.parent.user.auth,data).then(function(response){
//                 self.loader = 0;
//                 self.data = response.data;
//                 if(self.data.info) self.user = self.data.info;
//                 document.title = self.data.info.user
//             }).catch(function(error){
//                 self.parent.logout();
//             });
//         },
//         action:function(){
//             var self=this;
//             var data = self.parent.toFormData(self.parent.formData);

//             axios.post(this.parent.url+"/site/actionUser?auth="+this.parent.user.auth,data).then(function(response) {
//                 if(response.data.error){
//                     self.$refs.header.$refs.msg.alertFun(response.data.error);
//                     return false;
//                 }else {
//                     self.$refs.new.action=0;
//                 }

//                 if(self.parent.formData.id){
//                     self.$refs.header.$refs.msg.successFun("Successfully updated user!");
//                 }else{
//                     self.$refs.header.$refs.msg.successFun("Successfully added new user!");}
                
//                 self.get();
//             }).catch(function(error){
//                 console.log('error : ', error);
//             });
//             },
//             del:async function () {
//                 if(await this.$refs.header.$refs.msg.confirmFun("Please confirm next action","Do you want to delete this user?")){
//                     var self = this;
//                     var data= self.parent.toFormData(self.parent.formData);
    
//                     axios.post(this.parent.url+"/site/deleteUser?auth="+this.parent.user.auth,data).then(function(response){
//                             self.$refs.header.$refs.msg.successFun("Successfully deleted campaign!");
//                             self.get();
                    
//                     }).catch(function(error){
//                         console.log('error : ',error);
//                     });
//                 }
//             },
// }
// }