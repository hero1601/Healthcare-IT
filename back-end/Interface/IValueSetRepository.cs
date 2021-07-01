using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valuesets;

namespace Terminology.Interface
{
    public interface IValueSetRepository
    {
        AllValueSetinfoProvide FindValueSet(ValueSetURIVersionProvide vsvp);
        AllValueSetinfoProvide AddValueSet(AllValueSetinfoProvide vsvp);
        ValueSetToCodes FindCodesFromValueSet(ValueSetURIVersionProvide vsvp);
    }
}
