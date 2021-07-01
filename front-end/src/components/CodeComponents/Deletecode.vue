<template>
  <div>
    <p>CodeID <input v-model="inputCodeId" /></p>
    <p>CodeSystemURI <input v-model="inputCodeSystem" /></p>
    <button @click="DeleteCode">DELETE</button>
    <br/><br/><br/>
    <div style="margin:0 auto;">
      <p v-if="code.hasOwnProperty('codeid')">Id: {{code.codeid}} || CodeSystemURI: {{code.codesystemuri}} || Name:{{code.name}} ||  Description:{{code.description}}</p>
    </div>
  </div>
</template>

<script>
import codeService from '../../protos/code_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      code:{},
      inputCodeId:'',
      inputCodeSystem:''
    };
  },
  methods:{
    DeleteCode: function(){
      this.code = {};
      let theRequest = new codeService.CodeProvide();
      theRequest.setCodeid(this.inputCodeId);
      theRequest.setCodesystemuri(this.inputCodeSystem);
      this.client.deleteCode(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.code=_resp;
        }
      })
    }
  },
  mounted(){
    this.client = new codeService.ServiceForCodeClient('https://localhost:5001');
  }
}
</script>