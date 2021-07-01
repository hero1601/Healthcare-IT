using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Codes;

namespace Terminology.Interface
{
    public interface ICodeRepository
    {
        AllinfoProvide GetAllCode(CodeSystemProvide csp);
        InfoProvide AddCode(InfoProvide ip);
        AllinfoProvide FindCode(CodeProvide cp);
        InfoProvide UpdateCode(InfoProvide ip);
        InfoProvide DeleteCode(CodeProvide cp);
    }
}
