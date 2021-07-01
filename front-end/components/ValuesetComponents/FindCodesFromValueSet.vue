<template>
  <div>
    <p>ValueSetURI <input v-model="inputValueSetURI" /></p>
    <p>Version <input v-model="inputVersion" /></p>
    <button @click="SearchAllCodesFromValueSet">SEARCH ALL CODES</button>
    <br /><br/><br/>
    <div style="margin:0 auto;">
        <table style="width:300px;" v-if="codes.length > 0">
            <p>ValueSetURI:{{valuesetURI}}</p>
            <p>VersionNumber:{{version}}</p>
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
import valuesetService from '../../protos/valueset_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      codes:[],
      valuesetURI:'',
      version:'',
      inputValueSetURI:'',
      inputVersion:'',
    };
  },
  methods:{
    SearchAllCodesFromValueSet: function(){
      this.codes = [];
      let theRequest = new valuesetService.ValueSetURIVersionProvide();
      theRequest.setValueseturi(this.inputValueSetURI);
      theRequest.setVersionnumber(this.inputVersion);
      this.client.findCodesFromValueSet(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.valuesetURI=_resp.valueseturi;
          this.version=_resp.versionnumber;  
          this.codes=_resp.codesList;
        }
      })
    }
  },
  mounted(){
    this.client = new valuesetService.ServiceForValueSetClient('https://localhost:5001');
  }
}
</script>