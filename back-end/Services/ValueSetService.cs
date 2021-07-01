using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valuesets;
using Grpc.Core;
using Terminology.Interface;

namespace Terminology.Services
{
    public class ValueSetService : ServiceForValueSet.ServiceForValueSetBase
    {
        private IValueSetRepository vr;
        public ValueSetService(IValueSetRepository vsr)
        {
            vr = vsr;
        }

        public override Task<AllValueSetinfoProvide> SearchValueSet(ValueSetURIVersionProvide request, ServerCallContext context)
        {
            AllValueSetinfoProvide response = vr.FindValueSet(request);
            return Task.FromResult(response);
        }
        public override Task<AllValueSetinfoProvide> AddValueSet(AllValueSetinfoProvide request, ServerCallContext context)
        {
            AllValueSetinfoProvide response = vr.AddValueSet(request);
            return Task.FromResult(response);
        }

        public override Task<ValueSetToCodes> FindCodesFromValueSet(ValueSetURIVersionProvide request, ServerCallContext context)
        {
            ValueSetToCodes response = vr.FindCodesFromValueSet(request);
            return Task.FromResult(response);
        }
    }
}
