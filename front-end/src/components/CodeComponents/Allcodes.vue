<template>
  <div>
    <p>CodeSystemURI <input v-model="inputCodeSystem" /></p>
    <button  @click="getAllCodes">GET ALL</button>
    <br/><br/><br/>
    <div style="margin:0 auto;">
      <table style="width:300px;" v-if="codes.length > 0">
        <tbody>
          <tr>
            <td><b>CodeID</b></td>
            <td><b>CodeSystemURI</b></td>
            <td><b>Name</b></td>
            <td><b>Description</b></td>
          </tr>
          <br />
          <tr v-for="code in codes" :key="code.codeid">
            <td>{{code.codeid}}</td>
            <td style="text-align:center;">{{code.codesystemuri}}</td>
            <td style="text-align:center;">{{code.name}}</td>
            <td style="text-align:center;">{{code.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import codeService from '../../protos/code_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      codes:[],
      inputCodeSystem:'',
    };
  },
  methods:{
    getAllCodes: function(){
      this.codes = [];
      let theRequest = new codeService.CodeSystemProvide();
      theRequest.setCodesystemuri(this.inputCodeSystem);
      this.client.allCode(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.codes=_resp.itemsList;
        }
      })
    }
  },
  mounted(){
    this.client = new codeService.ServiceForCodeClient('https://localhost:5001');
  }
}
</script>