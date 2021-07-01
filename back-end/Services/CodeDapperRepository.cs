using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Terminology.Interface;
using Codes;

namespace Terminology.Services
{
    class CodeDapperRepository : ICodeRepository
    {
        private IDbConnection db;
        public CodeDapperRepository(IDbConnection connstring)
        {
            db = connstring;
        }

        public InfoProvide AddCode(InfoProvide ip)
        {
            var ql = @"SELECT CodeSystemURI FROM CodeSystem WHERE CodeSystemURI=@codesystemURI";
            var response = db.Query<string>(ql, new { codesystemURI = ip.CodesystemURI });
            if (response.Any())
            {
                var sql = @"INSERT INTO [Code]
					([CodeID]
                    ,[CodeSystemURI]
                    ,[CodeHashID]
                    ,[Name]
                    ,[Description]
                    ,[IsActive])
                    VALUES(@codeID,@codesystemURI,HASHBYTES('SHA2_512', UPPER(CONCAT(@codeID,':',@codesystemURI))),@name,@description,@isactive)";
                db.Execute(sql, new { codeID = ip.CodeID, codesystemURI = ip.CodesystemURI, name = ip.Name, description = ip.Description,isactive=1 });
                return ip;
            }
            return new InfoProvide();
        }

        public AllinfoProvide FindCode(CodeProvide cp)
        {
            var sql = @"SELECT * FROM [Code] where CodeID LIKE @codeID AND CodeSystemURI LIKE @codesystemURI AND NOT IsActive=@isactive";
            var response = db.Query<InfoProvide>(sql, new { codeID = "%" + cp.CodeID + "%", codesystemURI = "%" + cp.CodesystemURI + "%" ,isactive=0});
            var answer = new AllinfoProvide();
            answer.Items.AddRange(response);
            return answer;
        }

        public AllinfoProvide GetAllCode(CodeSystemProvide csp)
        {
            var sql = @"SELECT * FROM [Code] WHERE CodeSystemURI LIKE @codesystemURI AND NOT IsActive=@isactive";
            var response = db.Query<InfoProvide>(sql, new { codesystemURI = "%" + csp.CodesystemURI + "%", isactive = 0 });
            var answer = new AllinfoProvide();
            answer.Items.AddRange(response);
            return answer;
        }

        public InfoProvide UpdateCode(InfoProvide ip)
        {
            var sql = @"UPDATE Code SET Name =@name,Description =@description WHERE CodeID =@codeID and CodeSystemURI =@codesystemURI";
            db.Query<InfoProvide>(sql, new { codeID = ip.CodeID, codesystemURI = ip.CodesystemURI, name = ip.Name, description = ip.Description }).SingleOrDefault();
            return ip;
        }

        public InfoProvide DeleteCode(CodeProvide cp)
        {
            var response = FindCode(cp);
            var sql = @"UPDATE Code 
                            SET IsActive=0 where CodeID LIKE @codeID and CodeSystemURI LIKE @codesystemURI";
            db.Query<InfoProvide>(sql, new { codeID = "%" + cp.CodeID + "%", codesystemURI = "%" + cp.CodesystemURI + "%" });
            return response.Items.ElementAt(0);
        }
    }
}
