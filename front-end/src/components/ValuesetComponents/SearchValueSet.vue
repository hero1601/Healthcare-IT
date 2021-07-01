<template>
  <div>
    <p>ValueSetURI <input v-model="inputValueSetURI" /></p>
    <p>Version <input v-model="inputVersion" /></p>
    <button @click="SearchValueSet">SEARCH</button>
    <br /><br/><br/>
    <div style="margin:0 auto;">
      <p v-if="valueset.hasOwnProperty('valueseturi')">ValueSetURI: {{valueset.valueseturi}} || ValuesetVersion: {{valueset.versionnumber}} || Name:{{valueset.name}} ||  Description:{{valueset.description}}</p>
    </div>
  </div>
</template>

<script>
import valuesetService from '../../protos/valueset_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      valueset:{},
      inputValueSetURI:'',
      inputVersion:'',
    };
  },
  methods:{
    SearchValueSet: function(){
      this.valueset = {};
      let theRequest = new valuesetService.ValueSetURIVersionProvide();
      theRequest.setValueseturi(this.inputValueSetURI);
      theRequest.setVersionnumber(this.inputVersion);
      this.client.searchValueSet(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.valueset=_resp;
        }
      })
    }
  },
  mounted(){
    this.client = new valuesetService.ServiceForValueSetClient('https://localhost:5001');
  }
}
</script>