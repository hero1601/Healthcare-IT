using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Grpc.Core;
using Terminology.Interface;
using Codes;

namespace Terminology.Services
{
    public class CodeService : ServiceForCode.ServiceForCodeBase
    {
        private ICodeRepository tr;
        public CodeService(ICodeRepository temp)
        {
            tr = temp;
        }
        public override Task<AllinfoProvide> AllCode(CodeSystemProvide request, ServerCallContext context)
        {
            AllinfoProvide response = tr.GetAllCode(request);
            return Task.FromResult(response);
        }
        public override Task<InfoProvide> AddCode(InfoProvide request, ServerCallContext context)
        {
            InfoProvide response = tr.AddCode(request);
            return Task.FromResult(response);
        }
        public override Task<AllinfoProvide> SearchCode(CodeProvide request, ServerCallContext context)
        {
            AllinfoProvide response = tr.FindCode(request);
            return Task.FromResult(response);
        }
        public override Task<InfoProvide> UpdateCode(InfoProvide request, ServerCallContext context)
        {
            InfoProvide response = tr.UpdateCode(request);
            return Task.FromResult(response);
        }

        public override Task<InfoProvide> DeleteCode(CodeProvide request, ServerCallContext context)
        {
            InfoProvide response = tr.DeleteCode(request);
            return Task.FromResult(response);
        }
    }
}
