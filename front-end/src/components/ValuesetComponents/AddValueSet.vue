<template>
  <div>
    <p>ValueSetURI <input v-model="inputValueSetURI" /></p>
    <p>Version <input v-model="inputVersion" /></p>
    <p>Valueset Name <input v-model="VSName"/></p>
    <p>Valueset Description <input v-model="VSDescription"/></p>
    <div>
      <button class="button btn-primary" @click="addRow">Add row</button>
    </div>
    <div>
        <div v-for="(code,index) in codes" :key=index>
          <h2>Index:{{index}}</h2>
          <input placeholder="CodeID" v-model="code.codeID"/>
          <input placeholder="CodeSystemURI" v-model="code.codesystemURI"/>
          <input placeholder="Name" v-model="code.name"/>
          <input placeholder="Description" v-model="code.description"/>
        </div>
      </div>
    <button @click="AddValueSet">ADD VALUESET</button>
    <br /><br/><br/>
    <div style="margin:0 auto;">
        <table style="width:300px;" v-if="codes.length > 0">
            <p>ValueSetURI:{{inputValueSetURI}}</p>
            <p>VersionNumber:{{inputVersion}}</p>
        <tbody>
          <tr>
            <td><b>CodeID</b></td>
            <td><b>CodeSystemURI</b></td>
            <td><b>Name</b></td>
            <td><b>Description</b></td>
          </tr>
          <br />
          <tr v-for="ans in answer" :key="ans.codeid">
            <td>{{ans.codeid}}</td>
            <td style="text-align:center;">{{ans.codesystemuri}}</td>
            <td style="text-align:center;">{{ans.name}}</td>
            <td style="text-align:center;">{{ans.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import valuesetService from '../../protos/valueset_grpc_web_pb';
import codeService from '../../protos/code_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      codes:[],
      inputValueSetURI:'',
      inputVersion:'',
      VSName:'',
      VSDescription:'',
      answer:[]
    };
  },
  methods:{
    addRow: function() {
      this.codes.push({
        codeID:'',
        codeSystemURI:'',
        name:'',
        description:''
      });
    },
    AddValueSet: function(){
      this.answer = [];
      let theRequest = new valuesetService.AllValueSetinfoProvide();
      theRequest.setValueseturi(this.inputValueSetURI);
      theRequest.setVersionnumber(this.inputVersion);
      theRequest.setName(this.VSName);
      theRequest.setDescription(this.VSDescription);
      for (var j = 0; j < this.codes.length; j++){
            let ob = new codeService.InfoProvide();
            ob.setCodeid(this.codes[j].codeID);
            ob.setCodesystemuri(this.codes[j].codeSystemURI);
            ob.setName(this.codes[j].name);
            ob.setDescription(this.codes[j].description);
            theRequest.addCodes(ob);
      }
      this.client.addValueSet(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.answer=_resp.codesList;
        }
      })
    }
  },
  mounted(){
    this.client = new valuesetService.ServiceForValueSetClient('https://localhost:5001');
  }
}
</script>